# Slide 05 — Premium Expert Bonus

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PremiumExpertSlideV2`  
**File:** `src/slides/PremiumExpertSlideV2.tsx`

---

## Purpose

Showcases the Alim Ul Karim expert oversight bonus included with every tier. Shows value stats, per-tier bonus breakdown, and Alim's photo.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + center glow |
| Title area | `left: 120px, top: 100px` | Gift icon + category label + headline |
| Alim photo | `left: 120, top: 268, width: 240` | Cropped photo with border + name card |
| Value stat cards | `left: 440px, top: 380px` | 3 cards in flex row |
| Tier value table | `left: 120, top: 720, right: 120` | 4-column grid in surface card |
| Bottom tagline | `top: 980px, center` | Italic quote |

---

## Content Data

### Title
- Category: "Bonus Value — Included With Every Tier" (14px, accent, uppercase)
- Headline: `"Buy Any Tier, Get a $10K/mo Expert Bonus"` (46px Ubuntu)
- "$10K/mo Expert" has amber highlight pill background

### Alim Card
- Photo: 240px wide, 280px tall, rotated 6°, scale 1.06
- Name: "Alim Ul Karim" (18px Ubuntu Bold)
- Role: "Chief Software Engineer" (13px accent)
- Experience: "20+ Years Experience" (12px dim)

### Value Stats (3)

| Icon | Value | Sub |
|------|-------|-----|
| Clock | 2–4 hrs/week | Varies by tier |
| DollarSign | $625/hr | Market rate for this expertise |
| Gift | Up to $10K | Monthly value — BONUS with your tier |

Third card is highlighted with accent gradient background.

### Tier Value Breakdown (4)

| Tier | Price | Bonus | Total | Hours |
|------|-------|-------|-------|-------|
| Tier 1 — Starter | $1,900/mo | $5,000 | $6,900 | 2 hrs/wk · 2 months only |
| Tier 2 — Growth | $4,299/mo | $5,000 | $9,299 | 2 hrs/wk |
| Tier 3.A — Skilled | $6,800/mo | $7,500 | $14,300 | 3 hrs/wk |
| Tier 3.B — Leadership | $7,500/mo | $10,000 | $17,500 | 4 hrs/wk |

Starter tier has "⏳ Limited time offer" warning.

### Bottom Tagline
- `"You pay for the developer. Alim's expert oversight? That's on us."` (17px italic)

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title area | fade(0) | 0s | 0.7s |
| Alim photo | scale 0.95→1 | 0.5s | 0.8s |
| Value stat cards | fade(2–4) | 0.3–0.6s | 0.7s |
| Tier table | fade(5) | 0.75s | 0.7s |
| Tier cards | fade(6–9) | 0.9–1.35s | 0.7s |
| Bottom tagline | fade(9) | 1.35s | 0.7s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
`Crown`, `Gift`, `Clock`, `DollarSign`, `CheckCircle`, `ArrowRight`, `Sparkles`

### Assets
`src/assets/alim-updated.png`
