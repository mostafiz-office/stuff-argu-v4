# Slide 07 — What's Included

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `WhatsIncludedSlide`  
**File:** `src/slides/WhatsIncludedSlide.tsx`

---

## Purpose

3×2 grid of guarantee cards showing what's included with every plan — no extra charges.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + center glow |
| Title | `left: 80px, top: 90px` | "What's **Included**" (68px Ubuntu) |
| Subtitle | `left: 80px, top: 178px` | "Every plan comes with these guarantees — no extra charges." (22px) |
| Grid | `left: 80, right: 80, top: 260, bottom: 60` | 3×2 grid, gap-6 |

---

## Content Data (6 cards)

| Icon | Title | Description |
|------|-------|-------------|
| Clock | 160 hrs/month | Guaranteed dedicated hours — full-time commitment to your project. |
| Shield | 7-Stage Vetting | Technical tests, live coding, English fluency, culture fit, and 4 more stages — only top 5% pass. |
| MessageSquare | Direct Communication | Slack, Teams, or your preferred tool — no middlemen, no delays. |
| Zap | Hire in 20 Minutes | Pre-vetted bench talent ready to start immediately. Niche roles filled within 30 days. |
| Users | Flexible Scaling | Add or reduce team members as your project evolves. No lock-in. |
| RefreshCw | Free Replacement | Not satisfied? We'll replace the developer at no extra cost. |

### Card Visual
- Background: `hsl(var(--pres-bg-surface))`
- Border: `1px solid hsl(var(--pres-accent) / 0.1)`
- Padding: `32px 28px`
- Icon container: 52×52px, `rounded-xl`, accent 12% bg
- Title: 24px Ubuntu Bold
- Description: 17px Poppins muted, line-height 1.5

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.6s |
| Subtitle | fade(1) | 0.15s | 0.6s |
| Cards | fade(2–7) | 0.3s + i×0.15s | 0.6s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
`Clock`, `Shield`, `MessageSquare`, `Zap`, `Users`, `RefreshCw`
