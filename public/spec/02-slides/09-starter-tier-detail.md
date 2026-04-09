# Slide 09 — Starter Tier Detail

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `StarterTierDetailSlide`  
**File:** `src/slides/StarterTierDetailSlide.tsx`

---

## Purpose

Two-column feature checklist showing what's included (and excluded) in the Starter Tier 1 plan at $2,499/mo.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` |
| Title | `left: 80px, top: 90px` | "Tier 1 — **Starter**" (64px Ubuntu) |
| Price | `left: 80px, top: 170px` | "$2,499/mo" (28px Poppins dim) |
| Table | `left: 80, right: 80, top: 240, bottom: 80` | 2-column grid |

---

## Content Data

### Table Grid: `1fr 200px`

| Feature | Starter |
|---------|---------|
| Dedicated developer · 160 hrs/mo | ✓ |
| Weekly progress reports | ✓ |
| Daily standups | ✗ |
| Sprint participation | ✗ |
| Task breakdown & delegation | ✗ |
| Team management | ✗ |
| Architecture decisions | ✗ |
| Project management | ✗ |
| CTO-level oversight | ✗ |
| Priority Slack · 24/7 SLA | ✗ |
| QA Engineers | ✗ |
| Alim Expert Oversight | 2 hrs/wk* |
| Min. Developer Experience | 2+ yrs |
| Onboarding Deposit | $2K |

### Visual
- Header: "Feature" (28px Ubuntu muted) | "Starter" (28px Ubuntu accent)
- Header border: `2px solid hsl(var(--pres-accent) / 0.3)`
- Row height: Auto with `justify-evenly` in flex column
- Row border: `1px solid hsl(var(--border) / 0.5)`
- Feature label: 24px Poppins muted
- ✓: CheckCircle 30px accent
- ✗: X 30px red (`hsl(0 80% 55%)`)
- Text values: 20px Poppins Bold accent

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.6s |
| Price | fade(1) | 0.15s | 0.6s |
| Table | fade(1) | 0.15s | 0.6s |
| Feature rows | x: -10→0 | 0.4s + i×0.05s | 0.4s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
`CheckCircle`, `X`
