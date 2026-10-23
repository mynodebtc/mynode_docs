const fs = require('fs')
const path = require('path')

// Old page path -> new page path, both relative to the site root. The server
// can't send real redirects from this repo (no .htaccess, no PHP), and
// .vuepress/public/ doesn't allow .html files, so the build writes a small
// meta-refresh page at each old path instead. No script, so it stays within
// the site's CSP. The Apache rewrite maps the extension-less form to the same
// file.
const redirects = {
  'advanced/flash-sd-card.html': 'advanced/flash-os-drive.html',
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function redirectPage(targetUrl) {
  const url = escapeHtml(targetUrl)

  return `<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Page moved</title>
    <meta http-equiv="refresh" content="0; url=${url}">
    <meta name="robots" content="noindex">
    <link rel="canonical" href="${url}">
  </head>
  <body>
    <p>This page has moved to <a href="${url}">${url}</a>.</p>
  </body>
</html>
`
}

function writeRedirects(outDir, host) {
  for (const [from, to] of Object.entries(redirects)) {
    if (!fs.existsSync(path.join(outDir, to))) {
      throw new Error(`Redirect target ${to} for ${from} was not built.`)
    }

    const filePath = path.join(outDir, from)
    if (fs.existsSync(filePath)) {
      throw new Error(`Redirect source ${from} is also a built page.`)
    }

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, redirectPage(new URL(to, `${host}/`).toString()))
  }
}

if (require.main === module) {
  const outDir = path.resolve(process.argv[2] || path.join(__dirname, '..', 'dist'))
  const host = String(process.argv[3] || '').replace(/\/+$/, '')

  if (!host) {
    throw new Error('Expected site host as the second argument.')
  }

  writeRedirects(outDir, host)
}

module.exports = writeRedirects
