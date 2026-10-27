# Deploy package for the current deck (Riseup Asia icon)

## What you get
A fresh, ready-to-upload hosting ZIP of the latest presentation (all 18 slides, current covers, recommendations, sound on, rocket over the red line), saved as `riseup-deck-2026-10-27.zip` in Files.

## Steps
1. Confirm the Riseup Asia icon is the only site icon: check `public/favicon.ico` matches the master copy and that no Lovable icon/image (favicon, apple-touch-icon, og image) is referenced anywhere in the page head.
2. Build the production version of the deck in a temporary folder.
3. Check the built output: Riseup icon present at `/favicon.ico` and `/spec/assets/favicon.ico`, no Lovable icon files, page title is the Riseup one, all slide images included.
4. Open the built site locally in a browser and confirm slide 1 loads and the browser tab shows the Riseup icon.
5. Zip it (contents at the root, so it uploads directly to any static host), list the ZIP contents to confirm, and copy it to Files.
6. Add a short README in the ZIP: upload contents to the web root; for page refreshes on single-page hosts, point all routes to `index.html`.

## Notes
- The "Edit with Lovable" badge only appears on Lovable's own published site, not in this self-hosted ZIP.
- Older ZIPs stay untouched; this is a new version.
