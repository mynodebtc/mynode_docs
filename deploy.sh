#!/usr/bin/env sh

# abort on errors
set -e

# Make sure deps are installed
yarn install

# build
rm -rf docs/.vuepress/dist
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.github.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:mynodebtc/mynodebtc.github.io.git master
cd -
