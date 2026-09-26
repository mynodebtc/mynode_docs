#!/usr/bin/env node
//
// Checks each page the way Vue will see it, instead of guessing from the
// Markdown source.
//
// check-markdown.js reads raw Markdown and has to guess how markdown-it and
// VuePress's plugins will turn it into HTML. Every gap found so far came from
// a wrong guess. This script removes the guessing: it loads the site's own
// configured markdown-it instance (theme plugins such as ::: containers
// included), renders every page exactly as the build's markdown-loader does,
// and parses the result with vue-template-compiler, the parser Vue uses to
// compile the page. What it checks is what runs.
//
// It is an allowlist. Tags, attributes and URL schemes not listed below fail
// the check. Allowing something new means editing this file, which shows up in
// review for what it is.
//
// Nothing from a page executes here: pages are rendered to HTML and parsed,
// never compiled into code or run. It does run docs/.vuepress/config.js and
// the theme's plugin setup, which is why the pull-request workflow runs it
// with the base branch's .vuepress/ and dependencies, not the PR's.

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const SOURCE_DIR = path.join(ROOT, 'docs')

const TAGS = new Set([
  // What the pages produce today.
  'div', 'p', 'a', 'span', 'img', 'figure', 'center', 'br',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'small', 'sub', 'sup',
  'code', 'pre', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'details', 'summary', 'input', 'label',
  // Plain Markdown output not used yet.
  'hr', 'blockquote', 'del', 's', 'kbd', 'figcaption', 'caption',
  // Components VuePress's own Markdown plugins emit for links.
  'RouterLink', 'OutboundLink',
])

// Attributes allowed on any allowed tag. data-* and aria-* are also allowed.
const ATTRS = new Set([
  'class', 'id', 'style', 'title', 'alt', 'href', 'src', 'rel', 'target',
  'width', 'height', 'start', 'align', 'colspan', 'rowspan',
  'name', 'for', 'checked', 'type', 'open',
])

// Attributes allowed only on one tag.
const TAG_ATTRS = {
  pre: new Set(['v-pre']), // VuePress renders every code block as <pre v-pre>
  RouterLink: new Set(['to']),
}

// <input> is only used for the CSS-only tabs in intro/getting-started.md.
const INPUT_TYPES = new Set(['checkbox', 'radio'])

const URL_ATTRS = new Set(['href', 'src', 'to'])
const URL_SCHEMES = new Set(['http', 'https', 'mailto'])

function codePoint (n) {
  return n <= 0x10FFFF ? String.fromCodePoint(n) : '�'
}

// Browsers decode character references and ignore tab/newline and control
// characters when reading a URL's scheme; do the same before testing it.
function urlScheme (value) {
  const v = value
    .replace(/&#x([0-9a-f]+);?/gi, (_, h) => codePoint(parseInt(h, 16)))
    .replace(/&#(\d+);?/g, (_, d) => codePoint(+d))
    .replace(/&colon;/gi, ':')
    .replace(/[\x00-\x20]+/g, '')
  const m = v.match(/^([a-z][a-z0-9+.-]*):/i)
  return m ? m[1].toLowerCase() : null
}

function checkAst (ast, report) {
  (function walk (node) {
    if (node.type === 2) {
      report(`{{ }} expression: ${node.text.trim().slice(0, 60)}`)
      return
    }
    if (node.type !== 1) return

    const tag = node.tag
    if (!TAGS.has(tag)) {
      report(`<${tag}> is not an allowed tag`)
    }

    for (const [name, value] of Object.entries(node.attrsMap)) {
      const allowed = ATTRS.has(name)
        || /^(data|aria)-[a-z0-9-]+$/.test(name)
        || (TAG_ATTRS[tag] && TAG_ATTRS[tag].has(name))
      if (!allowed) {
        report(`attribute "${name}" on <${tag}> is not allowed`)
        continue
      }
      if (URL_ATTRS.has(name)) {
        const scheme = urlScheme(value || '')
        if (scheme && !URL_SCHEMES.has(scheme)) {
          report(`${name}="${String(value).slice(0, 60)}" on <${tag}> uses a "${scheme}:" URL`)
        }
      }
      if (tag === 'input' && name === 'type' && !INPUT_TYPES.has(String(value).toLowerCase())) {
        report(`<input type="${value}"> is not allowed`)
      }
    }

    for (const child of node.children || []) walk(child)
  })(ast)
}

async function main () {
  const { createApp } = require('@vuepress/core')
  const { parseFrontmatter } = require('@vuepress/shared-utils')
  const { compile } = require('vue-template-compiler')

  // Loads config.js (which also disables JavaScript frontmatter), the theme
  // and plugins, and reads every page's frontmatter. Does not build.
  const app = createApp({ sourceDir: SOURCE_DIR })
  await app.process()
  const md = app.markdown

  const findings = []
  let count = 0
  for (const page of app.pages) {
    if (!page._filePath) continue
    count++
    const rel = path.relative(ROOT, page._filePath)
    const report = detail => findings.push(`  ${rel}  ${detail}`)

    const src = fs.readFileSync(page._filePath, 'utf8')
    const frontmatter = parseFrontmatter(src)
    const env = {
      frontmatter: frontmatter.data,
      relativePath: path.relative(SOURCE_DIR, page._filePath).replace(/\\/g, '/'),
    }

    // `<<< path` becomes a fence token carrying the file path in `src`; the
    // build reads that file from disk into the page.
    for (const token of md.parse(frontmatter.content, {})) {
      if (token.src) report(`"<<<" imports a file from the build machine: ${token.src.slice(0, 80)}`)
    }

    // Same call as @vuepress/markdown-loader.
    let rendered
    try {
      rendered = md.render(frontmatter.content, env)
    } catch (e) {
      report(`could not render: ${String(e && e.message).slice(0, 120)}`)
      continue
    }
    const { html, data } = rendered

    // <script>/<style> blocks are lifted out of the template into the page
    // component, so they never appear in the HTML below.
    for (const tag of (data && data.hoistedTags) || []) {
      report(`<script>/<style> block lifted into the page component: ${tag.trim().slice(0, 60)}`)
    }

    // The loader wraps the HTML in one root element; any wrapper parses the
    // same.
    const { ast, errors } = compile(`<div>${html}</div>`)
    for (const e of errors) report(`Vue template error: ${String(e.msg || e).slice(0, 120)}`)
    if (ast) checkAst(ast, report)
  }

  if (findings.length === 0) {
    console.log(`check-templates: OK - ${count} pages, only allowed tags, attributes and URLs.`)
    return
  }
  console.error(`check-templates: FAILED - ${findings.length} problem(s):\n`)
  console.error(findings.join('\n'))
  console.error(`
Each page is compiled into a Vue component. Tags, attributes and URL schemes
outside the allowlist in scripts/check-templates.js could run script on
docs.mynodebtc.com or during the build. To show markup as an example, put it in
a fenced code block. If something new is genuinely needed, add it to the
allowlist in the same pull request so review sees it.`)
  process.exit(1)
}

main().catch(e => {
  console.error('check-templates: could not check pages:', e && e.message ? e.message : e)
  process.exit(2)
})
