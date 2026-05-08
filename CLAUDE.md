# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for [MyNode](https://mynodebtc.com/), a Bitcoin and Lightning Network node software. Built with **VuePress v1.5.3**, deployed to GitHub Pages at https://mynodebtc.github.io/.

## Development Commands

```bash
# Install dependencies
yarn install

# Start local dev server (http://localhost:8080)
yarn docs:dev

# Production build (output: docs/.vuepress/dist/)
yarn docs:build
```

> VuePress requires the `NODE_OPTIONS=--openssl-legacy-provider` flag on newer Node.js versions. The GitHub Actions workflow sets this automatically; set it manually if builds fail locally.

## Repository Structure

```
docs/
├── .vuepress/
│   ├── config.js        # Sidebar nav, plugins, theme config
│   └── public/          # Static assets: images at public/images/<topic>/
├── README.md            # Homepage (hero + features frontmatter)
├── intro/               # Getting started guides
├── device/              # Hardware setup & management
├── bitcoin/             # Bitcoin node configuration
├── lightning/           # Lightning Network (RTL, ThunderHub, wallets)
├── electrum/            # Electrum wallet integration
├── advanced/            # SSH, terminal, custom configs, VMs
├── troubleshooting/     # Error resolution guides
└── [other topic dirs]   # btcpay-server, tor, vpn, multisig, etc.
```

## Content Patterns

- All documentation lives in `docs/<topic>/<page>.md` as plain Markdown
- Images: store in `docs/.vuepress/public/images/<topic>/`, reference as `/images/<topic>/image.png`
- Adding a new page requires registering it in the sidebar in `docs/.vuepress/config.js`
- The sidebar uses collapsible groups; match the existing structure when adding entries

## Design

The docs site is a visual extension of the main marketing site at `D:\camilo\Documents\GitHub\mynode_web`.

**Hard rule: never modify guide content** (any `.md` file under `docs/` except `docs/README.md`). All changes must be limited to:
- `docs/.vuepress/config.js` — theme/plugin config
- `docs/.vuepress/public/css/mynode.css` — all visual styling
- `docs/.vuepress/public/` — static assets (images, fonts, icons)
- `docs/README.md` — homepage layout only

The design system lives in the main site repo. Before making any styling decision, check `D:\camilo\Documents\GitHub\mynode_web` for the canonical tokens, components, and patterns.

## Deployment

GitHub Actions automatically builds and deploys on every push to `master`. The built site is pushed to the `mynodebtc/mynodebtc.github.io` repository. Manual deployment is available via `deploy.sh` (force-pushes to the pages repo).
