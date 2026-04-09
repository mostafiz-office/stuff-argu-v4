# Slide 01 — Cover V3 (Bold Statement)

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingCoverV3`  
**File:** `src/slides/PricingCoverV3.tsx`

---

## Purpose

Bold hero cover slide with large headline, Alim photo on right, interactive hover expertise cards, keyword pills, CTAs, and LinkedIn-verified testimonial cards in corners.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + diagonal accent stripe + center glow |
| Logo | `top: 36px, left: 60px` | SlideHeader (48px) |
| Alim photo | `left: 680, bottom: 0, width: 1100, height: 135%` | Full-height cutout, z-[4], opacity 0.85 |
| Left content | `left: 80px, top: 100px, width: 700px` | Category label + title + subtitle + pills + CTAs |
| Hover cards | `right: 60px, top: 340px` | 3 interactive expertise cards, z-[6] |
| Testimonial 1 | `x: 70, y: 860, width: 520` | Konstantinos P. card, z-[8] |
| Testimonial 2 | `x: 1200, y: 120, width: 480` | Claudio C. card, z-[8] |
| Bottom line | `bottom: 0` | 4px accent gradient |

---

## Content Data

### Category Badge
- Icon: `Users` (60×60, accent bg 12%)
- Label: "Staff Augmentation" (14px, uppercase, 0.2em spacing)
- Subtitle: "riseup-asia.com" (13px, accent, bold)

### Headline
- Text: `"Elite Engineers\nOn Demand"` (80px Ubuntu Bold)
- "Elite" highlighted in accent

### Body
- Text: `"Pre-vetted top 5% engineers ready to join your team. No recruitment delays. No hidden fees."` (22px Poppins)
- "top 5% engineers" in accent bold

### Keyword Pills (4)
| Label |
|-------|
| Top 5% Talent |
| Hire in 20 Min |
| 7-Stage Vetted |
| 60% Cost Savings |

### CTAs
| Button | Style | Icon |
|--------|-------|------|
| "Explore Plans" | Primary (amber bg, dark text, 50px radius) | ArrowRight |
| "View Tiers" | Secondary (accent outline) | Sparkles |

### Hover Cards (3)
| Title | Hover Text |
|-------|-----------|
| "20+ Years in Software Engineering" | "Two decades of hands-on experience..." |
| "Led 50+ Enterprise Projects" | "From Fortune 500 platforms to high-growth SaaS..." |
| "Chief Software Engineer & Your Dedicated Expert" | "Not a manager watching from the sidelines..." |

### Testimonials (2)
| Name | Title | Quote | LinkedIn |
|------|-------|-------|----------|
| Konstantinos P. | Senior Serverless Engineer | "Solid and high quality work..." | Verified badge |
| Claudio C. | Engineering Leader, AI-Powered Platforms | "A skillful professional..." | Verified badge |

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Category badge | fade(0) | 0s | 0.7s |
| Title | fade(1) | 0.2s | 0.7s |
| Subtitle | fade(2) | 0.4s | 0.7s |
| Keyword pills | fade(3) + spring per pill | 0.7s + i×0.1s | spring |
| CTAs | fade(4) | 0.8s | 0.7s |
| Hover cards | x: 30→0 | 1.0s, 1.25s, 1.5s | 0.7s |
| Testimonials | recCardFadeIn keyframe | 0.8s + i×0.15s | 0.6s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |
| `HoverCard` | Local component (inline) |

### Icons (lucide-react)
`Users`, `ArrowRight`, `CheckCircle`, `Linkedin`, `MoveRight`, `Sparkles`

### Assets
| Asset | Path |
|-------|------|
| Alim photo | `src/assets/alim-updated.png` |
| Claudio photo | `src/assets/testimonials/claudio-c.png` |
| Konstantinos photo | `src/assets/testimonials/konstantinos-p.png` |
