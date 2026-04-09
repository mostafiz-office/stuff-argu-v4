# Slide 01 — Cover V3 · Layout Architecture

> **Inherits**: [`global/03-spacing-layout.md`](../global/03-spacing-layout.md)  
> **Overrides**: None

## Root Element

```html
<div class="slide-dark-bg relative w-full h-full overflow-hidden">
```

## Z-Layer Stack

| z-index | Element |
|---------|---------|
| z-[1] | Diagonal accent stripe (left-bottom, blur 40px) |
| z-[1] | Center glow (radial gradient, blur 60px) |
| z-[4] | Alim photo container |
| z-[6] | HoverCard stack (right side) |
| z-[8] | Recommendation cards (corners) |
| z-10 | Left content block (headline, pills, CTAs) |
| z-10 | Bottom accent line |

## Spatial Grid

### Left Content Block
| Property | Value |
|----------|-------|
| Position | `left: 80px, top: 100px, bottom: 80px` |
| Width | `700px` |
| Alignment | `flex items-center` |

### Alim Photo
| Property | Value |
|----------|-------|
| Position | `left: 680px, bottom: 0` |
| Container | `width: 1100px, height: 135%` |
| Scale | `1.0` |
| Opacity | `0.85` |
| Shadow | `drop-shadow(0 20px 60px hsl(var(--pres-bg) / 0.7))` |

### HoverCards (Right Side)
| Property | Value |
|----------|-------|
| Position | `right: 60px, top: 340px` |
| Layout | `flex-col gap-4` |
| Max width | `360px` per card |

### Diagonal Accent Stripe
| Property | Value |
|----------|-------|
| Position | `left: -100, bottom: -200` |
| Size | `1200 × 400` |
| Rotation | `-8deg` |
| Gradient | `135deg, hsl(var(--pres-accent) / 0.04), transparent 60%` |

### Recommendation Card Positions
| Card | Left | Top | Width |
|------|------|-----|-------|
| Konstantinos P. | 70px | 860px | 520px |
| Claudio C. | 1200px | 120px | 480px |

### Bottom Accent Line
| Property | Value |
|----------|-------|
| Position | `bottom: 0, left: 0, right: 0` |
| Height | `4px` |
| Gradient | `linear-gradient(90deg, transparent 0%, hsl(var(--pres-accent)) 50%, transparent 100%)` |
