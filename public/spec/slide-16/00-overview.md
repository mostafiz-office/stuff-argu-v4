# Slide 08 (runtime) — Product Health "Built to stay stable"

Component: `src/slides/PromiseBandsSlide.tsx` → `ProductHealthSlide`. Second of the two promise slides; sits between Delivery Promises (runtime slide 7) and Pricing Tiers (runtime slide 9).

## Layout

Identical geometry to Delivery Promises (see `../slide-15/00-overview.md`): eyebrow at left 80 / top 146, 92px title, three bands from top 390 to bottom 120.

- Eyebrow "PRODUCT HEALTH"
- Title "Built to stay stable"

| Band | Statement (60px heading, bold) |
|---|---|
| 01 | **Stable, secure** product improvements |
| 02 | **No instability** — no churn, no rewrites |
| 03 | **Root cause** analysis, not symptom patching |

Bold = amber (`text-pres-accent`).

## Hover and motion

Shared with Delivery Promises — both are rendered by the same `PromiseBands` component, so band hover (amber left bar, lift, numeral brightening) and entrance stagger are defined once in `src/index.css` and `src/lib/presentationMotion.ts`.

## Rules

No supporting sentences, icons, emoji, or photography. The six promises are fixed client wording (grammar polished); do not add marketing copy to these bands.
