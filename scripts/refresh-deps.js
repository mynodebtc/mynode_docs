#!/usr/bin/env node
//
// Moves every locked dependency in yarn.lock to the newest version its range
// allows. Run through `yarn deps:refresh`, which builds the site afterwards.
//
// This is `yarn upgrade` with two fixes around it:
//
// - Install scripts stay off, as in CI and deploy.sh.
// - package.json is put back afterwards. Yarn 1's `upgrade` copies packages
//   named in nested `resolutions` entries (e.g. `**/request/qs`) into
//   `dependencies`. A plain `yarn install` then brings yarn.lock back in line
//   with the restored package.json; the versions upgrade chose are kept.

const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const PACKAGE_JSON = path.join(ROOT, 'package.json')

// Inside `yarn run`, npm_execpath is the yarn being used.
function yarn (...args) {
  const execPath = process.env.npm_execpath
  const result = execPath && execPath.endsWith('.js')
    ? spawnSync(process.execPath, [execPath, ...args], { cwd: ROOT, stdio: 'inherit' })
    : spawnSync('yarn', args, { cwd: ROOT, stdio: 'inherit' })
  if (result.status !== 0) {
    throw new Error(`yarn ${args.join(' ')} failed`)
  }
}

const original = fs.readFileSync(PACKAGE_JSON, 'utf8')
try {
  yarn('upgrade', '--ignore-scripts')
} finally {
  fs.writeFileSync(PACKAGE_JSON, original)
}
yarn('install', '--ignore-scripts')
