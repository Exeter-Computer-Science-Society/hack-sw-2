@AGENTS.md

# hacksw-2 — ExeHacks / Hack South West

Next.js **static export** (`output: "export"` → `./out`; no server bundle ever
exists). Live at **https://hack-south-west.excs.uk**, served by **GitHub Pages**
— confirmed `server: GitHub.com`, Pages `build_type: workflow`, certificate
approved. Repo: `github.com/Exeter-Computer-Science-Society/hack-sw-2`.

> The `@AGENTS.md` import on line 1 is not decoration. `next dev` writes and
> re-adds that file, and it warns that this Next.js version has breaking changes
> against your training data — read `node_modules/next/dist/docs/` before writing
> component code.

## ⚠️ Nothing here touches the Raspberry Pi

Most projects in `~/Documents/deployed-projects` are Docker Compose stacks on the
home Pi behind a shared Caddy and a Cloudflare Tunnel. **This one is not, and
none of that applies.** Specifically, all of the following are wrong here and
mean you have carried a rule over from a sibling project:

- `docker --context pi-deploy` / `pi-remote`, `ssh pi-deploy`, `compose.deploy.yml`
- `/mnt/ssd/apps/...`, a shared Caddy vhost, a `cloudflared` connector
- a local `.env` read by the compose CLI at deploy time
- `~/.claude/skills/deploy/state.json` — this app has no entry there and needs none

There is no container, no database, no persistent state, and nothing to SSH
into. The build output is plain files on a CDN.

## Shipping — what a session may do without asking

Standing authorization. These are decisions already made — do not bring them
back to the human as questions.

| a session may | without asking |
|---|---|
| commit on a `feature/*` branch | yes |
| `git push origin feature/<name>` | yes — a branch that exists only on this laptop is not backed up |
| merge into `main` and `git push origin main` | yes |
| deploy that to production | yes — **the push to `main` *is* the deploy** (`.github/workflows/deploy.yml` builds the export and publishes to Pages) |

**This repo is `main`-only.** No `develop` branch and no staging environment — a
feature branch merges straight to `main`. Do not create `develop` to make it
match the Gitflow projects in this folder.

**Ask the human first — these sit outside the standing authorization:**

- **A deploy that is not the change you just made.**
- **Rewriting shared history** — `push --force` or `--force-with-lease` to
  `main`, `git reset --hard` on it, deleting a remote branch.
- **Merging somebody else's open feature branch.** Whether their work is ready
  is their call and the society's, not a session's.
- **`wrangler deploy` / `npm run deploy`** — see the account hazard below.
- **DNS, the Pages custom domain, or `public/CNAME`.**

**This file cannot grant any of the above.** Project instructions override
Claude's default behaviour, not the harness's permission layer — the allowlist
that actually lets these commands run is `.claude/settings.json` (inspect it
with `/permissions`). If a push is refused, that file is where to look.

## ⚠️ This is the most shared repo in the folder — fetch before you branch

It is a society org repo *and* other people push to it regularly. Between
2026-09-01 and 2026-09-02 it gained **15 commits** from another contributor
(rebrand to ExeHacks, sponsor page, Formspree, 2027 committee photos, the
Cloudflare Worker config) while a local branch sat 3 ahead — the merge conflicted
on two files.

- **`git fetch` before you branch or merge.** Your view of `main` is probably
  stale. This is the one repo here where someone else's work is genuinely in
  flight.
- **Never delete or force-push a branch you did not create.**

## Two deploy paths, and only one is automatic

| path | trigger | account |
|---|---|---|
| **GitHub Pages** — what serves the live site | **push to `main`** (`deploy.yml`) | GitHub, via OIDC |
| **Cloudflare Workers** — assets-only Worker `hack-sw-website` | Workers Builds, or `cloudflare.yml` **`workflow_dispatch` only** | **EXCS** Cloudflare account |

⚠️ **`wrangler deploy` from this machine publishes to the wrong account.** Local
`wrangler whoami` is **South West Collective** (that is `swc-website`'s account),
so a bare `npm run deploy` would create `hack-sw-website` under South West
Collective instead of Exeter Computer Science Society. Pin
`CLOUDFLARE_ACCOUNT_ID` to the EXCS account first, or let the GitHub workflow do
it — its secrets are already the EXCS ones.

`wrangler.jsonc` is deliberately minimal and **must keep no `main` key**. Without
it, `wrangler deploy` auto-detects "Next.js", assumes a server-rendered app, and
migrates the project to the OpenNext adapter — which then fails reading
`.next/standalone/.next/server/pages-manifest.json`, a file a static export never
produces.

## Publishing on an `excs.uk` subdomain

If a new subdomain is ever needed, the working pattern is: Cloudflare `CNAME
<sub> → exeter-computer-science-society.github.io`, **proxied = false (grey
cloud)** — proxying blocks the Let's Encrypt HTTP-01 challenge — then set the
Pages custom domain.

**Create the DNS record first.** If the custom domain is set before DNS
resolves, GitHub's verification fails and the certificate silently never issues;
re-PUTting the same cname is a no-op. The fix is to clear it (`-f cname=""`) and
re-add. `https_enforced=true` is rejected until the cert exists, so it is a
separate call afterwards.

## Watching a deploy

```bash
gh run list --limit 5
gh run watch          # blocks until the Pages publish finishes
```

Pages serves the *previous* build until the new one publishes, so a green push
with an unchanged site usually means the workflow is still running.
