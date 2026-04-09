# Slide 04 — Feature Comparison

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `TierDetailSlide`  
**File:** `src/slides/TierDetailSlide.tsx`

---

## Purpose

4-column comparison table showing feature availability across Growth, Skilled, and Leadership tiers. Includes scrollable rows with a visible scroll indicator.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` |
| Title | `left: 80px, top: 90px` | "Feature **Comparison**" (64px Ubuntu) |
| Table | `left: 80, right: 80, top: 180, bottom: 100` | 4-column grid |

---

## Column Headers (3 tiers)

| Column | Name | Price | Color | Badge |
|--------|------|-------|-------|-------|
| Growth | Tier 2 — Growth | $4,299/mo | `hsl(var(--pres-accent))` (amber) | — |
| Skilled | Tier 3.A — Skilled | $6,800–8K/mo | `hsl(142 70% 45%)` (green) | BEST VALUE |
| Leadership | Tier 3.B — Leadership | $7.5K–10K/mo | `hsl(280 60% 60%)` (purple) | 👑 PREMIUM |

### Column Header Visual
- Background tint per color at 6–8% opacity
- Border radius: `12px 12px 0 0`
- Tier name: 28px Ubuntu Bold in tier color
- Price: 18px Poppins dim
- Leadership tagline: "✨ Impossible to say no" (14px italic)

---

## Feature Rows (14)

| Feature | Growth | Skilled | Leadership |
|---------|--------|---------|------------|
| Dedicated developer · 160 hrs/mo | ✓ | ✓ | ✓ |
| Weekly progress reports | ✓ | ✓ | ✓ |
| Daily standups | ✓ | ✓ | ✓ |
| Sprint participation | ✓ | ✓ | ✓ |
| Task breakdown & delegation | ✓ | ✓ | ✓ |
| Team management | Up to 2 | 3–5 | Up to 15 |
| Architecture decisions | ✓ | ✓ | ✓ |
| Project management | ✗ | ✗ | ✓ |
| CTO-level oversight | ✗ | ✗ | ✓ |
| Priority Slack · 24/7 SLA | Slack only | ✓ | Versatile |
| QA Engineers | ✗ | ✗ | 2 |
| Alim Expert Oversight | 2 hrs/wk | 3 hrs/wk | 4 hrs/wk |
| Min. Developer Experience | 4+ yrs | 6+ yrs | 8+ yrs |
| Onboarding Deposit | $2K | $2K | $2K |

### Row Visual
- Grid: `1.8fr 1fr 1fr 1fr`
- Row padding: `6px 0`
- Row border: `1px solid hsl(var(--border) / 0.5)`
- Feature label: 18px Poppins muted
- ✓ icon: `CheckCircle` 26px in tier color
- ✗ icon: `X` 26px in `hsl(0 80% 55%)` (red)
- Text values: 18px Poppins Bold in tier color

---

## Scroll System

| Property | Value |
|----------|-------|
| Container | `overflow-y-auto` with ref tracking |
| Scrollbar | `scrollbarWidth: "thin"`, accent color |
| Bottom fade | 60px gradient `pres-bg → transparent` |
| Scroll indicator | "Scroll for more" with 2× ChevronDown icons |
| Indicator animation | `y: [0, 8, 0]` bouncing, 1.5s infinite |
| Auto-hide | Hides when `scrollTop + clientHeight >= scrollHeight - 4` |

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.6s |
| Table container | fade(1) | 0.15s | 0.6s |
| Column headers | y: 16→0 | 0.3s + i×0.08s | 0.5s |
| Feature rows | x: -10→0 | 0.4s + i×0.05s | 0.4s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
`Award`, `CheckCircle`, `X`, `ChevronDown`

### React Hooks
`useState`, `useRef`, `useEffect` (for scroll tracking)
