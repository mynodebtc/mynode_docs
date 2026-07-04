const fs = require('fs')
const path = require('path')

function collectHtmlFiles(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      collectHtmlFiles(fullPath, result)
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      result.push(fullPath)
    }
  }

  return result
}

function buildCanonicalUrl(host, outDir, filePath) {
  const relativePath = path.relative(outDir, filePath).split(path.sep).join('/')
  const pagePath = relativePath === 'index.html' ? '/' : `/${relativePath}`

  return new URL(pagePath, `${host}/`).toString()
}

function addCanonicalTags(outDir, host) {
  for (const filePath of collectHtmlFiles(outDir)) {
    const canonicalUrl = buildCanonicalUrl(host, outDir, filePath)
    const html = fs.readFileSync(filePath, 'utf8')

    if (html.includes('rel="canonical"')) {
      continue
    }

    const canonicalTag = `    <link rel="canonical" href="${canonicalUrl}">\n`
    fs.writeFileSync(filePath, html.replace('</head>', `${canonicalTag}  </head>`))
  }
}

if (require.main === module) {
  const outDir = path.resolve(process.argv[2] || path.join(__dirname, '..', 'dist'))
  const host = String(process.argv[3] || '').replace(/\/+$/, '')

  if (!host) {
    throw new Error('Expected canonical host as the second argument.')
  }

  addCanonicalTags(outDir, host)
}

module.exports = addCanonicalTags