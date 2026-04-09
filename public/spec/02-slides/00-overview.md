# Slides — Overview

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Purpose

Per-slide specifications for the 11-slide RiseUp Asia pricing deck. Each spec documents layout coordinates, content data, animation timing, and component dependencies.

---

## Slide Order (as rendered in Index.tsx)

| # | Spec File | Component | Description |
|---|-----------|-----------|-------------|
| 01 | [01-cover-v3.md](./01-cover-v3.md) | `PricingCoverV3` | Bold cover — hero photo, hover cards, testimonials |
| 02 | [02-cover-v1.md](./02-cover-v1.md) | `PricingCoverV1` | Minimal cover — floating badges, photo, testimonials |
| 03 | [03-pricing-tiers.md](./03-pricing-tiers.md) | `PricingTiersSlide` | 3-column tier card overview with pricing |
| 04 | [04-feature-comparison.md](./04-feature-comparison.md) | `TierDetailSlide` | 4-column feature comparison table with scroll |
| 05 | [05-premium-expert.md](./05-premium-expert.md) | `PremiumExpertSlideV2` | Alim expert bonus value breakdown |
| 06 | [06-cost-savings.md](./06-cost-savings.md) | `PricingSavingsSlide` | US vs RiseUp cost comparison with animated bars |
| 07 | [07-whats-included.md](./07-whats-included.md) | `WhatsIncludedSlide` | 3×2 grid of included guarantees |
| 08 | [08-how-it-works.md](./08-how-it-works.md) | `PricingHowItWorksSlide` | 4-step timeline process |
| 09 | [09-starter-tier-detail.md](./09-starter-tier-detail.md) | `StarterTierDetailSlide` | Starter tier feature checklist table |
| 10 | [10-starter-tier-v9.md](./10-starter-tier-v9.md) | `StarterTierSlideV9` | Starter risk reversal — pricing card + guarantees |
| 11 | [11-cta.md](./11-cta.md) | `PricingCTASlide` | Call-to-action with QR code and contact |

---

## Cover Variant System

Slides 01 and 02 are **cover variants** — only one is shown per session:

- `?cover=1` → PricingCoverV3 (Bold)
- `?cover=2` → PricingCoverV1 (Minimal)
- No param → Random selection (50/50)

---

## Shared Structure

Every slide follows this component hierarchy:

```tsx
<ScaledSlide>
  <div className="slide-dark-bg relative w-full h-full overflow-hidden">
    <SlideHeader />
    {/* Background effects (z-[1]) */}
    {/* Content (z-10) */}
  </div>
</ScaledSlide>
```
