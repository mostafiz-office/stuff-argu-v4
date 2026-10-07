# Make slide images load instantly (preload + smaller files)

## What I found
- No preloading exists today. Each photo starts downloading only when its slide opens.
- Alim's photo on slide 5 is a 1.4 MB file, and Marek's cover photo is also about 1.4 MB, so they appear late.
- Browser caching for images is already set for 1 month in the hosting file (only helps on second visit).

## What I'll do
1. **Shrink the big photos** — make web-optimized copies of Alim's and Marek's photos (WebP, sized to how big they actually show), roughly 1.4 MB down to ~100–200 KB each, with no visible quality loss.
2. **Preload every slide's images at startup** — when the deck opens, quietly download all images used on later slides (Alim, QR code, logo, etc.) in the background, so slide 5 is ready before you get there.
3. **Priority for the cover** — the slide 1 photo loads first with high priority; others follow.
4. **Stronger caching** — images get 1-year cache in the hosting file (files have unique names per build, so updates still show).
5. **Verify** — check in the browser that Alim's image is already downloaded before opening slide 5, and that it shows with no delay; then update the asset/preloading spec notes.

## Technical details
- Use `vite-imagetools` (or a one-time `sharp` conversion) for WebP variants of `alim-updated.png` and the cover portrait.
- Add `src/lib/preloadImages.ts` that runs `new Image().src = ...` + `decode()` for all slide assets after first render; call from `Index.tsx`.
- Update `public/.htaccess` image expiry to 1 year; update `public/spec/global/17-asset-preloading.md`.
