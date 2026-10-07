# Slide 04 — Features Comparison

**Version:** 1.1.0  
**Updated:** 2026-10-07  
**Component:** `TierDetailSlide`  
**File:** `src/slides/TierDetailSlide.tsx`

---

## Purpose

Apple-inspired comparison experience showing 14 features across Growth, Skilled, and Leadership. Large tier headers remain visible while grouped feature rows scroll beneath them. Color-coded columns, text-only badges, and coordinated row/column highlighting keep the matrix easy to scan at presentation scale.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` |
| Title | `left: 80px, top: 90px` | "Features **Comparison**" (60px Ubuntu) |
| Comparison header | `left: 80, right: 80` | Persistent 156px band; 1.35fr label + 3 equal tier columns |
| Feature viewport | Beneath header to bottom safe area | Independently scrolling grouped rows with 86px minimum height |

### Column Color Coding

| Column | Color | Background Tint |
|--------|-------|-----------------|
| Tier 2 — Growth | `hsl(var(--pres-accent))` (amber) | `accent / 0.06` |
| Tier 3.A — Skilled | `hsl(142 70% 45%)` (green) | `142 70% 45% / 0.08` |
| Tier 3.B — Leadership | `hsl(280 60% 60%)` (purple) | `280 60% 60% / 0.08` |

### Column Headers

| Column | Price | Badge | Tagline |
|--------|-------|-------|---------|
| Growth | $4,299/mo | — | — |
| Skilled | $6,800–8K/mo | BEST VALUE (green pill) | — |
| Leadership | $7.5K–10K/mo | PREMIUM (text badge) | — |

---

## Content Data — Feature Matrix (14 rows)

| Feature | Growth | Skilled | Leadership |
|---------|--------|---------|------------|
| Dedicated developer · 160 hrs/mo | ✅ | ✅ | ✅ |
| Weekly progress reports | ✅ | ✅ | ✅ |
| Daily standups | ✅ | ✅ | ✅ |
| Sprint participation | ✅ | ✅ | ✅ |
| Task breakdown & delegation | ✅ | ✅ | ✅ |
| Team management | Up to 2 | 3–5 | Up to 15 |
| Architecture decisions | Limited | ✅ | ✅ |
| Project management | ❌ | ❌ | ✅ |
| CTO-level oversight | ❌ | ❌ | ✅ |
| Priority Slack · 24/7 SLA | Slack only | ✅ | Versatile |
| QA Engineers | ❌ | ❌ | 2 |
| Alim Expert Oversight | 2 hrs/wk | 3 hrs/wk | 4 hrs/wk |
| Min. Developer Experience | 4+ yrs | 6+ yrs | 8+ yrs |
| Onboarding Deposit | $2K | $2K | $2K |

> **Note:** Starter tier (Tier 1) is intentionally excluded from this comparison. It has its own dedicated slides (09, 10).

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.6s |
| Table container | fade(1) | 0.15s | 0.6s |
| Column headers | y: 16→0 | 0.3s + i×0.08s | 0.5s |
| Feature rows | x: -10→0 | 0.4s + i×0.05s | 0.4s |

## Hover feedback

- Hovering a feature row highlights the complete row.
- Hovering a tier header or tier cell highlights that tier's header and cells across the matrix.
- Hover feedback changes color and brightness only; the table does not shift.

## Scroll behavior

- The tier-header band remains fixed while all 14 features scroll vertically in the viewport below.
- Feature groups are Delivery, Team & Leadership, and Support & Assurance; each group label sticks to the top of the viewport while its rows pass beneath it.
- A persistent custom rail and live thumb expose scroll position; a bottom fade and cue remain until the final row is reached.
- Wheel, trackpad, touch, keyboard, and rail dragging work inside the viewport without advancing the deck.

---

## Cell Rendering Logic

| Value | Render |
|-------|--------|
| `true` | 30px `<CheckCircle>` in column color |
| `false` | 30px `<X>` in semantic danger color |
| `string` | Text in column color, 24px, bold |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons (lucide-react)
`Award`, `CheckCircle`, `X`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Pricing Tiers | [03-pricing-tiers.md](./03-pricing-tiers.md) |
| Starter Tier Detail | [09-starter-tier-detail.md](./09-starter-tier-detail.md) |
