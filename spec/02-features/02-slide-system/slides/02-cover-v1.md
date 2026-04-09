# Slide 02 — Cover V1 (Clean & Minimal)

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingCoverV1`  
**File:** `src/slides/PricingCoverV1.tsx`

---

## Purpose

Clean, minimal cover variant. Large Alim photo as centerpiece with floating animated keyword badges. Two LinkedIn testimonial cards positioned asymmetrically. Left side has icon, headline, body text, and single CTA.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + left radial glow |
| Left content | `left: 80px, top: 100px, w: 680px` | Users icon (70×70), "Staff Augmentation" label, headline, body, CTA button |
| Center photo | `left: 620px, bottom: -14px, h: 145%` | Alim photo (scale 1.1, drop-shadow) |
| Keyword badges | Absolute | 3 floating pills with bob + glow animation |
| Testimonials | Absolute | 2 LinkedIn recommendation cards |
| Footer | `bottom: 42px, left: 80px` | `riseup-asia.com` |
| Bottom accent | `bottom: 0` | 4px gradient line |

---

## Content Data

### Headline
```
Elite Engineers On Demand
```

### Body
```
Top 5% vetted talent. Hire in as fast as 20 minutes.
60% savings vs US/UK rates — no hidden fees.
```

### Keyword Badges (3)
| Label | Position (x, y) |
|-------|-----------------|
| Top 5% Talent | 1420, 160 |
| Hire in 20 Minutes | 780, 640 |
| 7-Stage Vetted | 1420, 420 |

### CTA Button
| Label | Style |
|-------|-------|
| Explore Plans → | Filled accent, pill shape |

### Testimonials (2)
| Name | Title | Quote | Position (x, y) |
|------|-------|-------|-----------------|
| Konstantinos P. | Senior Serverless Engineer | "Solid and high quality work..." | 460, 60 |
| Claudio C. | Engineering Leader · AI-Powered Platforms | "A skillful professional..." | 1150, 780 |

---

## Animations

| Element | Type | Delay | Details |
|---------|------|-------|---------|
| Icon | fade(0) | 0s | opacity + y |
| Label | fade(1) | 0.2s | |
| Headline | fade(2) | 0.4s | |
| Body | fade(3) | 0.6s | |
| CTA | fade(4) | 0.8s | |
| Keyword badges | Spring scale 0.3→1 | 0.5s + i×0.12s | Continuous bob (y: 0→-6→0, 3s loop) + pulsing boxShadow glow |
| Testimonials | CSS `recCardFadeIn` | 0.65s, 0.8s | |
| Footer | opacity 0→1 | 0.9s | |

### Badge Hover
- Scale to 1.18, y: -10, boxShadow intensifies to 0.55 opacity

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Assets
- `alim-updated.png`, `testimonials/claudio-c.png`, `testimonials/konstantinos-p.png`

### Icons (lucide-react)
`Users`, `ArrowRight`, `CheckCircle`, `Linkedin`, `MoveRight`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Cover V3 variant | [01-cover-v3.md](./01-cover-v3.md) |
| Cover selection logic | `src/pages/Index.tsx` |
