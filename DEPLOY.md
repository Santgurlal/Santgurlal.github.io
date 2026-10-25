# Deploying santgurlal.github.io

The site source lives in `~/Desktop/projects/portfolio/final` (Next.js 16 static export,
`output: "export"`, `trailingSlash: true`). This repo is a GitHub **user site**, served from the
root of `master`.

## Options

| | (a) Commit the built `out/` to the repo root | (b) Next.js source in the repo + GitHub Actions Pages workflow |
|---|---|---|
| What is public | Only the built public site (HTML/JS/images/public PDF) | Everything in the source tree, plus the built site |
| Private data | `content/resume.ts` stays local. It holds the phone number, the **full** resume bullets (internal metrics: request rates, waitlist counts, error rates) and `src` notes pointing to private dashboards. None of that is in the public build (checked). | `content/resume.ts` would be in a public repo, so the phone number and full-variant metrics would be public even though the site never renders them. You would need to split the full variant out of the repo first. |
| Resume PDF / og.png | Built by `scripts/release.mjs` locally with Chrome (Playwright). Works as it does now. | CI has no local Chrome path. You would need to commit the generated PDF/og.png or install Chrome in CI and run the full variant (which writes the private PDF on the runner). |
| Simplicity | One script, no CI, no Settings change. | A workflow, a Settings change, Node version pinning, and CI-only failures to debug. |
| Reproducibility | Depends on your machine. `npm ci` from the lockfile limits drift, and the built output is in git so every deploy is diffable. | Clean builds from the lockfile on every push. The source history is versioned with the site. |
| Repo size | Build churn. Hashed `_next/` chunks change on each deploy, and the `living/` art is about 10 MB, which is only re-committed when it changes. | Source plus about 10 MB of assets, and no build output in git. |

## Recommendation: (a)

Privacy decides it. The source has to keep the full resume variant and the phone number, and
a user-site repo is public. Option (a) publishes only what the public build renders. Option (a)
also keeps the existing Chrome-based PDF and og image pipeline unchanged and needs no change in
repo Settings. The cost is less reproducibility (builds happen locally). The lockfile and the
privacy gate in `deploy.sh` reduce that risk.

### How to deploy (a)

```bash
cd ~/Desktop/Santgurlal.github.io
git checkout new-site            # or master once merged
./deploy.sh                      # npm run release in final/, privacy gate, rsync out/ → repo root
# or ./deploy.sh --no-release    # just `next build` (public variant), reusing public/ PDF + og.png
git add -A && git commit -m "Deploy site" && git push
```

`deploy.sh` never commits or pushes. It aborts before copying anything if `out/` contains the
phone number, a `*Senior-Software-Engineer*.pdf`, `.env`, keys, PSDs, local paths or internal
note references. It keeps `.nojekyll` so that GitHub Pages serves `_next/`. The full resume is
written to `~/Desktop/projects/portfolio/resume/` and never enters this repo.

**Settings:** none. Settings → Pages stays on "Deploy from a branch", `master`, `/ (root)`.
To go live, merge `new-site` into `master` and push.

### Cleanup before going live (in final/, not here)
- `app/living-lab/*` dev preview pages are exported as public routes (`/living-lab/...`). Delete
  them, or move them out of `app/`, before the real deploy.
- `*.bak` files in `app/` are not exported, but they should not be kept around.

## If you later choose (b)

1. First move the full variant out of the repo, for example into a gitignored `content/resume.full.ts`
   that release.mjs loads only when it exists. Strip the phone number and the `src` notes from the
   tracked file. Commit the public PDF and `og.png` in `public/`.
2. Copy the source without `node_modules`, `.next`, `out`, `art/`, `tools/`, `*.bak` or `*.tsbuildinfo`.
3. Add `.github/workflows/pages.yml`: checkout → `actions/setup-node` (Node 22, `cache: npm`) →
   `npm ci` → `RESUME_VARIANT=public npx next build` → `actions/configure-pages` →
   `actions/upload-pages-artifact` (`path: out`) → `actions/deploy-pages`, with
   `permissions: pages: write, id-token: write` and environment `github-pages`.
4. **Settings → Pages → Build and deployment → Source: "GitHub Actions"** (instead of "Deploy
   from a branch"). Then check Settings → Environments → `github-pages` and make sure the
   deployment branch rule allows `master`.
