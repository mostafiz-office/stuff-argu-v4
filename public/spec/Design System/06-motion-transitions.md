# Motion & Transitions

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

All content animation uses **Framer Motion** — the `motion` component with declarative `initial`, `animate`, and `transition` props. CSS transitions are used only for hover effects and structural utilities.

---

## Core Animation Pattern: `fade(i)`

The primary animation pattern used across all slides is a staggered fade-up:

```tsx
const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" },
});
```

### Variants by Slide

| Slide | y-offset | Delay multiplier | Duration |
|-------|----------|-------------------|----------|
| Default | `y: 24` | `0.18 × i` | `0.7s` |
| Cover V3 | `y: 30` | `0.2 × i` | `0.7s` |
| Cover V1 | `y: 30` | `0.2 × i` | `0.7s` |
| Feature Comparison | `y: 24` | `0.15 × i` | `0.6s` |
| How It Works | `y: 24` | `0.2 × i` | `0.7s` |
| CTA | `y: 24` | `0.2 × i` | `0.7s` |

---

## Secondary Patterns

### Slide-In from Right

```tsx
initial: { opacity: 0, x: 20–30 }
animate: { opacity: 1, x: 0 }
transition: { delay: baseDelay + i * step, duration: 0.5–0.7 }
```

Used by: Hiring process items, cost savings bars, expertise hover cards

### Scale-In (Spring)

```tsx
initial: { opacity: 0, scale: 0.3–0.85 }
animate: { opacity: 1, scale: 1 }
transition: { type: "spring", stiffness: 150–200, damping: 14–16 }
```

Used by: Keyword pills (Cover V1), result metric cards (Starter V9)

### Bar Width Animation

```tsx
initial: { width: 0 }
animate: { width: `${percentage}%` }
transition: { delay: staggered, duration: 0.8 }
```

Used by: Cost Savings comparison bars

### Timeline Scale

```tsx
initial: { scaleX: 0 }
animate: { scaleX: 1 }
transition: { delay: 0.5, duration: 1, ease: "easeOut" }
style: { transformOrigin: "left center" }
```

Used by: How It Works connector line

---

## Looping Animations

### Floating Badges (Cover V1)

```tsx
animate: {
  y: [0, -6, 0],
  boxShadow: ["glow-low", "glow-high", "glow-low"],
}
transition: {
  y: { duration: 3, repeat: Infinity, repeatType: "loop" },
  boxShadow: { duration: 2.5, repeat: Infinity, repeatType: "loop" },
}
```

### Scroll Indicator Bounce

```tsx
animate: { y: [0, 8, 0] }
transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
```

### Rocket Animation

Plays once on slide entry. Configured via `RocketAnimation` component with `intensity` and `profile` props.

---

## CSS Transitions (Hover Effects)

| Component | Properties | Duration | Easing |
|-----------|-----------|----------|--------|
| `.rec-card` | transform, border-color, box-shadow, background | `0.3s` | `ease` |
| `.nav-dot` | all | `0.3s` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Hover card (Cover V3) | background, border-color | `0.35s` | `ease` |
| Hover card expand | grid-template-rows, opacity | `0.35s, 0.3s` | `ease` |

---

## CSS Keyframe Animations

### `recCardFadeIn`

```css
@keyframes recCardFadeIn {
  from { opacity: 0; transform: scale(0.85) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
```

Used by: Testimonial recommendation cards on cover slides.

---

## Animation Timing Guidelines

| Element Type | Recommended Delay | Duration |
|-------------|-------------------|----------|
| Title (H1) | `0s` (first element) | `0.6–0.7s` |
| Subtitle | `0.15–0.2s` | `0.6–0.7s` |
| Content cards | `0.3s + i × 0.1–0.18s` | `0.5–0.6s` |
| Feature rows | `0.4s + i × 0.05s` | `0.4s` |
| CTAs/buttons | `0.6–1.1s` | `0.5–0.7s` |
| Background elements | `0.5s` | `0.8–1.0s` |
