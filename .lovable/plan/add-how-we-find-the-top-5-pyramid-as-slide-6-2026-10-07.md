# Add "How We Find the Top 5%" pyramid as slide 6

Copy slide 6 of the reference deck (riseup-asia-ppt-v8.lovable.app/6) exactly and insert it right after "We have solutions for you." Deck goes from 14 to 15 slides; Pricing becomes slide 7 and everything after shifts by one.

## Content (exact copy)
- Title: "How We Find the Top 5%" ("Top 5%" in amber), subtitle "From every assignment-stage cohort, only the **Top 5%** make the cut."
- Three stats: 1,000+ Applicants sourced · Top 5% Of assignment pool · 5 Stages Rigorous screening
- Five-layer pyramid, same colors bottom to top (blue, green, amber, red/pink, gold), numbered circles 1–5, with connector lines to labels:
  1. Initial Sign-Up — Aptitude-Filtered Sign-Ups • 20 / 1,000
  2. Training & Assessment — Foundational Modules • 3–5 Layers
  3. Practical Assignment (with & without AI) — Expert-Designed Build • 20–25 hrs
  4. Client-Specific Simulation — AI / No-AI · Client Stack • 2 Modes
  5. Live Test & Hire — 1 hr Proctored · No AI • Top 5%
- Same icons on each label, and the "Hover the pyramid for details" hint, with the same hover highlight/detail behavior and entrance animation as the reference.

## Steps
1. Inspect the reference slide closely (hover states, colors, animation timing) with no tour overlay, and copy it exactly.
2. Build the new slide in our deck's 16:9 frame, keeping our own header/logo and navigation.
3. Insert it at position 6; update navigation tooltip ("6. Talent Pyramid"), transition cycle, and slide count to 15.
4. Check the Starter Tier Enter sequence (now slide 12) and the contact slide (now 15) still work.
5. Verify at 1023 and 1280 screen widths with screenshots, then update specs, deck memory and notes.

## Technical details
- New `src/slides/TalentPyramidSlide.tsx` (SVG pyramid), registered in `Index.tsx`; `SlideNavigation.tsx` titles and `PresentationEngine.tsx` `TRANSITION_STYLES` extended to 15.
- New spec folder for the slide; update the overview indexes and `mem://features/deck-facts`.
