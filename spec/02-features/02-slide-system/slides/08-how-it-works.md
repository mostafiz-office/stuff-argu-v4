# Slide 08 — How It Works

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingHowItWorksSlide`  
**File:** `src/slides/PricingHowItWorksSlide.tsx`

---

## Purpose

4-step horizontal timeline showing the hiring process from first call to ongoing support. Each step has a circled icon, step number, title, description, and time badge. A connecting gradient line spans all steps.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + -45° repeating line texture |
| Title | centered, `top: 90px` | "How It **Works**" (68px Ubuntu) |
| Subtitle | centered, `top: 178px` | "From first call to productive developer — in under 2 weeks." |
| Timeline line | `left: 140, right: 140, top: 410, h: 3px` | Gradient accent line (scaleX 0→1) |
| Step cards | `left: 80, right: 80, top: 300, bottom: 60` | 4-column grid, centered text |

---

## Content Data — Steps (4)

| Step | Icon | Title | Description | Time Badge |
|------|------|-------|-------------|------------|
| 01 | MessageSquare | Discovery Call | Share your requirements, tech stack, and team culture. We'll recommend the right tier. | Day 1 |
| 02 | UserCheck | 7-Stage Vetting | We present candidates who passed our 7-stage assessment. You interview & select. | As fast as 20 min |
| 03 | Rocket | Onboarding | Your new team member joins your tools, attends standups, and starts contributing. | Day 6–14 |
| 04 | HeartHandshake | Ongoing Support | Continuous performance monitoring, monthly check-ins, and scaling as needed. | Ongoing |

---

## Step Card Structure

1. **Circle** (80×80px): accent border (3px), bg-surface, icon centered (32px)
2. **Step label**: "STEP 01" (14px Poppins, accent, 0.15em spacing)
3. **Title**: 26px Ubuntu bold
4. **Description**: 17px Poppins muted, 1.5 line-height
5. **Time badge**: pill shape, accent/0.1 bg, accent/0.2 border

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Title | fade(0) | 0s | 0.7s |
| Subtitle | fade(1) | 0.2s | 0.7s |
| Timeline line | scaleX: 0→1 | 0.5s | 1.0s |
| Step cards | y: 40→0 | 0.4s + i×0.18s | 0.6s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons (lucide-react)
`MessageSquare`, `UserCheck`, `Rocket`, `HeartHandshake`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| CTA | [11-cta.md](./11-cta.md) |
