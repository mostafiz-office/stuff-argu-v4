# Slide 06 — Cost Savings

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingSavingsSlide`  
**File:** `src/slides/PricingSavingsSlide.tsx`

---

## Purpose

Side-by-side comparison of US market rates vs RiseUp Asia rates with animated horizontal bars showing up to 76% savings across all tiers.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + right-side glow |
| Left column | `left: 80, top: 80, bottom: 60, maxWidth: 640` | Title + body + "4×" callout |
| Right column | `right: 80px, width: 780, top: 110, bottom: 60` | 4 comparison rows with bars |

---

## Content Data

### Left Column
- Title: `"Get Up To\n4× Value"` (76px Ubuntu Bold Italic)
- "4× Value" in accent
- Accent bar: 80px wide
- Body: `"Compare the value you receive: more output, more expertise than US market alternatives."` (21px)
- Value callout: Glass card with "4×" metric glow + "More Value" + "vs. hiring directly in the US"

### Comparison Rows (4)

| Role | Tier | US Rate | RiseUp Rate | Saving | US Bar % | RiseUp Bar % | US Color | RiseUp Color |
|------|------|---------|-------------|--------|----------|-------------|----------|-------------|
| Starter Developer | Tier 1 | $6,000–$8,000 | $1,900 | Up to 76% | 100% | 24% | `#ef4444` | amber |
| Mid-Level Developer | Tier 2 | $10,000–$15,000 | $4,299 | Up to 71% | 100% | 29% | `#f97316` | `hsl(142 71% 45%)` |
| Skilled Expert | Tier 3.A | $18,000–$25,000 | $6,800–$8,000 | Up to 68% | 100% | 32% | `#7c3aed` | `#a78bfa` |
| Tech Leadership | Tier 3.B | $22,000–$30,000 | $7,500–$10,000 | Up to 67% | 100% | 33% | `#ec4899` | `#f472b6` |

### Bar Visual
- Height: 18px, rounded-full
- US bar: gradient from color to lighter variant
- RiseUp bar: gradient + 16px glow shadow
- Labels: "US Rate" / "RiseUp" (13px dim)
- Price: 18px in tier color, `/mo` suffix in dim

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.7s |
| Accent bar | fade(1) | 0.18s | 0.7s |
| Body text | fade(2) | 0.36s | 0.7s |
| Value callout | fade(3) | 0.54s | 0.7s |
| Right column | fade(2) | 0.36s | 0.7s |
| Each row | x: 30→0 | 0.3s + i×0.15s | 0.6s |
| US bars | width: 0→100% | 0.5s + i×0.12s | 0.8s |
| RiseUp bars | width: 0→N% | 0.6s + i×0.12s | 0.8s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
None

### CSS Classes Used
`.glass-card`, `.metric-glow`, `.accent-bar`
