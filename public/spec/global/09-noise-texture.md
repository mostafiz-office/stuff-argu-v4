# Global Noise & Texture System

> **Source**: `src/index.css`.

## 1. Noise Overlay

```css
.noise-overlay {
  position: fixed; inset: 0;
  pointer-events: none; z-index: 100; opacity: 0.03;
  background-image: url("data:image/svg+xml,...feTurbulence...");
}
```

Rendered once by `PresentationEngine.tsx`, above all slides.

## 2. Slide Dark Background

```css
.slide-dark-bg {
  background: hsl(var(--pres-bg));
  position: relative;
}
```

Every slide's root `<div>` uses this class.

## 3. Halftone Dot Pattern (::before)

```css
.slide-dark-bg::before {
  content: '';
  position: absolute; inset: 0;
  opacity: 0.07;
  background-image:
    radial-gradient(ellipse 600px 600px at 55% 50%, hsl(41 100% 50% / 0.5), transparent),
    radial-gradient(circle 1.2px at center, hsl(41 80% 50% / 0.4) 1px, transparent 1px);
  background-size: 100% 100%, 8px 8px;
  pointer-events: none;
}
```

This creates a subtle amber-tinted halftone dot pattern centered on the slide.

## 4. Slide-Specific Background Patterns

Some slides add their own background textures on top of the base:

| Slide | Pattern | CSS |
|-------|---------|-----|
| Pricing Tiers | 45° crosshatch | `repeating-linear-gradient(45deg, ..., hsl(var(--pres-accent) / 0.03) ...)` |
| How It Works | -45° crosshatch | Same but `-45deg` |
| CTA | Radial dot grid | `radial-gradient(circle 1.2px, hsl(var(--pres-accent) / 0.06) 1px, transparent 1px)` at `14px 14px` |
