#!/usr/bin/env node
//
// Rejects Markdown that VuePress would turn into executable code.
//
// Why this exists: VuePress compiles each .md file into a Vue single-file
// component, so Markdown is not inert text. Verified against this repo's
// build:
//
//   <script>...</script>        becomes the page's SFC <script> block. It runs
//                               in every visitor's browser AND on the build
//                               machine during SSR (an unguarded one crashes
//                               the build with "window is not defined").
//   <img onerror="...">         passes through verbatim into the served HTML.
//   <a href="javascript:...">   passes through verbatim.
//   {{ expression }}            is evaluated as a Vue template expression.
//
// docs.mynodebtc.com is same-site with www.mynodebtc.com, so the main site's
// SameSite=Lax session cookie is sent on requests originating here. Script
// execution on this origin is therefore a CSRF primitive against the main
// site, not just a defaced docs page. See plans/security-review.md.
//
// Deliberately dependency-free so CI can run it on untrusted pull requests
// WITHOUT `npm install` and WITHOUT building — both of those execute code
// from the PR being checked.
//
// No inline opt-out comment is supported, on purpose. Widening what is allowed
// requires editing this file, which shows up loudly in a diff and gets read as
// what it is. A `<!-- lint-disable -->` marker would be silent.

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
// Defaults to docs/; an explicit path argument is used by the test fixtures.
const SCAN_DIR = process.argv[2] ? path.resolve(process.argv[2]) : path.join(ROOT, 'docs')

// Directories that hold build output or dependencies, not authored content.
const SKIP_DIRS = new Set(['node_modules', 'dist', '.vuepress-cache', '.temp', '.git'])

// Tags that VuePress/Vue treat as something other than inert markup, or that
// pull in outside content. <style> and <template> are here because VuePress
// lifts them into the SFC the same way it lifts <script>. <component> is
// Vue's dynamic element: <component is="script"> renders a tag by name, which
// would sidestep every entry in this list. The `is` attribute is rejected on
// any tag for the same reason (see the attribute loop below).
const FORBIDDEN_TAGS = [
  'script', 'style', 'template', 'iframe', 'object', 'embed',
  'base', 'form', 'meta', 'link', 'frame', 'frameset', 'portal',
  'component',
]

const URL_ATTRS = ['href', 'src', 'action', 'formaction', 'data', 'srcdoc', 'poster', 'xlink:href']

const DANGEROUS_URI = /^\s*(javascript|vbscript|data)\s*:/i
// data: URIs are only a problem when they can carry markup or script.
const SAFE_DATA_URI = /^\s*data:image\/(png|jpe?g|gif|webp|avif|x-icon)[;,]/i

// Files VuePress copies verbatim from .vuepress/public/ to the site root.
// Anything else (.html, .xml, .php, .htaccess, ...) would be served or
// interpreted by the web server on the docs origin, so the list is an
// allowlist. SVGs are allowed but their contents are checked (checkSvg).
const PUBLIC_EXTENSIONS = new Set([
  'png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'ico', 'svg',
  'css', 'webmanifest', 'json', 'txt', 'pdf',
  'woff', 'woff2', 'ttf', 'otf', 'mp4', 'webm',
])
// Finder metadata; never tracked in git, so never deployed by CI.
const IGNORED_FILES = new Set(['.DS_Store'])

function walk (dir, out = []) {
  if (fs.statSync(dir).isFile()) return [dir]
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      walk(path.join(dir, entry.name), out)
      continue
    }
    if (entry.isFile() && !IGNORED_FILES.has(entry.name)) out.push(path.join(dir, entry.name))
  }
  return out
}

function isPublicFile (file) {
  return file.split(path.sep).join('/').includes('/.vuepress/public/')
}

// ─── Which parts of a page are inert ────────────────────────────────────────
//
// Only the *content* of a fenced code block is treated as inert: VuePress
// renders it inside <pre v-pre> with HTML escaped. Nothing else is skipped.
// Earlier versions also skipped HTML comments and inline code, and that let
// raw HTML through: a `<!--` or a backtick inside an attribute value hid the
// rest of the tag from the checks while the browser still ran it. No page
// here needs either exemption.
//
// A fence is only treated as inert when this check is sure markdown-it sees
// the same fence. Anything unusual (unclosed, dedented content, a ::: line
// inside, a | on the opening line, or an opening line inside an HTML block)
// makes the check stop treating ANY later fence as inert, because from that
// point it can no longer tell which lines markdown-it considers code. Every
// such case is verified to have been exploitable.

// Blockquote markers, list markers and indentation that may precede a block.
// Over-matching is the safe direction: it only makes more lines count as
// HTML-block starts, which makes fewer fences inert.
const BLOCK_PREFIX = /^(?:[ \t]|>|[-+*][ \t]|\d{1,9}[.)][ \t])*/

// @vuepress/markdown/lib/component.js's html_block sequences, in order.
// A line starting one of these begins an HTML block, whose lines are raw
// HTML even if they look like a fence. The last entry is broader than
// markdown-it's (any tag, and it ignores the rule that only some can
// interrupt a paragraph), which again only means fewer inert fences.
const HTML_BLOCKS = [
  [/^<(script|pre|style)(?=[\s>]|$)/i, /<\/(script|pre|style)>/i],
  [/^<!--/, /-->/],
  [/^<\?/, /\?>/],
  [/^<![A-Z]/, />/],
  [/^<!\[CDATA\[/, /\]\]>/],
  [/^<[A-Z]/, />/],
  [/^<\w+-/, />/],
  [/^<\/?[a-zA-Z]/, /^\s*$/],
]

const FENCE_OPEN = /^( {0,3})(`{3,}|~{3,})(.*)$/

// Returns the page with every inert character replaced by a space (line
// breaks kept), so offsets and line numbers still match the original.
function maskInert (text) {
  const lines = text.split('\n')
  let htmlEnd = null
  let unsure = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (htmlEnd) {
      if (htmlEnd.test(line)) htmlEnd = null
      continue
    }

    const open = !unsure && line.match(FENCE_OPEN)
    if (open && !(open[2][0] === '`' && open[3].includes('`'))) {
      const close = findFenceClose(lines, i, open)
      if (close === -1) {
        unsure = true
      } else {
        for (let j = i + 1; j < close; j++) lines[j] = lines[j].replace(/[^\n]/g, ' ')
        i = close
        continue
      }
    }

    const body = line.replace(BLOCK_PREFIX, '')
    const seq = HTML_BLOCKS.find(([start]) => start.test(body))
    if (seq && !seq[1].test(body)) htmlEnd = seq[1]
  }
  return lines.join('\n')
}

// Index of the line that closes the fence opened at lines[start], or -1 if
// this check can't be sure markdown-it reads the fence the same way.
function findFenceClose (lines, start, [, indent, marker, info]) {
  if (info.includes('|')) return -1 // markdown-it 8 reads this as a table row
  const closer = new RegExp(`^ {0,3}${marker[0] === '`' ? '`' : '~'}{${marker.length},}\\s*$`)
  for (let j = start + 1; j < lines.length; j++) {
    const line = lines[j]
    if (/^\s*$/.test(line)) continue
    // A dedented line may end the list item (and so the fence) the opener
    // belongs to. markdown-it-container finds its closing ::: before parsing
    // what's inside, so a ::: line can end the fence early.
    if (line.match(/^ */)[0].length < indent.length) return -1
    if (/^[\s>]*:::/.test(line)) return -1
    if (closer.test(line)) return j
  }
  return -1
}

// Allowed after an opening fence: a language name and an optional line
// highlight range. @vuepress/markdown's preWrapper pastes this text into a
// class attribute unescaped, so a quote here adds attributes to the page.
const FENCE_INFO = /^[\w+#.-]*(?:\s*\{[\d,\s-]*\})?\s*$/
const FENCE_LIKE = /^(`{3,}|~{3,})(.*)$/

// String.fromCodePoint throws past U+10FFFF; an out-of-range entity must not
// crash the check.
function codePoint (n) {
  return n <= 0x10FFFF ? String.fromCodePoint(n) : '\uFFFD'
}

function lineOf (text, index) {
  let line = 1
  for (let i = 0; i < index; i++) if (text[i] === '\n') line++
  return line
}

function checkFile (file) {
  const raw = fs.readFileSync(file, 'utf8')
  const rel = path.relative(ROOT, file)
  const findings = []
  const report = (index, rule, detail) => {
    findings.push({ file: rel, line: lineOf(raw, index), rule, detail })
  }

  // 0. Frontmatter language. gray-matter picks a parser from whatever follows
  //    the opening `---` (`---js`, `--- javascript`, ...), and its built-in
  //    JavaScript engine eval()s the block on the build machine. Every page
  //    in this repo uses plain YAML, so any language tag at all is rejected.
  //    config.js also disables that engine, so the build fails even if this
  //    check is bypassed.
  const fmOpen = raw.replace(/^\uFEFF/, '').match(/^---([^\n]*)/)
  if (fmOpen && !fmOpen[1].startsWith('-') && fmOpen[1].trim() !== '') {
    report(0, 'frontmatter-language',
      `frontmatter fence "---${fmOpen[1].trim()}" selects a non-YAML parser. Use a plain --- fence.`)
  }

  const text = maskInert(raw)

  // 1. Vue template interpolation. Evaluated as JS in page context, and
  //    during SSR on the build machine.
  for (const m of text.matchAll(/\{\{/g)) {
    report(m.index, 'vue-interpolation',
      '{{ }} is evaluated as a Vue expression. Wrap the example in a fenced code block.')
  }

  // 2. Lines VuePress's own Markdown extensions act on.
  let offset = 0
  for (const line of text.split('\n')) {
    const body = line.replace(BLOCK_PREFIX, '')
    // `<<< path` embeds any file the build machine can read into the page.
    if (body.startsWith('<<<')) {
      report(offset, 'code-snippet-import',
        '"<<<" imports a file from the build machine into the page. Paste the code into a fenced block instead.')
    }
    // Text after an opening fence goes into a class attribute unescaped.
    const fence = body.match(FENCE_LIKE)
    if (fence && !(fence[1][0] === '`' && fence[2].includes('`')) && !FENCE_INFO.test(fence[2])) {
      report(offset, 'fence-info',
        `"${fence[2].trim().slice(0, 60)}" after a code fence is pasted into the page's HTML. Use only a language name, e.g. \`\`\`bash.`)
    }
    offset += line.length + 1
  }

  // 3. Raw HTML tags, inspected one tag at a time so attribute rules are
  //    scoped to real tags and cannot fire on prose. Every `<` is tried, even
  //    one inside another tag's attribute value, because markdown-it may
  //    reject the outer tag as HTML and pass the inner one through.
  const TAG = /<(\/?)([a-zA-Z][a-zA-Z0-9:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>?/y
  for (const start of text.matchAll(/<(?=\/?[a-zA-Z])/g)) {
    TAG.lastIndex = start.index
    const m = TAG.exec(text)
    const closing = m[1] === '/'
    const tag = m[2].toLowerCase()
    const attrs = m[3] || ''

    // Report the opening tag only, so one <script>...</script> is one finding.
    if (FORBIDDEN_TAGS.includes(tag)) {
      if (closing) continue
      report(m.index, 'forbidden-tag', `<${tag}> is not allowed in Markdown.`)
      continue
    }

    // Inline event handlers: onerror, onload, onclick, ...
    for (const a of attrs.matchAll(/[\s"']on[a-z]{2,}\s*=/gi)) {
      report(m.index + m[2].length + a.index, 'inline-event-handler',
        `inline event handler on <${tag}> executes in the visitor's browser.`)
    }

    // Vue directives and bindings, which are live in the compiled template.
    // Tokenizes attributes so only names are tested (a value like
    // href="#top" must not match), then rejects on the name prefix alone:
    // argument and modifier forms (`v-on:x`, `v-bind:x`, `@x.y`, `:x.y`), the
    // `#` slot shorthand, and valueless directives are all caught without
    // enumerating forms.
    for (const a of attrs.matchAll(/([^\s"'>\/=]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]+))?/g)) {
      const at = m.index + m[2].length + 1 + a.index
      if (/^(?:v-|[:@#])/i.test(a[1])) {
        report(at, 'vue-directive',
          `Vue binding "${a[1]}" on <${tag}> is compiled and evaluated.`)
      } else if (a[1].toLowerCase() === 'is') {
        report(at, 'vue-is',
          `"is" on <${tag}> makes Vue render a different element by name.`)
      }
    }

    // URL-bearing attributes pointing at an executable scheme.
    for (const a of attrs.matchAll(/([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
      const name = a[1].toLowerCase()
      if (!URL_ATTRS.includes(name)) continue
      const value = a[3] !== undefined ? a[3] : a[4] !== undefined ? a[4] : a[5] || ''
      // Decode numeric entities, then drop every control character and
      // space. Browsers strip tab/CR/LF anywhere in a URL and C0 controls
      // at the ends before reading the scheme, so "java<TAB>script:" still
      // runs. Removing all of \x00-\x20 is stricter than browsers, which is
      // the safe direction; no legitimate scheme contains any of them.
      const decoded = value
        .replace(/&#x([0-9a-f]+);?/gi, (_, h) => codePoint(parseInt(h, 16)))
        .replace(/&#(\d+);?/g, (_, d) => codePoint(+d))
        .replace(/[\x00-\x20]+/g, '')
      if (DANGEROUS_URI.test(decoded) && !SAFE_DATA_URI.test(decoded)) {
        report(m.index + m[2].length + a.index, 'dangerous-uri',
          `${name}="${decoded.slice(0, 60)}" uses an executable URI scheme.`)
      }
    }
  }

  return findings
}

// An SVG opened directly (not through <img>) is a document on the docs
// origin and runs any script in it. GitHub shows SVGs in a diff as a picture,
// so a review won't see this. SVGs are checked wherever they are under
// docs/: webpack also emits ones that a page references by relative path.
const SVG_FORBIDDEN = [
  [/<script\b/, '<script>'],
  [/<foreignobject\b/, '<foreignObject> (embeds HTML)'],
  [/<(iframe|embed|object|handler|listener)\b/, 'an embedding or handler element'],
  [/[\s"'\/]on[a-z]+\s*=/, 'an on* event handler'],
  [/<!(entity|doctype)\b/, 'a DTD or entity declaration'],
  [/<\?xml-stylesheet\b/, 'an XSL stylesheet'],
  [/(javascript|vbscript):/, 'a javascript:/vbscript: URL'],
  [/\bhref\s*=\s*(?!["']?#)/, 'an href to anything but a fragment (#id)'],
]

function checkSvg (file, rel) {
  // Decode character references so they can't hide the patterns above. Each
  // pattern is also tried with whitespace/control characters removed, which
  // catches "java<TAB>script:".
  const text = fs.readFileSync(file, 'utf8')
    .replace(/&#x([0-9a-f]+);?/gi, (_, h) => codePoint(parseInt(h, 16)))
    .replace(/&#(\d+);?/g, (_, d) => codePoint(+d))
    .toLowerCase()
  const squeezed = text.replace(/[\x00-\x20]+/g, '')
  return SVG_FORBIDDEN
    .filter(([re]) => re.test(text) || re.test(squeezed))
    .map(([, what]) => ({ file: rel, line: 1, rule: 'svg-content', detail: `SVG contains ${what}. Export it as a plain drawing, or use a PNG.` }))
}

function checkPublicFile (file, rel) {
  const ext = path.extname(file).slice(1).toLowerCase()
  if (PUBLIC_EXTENSIONS.has(ext)) return []
  return [{ file: rel, line: 1, rule: 'public-file-type',
    detail: `"${ext ? '.' + ext : path.basename(file)}" files in .vuepress/public are published as-is and may be served as a page or run by the server. Allowed: ${[...PUBLIC_EXTENSIONS].join(', ')}.` }]
}

function main () {
  if (!fs.existsSync(SCAN_DIR)) {
    console.error(`check-markdown: no such directory: ${SCAN_DIR}`)
    process.exit(2)
  }

  const files = walk(SCAN_DIR).sort()
  const findings = files.flatMap(file => {
    const rel = path.relative(ROOT, file)
    const out = []
    if (file.endsWith('.md')) out.push(...checkFile(file))
    if (isPublicFile(file)) out.push(...checkPublicFile(file, rel))
    if (file.toLowerCase().endsWith('.svg')) out.push(...checkSvg(file, rel))
    return out
  })

  if (findings.length === 0) {
    const md = files.filter(f => f.endsWith('.md')).length
    console.log(`check-markdown: OK - ${md} Markdown files and ${files.length - md} other files, no executable content.`)
    return
  }

  console.error(`check-markdown: FAILED - ${findings.length} problem(s) in ${new Set(findings.map(f => f.file)).size} file(s):\n`)
  for (const f of findings) {
    console.error(`  ${f.file}:${f.line}  [${f.rule}]  ${f.detail}`)
  }
  console.error(`
VuePress compiles Markdown into Vue components, so these are not inert text --
they run in visitors' browsers on docs.mynodebtc.com, which is same-site with
www.mynodebtc.com. To show markup or template syntax as an example, put it in a
fenced code block (\`\`\`), which the build renders literally.`)
  process.exit(1)
}

main()
