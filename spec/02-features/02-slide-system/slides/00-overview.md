# Pricing Deck — Slide Specifications

**Version:** 2.2.0  
**Updated:** 2026-10-07  
**Status:** Active

---

## Overview

Per-slide specifications for the 14-slide Staff Augmentation Pricing deck. The cover alternates between two variants, the three core problems each receive a dedicated slide, and a title-only solution bridge introduces pricing.

---

## Slide Index

| # | Slide | File | Component |
|---|-------|------|-----------|
| 01 | Cover (V3 — Bold Statement) | [01-cover-v3.md](./01-cover-v3.md) | `PricingCoverV3` |
| 02 | Outage Panic | — | `OutagePanicSlide` |
| 03 | Fragile AI Code | — | `FragileCodeSlide` |
| 04 | Hiring Sinkhole | — | `HiringSinkholeSlide` |
| 05 | We Have a Solution for You | — | `SolutionTransitionSlide` |
| 06 | Pricing Tiers | [03-pricing-tiers.md](./03-pricing-tiers.md) | `PricingTiersSlide` |
| 07 | Features Comparison | [04-feature-comparison.md](./04-feature-comparison.md) | `TierDetailSlide` |
| 08 | Premium Expert Bonus | [05-premium-expert.md](./05-premium-expert.md) | `PremiumExpertSlideV2` |
| 09 | Architect Value | — | `ExpertValuationBreakdownSlide` |
| 10 | What's Included | [07-whats-included.md](./07-whats-included.md) | `WhatsIncludedSlide` |
| 11 | How It Works | [08-how-it-works.md](./08-how-it-works.md) | `PricingHowItWorksSlide` |
| 12 | Starter Tier | [10-starter-tier-v9.md](./10-starter-tier-v9.md) | `StarterTierSlideV9Clone` |
| 13 | Cost Savings | [06-cost-savings.md](./06-cost-savings.md) | `PricingSavingsSlide` |
| 14 | CTA | [11-cta.md](./11-cta.md) | `PricingCTASlide` |

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
5. We Have a Solution for You
6. Pricing Tiers
7. Features Comparison
8. Premium Expert Bonus
9. Architect Value
10. What's Included
11. How It Works
12. Starter Tier
13. Cost Savings
14. CTA

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Presentation Engine | `src/components/presentation/PresentationEngine.tsx` |
| Index (deck order) | `src/pages/Index.tsx` |
| Slide Components | `src/slides/` |
