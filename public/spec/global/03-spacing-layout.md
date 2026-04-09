# Global Spacing & Layout

> **Source**: `src/index.css`, `ScaledSlide.tsx`.

## 1. Canvas Dimensions

| Property | Value |
|----------|-------|
| Width | `1920px` |
| Height | `1080px` |
| Aspect ratio | 16:9 |

## 2. Scaling System

`ScaledSlide` applies `transform: scale(factor)` where:

```ts
factor = Math.min(viewportWidth / 1920, viewportHeight / 1080)
```

- `transform-origin: center center`
- Positioned at `left: 50%; top: 50%` with `margin-left: -960px; margin-top: -540px`
- Parent container: `overflow: hidden`

## 3. Safe Areas & Padding

| Zone | Value | Notes |
|------|-------|-------|
| Header zone | Top `36px`, left/right `60px` | Logo placement (SlideHeader) |
| Content safe area | `80px` from all edges | Primary content boundary |
| Extended padding | `100–120px` from left | Text-heavy slides |
| Bottom safe area | `80px` minimum | Avoids overlap with dot navigation |

## 4. Z-Index Layers

| Layer | z-index | Contents |
|-------|---------|----------|
| Slide background | `0` | `.slide-dark-bg`, background pattern |
| Background effects | `1–5` | Radial glows, decorative elements |
| Content | `10` | Main slide content |
| Header | `20` | SlideHeader (logo) |
| Navigation HUD | `50` | Top-right bar, bottom dots |
| Noise overlay | `100` | Film grain texture |

## 5. Grid Systems

| Pattern | Specification |
|---------|--------------|
| 3-column cards | `grid-template-columns: repeat(3, 1fr); gap: 32px` |
| 4-column cards | `grid-template-columns: repeat(4, 1fr); gap: 32px` |
| 3×2 grid | `grid-cols-3 grid-rows-2; gap: 24px` |
| Feature table | `grid-template-columns: 1.8fr 1fr 1fr 1fr` |
| 2-column detail | `grid-template-columns: 1fr 200px` |

## 6. Card Spacing

| Property | Value |
|----------|-------|
| Card padding | `24–32px` |
| Card gap | `24–32px` |
| Card border-radius | `16–24px` |

## 7. Overflow

```css
body { overflow: hidden; }
::-webkit-scrollbar { display: none; }
html { scrollbar-width: none; }
```
