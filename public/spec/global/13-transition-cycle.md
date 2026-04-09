# Global Slide Transition Cycle

> **Source**: `PresentationEngine.tsx`.

## 1. Transition Style Enum

```ts
type TransitionStyle = "slide" | "fade" | "zoom" | "flip" | "rise";
```

## 2. Cycle Order

Transitions cycle through: `slide → fade → zoom → flip → rise → slide → ...`

Each slide index maps to a transition: `transitionStyles[index % 5]`.

## 3. Direction Logic

| Navigation | Enter from | Exit to |
|-----------|-----------|---------|
| Forward (→) | Right / Bottom | Left / Top |
| Backward (←) | Left / Top | Right / Bottom |

## 4. Timing

| Property | Value |
|----------|-------|
| Duration | `0.45s` |
| Easing | `[0.4, 0, 0.2, 1]` |
| Perspective | `1200px` (for flip/zoom) |
| AnimatePresence mode | `"wait"` |
