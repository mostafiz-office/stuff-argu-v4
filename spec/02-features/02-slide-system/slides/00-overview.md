# Pricing Deck — Slide Specifications

**Version:** 2.1.0  
**Updated:** 2026-10-07  
**Status:** Active

---

## Overview

Per-slide specifications for the 13-slide Staff Augmentation Pricing deck. The cover alternates between two variants, and the three core problems each receive a dedicated slide.

---

## Slide Index

| # | Slide | File | Component |
|---|-------|------|-----------|
| 01 | Cover (V3 — Bold Statement) | [01-cover-v3.md](./01-cover-v3.md) | `PricingCoverV3` |
| 02 | Outage Panic | — | `OutagePanicSlide` |
| 03 | Fragile AI Code | — | `FragileCodeSlide` |
| 04 | Hiring Sinkhole | — | `HiringSinkholeSlide` |
| 05 | Pricing Tiers | [03-pricing-tiers.md](./03-pricing-tiers.md) | `PricingTiersSlide` |
| 06 | Features Comparison | [04-feature-comparison.md](./04-feature-comparison.md) | `TierDetailSlide` |
| 07 | Premium Expert Bonus | [05-premium-expert.md](./05-premium-expert.md) | `PremiumExpertSlideV2` |
| 08 | Architect Value | — | `ExpertValuationBreakdownSlide` |
| 09 | What's Included | [07-whats-included.md](./07-whats-included.md) | `WhatsIncludedSlide` |
| 10 | How It Works | [08-how-it-works.md](./08-how-it-works.md) | `PricingHowItWorksSlide` |
| 11 | Starter Tier | [10-starter-tier-v9.md](./10-starter-tier-v9.md) | `StarterTierSlideV9Clone` |
| 12 | Cost Savings | [06-cost-savings.md](./06-cost-savings.md) | `PricingSavingsSlide` |
| 13 | CTA | [11-cta.md](./11-cta.md) | `PricingCTASlide` |

> **Note:** Slide 1 deterministically alternates between the V1 and V3 cover designs on reload.

---

## Shared Patterns

All slides share:

- **Wrapper**: `<ScaledSlide>` → fixed 1920×1080 viewport
- **Header**: `<SlideHeader />` → company logo + navigation
- **Background**: `.slide-dark-bg` class → dark theme base
- **Animation helper**: `fade(i)` → staggered `opacity: 0→1, y: 24→0` with `delay: 0.18*i`
- **Fonts**: Ubuntu (headings, 700) + Poppins (body, 400–600)
- **Colors**: HSL CSS custom properties (`--pres-text`, `--pres-accent`, `--pres-bg-surface`, etc.)

---

## Deck Sequence (Runtime Order)

1. Cover (alternating V3 or V1)
2. Outage Panic
3. Fragile AI Code
4. Hiring Sinkhole
5. Pricing Tiers
6. Features Comparison
7. Premium Expert Bonus
8. Architect Value
9. What's Included
10. How It Works
11. Starter Tier
12. Cost Savings
13. CTA

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Presentation Engine | `src/components/presentation/PresentationEngine.tsx` |
| Index (deck order) | `src/pages/Index.tsx` |
| Slide Components | `src/slides/` |
