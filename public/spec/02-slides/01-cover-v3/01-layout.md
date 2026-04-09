# Slide 01 — Cover V3 · Layout

## Zone Map

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

## Z-Index Stack

| Layer | z-index |
|-------|---------|
| Background effects | 1 |
| Alim photo | 4 |
| Left content | 5 |
| Hover cards | 6 |
| Testimonial cards | 8 |
