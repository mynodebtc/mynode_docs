# AGENTS.md

Guidance for AI coding agents (and human contributors) working in this repository.

## What this is

Community-built documentation site for [MyNode](https://mynodebtc.com/) (a Bitcoin/Lightning node platform). Content is Markdown, compiled into a static site with VuePress 1. Live at https://docs.mynodebtc.com/.

## Commands

```sh
yarn install       # install deps
yarn docs:dev      # serve locally with hot reload (port 8080, or next available)
yarn docs:build    # build static site to docs/.vuepress/dist
```

Both scripts run through `node --openssl-legacy-provider` because the bundled VuePress 1 uses webpack 4, which is incompatible with OpenSSL 3 in newer Node releases. Don't remove that flag.

There is no test suite or linter in this repo — verification is building the site and checking pages render.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and `rsync`s `docs/.vuepress/dist/` (with `--delete`) over SSH to the production server. Watch the Actions tab after merging — a failed build or rsync means the live site stops updating until it's fixed. Because of `--delete`, anything present on the server but missing from `dist/` gets removed on the next deploy, so any server-side file the site depends on (e.g. custom error pages) needs to be produced by the build itself, not added by hand.

## URL forms

Both of these resolve to the same page:

```
https://docs.mynodebtc.com/intro/getting-started.html
https://docs.mynodebtc.com/intro/getting-started
```

This repo's existing internal links use both forms inconsistently — that's fine, don't normalize them. The compatibility is handled by server-side configuration outside this repo, not by VuePress or anything here, so changes in this codebase won't affect it either way.

`docs:build` also copies the generated `404.html` to `error/404.html` in the build output specifically so the server's custom-404 config (which expects a file at that path) keeps working across deploys.

## Content structure

- All pages live under `docs/`, one subdirectory per app or topic (e.g. `bitcoin/`, `lightning/`, `tor/`, `troubleshooting/`).
- Images go in `docs/.vuepress/public/images/<SUBDIRECTORY>/`, referenced from Markdown as `/images/<SUBDIRECTORY>/<FILENAME>` (via `<img>` tag or Markdown image syntax).
- Every page that should be reachable from the nav/sidebar must be added to `docs/.vuepress/config.js` (`themeConfig.sidebar`), not just placed in `docs/`. The sidebar array is a hand-maintained tree of sections and pages — adding a Markdown file alone does not expose it.
- Commented-out entries in `config.js`'s sidebar (e.g. the "Setup Base Images" block) are intentionally disabled pages, not dead code to delete.

## Theming

- `docs/.vuepress/styles/palette.styl` sets Stylus variables consumed by the VuePress default theme at build time (colors, widths, navbar height).
- `docs/.vuepress/styles/index.styl` is injected after the default theme CSS and defines the actual design tokens as CSS custom properties on `:root`, with an `html[data-theme="light"]` override block for light mode. Dark is the default; almost all colors should be added/edited as `--mn-*` custom properties here rather than hardcoded, so both themes stay in sync.
- `docs/.vuepress/enhanceApp.js` injects the light/dark toggle button into the navbar client-side (VuePress 1's theme has no built-in toggle) and persists the choice in `localStorage` under `mn-theme`. The inline script in `config.js`'s `head` array applies the saved theme before first paint to avoid a flash of the wrong theme.

## SEO plugin

`config.js` configures `vuepress-plugin-seo` with a fairly involved `customMeta` callback (Twitter card tags, Google site verification). Page-level SEO fields (title, description, image, tags) are driven by each Markdown file's frontmatter — check a page's frontmatter before assuming a metadata field needs to be added in `config.js` itself.
