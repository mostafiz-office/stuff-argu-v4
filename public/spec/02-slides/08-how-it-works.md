# Slide 08 — How It Works

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingHowItWorksSlide`  
**File:** `src/slides/PricingHowItWorksSlide.tsx`

---

## Purpose

4-step timeline showing the hiring process from discovery call to ongoing support, with connected circles and time badges.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + -45° repeating line texture |
| Title | Center, `top: 90px` | "How It **Works**" (68px Ubuntu) |
| Subtitle | Center, `top: 178px` | "From first call to productive developer — in under 2 weeks." (22px) |
| Timeline line | `left: 140, right: 140, top: 410` | 3px horizontal gradient line |
| Step cards | `left: 80, right: 80, top: 300, bottom: 60` | 4-column grid, gap-8 |

---

## Content Data (4 steps)

| Step | Icon | Title | Description | Time Badge |
|------|------|-------|-------------|------------|
| 01 | MessageSquare | Discovery Call | Share your requirements, tech stack, and team culture. We'll recommend the right tier. | Day 1 |
| 02 | UserCheck | 7-Stage Vetting | We present candidates who passed our 7-stage assessment. You interview & select. | As fast as 20 min |
| 03 | Rocket | Onboarding | Your new team member joins your tools, attends standups, and starts contributing. | Day 6–14 |
| 04 | HeartHandshake | Ongoing Support | Continuous performance monitoring, monthly check-ins, and scaling as needed. | Ongoing |

### Step Card Visual
- Layout: Centered column, text-center
- Circle: 80px, rounded-full, 3px solid accent, glow shadow, surface bg
- Icon: 32px, accent color
- Step label: "STEP 01" (14px Poppins, accent, uppercase, 0.15em)
- Title: 26px Ubuntu Bold
- Description: 17px Poppins muted, line-height 1.5
- Time badge: rounded-full, accent 10% bg, accent 20% border

### Timeline Connector
- Height: 3px
- Background: `linear-gradient(90deg, accent → accent/0.2)`
- Position: `top: 410px` (through center of circles which are at `marginTop: 70px` within top: 300)
- Animation: `scaleX: 0→1` from left, delay 0.5s, duration 1s

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

### Icons
`MessageSquare`, `UserCheck`, `Rocket`, `HeartHandshake`
