# Pricing Deck — Slide Specifications

**Version:** 1.0.0  
**Updated:** 2026-04-06  
**Status:** Active

---

## Overview

Per-slide specifications for the 8-slide Staff Augmentation Pricing deck. Each file documents layout, content, animations, and component dependencies for one slide.

---

## Slide Index

| # | Slide | File | Component |
|---|-------|------|-----------|
| 01 | Cover | [01-cover.md](./01-cover.md) | `PricingCoverSlide` |
| 02 | Pricing Tiers | [02-pricing-tiers.md](./02-pricing-tiers.md) | `PricingTiersSlide` |
| 03 | Feature Comparison | [03-feature-comparison.md](./03-feature-comparison.md) | `TierDetailSlide` |
| 04 | Cost Savings | [04-cost-savings.md](./04-cost-savings.md) | `PricingSavingsSlide` |
| 05 | What's Included | [05-whats-included.md](./05-whats-included.md) | `WhatsIncludedSlide` |
| 06 | How It Works | [06-how-it-works.md](./06-how-it-works.md) | `PricingHowItWorksSlide` |
| 07 | Starter Tier | [07-starter-tier.md](./07-starter-tier.md) | `StarterTierSlide` |
| 08 | CTA | [08-cta.md](./08-cta.md) | `PricingCTASlide` |

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

## Cross-References

| Reference | Location |
|-----------|----------|
| Slide System Overview | [../00-overview.md](../00-overview.md) |
| Frontend Patterns | [../02-frontend.md](../02-frontend.md) |
| Presentation Engine | [../../01-presentation-engine/00-overview.md](../../01-presentation-engine/00-overview.md) |
