#!/usr/bin/env sh

# abort on errors
set -e

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

git push -f git@github.com:mynodebtc/mynode_docs.git master:gh-pages

cd -
