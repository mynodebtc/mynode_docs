#!/usr/bin/env sh

# abort on errors
set -e

# Requires these set in your shell environment (not committed anywhere):
#   DOCS_SSH_HOST, DOCS_SSH_PORT, DOCS_SSH_USER, DOCS_REMOTE_PATH
# and an SSH key authorized for that account already loaded in your agent
# (or set DOCS_SSH_KEY_PATH to a specific private key file).
: "${DOCS_SSH_HOST:?Set DOCS_SSH_HOST}"
: "${DOCS_SSH_PORT:?Set DOCS_SSH_PORT}"
: "${DOCS_SSH_USER:?Set DOCS_SSH_USER}"
: "${DOCS_REMOTE_PATH:?Set DOCS_REMOTE_PATH}"

SSH_OPTS="-p $DOCS_SSH_PORT"
if [ -n "$DOCS_SSH_KEY_PATH" ]; then
  SSH_OPTS="$SSH_OPTS -i $DOCS_SSH_KEY_PATH"
fi

# Make sure deps are installed
yarn install

# build
rm -rf docs/.vuepress/dist
npm run docs:build

rsync -avz --delete \
  -e "ssh $SSH_OPTS" \
  docs/.vuepress/dist/ "$DOCS_SSH_USER@$DOCS_SSH_HOST:$DOCS_REMOTE_PATH/"
