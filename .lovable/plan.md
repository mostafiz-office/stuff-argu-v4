# Deploy the Presentation to Your cPanel Server

## What you get

Two things:

1. **A ready-to-upload ZIP file** — the finished website, built and zipped, so you can upload it yourself in cPanel's File Manager (or hand it to anyone) and it just works.
2. **Optional: automatic upload from my end** — you give me access once, and I can build and push updates to your server whenever you ask.

---

## Part 1 — The deployable ZIP (no access needed)

- Build the presentation into plain static files (HTML, CSS, JavaScript, images) — no server code needed, any cPanel hosting can run it.
- Add a small `.htaccess` file so links like `yourdomain.com/?slide=4` and page refreshes never show a 404.
- Zip everything and give you the file here in chat.
- You upload it in cPanel → File Manager → your domain's folder (usually `public_html` or a subfolder) → Extract. Done.

## Part 2 — Automatic deployment from my end

### What access to give me (pick one)

**Option A — SFTP/SSH (recommended, safest)**
- Create a **dedicated FTP or SSH account** in cPanel limited to only the website folder (not the whole account).
- Give me: server address (e.g. `ftp.yourdomain.com`), username, password, and the target folder path.
- You can delete or change this password anytime to revoke my access.

**Option B — cPanel API token**
- In cPanel → "Manage API Tokens", create a token with File Manager permissions.
- Give me: your cPanel URL, cPanel username, and the token.
- More powerful than needed; Option A is preferred.

**What I do NOT need:** your main cPanel login password, root access, or hosting billing access. Never share those.

### How the auto-deploy works

1. You store the credentials once using Lovable's secure secret storage (they are never shown in chat or code).
2. When you say "deploy", I: build the site → upload the files to your folder via SFTP → confirm it's live.
3. First deploy includes a backup of whatever is currently in that folder, so nothing existing is lost.

---

## Steps

1. Add the `.htaccess` SPA fallback file to the project.
2. Build the site and produce `riseup-presentation.zip`, verify its contents, and deliver it in chat.
3. (When you're ready for auto-deploy) You create the limited SFTP/SSH account in cPanel and share the details; I store them securely and do a first test deploy.

## Technical details

- Build command: `bun run build` (Vite) → output in `dist/`.
- `.htaccess` uses `mod_rewrite` to route all paths to `index.html` (standard for React apps on Apache/cPanel).
- Secrets stored via Lovable's secret storage; used only in deploy scripts, never committed to the repo.
- The site is fully static — no database, no PHP, no Node server required on cPanel.

## What I need from you

- Nothing for Part 1 — I can deliver the ZIP right away.
- For Part 2: tell me your domain and create the limited SFTP/SSH account when ready.
