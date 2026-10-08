# Slide 01 — Cover V3 (Bold Statement)

**Version:** 1.4.0  
**Updated:** 2026-10-08 (Cristian shared across both covers)  
**Component:** `PricingCoverV3`  
**File:** `src/slides/PricingCoverV3.tsx`

---

## Purpose

Bold, high-impact alternating cover. Marek's portrait anchors the center while compact, correctly attributed LinkedIn recommendations from Adam Lewkowicz and Cristian Stancalău provide social proof.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + diagonal accent stripe (bottom-left, blurred) + center radial glow |
| Left content | `left: 80px, top: 100px, w: 700px` | Icon badge, subtitle, headline, body text, keyword pills, CTA buttons |
| Right photo | `left: 720px, bottom: 0, 760×900px` | Marek photo (contained at bottom, `opacity: 0.92`, drop-shadow) |
| Hover cards | `right: 60px, top: 340px` | 3 interactive `HoverCard` components |
| Recommendations | Left and right columns | 2 compact LinkedIn recommendation cards from Adam Lewkowicz and Cristian Stancalău |
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

### Recommendations (2)
| Name | Title | Exact shortened excerpt | Highlight |
|------|-------|-------------------------|-----------|
| Adam Lewkowicz | Founder & CTO at Vercom S.A. · CPaaS | "Marek is a high level professional, qualified and well organised person. Marek is a kind of person you can rely on!" | "Marek is a kind of person you can rely on!" |
| Cristian Stancalău | Expert Java Engineer · Best Practices · Reliability | "Our code review team had the privilege of being managed by Marek, who successfully led us through troubled times… so the team could focus on daily activities with minimum stress until our targets were reached." | "successfully led us through troubled times" |

The card links to: `https://www.linkedin.com/in/marekflejszman/details/recommendations/?detailScreenTabIndex=0`

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
- `marek.webp` — Marek portrait, preloaded and shared by both cover variants.
- `recommendations/adam-lewkowicz.png.asset.json` — Adam's uploaded portrait served through the project asset flow.
- `recommendations/cristian-stancalau.png.asset.json` — Cristian's uploaded portrait shared by both covers.

### Icons (lucide-react)
`Users`, `ArrowRight`, `CheckCircle`, `Linkedin`, `MoveRight`, `Sparkles`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Cover V1 variant | [02-cover-v1.md](./02-cover-v1.md) |
| Cover selection logic | `src/pages/Index.tsx` (lines 20–38) |
