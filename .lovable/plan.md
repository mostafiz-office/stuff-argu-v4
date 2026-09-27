# Add 14-Day Trial Note — Slide 6 "What's Included"

## Goal
Add the line "14-day trial with money-back guarantee (conditions apply)." as a note **below all six cards** on the "What's Included" slide (6 of 9) — not in the subtitle. Free space for it by slightly reducing the cards' height and the gap between the two rows.

## Layout Change (src/slides/WhatsIncludedSlide.tsx)
Current card grid: `top-[260px] bottom-[60px]`, gap 24px both axes.

New:
1. Card grid becomes `top-[260px] bottom-[175px]` — every card gets slightly shorter, same width.
2. Row gap reduced slightly (24px → 16px vertical), column gap unchanged.
3. New note line below the cards, centered, same fade-in animation as the rest:
   - Text: `14-day trial with money-back guarantee (conditions apply).`
   - Style: Poppins 20px, muted text color token (`--pres-text-muted`), optionally with a small shield icon in the accent color to match the deck's note style.
   - Positioned in the freed bottom band, inside the canvas boundary (nothing touches the bottom edge — respects the fixed-canvas rule from the earlier audit).
4. Subtitle stays exactly as is: "Every plan comes with these guarantees — no extra charges."

## Documentation
- `public/spec/slide-07/data/slide-07-content.json` — add a `trialNote` field with the line.
- `public/spec/slide-07/00-overview.md` — add the note to the slide description.

## Verification
- Build log OK.
- Playwright on `/?slide=6`: screenshot confirms the note sits below all six cards, cards remain comfortably taller than their text, nothing touches the bottom edge.
