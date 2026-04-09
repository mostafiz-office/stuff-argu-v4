# Slide 03 — Pricing Tiers

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingTiersSlide`  
**File:** `src/slides/PricingTiersSlide.tsx`

---

## Purpose

Three-column tier card overview showing pricing, experience level, features, and hours for each plan. Cards support hover video preview via YouTube embed (currently disabled).

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + 45° repeating accent line texture |
| Title | `left: 80px, top: 90px` | "Choose Your **Plan**" (52px Ubuntu) |
| Subtitle | `left: 80px, top: 178px` | "All plans include 160 dedicated hours/month. Scale anytime." (18px Poppins) |
| Tier cards | `left: 80, right: 80, top: 240, bottom: 80` | 3-column grid, gap-8 |

---

## Content Data

### Tier Cards (3)

| Field | Tier 2 — Growth | Tier 3.A — Skilled | Tier 3.B — Leadership |
|-------|-----------------|--------------------|-----------------------|
| Experience | 2-3+ Years | 7-15+ Years | 7-15+ Years |
| Price | $4,299/mo | $6,800–$8,000/mo | $7,500–$10,000/mo |
| Hours | 160 hrs/month | 160 hrs/month | 160 hrs/month |
| Badge | — | BEST VALUE (Award icon) | — |
| YouTube ID | `uveR9C5CgSY` | `uveR9C5CgSY` | `uveR9C5CgSY` |

### Features per Tier

| Tier 2 — Growth | Tier 3.A — Skilled | Tier 3.B — Leadership |
|-----------------|--------------------|-----------------------|
| Fluent, autonomous coder | Best-in-class developer | Project management focus |
| Breaks down & delegates tasks | Deep expertise in their stack | Manages up to 15 developers |
| Full sprint participation | Manages 3-5 team members | CTO-level strategic oversight |
| Daily standups & Slack access | Architecture & code quality | 24/7 SLA & priority support |

---

## Card Visual Spec

| Property | Standard | Best Value |
|----------|----------|------------|
| Background | `hsl(var(--pres-bg-surface))` | Gradient: accent 10% → surface |
| Border | `2px solid hsl(var(--border))` | `2px solid hsl(var(--pres-accent) / 0.4)` |
| Border radius | `rounded-2xl` | `rounded-2xl` |
| Padding | `28px 24px` | `28px 24px` |
| Tier name | 16px Poppins, uppercase, 0.12em | Same |
| Price font size | 48px (or 36px if > 8 chars) | Same |
| Feature icon | CheckCircle 18px, accent | Same |

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.7s |
| Subtitle | fade(1) | 0.18s | 0.7s |
| Tier cards | y: 40→0 | 0.3s + i×0.12s | 0.6s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |
| `HoverVideoPreview` | `@/components/presentation/HoverVideoPreview` |
| `RocketAnimation` | `@/components/presentation/RocketAnimation` (imported but unused) |

### Icons (lucide-react)
`Award`, `CheckCircle`, `Star`, `Plus`, `Crown`
