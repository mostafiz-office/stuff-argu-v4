# Slide 01 — Cover V3 (Bold Statement)

**Version:** 1.2.0  
**Updated:** 2026-09-23 (photo swap)  
**Component:** `PricingCoverV3`  
**File:** `src/slides/PricingCoverV3.tsx`

---

## Purpose

Bold, high-impact cover slide. Marek's portrait appears on the right with interactive hover cards showcasing expertise. LinkedIn-verified testimonial cards sit in the corners. The left side features the headline, keyword pills, and dual CTA buttons.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + diagonal accent stripe (bottom-left, blurred) + center radial glow |
| Left content | `left: 80px, top: 100px, w: 700px` | Icon badge, subtitle, headline, body text, keyword pills, CTA buttons |
| Right photo | `left: 720px, bottom: 0, 760×900px` | Marek photo (contained at bottom, `opacity: 0.92`, drop-shadow) |
| Hover cards | `right: 60px, top: 340px` | 3 interactive `HoverCard` components |
| Testimonials | Absolute positioned | 2 LinkedIn recommendation cards (bottom-left at `70,860` and top-right at `1200,120`) |
| Bottom accent | `bottom: 0` | 4px gradient line (transparent → accent → transparent) |

---

## Content Data

### Headline
```
Elite Engineers On Demand
```

### Subtitle
```
Staff Augmentation · riseup-asia.com
```

### Body
```
Pre-vetted top 5% engineers ready to join your team. No recruitment delays. No hidden fees.
```

### Keyword Pills (4)
| Label |
|-------|
| Top 5% Talent |
| Hire in 20 Min |
| 7-Stage Vetted |
| 60% Cost Savings |

### Hover Cards (3)
| Title | Hover Text |
|-------|------------|
| **20+ Years** in Software Engineering | Two decades of hands-on experience across startups, enterprises, and everything in between — from architecture to deployment. |
| Led **50+ Enterprise** Projects | From Fortune 500 platforms to high-growth SaaS — proven delivery across healthcare, fintech, e-commerce, and more. |
| **Chief Software Engineer** & Your Dedicated Expert | Not a manager watching from the sidelines — Alim reviews your code, guides architecture, and mentors your developer directly. |

### CTA Buttons
| Label | Style | Action |
|-------|-------|--------|
| Book a Call → | Filled accent, pill shape | Opens `https://client.rasia.pro/hiring-v1` |
| ✨ Explore Tiers | Outlined accent, pill shape | Navigates to slide 2 (`?slide=2`) via router-safe button action |

### Testimonials (2)
| Name | Title | Quote | LinkedIn Badge |
|------|-------|-------|----------------|
| Konstantinos P. | Senior Serverless Engineer | "Solid and high quality work... the smoothest on-boarding process I have had in my whole career." | ✅ Verified |
| Claudio C. | Engineering Leader · AI-Powered Platforms | "A skillful professional and kind communicator." | ✅ Verified |

Testimonial cards link to: `https://www.linkedin.com/in/alimkarim/details/recommendations/`

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Icon badge | fade(0) | 0s | 0.7s |
| Headline | fade(1) | 0.2s | 0.7s |
| Body text | fade(2) | 0.4s | 0.7s |
| Keyword pills | Spring scale 0.8→1 | 0.7s + i×0.1s | spring |
| CTA buttons | fade(4) | 0.8s | 0.7s |
| Hover cards | slideX 30→0 | 1.0s, 1.25s, 1.5s | 0.7s |
| Testimonials | CSS keyframe `recCardFadeIn` | 0.8s, 0.95s | 0.6s |

### HoverCard Interaction
- On hover: background tints to accent/0.12, border brightens, content expands via CSS grid rows transition (0.35s)

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |
| `HoverCard` (local) | Defined inline in component |

### Assets
- `marek.png` — Marek portrait used by the visible cover variant
- `testimonials/claudio-c.png` — Claudio headshot
- `testimonials/konstantinos-p.png` — Konstantinos headshot

### Icons (lucide-react)
`Users`, `ArrowRight`, `CheckCircle`, `Linkedin`, `MoveRight`, `Sparkles`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Cover V1 variant | [02-cover-v1.md](./02-cover-v1.md) |
| Cover selection logic | `src/pages/Index.tsx` (lines 20–38) |
