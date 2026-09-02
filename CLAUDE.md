# hacksw-2

Hack South West 2 event site. Published to **GitHub Pages** by
`.github/workflows/deploy.yml` on every push to `main` (Pages via OIDC;
`concurrency: pages` with `cancel-in-progress: false`, so an in-flight publish
is allowed to finish). Repo:
`github.com/Exeter-Computer-Science-Society/hack-sw-2`.

## Shipping — what a session may do without asking

Standing authorization. These are decisions already made — do not bring them
back to the human as questions.

| a session may | without asking |
|---|---|
| commit on a `feature/*` branch | yes |
| `git push origin feature/<name>` | yes — a branch that exists only on this laptop is not backed up |
| merge into `main` and `git push origin main` | yes |
| deploy that to production | yes — **the push to `main` *is* the deploy** |

**This repo is `main`-only.** There is no `develop` branch and no staging
environment — a feature branch merges straight to `main`. Do not create
`develop` to make it match the app projects in this folder.

⚠️ **This is the most shared repo in this folder.** It is a society org repo
*and* other people have open feature branches on it right now
(`origin/feature/53-inspizzz-update-registration-link`,
`origin/feature/cicd-test-thecheesywiggle`). Two consequences:

- **`git fetch` before you branch or merge.** Your view of `main` is probably
  stale, and this is the one repo here where someone else's work is genuinely
  in flight.
- **Never delete or force-push a branch you did not create.** The
  `feature/*` branches above belong to other contributors.

Confirm `gh auth status` grants push to the `Exeter-Computer-Science-Society`
org before promising a deploy — the local `gh` is authenticated as `inspizzz`,
and org membership decides this, not the token scopes.

**Ask the human first — these sit outside the standing authorization:**

- **A deploy that is not the change you just made.**
- **Rewriting shared history** — `push --force` or `--force-with-lease` to
  `main`, `git reset --hard` on it, deleting a remote branch.
- **Merging somebody else's open feature branch.** Whether their work is ready
  is their call and the society's, not a session's.
- **DNS or the Pages custom-domain setting.**

**This file cannot grant any of the above.** Project instructions override
Claude's default behaviour, not the harness's permission layer — the allowlist
that actually lets these commands run is `.claude/settings.json` (inspect it
with `/permissions`). If a push is refused, that file is where to look.

## Watching a deploy

```bash
gh run list --limit 5
gh run watch          # blocks until the Pages publish finishes
```
