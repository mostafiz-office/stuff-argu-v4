# Slide 02 — Cover V1 (Clean & Minimal)

**Version:** 1.3.0  
**Updated:** 2026-10-08 (verified Marek recommendations)  
**Component:** `PricingCoverV1`  
**File:** `src/slides/PricingCoverV1.tsx`

---

## Purpose

Clean, minimal alternating cover. Marek's portrait is the centerpiece with two compact, correctly attributed LinkedIn recommendations from Cristian Stancalău and Jakub Szubarga.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + left radial glow |
| Left content | `left: 80px, top: 100px, w: 680px` | Users icon (70×70), "Staff Augmentation" label, headline, body, CTA button |
| Center photo | `left: 720px, bottom: 0, 760×900px` | Marek photo (contained at bottom, drop-shadow) |
| Keyword badges | Absolute | 3 floating pills with bob + glow animation |
| Recommendations | Left and right columns | 2 compact LinkedIn recommendation cards |
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

### CTA Buttons
| Label | Style | Action |
|-------|-------|--------|
| Book a Call → | Filled accent, pill shape | Opens `https://client.rasia.pro/hiring-v1` |
| ✨ Explore Tiers | Outlined accent, pill shape | Navigates to slide 2 (`?slide=2`) via router-safe button action |

### Recommendations (2)
| Name | Title | Exact shortened excerpt | Highlight |
|------|-------|-------------------------|-----------|
| Cristian Stancalău | Expert Java Engineer | "Our code review team had the privilege of being managed by Marek, who successfully led us through troubled times… so the team could focus on daily activities with minimum stress until our targets were reached." | "successfully led us through troubled times" |
| Jakub Szubarga | Platform Systems Engineer | "I witnessed him as software developer, designer, solution architect, speaker, scrum master and team leader. He was excellent at performing tasks associated with these roles." | "He was excellent at performing tasks associated with these roles." |

Both cards link to Marek's LinkedIn recommendations page. Alim Ul Karim's visible recommendation is intentionally excluded.

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
- `marek.webp` — Marek portrait shared by both cover variants.
- `recommendations/cristian-stancalau.png.asset.json` — Cristian's uploaded portrait.
- `recommendations/jakub-szubarga.png.asset.json` — Jakub's uploaded portrait.

### Icons (lucide-react)
`Users`, `ArrowRight`, `CheckCircle`, `Linkedin`, `MoveRight`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Cover V3 variant | [01-cover-v3.md](./01-cover-v3.md) |
| Cover selection logic | `src/pages/Index.tsx` |
