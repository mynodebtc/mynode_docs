# AGENTS.md

Guidance for AI coding agents (and human contributors) working in this repository.

## What this is

Community-built documentation site for [MyNode](https://mynodebtc.com/) (a Bitcoin/Lightning node platform). Content is Markdown, compiled into a static site with VuePress 1. Live at https://docs.mynodebtc.com/.

## Commands

```sh
yarn install       # install deps
yarn docs:dev      # serve locally with hot reload (port 8080, or next available)
yarn docs:build    # build static site to docs/.vuepress/dist
yarn docs:lint     # reject Markdown that VuePress would compile into executable code
yarn docs:check    # render every page and check what Vue will compile against an allowlist
```

`docs:dev` and `docs:build` run through `node --openssl-legacy-provider` because the bundled VuePress 1 uses webpack 4, which is incompatible with OpenSSL 3 in newer Node releases. Don't remove that flag.

There are two automated checks. `yarn docs:lint` (`scripts/check-markdown.js`) reads the
raw Markdown and needs no dependencies. `yarn docs:check` (`scripts/check-templates.js`)
renders every page with the site's own markdown-it setup and parses the result with
Vue's template compiler, then rejects any tag, attribute or URL scheme not on its
allowlist. `docs:build` runs `docs:check` first. Otherwise verification is building the
site and checking pages render.

## Markdown is not inert

VuePress compiles each `.md` file into a Vue single-file component, so Markdown content
is executable. A `<script>` block in Markdown becomes the page's SFC script and runs both
in visitors' browsers and on the build machine during SSR; `{{ }}` is evaluated as a Vue
expression (including inside inline backticks — fenced code blocks are the only inert
form); `onerror=` handlers and `javascript:` hrefs pass through verbatim.

This matters because `docs.mynodebtc.com` is same-site with `www.mynodebtc.com`, so the
main site's `SameSite=Lax` session cookie is sent on requests originating from the docs
origin. `scripts/check-markdown.js` rejects these patterns and runs in CI on pull
requests and before every deploy. It also rejects:

- **Frontmatter with a language tag** (`---js`, `---toml`, ...). Use a plain `---` YAML
  fence. The frontmatter parser runs `---js` blocks as JavaScript on the build machine;
  `config.js` also disables that engine so the build fails if the check is bypassed.
  Don't remove that override.
- **Any attribute whose name starts with `v-`, `:`, `@` or `#`**, including forms like
  `v-on:click` and `@click.prevent`, because Vue compiles them into live bindings.
- **`<component>` and any `is=` attribute**, which make Vue render a different element
  by name.
- **Disguised `javascript:` URLs**, including ones hidden with character codes, tabs,
  newlines or control characters.

- **Anything after an opening code fence except a language name** (and an optional
  `{1,3}` line range). VuePress pastes that text into an HTML attribute unescaped.
- **`<<<` snippet imports**, which embed a file from the build machine into the page.
- **Files in `.vuepress/public/` that aren't on the extension allowlist** (`.html`,
  `.php`, `.htaccess`, ...), and **SVGs anywhere under `docs/`** that contain script,
  event handlers, `<foreignObject>` or links other than `#id`. An SVG opened directly
  runs as a page on the docs origin, and GitHub shows it in a diff as a picture.

Only the inside of a fenced code block counts as inert. HTML comments and inline code
are checked like everything else, because a `<!--` or a backtick inside an attribute
value used to hide the rest of the tag from the check. If the check can't be sure how
markdown-it reads a fence (unclosed, inside an HTML block, a `:::` line inside, ...), it
stops treating later fences in that file as inert.

`docs:check` sees what Vue will actually compile, so it catches what the Markdown
linter has to guess at. If a page legitimately needs a new tag or attribute, add it to
the allowlist in `scripts/check-templates.js` in the same PR. In pull requests it runs
with the base branch's `.vuepress/` and dependencies, with only the PR's pages swapped in.

To show any of these as an example, put it in a fenced code block. The linter is a
denylist, so review of Markdown PRs is still the main control. Treat any change to
`scripts/check-markdown.js` or `.github/workflows/` as security-relevant; the reasons
behind each rule are in the comments in `check-markdown.js`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and `rsync`s `docs/.vuepress/dist/` (with `--delete`) over SSH to the production server. Watch the Actions tab after merging — a failed build or rsync means the live site stops updating until it's fixed. Because of `--delete`, anything present on the server but missing from `dist/` gets removed on the next deploy, so any server-side file the site depends on (e.g. custom error pages) needs to be produced by the build itself, not added by hand.

CI is pinned for reproducibility: Node 22 via `actions/setup-node`, and every action
pinned to a commit SHA with a version comment. Keep new actions pinned the same way.
Install is `yarn install --frozen-lockfile --ignore-scripts`, in CI and in `deploy.sh`.

## Dependencies

- Use yarn only. Don't run `npm install`; it creates a `package-lock.json` that competes
  with `yarn.lock`. Commit `yarn.lock` together with any `package.json` change, or CI
  fails at install.
- Dependabot opens weekly grouped PRs for actions and npm (`.github/dependabot.yml`).
  Those PRs only get the Markdown check, not a build, and merging deploys. Before merging
  an npm update, build the branch, compare the pages' `<meta>` tags with the current
  build, and look at a page in a browser.
- `vuepress-plugin-seo` is held below 0.2.0. 0.2.0 targets VuePress 2 and on this site
  silently drops all Open Graph, Twitter and verification tags while the build still
  passes.

## Security reports

Don't open public issues for security problems. See `.github/SECURITY.md`.

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
