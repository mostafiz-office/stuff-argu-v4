# 006 — Recommender photos broken on self-hosting

**Status:** Fixed (2026-10-27)

**Symptom:** On stuff-aug-v1.riseupasia.xyz the round photos of Cristian, Jakub and Adam showed alt text.

**Cause:** Photos were CDN asset pointers (`/__l5e/assets-v1/...`), which only resolve on Lovable hosting.

**Fix:** Photos are now bundled PNGs in `src/assets/recommendations/` imported directly by `PricingCoverShared.tsx`; avatars use `object-cover object-center` and hide on load error. Lovable author/og/twitter meta removed from `index.html`.

**Verified:** Built `dist/` served locally — all 4 avatars on both covers loaded (naturalWidth > 0).
