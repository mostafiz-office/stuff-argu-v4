# Store the Uploaded Favicon and Guarantee It Ships in Every Deploy ZIP

## What you get

1. **The favicon is stored in the project's spec folder** — a permanent master copy at `public/spec/assets/favicon.ico`, so it is part of the project and travels with every build.
2. **The favicon actually works on the live site** — it replaces the default placeholder icon, so browser tabs and bookmarks show your white "R" with the orange lightning bolt.
3. **Every future deploy ZIP automatically includes it** — the build copies everything in `public/` into the output, so both the spec-folder master copy and the live site icon are inside the ZIP. No extra steps needed for future zips.

## Steps

1. Copy the uploaded `file.ico` to `public/spec/assets/favicon.ico` (the spec-folder master copy).
2. Replace the default `public/favicon.ico` with the uploaded icon (it is already a proper 256x256 Windows icon, no conversion needed).
3. Verify `index.html` still points to `/favicon.ico` (it already does — no change required).
4. Add a short note in the spec files so this rule is documented: the favicon master lives in `public/spec/assets/`, and every build/ZIP must include it.
5. Verify with the browser that the new icon shows in the tab, and confirm the built output contains the icon in both locations.

## Technical details

- Vite copies the entire `public/` folder into the build output (`dist/`), which is what the ZIP is made from — so anything under `public/spec/` ships in the ZIP automatically.
- The icon is used as-is (`.ico` format, 256x256, 32-bit) — ideal for browser tabs.
- No links, images, or slide content are touched.

## What I need from you

- Nothing — approve the plan and I will store the favicon and verify it end-to-end.
