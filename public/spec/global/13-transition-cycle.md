# Global Slide Transition Cycle

> **Source**: `PresentationEngine.tsx`.

## 1. Transition Style Enum

```ts
type PresentationTransition = "slide" | "fade" | "zoom" | "rise";
```

## 2. Cycle Order

The 17 slides use this deliberate sequence:

`fade → rise → slide → fade → zoom → rise → fade → zoom → slide → fade → slide → zoom → rise → fade → zoom → rise → fade`

The deck does not use 3D flip transitions.

## 3. Direction Logic

| Navigation | Enter from | Exit to |
|-----------|-----------|---------|
| Forward (→) | Right / Bottom | Left / Top |
| Backward (←) | Left / Top | Right / Bottom |

## 4. Timing

| Property | Value |
|----------|-------|
| Duration | `0.45s` |
| Easing | `[0.22, 1, 0.36, 1]` |
| AnimatePresence mode | `"wait"` |

With reduced motion enabled, the transition duration is `0.01s`.
