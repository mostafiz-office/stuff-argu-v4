# Slide 02 — Cover V1 (Clean & Minimal)

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingCoverV1`  
**File:** `src/slides/PricingCoverV1.tsx`

---

## Purpose

Clean minimal cover with floating animated keyword badges, larger Alim photo, and testimonial cards. More spacious layout compared to V3.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + left warm glow |
| Logo | `top: 36px, left: 60px` | SlideHeader |
| Alim photo | `left: 620, bottom: -14, width: 1300, height: 145%` | Large cutout, z-[5], scale 1.1 |
| Left content | `left: 80px, top: 100px, width: 680px` | Icon + label + title + body + CTA |
| Floating badges | Absolute positions | 3 animated keyword pills |
| Testimonial 1 | `x: 460, y: 60, width: 500` | Konstantinos P. |
| Testimonial 2 | `x: 1150, y: 780, width: 500` | Claudio C. |
| Domain text | `bottom: 42px, left: 80px` | "riseup-asia.com" |
| Bottom line | `bottom: 0` | 4px accent gradient |

---

## Content Data

### Category Badge
- Icon: `Users` (70×70, accent bg 12%)
- Label: "Staff Augmentation" (18px, uppercase, 0.2em)

### Headline
- Text: `"Elite Engineers\nOn Demand"` (82px Ubuntu Bold)
- "Elite" in accent

### Body
- `"Top 5% vetted talent. Hire in as fast as 20 minutes.\n60% savings vs US/UK rates — no hidden fees."` (24px Poppins)

### Floating Keyword Badges (3)

| Label | Position (x, y) |
|-------|-----------------|
| Top 5% Talent | 1420, 160 |
| Hire in 20 Minutes | 780, 640 |
| 7-Stage Vetted | 1420, 420 |

### CTA
- "Explore Plans" — Primary amber button with ArrowRight

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Icon box | fade(0) | 0s | 0.7s |
| Category label | fade(1) | 0.2s | 0.7s |
| Title | fade(2) | 0.4s | 0.7s |
| Body | fade(3) | 0.6s | 0.7s |
| CTA | fade(4) | 0.8s | 0.7s |
| Keyword badges | spring scale + floating loop | 0.5s + i×0.12s | spring + 3s loop |
| Testimonials | recCardFadeIn | 0.65s + i×0.15s | 0.6s |
| Domain text | opacity 0→1 | 0.9s | 0.6s |

### Badge Floating Animation
- Y-axis: `[0, -6, 0]` over 3s, infinite loop
- Box-shadow pulse: `[low-glow, high-glow, low-glow]` over 2.5s, infinite loop
- Hover: scale 1.18, y: -10, stronger glow

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
`Users`, `ArrowRight`, `CheckCircle`, `Linkedin`, `MoveRight`

### Assets
Same as Cover V3: `alim-updated.png`, `claudio-c.png`, `konstantinos-p.png`
