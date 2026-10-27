# Fix slide 1 testimonial photos + new hosting ZIP

## What's wrong
On your own hosting, Cristian's (and Adam's / Jakub's) photo shows as broken text. Their photos are stored on Lovable's image storage, which only works on Lovable's own site — your hosting can't reach it. Marek's main photo works because it's packaged inside the site files.

## What I'll do
1. Package the three testimonial photos (Cristian, Jakub, Adam) inside the site files, the same way Marek's photo is, so they load on any hosting.
2. Make each round photo fill its circle cleanly (centered face, no stretching), with the person's initials as a fallback if a photo ever fails.
3. Build the current version of the deck (all latest edits, Riseup favicon only, no Lovable icon or mentions).
4. Test the built copy in a browser: open slide 1 for both cover versions and confirm all testimonial photos actually appear; also check the slide count is correct.
5. Give you a new ZIP (`riseup-deck-2026-10-28.zip`) with upload instructions, and update the spec/issue notes.

## Technical details
- Download the three PNGs from their current asset URLs into `src/assets/recommendations/*.png`, import them directly in `PricingCoverShared.tsx`, and remove the `.asset.json` imports (keep pointers; do not delete CDN objects).
- Avatar `img`: `object-cover object-center`, fixed square, `rounded-full`; `onError` → initials.
- Build with `vite build`, verify `dist/` contains the PNGs plus `favicon.ico` and `spec/assets/favicon.ico`, serve `dist/` locally and screenshot both covers.
