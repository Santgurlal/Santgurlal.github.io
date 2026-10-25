#!/usr/bin/env bash
# Build the portfolio (public variant) and copy its static export into this repo's root.
# It never commits or pushes: review `git status` / `git diff --stat`, then commit and push yourself.
#
#   ./deploy.sh              full release: both resume PDFs + og.png, then next build (needs Chrome, see CHROME env)
#   ./deploy.sh --no-release plain `next build` with RESUME_VARIANT=public (reuses the PDF/og.png already in public/)
#
# Source dir: $PORTFOLIO_DIR (default ~/Desktop/projects/portfolio/final).
set -euo pipefail

REPO="$(cd "$(dirname "$0")" && pwd)"
SRC="${PORTFOLIO_DIR:-$HOME/Desktop/projects/portfolio/final}"
MODE="${1:-}"

[ -f "$SRC/next.config.mjs" ] || { echo "No Next.js site at $SRC (set PORTFOLIO_DIR)"; exit 1; }
if [ -n "$(git -C "$REPO" status --porcelain)" ]; then
  echo "Repo has uncommitted changes; commit or stash them first."; exit 1
fi

cd "$SRC"
[ -d node_modules ] || npm ci --no-audit --no-fund
if [ "$MODE" = "--no-release" ]; then
  RESUME_VARIANT=public npx next build
else
  # release.mjs builds the full variant first (PDF → ../resume, never deployed), then rebuilds public → out/.
  npm run release
fi
OUT="$SRC/out"
[ -f "$OUT/index.html" ] || { echo "Build produced no out/index.html"; exit 1; }

# ---- Privacy gate: abort before anything reaches the repo. ----
fail=0
# The phone number is read from the source so it is never written into this public repo.
PHONE="$(node -e 'const s=require("fs").readFileSync(process.argv[1],"utf8");const m=s.match(/phone:\s*"([^"]+)"/);console.log(m?m[1]:"")' "$SRC/content/resume.ts")"
if [ -n "$PHONE" ]; then
  DIGITS="$(printf %s "$PHONE" | tr -cd 0-9)"
  if grep -rqF -e "$PHONE" -e "${DIGITS: -10}" "$OUT"; then echo "PRIVACY: phone number found in out/"; fail=1; fi
fi
if find "$OUT" -iname '*Senior-Software-Engineer*' -o -name '.env*' -o -iname '*.psd' -o -iname '*.key' -o -iname '*.pem' | grep -q .; then
  echo "PRIVACY: private resume / env / key / source art file in out/"; fail=1
fi
if grep -rqlE 'RESUME_VARIANT|/Users/|portfolio-kit|MASTER-LIST' "$OUT"; then
  echo "PRIVACY: local path or internal note reference in out/"; fail=1
fi
[ "$fail" = 0 ] || { echo "Aborted: nothing copied."; exit 1; }

# ---- Replace the repo root with out/ (keeps git metadata and the deploy tooling). ----
rsync -a --delete \
  --exclude .git --exclude deploy.sh --exclude DEPLOY.md --exclude .gitignore --exclude CNAME \
  "$OUT"/ "$REPO"/
[ -f "$REPO/.nojekyll" ] || touch "$REPO/.nojekyll"   # _next/ must not be eaten by Jekyll

cd "$REPO"
git status --short | head -40
echo "Built and copied. Review, then: git add -A && git commit -m 'Deploy site' && git push"
