# Slide 07 — What's Included

**Version:** 1.1.0  
**Updated:** 2026-10-08  
**Component:** `WhatsIncludedSlide`  
**File:** `src/slides/WhatsIncludedSlide.tsx`

---

## Purpose

Showcases 6 guarantees/benefits included with every plan in a 3×2 card grid. Each card has an icon, title, and a single one-line description (shortened 2026-10-08 — each description is one punchy line, no wrapping). A trial pill sits centered below the grid.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + center radial glow |
| Title | `left: 80px, top: 90px` | "What's **Included**" (68px Ubuntu) |
| Subtitle | `left: 80px, top: 178px` | "Every plan comes with these guarantees — no extra charges." |
| Card grid | `left: 80, right: 80, top: 260, bottom: 60` | 3×2 grid, 6 cards |

---

## Content Data — Guarantee Cards (6, one-line descriptions)

| Icon | Title | Description |
|------|-------|-------------|
| Zap | Save 80% Hiring Effort | Seniors ready to ship in 20 minutes. |
| Shield | Fix Fragile Vibe Code | PR reviews turn hacks into clean architecture. |
| RefreshCw | AI Hallucination Defense | Tests and reviews catch bad logic early. |
| Clock | Sleep Through the Night | Oversight stops midnight firefights. |
| Users | 160 Dedicated Hours/Mo | Embedded in your Slack, GitHub, and Jira. |
| MessageSquare | Zero-Risk Replacement | Not a fit? Free instant replacement. |

Trial pill (below grid): "14-day trial with money-back guarantee (conditions apply)."

---

## Card Styling

- Background: `hsl(var(--pres-bg-surface))`
- Border: `1px solid hsl(var(--pres-accent) / 0.1)`
- Padding: `32px 28px`
- Icon container: 52×52px rounded-xl, accent/0.12 background

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.6s |
| Subtitle | fade(1) | 0.15s | 0.6s |
| Cards | fade(i+2) | 0.3s+ | 0.6s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons (lucide-react)
`Clock`, `Shield`, `MessageSquare`, `Zap`, `Users`, `RefreshCw`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| How It Works | [08-how-it-works.md](./08-how-it-works.md) |
