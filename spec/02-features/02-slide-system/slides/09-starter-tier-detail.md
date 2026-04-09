# Slide 09 — Starter Tier Detail

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `StarterTierDetailSlide`  
**File:** `src/slides/StarterTierDetailSlide.tsx`

---

## Purpose

Single-column feature checklist for Tier 1 (Starter) at $2,499/mo. Shows all 14 features with ✅/❌/text indicators. This slide isolates the Starter tier that was omitted from the 3-tier comparison matrix on Slide 04.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` |
| Title | `left: 80px, top: 90px` | "Tier 1 — **Starter**" (64px Ubuntu) |
| Price | `left: 80px, top: 170px` | "$2,499/mo" (28px Poppins dim) |
| Table | `left: 80, right: 80, top: 240, bottom: 80` | 2-column grid (feature label + Starter status) |

---

## Content Data — Feature Checklist (14 rows)

| Feature | Starter Status |
|---------|---------------|
| Dedicated developer · 160 hrs/mo | ✅ |
| Weekly progress reports | ✅ |
| Daily standups | ❌ |
| Sprint participation | ❌ |
| Task breakdown & delegation | ❌ |
| Team management | ❌ |
| Architecture decisions | ❌ |
| Project management | ❌ |
| CTO-level oversight | ❌ |
| Priority Slack · 24/7 SLA | ❌ |
| QA Engineers | ❌ |
| Alim Expert Oversight | 2 hrs/wk* |
| Min. Developer Experience | 2+ yrs |
| Onboarding Deposit | $2K |

---

## Table Structure

- Grid: `1fr 200px`
- Header: "Feature" (left) + "Starter" (center, accent color)
- Header border: 2px solid accent/0.3
- Row border: 1px solid border/0.5
- Cell rendering: same logic as Slide 04 (true→CheckCircle, false→X, string→text)

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.6s |
| Price + Table | fade(1) | 0.15s | 0.6s |
| Feature rows | x: -10→0 | 0.4s + i×0.05s | 0.4s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons (lucide-react)
`CheckCircle`, `X`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Feature Comparison (Tiers 2-3) | [04-feature-comparison.md](./04-feature-comparison.md) |
| Starter Tier V9 (Risk Reversal) | [10-starter-tier-v9.md](./10-starter-tier-v9.md) |
