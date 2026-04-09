# Global Animation Implementation Rules

> **Source**: Codebase conventions.

## Decision Matrix: CSS vs Framer Motion

| Use Case | Technology | Reason |
|----------|-----------|--------|
| Hover color/opacity | CSS `transition` | No JS overhead |
| Hover scale with spring | Framer `whileHover` | Spring physics |
| Element entrance | Framer `initial/animate` | Stagger control |
| Slide transitions | Framer `AnimatePresence` | Exit animations |
| Decorative loops | Framer `animate` with `repeat: Infinity` | Keyframe flexibility |
| Card entrance | CSS `@keyframes` | Performance (recCardFadeIn) |

## Anti-Patterns

1. ❌ Do NOT use `setTimeout` for sequencing — use Framer Motion `delay`
2. ❌ Do NOT animate `left`/`top` — use `transform: translate()`
3. ❌ Do NOT mix CSS transitions and Framer Motion on same property
4. ❌ Do NOT add `will-change` to more than 3 elements per slide
