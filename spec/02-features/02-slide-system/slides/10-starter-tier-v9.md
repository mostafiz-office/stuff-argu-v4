# Slide 10 — Starter Tier V9 (Risk Reversal)

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `StarterTierSlideV9`  
**File:** `src/slides/StarterTierSlideV9.tsx`

---

## Purpose

Final Starter tier pitch with risk-reversal messaging. Two-column layout: left has a detailed pricing card with features and Alim upsell; right has result metrics (with tooltips), guarantee cards, and urgency CTA.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + center radial glow |
| Title | `left: 80px, top: 85px` | "Zero Risk. **All Upside.**" (48px Ubuntu) |
| Subtitle | `left: 80px, top: 148px` | "We removed every excuse not to start..." |
| Left card | `w: 560px, flexShrink: 0` | Pricing card (within `HoverVideoPreview`) |
| Right column | `flex: 1` | Metrics row, guarantee cards, urgency CTA |

---

## Content Data

### Pricing Card (Left)

| Field | Value |
|-------|-------|
| Badge | STARTER (top-right) |
| Tier label | Tier 1 |
| Experience | 3+ Years Coding · 1+ Year Industry |
| Price | **$1,900**/mo |
| Hours | 160 hrs/month |
| Deposit note | + $2K onboarding deposit |
| Rocket animation | `intensity: 1`, `profile: "compact"`, `flyingLabel: "Growth booster"` |

### Features (6)
1. 3+ yrs coding, 1+ yr industry exp
2. 160 dedicated hours/month
3. Tech-stack specific developer
4. Task guidance from senior lead
5. Daily standups & Slack access
6. Weekly progress reports

### Alim Upsell Card (gold-themed)
- Header: "Want Alim's Direct Support?"
- Name: Alim Ul Karim — Chief Software Engineer
- Value: 4h/day · **$625/hr** · **$11,999/mo** value
- CTA: "↑ Upgrade to Tier 2 or 3 to unlock"

### Result Metrics (3, with tooltips)

| Metric | Label | Tooltip |
|--------|-------|---------|
| 3x | Faster than hiring | Skip 3-month hiring cycles — your developer starts in 20 minutes |
| 160h | Pure dev time/mo | 160 dedicated hours per month, fully focused on your project |
| $11,999 | Expert bonus included | Alim's expert oversight valued at $11,999/mo — included as a bonus |

### Guarantees (3)

| Icon | Title | Description |
|------|-------|-------------|
| Shield | Zero Risk | Cancel anytime. No lock-in contracts. |
| Clock | 20 Min Onboarding | Developer matched & shipping in under an hour. |
| BadgeCheck | Top 5% Engineers | Rigorously vetted. Only the best pass. |

### Urgency CTA
- Icon: Flame (orange `hsl(25 95% 53%)`)
- Title: Limited Slots This Quarter
- Description: We cap clients to maintain quality. Start today before spots fill.
- Arrow: ArrowUpRight

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.7s |
| Subtitle | fade(1) | 0.18s | 0.7s |
| Pricing card | y: 40→0 | 0.3s | 0.6s |
| Right column | fade(2) | 0.36s | 0.7s |
| Feature items | x: -12→0 | 0.5s + i×0.08s | 0.4s |
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
| `Tooltip` / `TooltipContent` / `TooltipProvider` / `TooltipTrigger` | `@/components/ui/tooltip` |

### Icons (lucide-react)
`CheckCircle`, `Crown`, `Shield`, `Clock`, `Flame`, `ArrowUpRight`, `BadgeCheck`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Starter Tier Detail | [09-starter-tier-detail.md](./09-starter-tier-detail.md) |
| Premium Expert Bonus | [05-premium-expert.md](./05-premium-expert.md) |
| CTA | [11-cta.md](./11-cta.md) |
