# Slide 1 fixes + deck-wide text size

## What I found
- Both covers show a "Cover V3 · Bold Statement" / "Switch to Cover V1" label and button at the top.
- Both Marek recommendation cards (two on each cover) open **Alimul Karim's** LinkedIn page, not Marek's.
- The reload-switching code exists, but it saves the last cover only in browser storage. The preview frame can block that storage, so every reload falls back to the same cover. This is my most likely cause, but I haven't confirmed it yet. Step 1 confirms it in the real preview.
- Text overlapping the photo: the left text column is 820px wide with long headlines that can't wrap, so on smaller screens it runs into the portrait.

## Plan
1. **Reload switching:** First confirm the cause by reloading the preview several times. Then save the last cover in a way that survives reloads, using several storage methods with fallbacks so a blocked one doesn't stop it. Every reload shows the other cover (V1 → V3 → V1), and it never repeats by chance.
2. **Remove the label and switch button** from both covers.
3. **Marek links:** all four Marek cards open `https://www.linkedin.com/in/marekflejszman/details/recommendations/?detailScreenTabIndex=0`.
4. **Text over photo:** add a clear boundary between the text and the photo on both covers. The text column gets a maximum width that stops before the portrait, and the headline scales down on smaller screens so it never sits on the photo.
5. **Text size on all 11 slides:** raise any text that is too small to readable minimums: titles about 60–68px, subtitles 22–24px, card text 18–20px, small labels at least 15px. Then reflow each slide so nothing overlaps or hits the navigation or footer.
6. **Verify for real:** screenshot each of the 11 slides at desktop size, and reload 4 times to show the covers alternating. I'll report only what the screenshots show.
7. Update the slide 1 spec, the issue folder, and memory: Marek link, alternating covers, no switch label.

## Technical details
- `src/pages/Index.tsx`: read and write `riseup_last_cover` through localStorage, then sessionStorage, then `window.name`.
- `PricingCoverV1.tsx` / `PricingCoverV3.tsx`: drop the `onToggleCover` badge, replace the LinkedIn hrefs, and constrain the left column with `max-w` plus `clamp()` font sizes.
- All slide files in `src/slides/` in the active lineup: audit `text-[Npx]` classes and enforce the minimums.
