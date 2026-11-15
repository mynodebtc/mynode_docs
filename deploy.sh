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

# The upload is SFTP (lftp), same as CI: the server gives the deploy account an
# SFTP session and nothing else, so rsync over ssh no longer works.
command -v lftp > /dev/null || { echo "deploy.sh needs lftp (brew install lftp)" >&2; exit 1; }

SSH_OPTS="-a -x -o BatchMode=yes"
if [ -n "$DOCS_SSH_KEY_PATH" ]; then
  SSH_OPTS="$SSH_OPTS -i $DOCS_SSH_KEY_PATH"
fi

# Same install as CI (.github/workflows/deploy.yml): exactly the tree pinned
# in yarn.lock, no package install hooks.
yarn install --frozen-lockfile --ignore-scripts

# Reject executable Markdown before the build runs it.
yarn docs:lint

# build
rm -rf docs/.vuepress/dist
yarn docs:build

# mirror --reverse --delete is the rsync --delete equivalent: upload the build,
# remove anything on the server that is not in it. --transfer-all and
# use-temp-file are explained in .github/workflows/deploy.yml.
lftp -c "
  set cmd:fail-exit yes
  set net:max-retries 2
  set xfer:use-temp-file yes
  set sftp:connect-program 'ssh $SSH_OPTS'
  open -u '$DOCS_SSH_USER,' -p '$DOCS_SSH_PORT' 'sftp://$DOCS_SSH_HOST'
  mirror --reverse --delete --transfer-all --parallel=4 --verbose docs/.vuepress/dist/ '$DOCS_REMOTE_PATH/'
"
