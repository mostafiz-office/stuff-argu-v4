# Slide 10 — Starter Tier V9 (Risk Reversal)

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `StarterTierSlideV9`  
**File:** `src/slides/StarterTierSlideV9.tsx`

---

## Purpose

Starter tier conversion slide combining a detailed pricing card with risk-reversal messaging, result metrics, guarantee cards, and an urgency CTA.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + left-center glow |
| Title | `left: 80px, top: 85px` | "Zero Risk. **All Upside.**" (48px Ubuntu) |
| Subtitle | `left: 80px, top: 148px` | "We removed every excuse not to start..." (17px) |
| Content area | `left: 80, right: 80, top: 200, bottom: 60` | Flex row, gap-8 |
| Left: Pricing card | Width: 560px | Tier 1 pricing card with features + Alim upsell |
| Right: Risk reversal | flex-1 | Metrics + guarantees + urgency CTA |

---

## Content Data

### Pricing Card (Left)

| Field | Value |
|-------|-------|
| Badge | "STARTER" (top-right amber) |
| Tier label | "Tier 1" (16px uppercase) |
| Experience | "3+ Years Coding · 1+ Year Industry" (18px accent) |
| Price | "$1,900/mo" (48px Ubuntu Bold) |
| Hours | "160 hrs/month" badge |
| Deposit note | "+ $2K onboarding deposit" (13px dim) |
| Rocket | `RocketAnimation` with "Growth booster" label |

### Features (6)
| Feature |
|---------|
| 3+ yrs coding, 1+ yr industry exp |
| 160 dedicated hours/month |
| Tech-stack specific developer |
| Task guidance from senior lead |
| Daily standups & Slack access |
| Weekly progress reports |

### Alim Upsell Card
- Gold theme: `hsl(45 90% 55%)` accent
- Crown icon + "Want Alim's Direct Support?"
- "Alim Ul Karim — Chief Software Engineer"
- "4h/day · $625/hr · $11,999/mo value"
- "↑ Upgrade to Tier 2 or 3 to unlock"

### Result Metrics (3, with tooltips)

| Metric | Label | Tooltip Summary |
|--------|-------|-----------------|
| 3x | Faster than hiring | Skip 3-month hiring cycles |
| 160h | Pure dev time/mo | 160 dedicated hours, fully focused |
| $11,999 | Expert bonus included | Alim's oversight value included |

### Guarantee Cards (3)

| Icon | Title | Description |
|------|-------|-------------|
| Shield | Zero Risk | Cancel anytime. No lock-in contracts. |
| Clock | 20 Min Onboarding | Developer matched & shipping in under an hour. |
| BadgeCheck | Top 5% Engineers | Rigorously vetted. Only the best pass. |

### Urgency CTA
- Icon: Flame (orange)
- Title: "Limited Slots This Quarter"
- Body: "We cap clients to maintain quality. Start today before spots fill."
- Arrow: ArrowUpRight
- Color: `hsl(25 95% 53%)` (warm orange)

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.7s |
| Subtitle | fade(1) | 0.18s | 0.7s |
| Pricing card | y: 40→0 | 0.3s | 0.6s |
| Card features | x: -12→0 | 0.5s + i×0.08s | 0.4s |
| Right column | fade(2) | 0.36s | 0.7s |
| Metric cards | spring scale 0.85→1 | 0.4s + i×0.12s | spring |
| Guarantee cards | x: 16→0 | 0.7s + i×0.12s | 0.45s |
| Urgency CTA | y: 12→0 | 1.1s | 0.5s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |
| `HoverVideoPreview` | `@/components/presentation/HoverVideoPreview` |
| `RocketAnimation` | `@/components/presentation/RocketAnimation` |
| `Tooltip` | `@/components/ui/tooltip` |

### Icons
`CheckCircle`, `Crown`, `Shield`, `Clock`, `Flame`, `ArrowUpRight`, `BadgeCheck`
