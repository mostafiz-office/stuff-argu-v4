# Slide 03 — Pricing Tiers · Layout Architecture

> **Inherits**: [`global/03-spacing-layout.md`](../global/03-spacing-layout.md)

## Z-Layer Stack
| z-index | Element |
|---------|---------|
| z-[1] | 45° crosshatch background pattern |
| z-10 | Title, subtitle, tier cards |

## Spatial Grid
### Title
| Property | Value |
|----------|-------|
| Position | `left: 80px, top: 90px` |

### Subtitle
| Property | Value |
|----------|-------|
| Position | `left: 80px, top: 178px` |

### Tier Cards Grid
| Property | Value |
|----------|-------|
| Position | `left: 80px, right: 80px, top: 240px, bottom: 80px` |
| Grid | `grid-cols-3 gap-8` |

### Background Pattern
| Property | Value |
|----------|-------|
| Pattern | `repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px)` |
