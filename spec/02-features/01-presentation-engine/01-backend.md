# Presentation Engine — Backend Logic

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

State management and navigation logic for the presentation engine. All state is client-side (no server).

---

## State Management

### Slide Index State

- `currentIndex` (number) — Zero-based index of the visible slide
- `direction` (number) — `1` for forward, `-1` for backward (drives transition direction)
- `downloadOpen` (boolean) — Whether the export panel is visible

### URL Synchronization

The current slide is synced bidirectionally with `?slide=N` (1-indexed):

1. **URL → State**: On mount or URL change, `parseSlideIndex()` reads `?slide`, clamps to valid range, and updates `currentIndex`
2. **State → URL**: When `currentIndex` changes, `useEffect` writes back to `?slide` via `setSearchParams({ replace: true })`

### Hidden Slides

`presentation.features.hiddenSlides` (1-indexed array) filters slides from the visible deck:

```typescript
const hiddenSet = new Set(presentation.features.hiddenSlides.map(n => n - 1));
const visibleSlides = slides.filter((_, i) => !hiddenSet.has(i));
```

### Transition Styles

Five transition styles cycle based on slide index:

| Style | Enter | Exit |
|-------|-------|------|
| `slide` | x: ±100% | x: ∓100% |
| `fade` | opacity: 0 | opacity: 0 |
| `zoom` | scale: 0.85/1.15 | scale: 1.15/0.85 |
| `flip` | rotateY: ±45° | rotateY: ∓45° |
| `rise` | y: ±80px | y: ∓80px |

Selection: `transitionStyles[index % 5]`

---

## Navigation

- **Clamping**: `navigate(newIndex)` clamps to `[0, visibleSlides.length - 1]`
- **Direction detection**: `direction = newIndex > currentIndex ? 1 : -1`
- **No-op guard**: If `clamped === currentIndex`, navigation is skipped
