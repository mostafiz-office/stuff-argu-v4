# Slides 2, 3, 9, 10, 11: less text, better text sizes

Only these five slides change. The old deck's slide 8 ("Zero Risk. All Upside.") sets the style: one title line, one short sentence under it, big numbers, short card headings with one line under each, and plenty of empty space.

## What's wrong now
- **Slide 2 (pain points):** each card stacks 5 items (a label, a heading, a 3-line paragraph, a cost box and a green note). The small grey text sits next to big headings, so the sizes look unbalanced.
- **Slide 3 (tiers):** each card has a long list of 4–5 points plus a "Hover card for video overview ▶ Preview" line. Hovering over a card plays a video with a person in it. Spacing and text sizes are uneven between the cards.
- **Slide 9 (Tier 1 Starter):** a 3-line title, a busy price card with 5 points, 3 number boxes, 3 benefit rows and a guarantee bar, all crowded together.
- **Slide 10 (savings):** a big italic title, an 80% box with a paragraph, and 4 dense rows of comparison prices.
- **Slide 11 (contact):** the text runs large compared with the other slides.

## Changes
1. **Slide 2:** each of the 3 cards keeps an icon, a heading, one short line, and the cost figure as a big number. Remove the small top label, the long paragraph and the green note. Title on one line.
2. **Slide 3:** remove the hover video completely, along with the "Hover card for video overview / Preview" line. Each card shows: tier name, years of experience, a big price, "160 hrs/month", and 3 short points. All 3 cards get the same height, padding and text sizes. The "Best value" badge stays.
3. **Slide 9:** rebuilt to look like the old slide 8, using today's numbers:
   - **Title:** a one-line headline with one short sentence under it.
   - **Left:** the Tier 1 card ($1,900/mo, the 160 hrs/month tag, + $2K deposit, 4 short points).
   - **Right:** 3 number boxes (80% / 160h / $10,000), then 3 benefit rows, each with a heading and one line.
   - **Kept:** the Next-press reveal of the Chief Architect Bonus card and the rocket launch. The guarantee becomes one small line.
4. **Slide 10:** a normal (not italic) title on one or two lines. The 80% box keeps the number, the label and one line. The 4 rows each show a role name, the savings badge, the US rate and the RiseUp rate, with more space between rows.
5. **Slide 11:** same layout. The title gets smaller (about the same size as the other slide titles), with slightly smaller buttons and QR code, and better balance between the two sides.

## Shared sizes (on the full-size slide)
Titles 64–72px, sentence under the title 26px, big numbers 56–64px, card headings 30px, card lines 22px, small labels 18px.

## Check
Screenshot slides 2, 3, 9, 10 and 11 at your current window size and a 1280-wide window. Confirm nothing overlaps the top bar or bottom dots, hovering on slide 3 no longer plays a video, and slide 9's Next-press steps still work. Then update the slide notes.

## Technical details
- `PricingTiersSlide.tsx`: drop the `HoverVideoPreview` wrapper/import and the preview row.
- `PainPointsSlide.tsx`, `StarterTierSlideV9Clone.tsx` (keep the `__slideNavigationGate` logic untouched), `PricingSavingsSlide.tsx`, `PricingCTASlide.tsx`: content trimmed and sizes set to the scale above.
