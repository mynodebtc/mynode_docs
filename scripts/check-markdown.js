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

function walk (dir, out = []) {
  if (fs.statSync(dir).isFile()) return dir.endsWith('.md') ? [dir] : []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      walk(path.join(dir, entry.name), out)
      continue
    }
    if (entry.isFile() && entry.name.endsWith('.md')) out.push(path.join(dir, entry.name))
  }
  return out
}

// Replace a matched region with same-length blanks so every remaining offset
// still maps to its original line number.
function blank (text, re) {
  return text.replace(re, m => m.replace(/[^\n]/g, ' '))
}

// The end-of-input fallback is (?![\s\S]), not $: under /m a bare $ matches
// the first line break and would end the block after one line.
const FENCE = /^([ \t]*)(`{3,}|~{3,})[^\n]*(?:\n|(?![\s\S]))[\s\S]*?(?:^[ \t]*\2[^\n]*$|(?![\s\S]))/gm
const INLINE_CODE = /(`+)(?:[^`]|(?!\1)`)*\1/g
const HTML_COMMENT = /<!--[\s\S]*?-->/g

// Fenced blocks are inert: the build escapes {{ }} inside them and Markdown
// escapes HTML tags. Verified by building a probe page. Inline code is NOT
// inert for interpolation -- `{{ 6*7 }}` in backticks rendered as 42 -- so it
// is stripped only for the raw-HTML checks, never for the {{ }} check.
function stripForHtmlChecks (text) {
  return blank(blank(blank(text, FENCE), INLINE_CODE), HTML_COMMENT)
}

function stripForInterpolationChecks (text) {
  return blank(blank(text, FENCE), HTML_COMMENT)
}

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

  const htmlText = stripForHtmlChecks(raw)
  const interpText = stripForInterpolationChecks(raw)

  // 1. Vue template interpolation. Evaluated as JS in page context.
  for (const m of interpText.matchAll(/\{\{/g)) {
    report(m.index, 'vue-interpolation',
      '{{ }} is evaluated as a Vue expression. Wrap the example in a fenced code block.')
  }

  // 2. Raw HTML tags, inspected one tag at a time so attribute rules are
  //    scoped to real tags and cannot fire on prose.
  for (const m of htmlText.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>?/g)) {
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

function main () {
  if (!fs.existsSync(SCAN_DIR)) {
    console.error(`check-markdown: no such directory: ${SCAN_DIR}`)
    process.exit(2)
  }

  const files = walk(SCAN_DIR).sort()
  const findings = files.flatMap(checkFile)

  if (findings.length === 0) {
    console.log(`check-markdown: OK - ${files.length} Markdown files, no executable content.`)
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
