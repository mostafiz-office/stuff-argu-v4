# Slide 01 — Cover V3 · Hover Interactions

> **Inherits**: [`global/06-hover-interactions.md`](../global/06-hover-interactions.md)

## 1. HoverCard Expand (Slide-Specific)

| Property | Default | Hover |
|----------|---------|-------|
| Background | `hsl(var(--pres-bg) / 0.85)` | `hsl(var(--pres-accent) / 0.12)` |
| Border color | `hsl(var(--pres-accent) / 0.4)` | `hsl(var(--pres-accent) / 0.7)` |
| Content rows | `0fr` (collapsed) | `1fr` (expanded) |
| Content opacity | `0` | `1` |
| Transition | `0.35s ease` for both |

## 2. Recommendation Cards

Fully inherited from global `.rec-card` CSS rules. No overrides.

## 3. CTA Button

No explicit hover effect defined — uses default cursor:pointer.
