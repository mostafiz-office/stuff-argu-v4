# Global Animation System

> **Source**: `PresentationEngine.tsx`, various slide components, `src/index.css`.

## 1. Slide Transitions (Framer Motion)

Managed by `PresentationEngine.tsx` and `src/lib/presentationMotion.ts`. Each slide has an intentional transition assignment.

### Transition Types

| Type | Enter (forward) | Exit (forward) |
|------|-----------------|----------------|
| `slide` | `x: "12%", opacity: 0` | `x: "-10%", opacity: 0` |
| `fade` | `opacity: 0` | `opacity: 0` |
| `zoom` | `scale: 0.96, opacity: 0` | `scale: 1.025, opacity: 0` |
| `rise` | `y: 48px, opacity: 0` | `y: -36px, opacity: 0` |

### Transition Timing

| Property | Value |
|----------|-------|
| Duration | `0.45s` |
| Easing | `[0.22, 1, 0.36, 1]` |
| Mode | `AnimatePresence mode="wait"` |

## 2. Shared Entrance Helpers

`fadeUp`, `fadeIn`, `scaleIn`, `staggerDelay`, and `entranceTransition` are centralized in `src/lib/presentationMotion.ts`. Standard entrances settle in about `0.38s` after their delay, use the shared easing, and keep stagger steps restrained.

Slide content must use these helpers rather than introducing unrelated easing or long stagger chains.

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

## 8. Reduced Motion

`MotionConfig reducedMotion="user"` honors the operating-system preference. The outer slide transition drops to `0.01s`, and CSS transitions and keyframes are similarly shortened. Content remains fully visible and interactive.
