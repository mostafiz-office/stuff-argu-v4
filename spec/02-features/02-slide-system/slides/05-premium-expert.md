# Slide 05 — Premium Expert Bonus

**Version:** 1.1.0  
**Updated:** 2026-09-27  
**Component:** `PremiumExpertSlideV2`  
**File:** `src/slides/PremiumExpertSlideV2.tsx`

---

## Purpose

Communicates the Alim Expert Oversight bonus included with every tier. Shows market rate value ($625/hr), per-tier breakdown, and total value proposition. Alim's photo appears on the left with credential labels.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + center radial glow |
| Title area | `left: 120px, top: 100px` | Gift icon badge + uppercase label + headline |
| Alim photo | `left: 120px, top: 268px, w: 240px` | Rounded photo (280px tall, 6° rotate) + name/title below |
| Value stats | `left: 440px, top: 380px` | 3 stat cards in a row |
| Tier comparison | `left: 120, right: 120, top: 720px` | 4-column grid table |
| Tagline | `top: 980px`, centered | Italic quote |

---

## Content Data

### Headline
```
Buy Any Tier, Get a $10K/mo Expert Bonus
```

The `$10K/mo Expert` amber highlight uses the shared `pres-dark-safe-accent`
style. Its near-black text fill and amber background must remain unchanged in
mobile browsers that automatically darken web pages.

### Alim Card
- Name: Alim Ul Karim
- Title: Chief Software Engineer
- Experience: 20+ Years

### Value Stats (3 cards)

| Icon | Value | Sub-text | Highlight |
|------|-------|----------|-----------|
| Clock | 2–4 hrs/week | Varies by tier | No |
| DollarSign | $625/hr | Market rate for this expertise | No |
| Gift | Up to $10K | Monthly value — BONUS with your tier | ✅ Yes |

### Tier Value Comparison (4 columns)

| Tier | Price | Bonus | Total | Hours | Limited? |
|------|-------|-------|-------|-------|----------|
| Tier 1 — Starter | $1,900/mo | $5,000 | $6,900 | 2 hrs/wk · 2 months only | ⏳ Yes |
| Tier 2 — Growth | $4,299/mo | $5,000 | $9,299 | 2 hrs/wk | No |
| Tier 3.A — Skilled | $6,800/mo | $7,500 | $14,300 | 3 hrs/wk | No |
| Tier 3.B — Leadership | $7,500/mo | $10,000 | $17,500 | 4 hrs/wk | No |

### Tagline
```
"You pay for the developer. Alim's expert oversight? That's on us."
```

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title area | fade(0) | 0s | 0.7s |
| Alim photo | scale 0.95→1 | 0.5s | 0.8s |
| Value stat cards | fade(i+2) | 0.3s+ | 0.7s |
| Tier comparison table | fade(5) | 0.75s | 0.7s |
| Tier columns | fade(i+6) | 0.9s+ | 0.7s |
| Tagline | fade(9) | 1.35s | 0.7s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Assets
- `alim-updated.png` — Alim photo

### Icons (lucide-react)
`Crown`, `Gift`, `Clock`, `DollarSign`, `CheckCircle`, `ArrowRight`, `Sparkles`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Pricing Tiers | [03-pricing-tiers.md](./03-pricing-tiers.md) |
| Starter Tier V9 | [10-starter-tier-v9.md](./10-starter-tier-v9.md) |
| Forced-dark contrast issue | `public/spec/slide-05/issues/005-mobile-forced-dark-highlight-contrast.md` |
