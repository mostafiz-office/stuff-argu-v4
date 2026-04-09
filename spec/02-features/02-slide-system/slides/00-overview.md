# Pricing Deck — Slide Specifications

**Version:** 2.0.0  
**Updated:** 2026-04-09  
**Status:** Active

---

## Overview

Per-slide specifications for the 10-slide Staff Augmentation Pricing deck. Each file documents layout, content, animations, and component dependencies for one slide.

---

## Slide Index

| # | Slide | File | Component |
|---|-------|------|-----------|
| 01 | Cover (V3 — Bold Statement) | [01-cover-v3.md](./01-cover-v3.md) | `PricingCoverV3` |
| 02 | Cover (V1 — Clean & Minimal) | [02-cover-v1.md](./02-cover-v1.md) | `PricingCoverV1` |
| 03 | Pricing Tiers | [03-pricing-tiers.md](./03-pricing-tiers.md) | `PricingTiersSlide` |
| 04 | Feature Comparison | [04-feature-comparison.md](./04-feature-comparison.md) | `TierDetailSlide` |
| 05 | Premium Expert Bonus | [05-premium-expert.md](./05-premium-expert.md) | `PremiumExpertSlideV2` |
| 06 | Cost Savings | [06-cost-savings.md](./06-cost-savings.md) | `PricingSavingsSlide` |
| 07 | What's Included | [07-whats-included.md](./07-whats-included.md) | `WhatsIncludedSlide` |
| 08 | How It Works | [08-how-it-works.md](./08-how-it-works.md) | `PricingHowItWorksSlide` |
| 09 | Starter Tier Detail | [09-starter-tier-detail.md](./09-starter-tier-detail.md) | `StarterTierDetailSlide` |
| 10 | Starter Tier (Risk Reversal) | [10-starter-tier-v9.md](./10-starter-tier-v9.md) | `StarterTierSlideV9` |
| 11 | CTA | [11-cta.md](./11-cta.md) | `PricingCTASlide` |

> **Note:** Slides 01 and 02 are cover variants. The deck randomly selects one at runtime, or accepts `?cover=1` (V3) / `?cover=2` (V1) query params.

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

1. Cover (random V3 or V1)
2. Pricing Tiers
3. Feature Comparison
4. Premium Expert Bonus
5. Cost Savings
6. What's Included
7. How It Works
8. Starter Tier Detail
9. Starter Tier (Risk Reversal)
10. CTA

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Presentation Engine | `src/components/presentation/PresentationEngine.tsx` |
| Index (deck order) | `src/pages/Index.tsx` |
| Slide Components | `src/slides/` |
