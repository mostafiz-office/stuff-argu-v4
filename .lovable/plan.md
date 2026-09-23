# Replace cover photo with the new Marek photo (slide 1)

## Problem
The photo on slide 1 (both cover variants) uses `src/assets/marek.png`, which is only 259×354 px. Stretched into the 760×900 photo area it looks blurry and bad. The user uploaded a new, high-resolution Marek portrait (user-uploads://marek-updated-DPz5I0lz.png, ~868×1200) and wants it used on slide 1.

## Current state (verified)
- Both visible cover variants import the same file: `import marekPhoto from "@/assets/marek.png"`
  - `src/slides/PricingCoverV1.tsx` (shown with ?cover=2) — photo region `left: 720, bottom: 0, width: 760, height: 900`, bottom-aligned cutout with drop-shadow.
  - `src/slides/PricingCoverV3.tsx` (shown with ?cover=1) — same region, same styling.
- No code change is needed to swap the photo if the file itself is replaced — both variants pick it up automatically.

## Plan
1. **Prepare the new image**
   - Use the uploaded photo (`/mnt/user-uploads/marek-updated-DPz5I0lz.png`).
   - Remove its dark rectangular background with an AI image edit so it becomes a transparent cutout (matching the current bottom-aligned, drop-shadow presentation). Save as `/tmp/marek-new.png` first.
2. **Swap the file**
   - Replace `src/assets/marek.png` with the new transparent cutout (backup of the old file is not needed — it is in git history).
   - Result: both cover variants immediately show the new, sharp Marek photo with no code edits.
3. **Fine-tune if needed**
   - After the swap, check both cover variants in the browser; adjust the photo region (size/offset) only if the new framing sits oddly — the new photo is taller/narrower, so it should fit the same region well with `object-contain object-bottom`.
4. **Update spec docs**
   - `spec/02-features/02-slide-system/slides/01-cover-v3.md` and `02-cover-v1.md`: note the new higher-resolution marek.png photo source (bump to 1.2.0).
5. **Verify**
   - Playwright check on both `?cover=1` and `?cover=2`: photo renders sharp, alt "Marek Flejszman", background removed, nothing overlaps the text/buttons.
   - Confirm build OK via build log.

## Out of scope
- Other slides that reference marek.png (TitleSlide, KeyPlayersSlide) are unused by the pricing deck — no changes there.
