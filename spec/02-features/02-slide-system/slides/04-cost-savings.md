# Slide 4 — Cost Savings

**Component:** `src/slides/PricingSavingsSlide.tsx`

---

## Layout

- **Left column** (520px): "Save Up To 76%" headline with oversized 88px accent number
- **Bottom section**: 4 comparison bar rows, full width

## Comparison Data (4 rows)

| Role | Tier | US Rate | RiseUp | Saving | Bar Color |
|------|------|---------|--------|--------|-----------|
| Starter Developer | Tier 1 | $6,000–$8,000 | $1,900 | Up to 76% | Red `#ef4444` |
| Mid-Level Developer | Tier 2 | $10,000–$15,000 | $4,299 | Up to 71% | Orange `#f97316` |
| Skilled Expert | Tier 3.A | $18,000–$25,000 | $6,800–$8,000 | Up to 68% | Purple `#7c3aed` |
| Tech Leadership | Tier 3.B | $22,000–$30,000 | $7,500–$10,000 | Up to 67% | Pink `#ec4899` |

## Bar Visualization

Each row has:
1. Role name + tier label (baseline aligned)
2. Savings badge (colored pill, right-aligned)
3. **US bar**: Full width (100%), colored gradient
4. **RiseUp bar**: Proportional width (24–33%), accent gradient with glow shadow

Both bars animate from `width: 0` with staggered delays.

## Background

- Right-side radial glow (accent, 0.06, blurred 60px)
