# Security policy

## Reporting a vulnerability

Please **do not open a public issue or pull request** for a security problem.

Report it privately through GitHub instead:
**Security** tab → **Report a vulnerability**
(https://github.com/mynodebtc/mynode_docs/security/advisories/new).

If you can't use GitHub, email **admin@mynodebtc.com**.

Please include what you found, the steps to reproduce it, and what an attacker could do
with it. We'll reply to confirm we've received it and keep you updated while we work on
a fix.

## Scope

This repository is the source for the documentation site at
https://docs.mynodebtc.com. In scope:

- Content or configuration that causes script to run on `docs.mynodebtc.com`
  (Markdown here is compiled into Vue components, so it is not inert)
- The build and deploy pipeline (`.github/workflows/`, `deploy.sh`, `scripts/`)
- Ways to get around the Markdown safety check (`scripts/check-markdown.js`)

Out of scope here:

- **The MyNode software itself**: report it on
  [mynodebtc/mynode](https://github.com/mynodebtc/mynode/security/advisories/new)
- **www.mynodebtc.com**: email admin@mynodebtc.com
- Findings that come only from an automated scanner, missing best-practice headers
  with no demonstrated impact, and denial-of-service

## Please don't

- Test against other people's accounts or devices
- Include private keys, seed phrases, or wallet files in a report. We will never ask
  for them.
