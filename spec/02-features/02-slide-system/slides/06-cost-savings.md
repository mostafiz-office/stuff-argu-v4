# Slide 06 — Cost Savings

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingSavingsSlide`  
**File:** `src/slides/PricingSavingsSlide.tsx`

---

## Purpose

Side-by-side cost comparison showing US market rates vs RiseUp pricing across all 4 tiers. Animated horizontal bar charts with color-coded gradients. Left side has the "4× Value" value proposition.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + right-side radial glow |
| Left column | `left: 80, top: 80, bottom: 60, maxW: 640` | Headline, accent bar, body text, value callout card |
| Right column | `right: 80, w: 780, top: 110, bottom: 60` | 4 comparison bar groups |

---

## Content Data

### Headline
```
Get Up To 4× Value
```

### Body
```
Compare the value you receive: more output, more expertise than US market alternatives.
```

### Value Callout
- Metric: **4×**
- Label: More Value
- Sub: vs. hiring directly in the US

### Comparison Bars (4)

| Role | Tier | US Rate | RiseUp | Saving | US Bar % | RiseUp Bar % | Color Theme |
|------|------|---------|--------|--------|----------|--------------|-------------|
| Starter Developer | Tier 1 | $6,000–$8,000/mo | $1,900/mo | Up to 76% | 100% | 24% | Red (#ef4444) |
| Mid-Level Developer | Tier 2 | $10,000–$15,000/mo | $4,299/mo | Up to 71% | 100% | 29% | Orange (#f97316) / Green |
| Skilled Expert | Tier 3.A | $18,000–$25,000/mo | $6,800–$8,000/mo | Up to 68% | 100% | 32% | Purple (#7c3aed) |
| Tech Leadership | Tier 3.B | $22,000–$30,000/mo | $7,500–$10,000/mo | Up to 67% | 100% | 33% | Pink (#ec4899) |

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Headline | fade(0) | 0s | 0.7s |
| Accent bar | fade(1) | 0.18s | 0.7s |
| Body text | fade(2) | 0.36s | 0.7s |
| Value callout | fade(3) | 0.54s | 0.7s |
| Bar groups | x: 30→0 | 0.3s + i×0.15s | 0.6s |
| US bars | width: 0→100% | 0.5s + i×0.12s | 0.8s |
| RiseUp bars | width: 0→N% | 0.6s + i×0.12s | 0.8s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
None (no lucide icons used)

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Pricing Tiers | [03-pricing-tiers.md](./03-pricing-tiers.md) |
| Premium Expert Bonus | [05-premium-expert.md](./05-premium-expert.md) |
