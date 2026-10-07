# Add "Who we are?" + logo slides, and make Features Comparison button-only

## What changes (in deck order)

```text
6  Talent Pyramid
7  What you get
8  Built to stay stable
9  NEW  "Who we are?"  — one huge amber question mark + the words "Who we are?"
10 NEW  Riseup Asia logo — the logo alone, large and centred, soft amber glow
11 Pricing — "End Stalled Projects: Pick Your Tier"  + new "Compare pricing" button
   (Features Comparison no longer appears as its own slide)
12 Chief Architect ... 18 Contact (same content, numbers shift)
```

Total stays 17 visible slides (+2 new, −1 comparison hidden from the sequence).

## Compare pricing button
- Sits on the pricing slide under the tier cards, amber outline style matching the deck.
- Clicking it opens the existing Features Comparison (Apple-style scroll table, unchanged) as a full-screen view over the deck, with a clear "Back to pricing" / close button; Esc also closes.
- While it's open, arrow keys scroll the table instead of changing slides.
- Arrow/Next navigation from the pricing slide skips straight to Chief Architect.

## Also updated
- Navigation tooltips and dots (17 entries: "9. Who We Are", "10. Riseup Asia", "11. Pricing Tiers"...).
- Slide transition list, Starter Tier gate keeps working at its new number.
- Specs, spec index, project notes, deck facts memory; fresh deploy ZIP.

## Verification
Check at 1023×649 and 1280×720: the two new slides, button opens/closes comparison, keyboard behaviour, comparison absent from normal flow, Starter gate, clean build.

## Technical details
- New `WhoWeAreSlide.tsx` and `BrandLogoSlide.tsx` (uses `src/assets/riseup-asia-logo.png`).
- Remove `TierDetailSlide` from `Index.tsx` slide array; render it inside a modal overlay owned by `PricingTiersSlide` (portal, focus trap, Esc), with a flag that suspends deck keyboard navigation while open.
