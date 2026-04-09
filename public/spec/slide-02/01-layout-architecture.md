# Slide 02 — Cover V1 · Layout Architecture

> **Inherits**: [`global/03-spacing-layout.md`](../global/03-spacing-layout.md)

## Z-Layer Stack
| z-index | Element |
|---------|---------|
| z-[1] | Left warm glow (radial gradient, blur 40px) |
| z-[5] | Alim photo container |
| z-[7] | Floating keyword badges × 3 |
| z-[8] | Recommendation cards × 2 |
| z-10 | Left content block |
| z-10 | Bottom accent line, website URL |

## Spatial Grid

### Left Content Block
| Property | Value |
|----------|-------|
| Position | `left: 80px, top: 100px, bottom: 80px` |
| Width | `680px` |

### Alim Photo
| Property | Value |
|----------|-------|
| Position | `left: 620px, bottom: -14px` |
| Container | `width: 1300px, height: 145%` |
| Scale | `1.1` |
| Shadow | `drop-shadow(0 20px 60px hsl(var(--pres-bg) / 0.6))` |

### Left Warm Glow
| Property | Value |
|----------|-------|
| Position | `left: 40px, top: 180px` |
| Size | `680 × 500px` |
| Color | `hsl(var(--pres-accent) / 0.06)` radial |

### Keyword Badge Positions
| Badge | Left | Top |
|-------|------|-----|
| Top 5% Talent | 1420px | 160px |
| Hire in 20 Minutes | 780px | 640px |
| 7-Stage Vetted | 1420px | 420px |

### Recommendation Card Positions
| Card | Left | Top | Width |
|------|------|-----|-------|
| Konstantinos P. | 460px | 60px | 500px |
| Claudio C. | 1150px | 780px | 500px |

### Website URL
| Property | Value |
|----------|-------|
| Position | `bottom: 42px, left: 80px` |
