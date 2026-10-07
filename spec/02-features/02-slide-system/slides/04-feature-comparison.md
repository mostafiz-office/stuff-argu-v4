# Slide 04 — Features Comparison

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `TierDetailSlide`  
**File:** `src/slides/TierDetailSlide.tsx`

---

## Purpose

Full comparison matrix table showing 14 features across 3 tiers (Growth, Skilled, Leadership). Color-coded columns: amber (Growth), green (Skilled), purple (Leadership). Tier badges use clean text without emoji. Rows and tier columns provide coordinated hover highlighting.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` |
| Title | `left: 80px, top: 90px` | "Features **Comparison**" (60px Ubuntu) |
| Table | `left: 80, right: 80, top: 180, bottom: 40` | 4-column grid (1.8fr label + 3× 1fr tier columns) |

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
| Leadership | $7.5K–10K/mo | PREMIUM (purple pill) | Full Tech Management |

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
| Architecture decisions | ✅ | ✅ | ✅ |
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

---

## Cell Rendering Logic

| Value | Render |
|-------|--------|
| `true` | `<CheckCircle>` in column color |
| `false` | `<X>` in red `hsl(0 80% 55%)` |
| `string` | Text in column color, 18px, bold |

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
