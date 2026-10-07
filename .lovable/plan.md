# Add Two "Promises" Slides After the Pyramid

## What we're adding

Two new slides, placed immediately after the Talent Pyramid (slide 6) and before Pricing. The deck grows from 15 to 17 slides.

- **Slide 7 — What you get** (delivery promises)
- **Slide 8 — Built to stay stable** (product health promises)

Each slide shows three statements as full-width stacked bands: one claim per band, large type, no extra paragraphs. Nothing else on the slide.

## Exact wording (grammar polished, meaning unchanged)

**Slide 7 — eyebrow "DELIVERY", title "What you get"**

| Band | Statement |
|---|---|
| 01 | Hiring solved in **15–21 days** |
| 02 | Our engineers **never** miss a deadline |
| 03 | The **shortest path** to the correct answer |

**Slide 8 — eyebrow "PRODUCT HEALTH", title "Built to stay stable"**

| Band | Statement |
|---|---|
| 01 | **Stable, secure** product improvements |
| 02 | **No instability** — no churn, no rewrites |
| 03 | **Root cause** analysis, not symptom patching |

Your original six lines map to these one-for-one: "15 to 21 days" → band 7.01, "never miss date line" → 7.02, "shortest path correct" → 7.03, "stable product security enhancement products" → 8.01, "avoid instability" → 8.02, "root cause analysis" → 8.03.

## Visual treatment

```text
1920 x 1080 canvas
+--------------------------------------------------------------+
| logo                                                         |
|                                                              |
|  DELIVERY                          (eyebrow, 22px, amber)    |
|  What you get                        (title, 92px, white)    |
|                                                              |
|  01  |  Hiring solved in 15-21 days      (band, 60px)        |
|      -------------------------------------------------       |
|  02  |  Our engineers never miss a deadline                  |
|      -------------------------------------------------       |
|  03  |  The shortest path to the correct answer              |
|                                                              |
+--------------------------------------------------------------+
```

- Each band is a row across the slide: an amber index numeral (01/02/03) on the left, a thin vertical rule, then the statement in large heading type with the key phrase in amber.
- Bands are separated by hairlines, evenly spaced, left-aligned to the deck's existing 80px margin.
- Hover: the band lifts slightly, its numeral brightens, and an amber edge glow appears on its left — the same restrained hover language already used on the pyramid and feature rows.
- Entrance: title first, then bands staggered by ~0.08s each, using the shared motion presets so timing matches every other slide.
- Reduced-motion setting respected (no band travel, just appear).
- No photographs, no icons, no emoji on these two slides.

## Deck renumbering

| Now | Becomes | Slide |
|---|---|---|
| 7 | 9 | Pricing Tiers |
| 8 | 10 | Features Comparison |
| 9 | 11 | Chief Architect |
| 10 | 12 | Architect Value |
| 11 | 13 | What's Included |
| 12 | 14 | How It Works |
| 13 | 15 | Starter Tier (rocket) |
| 14 | 16 | Cost Savings |
| 15 | 17 | Contact |

Slides 1–6 are unchanged. The rocket sequence keeps working exactly as now — first Enter shows Alim's box, second fires the rocket, third moves on — just on slide 15 instead of 13.

## Technical details

- New file `src/slides/PromiseBandsSlide.tsx`: a shared `PromiseBands` component (eyebrow, title, three `{index, statement, emphasis}` bands) plus two exported slides, `DeliveryPromisesSlide` and `ProductHealthSlide`. Renders inside `ScaledSlide` with `SlideHeader`, using `fadeUp`/`staggerDelay` from `src/lib/presentationMotion.ts`.
- `src/pages/Index.tsx`: insert both slides in the array at index 6 and 7.
- `src/components/presentation/SlideNavigation.tsx`: dot tooltip array grows to 17, inserting "Delivery Promises" and "Product Health" after "Talent Pyramid".
- `src/components/presentation/PresentationEngine.tsx`: `TRANSITION_STYLES` grows to 17 entries, inserting `fade` and `zoom` after the pyramid's entry so no two adjacent slides share a transition.
- `src/index.css`: one `.promise-band` style block (band surface, hairline, hover lift, amber edge glow) using existing theme tokens only — no hardcoded colors.
- No new image assets, so preloading is unaffected.
- Specs: new `public/spec/slide-15/` and `public/spec/slide-16/` (following the append-only numbering already in use), plus `spec-index.md`, `public/spec/00-overview.md` (still says 14 slides — will be corrected to 17), and the slide-system index.
- `AGENTS.md`: one rule recording that the delivery/product-health promises are two stacked-band slides with one claim per band and no supporting paragraphs.
- Project memory: deck facts updated to the 17-slide sequence with the six polished statements.

## One thing to flag

The existing "How It Works" slide says an engineer joins by **Day 3–7**, and the closing slide says "match you with the right talent **within days**". The new promise says hiring is solved in **15–21 days**. These can read as different clocks. I'll leave both existing slides untouched unless you tell me to align them — the cleanest fix would be to keep "within days" for matching and state 15–21 days as brief-to-signed-engineer.

## Verification

- Browser check at 1023×649 and 1280×720: both new slides render with all three bands fully visible, no wrapping or clipping, statements at presentation scale.
- Hover each band and confirm the highlight; confirm the pyramid hover still works.
- Walk the whole deck with arrow keys: 17 dots, correct tooltips ("7. Delivery Promises", "8. Product Health", "17. Contact"), and the rocket gate still fires in sequence on slide 15.
- Confirm build output is clean, then rebuild the deploy ZIP so the new slides ship.
