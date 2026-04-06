# Slide 5 — What's Included

**Component:** `src/slides/WhatsIncludedSlide.tsx`

---

## Layout

- **Top**: "What's Included" heading (68px) + subtitle
- **Body**: 3×2 card grid (`grid-cols-3 grid-rows-2`, gap 6)
- Background: centered radial glow (accent, 0.05, blurred 60px)

## Cards (6)

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | Clock | 160 hrs/month | Guaranteed dedicated hours |
| 2 | Shield | 7-Stage Vetting | Top 5% pass rate |
| 3 | MessageSquare | Direct Communication | No middlemen |
| 4 | Zap | Hire in 20 Minutes | Bench-ready talent |
| 5 | Users | Flexible Scaling | No lock-in |
| 6 | RefreshCw | Free Replacement | No extra cost |

### Card Anatomy

- Surface background (`--pres-bg-surface`)
- Accent border (0.1 opacity)
- 52×52 icon container with accent background (0.12)
- Ubuntu title (24px, 700) + Poppins description (17px, 400)

## Animations

- Cards use `fade(i + 2)` for staggered entrance starting after title/subtitle
