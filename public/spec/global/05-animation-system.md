# Global Animation System

> **Source**: `PresentationEngine.tsx`, various slide components, `src/index.css`.

## 1. Slide Transitions (Framer Motion)

Managed by `PresentationEngine.tsx`. Transition styles cycle per slide index.

### Transition Types

| Type | Enter (forward) | Exit (forward) |
|------|-----------------|----------------|
| `slide` | `x: "100%", opacity: 0` | `x: "-100%", opacity: 0` |
| `fade` | `opacity: 0` | `opacity: 0` |
| `zoom` | `scale: 0.85, opacity: 0` | `scale: 1.15, opacity: 0` |
| `flip` | `rotateY: 45deg, opacity: 0, scale: 0.92` | `rotateY: -45deg, opacity: 0, scale: 0.92` |
| `rise` | `y: 80px, opacity: 0, scale: 0.96` | `y: -80px, opacity: 0, scale: 0.96` |

### Transition Timing

| Property | Value |
|----------|-------|
| Duration | `0.45s` |
| Easing | `[0.4, 0, 0.2, 1]` (cubic-bezier) |
| Perspective | `1200px` |
| Mode | `AnimatePresence mode="wait"` |

## 2. Standard Fade Helper `fade(i)`

Used across all slides for staggered element entrance:

```tsx
const fade = (i: number) => ({
  initial: { opacity: 0, y: 24–30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15–0.2 * i, duration: 0.6–0.7, ease: "easeOut" },
});
```

Variants per slide:
| Slide | y offset | delay multiplier | duration |
|-------|----------|-------------------|----------|
| Cover V3 | 30 | 0.2 | 0.7 |
| Cover V1 | 30 | 0.2 | 0.7 |
| Pricing Tiers | 24 | 0.18 | 0.7 |
| Feature Comparison | 24 | 0.15 | 0.6 |
| Premium Expert | 24 | 0.15 | 0.7 |
| Cost Savings | 24 | 0.18 | 0.7 |
| What's Included | 24 | 0.15 | 0.6 |
| How It Works | 24 | 0.2 | 0.7 |
| Starter Detail | 24 | 0.15 | 0.6 |
| Starter V9 | 24 | 0.18 | 0.7 |
| CTA | 24 | 0.2 | 0.7 |

## 3. Spring Presets

| Preset | stiffness | damping | mass | Usage |
|--------|-----------|---------|------|-------|
| **Gentle** | `150` | `14` | `1` | Keyword badge pop-in |
| **Snappy** | `200–300` | `16–20` | `1` | Metric cards, result stats |
| **Bouncy** | `180` | `14` | `1` | Floating keyword badges |

## 4. CSS Keyframe Animations

### Rec Card Entrance

```css
@keyframes recCardFadeIn {
  from { opacity: 0; transform: scale(0.85) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
```

### Keyword Badge Float Loop

```tsx
y: { delay: 1.2, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
boxShadow: { delay: 1.3, duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
```

## 5. Interactive Animation Rules

| Interaction | Duration | Notes |
|-------------|----------|-------|
| Hover color change | `0.05s` | Instantaneous |
| Hover scale | `0.2–0.35s` ease | Smooth |
| Hover glow/shadow | `0.3s` ease | Slightly slower |
| Focus ring | `0.15s` | Quick |

## 6. AnimatePresence Usage

- Slide transitions (`mode="wait"`)
- Dropdown menus
- Toast notifications

## 7. Performance

| Rule | Implementation |
|------|----------------|
| `will-change` | Applied to `.rec-card` for transform/shadow |
| `translateZ(0)` | Forces GPU layer on animated cards |
| `pointer-events: none` | On decorative overlays |
