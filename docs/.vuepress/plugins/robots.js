const fs = require('fs')
const path = require('path')

module.exports = (options = {}, ctx) => ({
  name: 'mynode-robots',

  async generated() {
    if (!ctx.isProd) {
      return
    }

    const host = String(options.host || '').replace(/\/+$/, '')
    const sitemapPath = String(options.sitemap || '/sitemap.xml').replace(/^\//, '')
    const outputFile = options.outputFile || 'robots.txt'
    const defaultPolicy = options.disallowAll
      ? { userAgent: '*', disallow: '/' }
      : { userAgent: '*', disallow: '' }
    const policies = Array.isArray(options.policies) && options.policies.length
      ? options.policies
      : [defaultPolicy]
    const sitemapUrl = new URL(sitemapPath, host + '/').toString()
    const lines = []

    for (const policy of policies) {
      lines.push(`User-agent: ${policy.userAgent || '*'}`)

      if (policy.allow) {
        const allowList = Array.isArray(policy.allow) ? policy.allow : [policy.allow]

        for (const value of allowList) {
          lines.push(`Allow: ${value}`)
        }
      }

      if (policy.disallow !== undefined) {
        const disallowList = Array.isArray(policy.disallow) ? policy.disallow : [policy.disallow]

        for (const value of disallowList) {
          lines.push(`Disallow: ${value}`)
        }
      }

      lines.push('')
    }

    lines.push(`Sitemap: ${sitemapUrl}`)
    lines.push(`Host: ${host}`)

    fs.writeFileSync(path.resolve(ctx.outDir, outputFile), lines.join('\n') + '\n')
  },
})