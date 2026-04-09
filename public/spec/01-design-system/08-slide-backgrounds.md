# Slide Backgrounds

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

All slides share a common dark background system with optional texture overlays and glow effects.

---

## Base Background: `.slide-dark-bg`

Every slide uses the `.slide-dark-bg` class:

```css
.slide-dark-bg {
  background: hsl(var(--pres-bg));  /* 240 20% 4% — near black */
  position: relative;
}
```

### Halftone Texture Overlay

Applied via `::before` pseudo-element:

```css
.slide-dark-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.07;
  background-image:
    radial-gradient(ellipse 600px 600px at 55% 50%, hsl(41 100% 50% / 0.5), transparent),
    radial-gradient(circle 1.2px at center, hsl(41 80% 50% / 0.4) 1px, transparent 1px);
  background-size: 100% 100%, 8px 8px;
  pointer-events: none;
}
```

This creates a subtle amber dot pattern with a warm center glow.

---

## Additional Texture Overlays

Some slides add extra texture layers:

### 45° Repeating Lines (Pricing Tiers, How It Works)

```tsx
style={{
  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 28px, 
    hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px)`,
}}
```

### Dot Pattern (CTA Slide)

```tsx
style={{
  backgroundImage: "radial-gradient(circle 1.2px at center, hsl(var(--pres-accent) / 0.06) 1px, transparent 1px)",
  backgroundSize: "14px 14px",
  maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 65%)",
}}
```

---

## Glow Effects

Most slides include a radial gradient glow positioned behind content:

### Standard Center Glow

```tsx
style={{
  left: "50%", top: "50%",
  width: 800, height: 600,
  transform: "translate(-50%, -50%)",
  background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.05–0.06) 0%, transparent 65%)",
  filter: "blur(60px)",
}}
```

### Cover Glow Variants

| Variant | Position | Size | Opacity |
|---------|----------|------|---------|
| Cover V3 center | 40%, 40% | 800×500 | 0.06 |
| Cover V3 diagonal stripe | left: -100, bottom: -200 | 1200×400 | 0.04 |
| Cover V1 left | 40, 180 | 680×500 | 0.06 |
| CTA large | center | 1000×700 | 0.10 |
| Premium Expert | 30%, 40% | 800×600 | 0.06 |

---

## Noise Overlay

A global noise texture applied to the entire viewport:

```css
.noise-overlay {
  position: fixed; inset: 0;
  pointer-events: none; z-index: 100; opacity: 0.03;
  background-image: url("data:image/svg+xml,...fractalNoise...");
}
```

---

## Utility Classes

| Class | Description |
|-------|-------------|
| `.glass-card` | Frosted glass card with blur, gradient bg, accent border |
| `.accent-bar` | 4px accent gradient bar |
| `.metric-glow` | Amber text with glow shadow effect |
| `.chart-bar` | Vertical bar with gradient and highlight overlay |
