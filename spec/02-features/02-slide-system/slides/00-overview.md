# Pricing Deck — Slide Specifications

**Version:** 2.4.0  
**Updated:** 2026-10-07  
**Status:** Active

---

## Overview

Per-slide specifications for the 17-slide Staff Augmentation Pricing deck. The cover alternates between two variants, the three core problems each receive a dedicated slide, a title-only solution bridge introduces the talent pyramid, two promise slides follow it, and pricing begins at slide 9.

---

## Slide Index

| # | Slide | File | Component |
|---|-------|------|-----------|
| 01 | Cover (V3 — Bold Statement) | [01-cover-v3.md](./01-cover-v3.md) | `PricingCoverV3` |
| 02 | Outage Panic | — | `OutagePanicSlide` |
| 03 | Fragile AI Code | — | `FragileCodeSlide` |
| 04 | Hiring Sinkhole | — | `HiringSinkholeSlide` |
| 05 | We Have Solutions for You | — | `SolutionTransitionSlide` |
| 06 | Talent Pyramid | — | `TalentPyramidSlide` |
| 07 | Delivery Promises | — | `DeliveryPromisesSlide` |
| 08 | Product Health | — | `ProductHealthSlide` |
| 09 | Pricing Tiers | [03-pricing-tiers.md](./03-pricing-tiers.md) | `PricingTiersSlide` |
| 10 | Features Comparison | [04-feature-comparison.md](./04-feature-comparison.md) | `TierDetailSlide` |
| 11 | Premium Expert Bonus | [05-premium-expert.md](./05-premium-expert.md) | `PremiumExpertSlideV2` |
| 12 | Architect Value | — | `ExpertValuationBreakdownSlide` |
| 13 | What's Included | [07-whats-included.md](./07-whats-included.md) | `WhatsIncludedSlide` |
| 14 | How It Works | [08-how-it-works.md](./08-how-it-works.md) | `PricingHowItWorksSlide` |
| 15 | Starter Tier | [10-starter-tier-v9.md](./10-starter-tier-v9.md) | `StarterTierSlideV9Clone` |
| 16 | Cost Savings | [06-cost-savings.md](./06-cost-savings.md) | `PricingSavingsSlide` |
| 17 | CTA | [11-cta.md](./11-cta.md) | `PricingCTASlide` |

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
5. We Have Solutions for You
6. Talent Pyramid
7. Delivery Promises
8. Product Health
9. Pricing Tiers
10. Features Comparison
11. Premium Expert Bonus
12. Architect Value
13. What's Included
14. How It Works
15. Starter Tier
16. Cost Savings
17. CTA

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Presentation Engine | `src/components/presentation/PresentationEngine.tsx` |
| Index (deck order) | `src/pages/Index.tsx` |
| Slide Components | `src/slides/` |
