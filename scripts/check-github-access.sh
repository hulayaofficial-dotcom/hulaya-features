#!/usr/bin/env bash
set -euo pipefail

REMOTE_URL="https://github.com/hulayaofficial-dotcom/Hulaya-Marketplace.git"

echo "[1/3] Checking remote URL..."
git remote set-url origin "$REMOTE_URL" 2>/dev/null || git remote add origin "$REMOTE_URL"
git remote -v

echo "[2/3] Checking read access (ls-remote)..."
if git ls-remote "$REMOTE_URL" >/dev/null 2>&1; then
  echo "Read access OK"
else
  echo "Read access FAILED"
fi

echo "[3/3] Checking push capability (dry-run)..."
if git push --dry-run origin HEAD >/dev/null 2>&1; then
  echo "Push dry-run OK"
else
  echo "Push dry-run FAILED"
fi
