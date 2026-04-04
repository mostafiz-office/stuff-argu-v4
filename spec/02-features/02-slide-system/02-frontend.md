# Slide System — Frontend

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

Visual patterns and layout conventions used across all slide components.

---

## Common Slide Structure

Every slide follows this pattern:

```tsx
export default function ExampleSlide() {
  return (
    <ScaledSlide>
      <SlideHeader />
      {/* Slide content at 1920×1080 fixed layout */}
    </ScaledSlide>
  );
}
```

---

## Slide Type Patterns

### Divider Slides

- Full-bleed gradient background
- Large centered heading text
- Floating animated tech icons (Simple Icons CDN)
- Subtle particle/glow effects
- Used as section separators

### Profile Slides

- Left: High-quality transparent PNG portrait with opacity edge fading
- Right: Name, title, bio, highlights list
- Mind map tags or skill badges
- Hover animations on cards

### Service Slides

- Icon grid showing capabilities
- Description text with key metrics
- Technology badges
- Hover-expandable detail cards

### Case Study Slides

- Project name and client context
- Tech stack icon row
- Key metrics/results
- Challenge → Solution → Result narrative

### Testimonial Slides

- Client quote in large italic text
- Attribution with name, title, company
- Star ratings or recommendation badges
- Hover animation on cards

### Data Slides

- Comparison tables or pricing grids
- Before/after metrics
- Visual progress bars or charts

---

## Animation Conventions

| Element | Animation | Trigger |
|---------|-----------|---------|
| Cards | `scale(1.03)` + shadow elevation | `whileHover` |
| Text blocks | `opacity: 0 → 1`, `y: 20 → 0` | `initial` / `animate` |
| Icons | Float/pulse keyframes | CSS animation |
| Divider backgrounds | Gradient shift | CSS animation |

---

## Typography in Slides

| Element | Font | Size (px) | Weight |
|---------|------|-----------|--------|
| Slide title | Ubuntu | 42–56 | 700 |
| Subtitle | Poppins | 24–32 | 600 |
| Body text | Poppins | 16–20 | 400 |
| Labels/tags | Poppins | 12–14 | 500 |
| Metrics | Ubuntu | 48–72 | 700 |

---

## Asset Conventions

- **Portraits**: Transparent PNG, high-quality, opacity-faded edges for dark backgrounds
- **Logos**: SVG preferred, PNG fallback; use `brightness(0) invert(1)` filter for white rendering on dark backgrounds
- **Brand-colored logos**: Certain slides (BabelHealth, Zapro) use original brand colors via Simple Icons color parameter
