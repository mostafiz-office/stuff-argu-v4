# Slide 04 — Hover & Scroll Interactions

## Scrollbar
- **Class**: `.tier-scroll` on the feature-rows container
- **Width**: 14px (compensates for slide scale-down)
- **Track**: `hsl(var(--pres-accent) / 0.08)`, 7px border-radius
- **Thumb**: `hsl(var(--pres-accent) / 0.45)`, 7px border-radius, 2px inset
- **Thumb hover**: `hsl(var(--pres-accent) / 0.7)`
- **Firefox**: `scrollbar-width: auto`, `scrollbar-color` matching above
- **Always visible**: `overflow-y: scroll` (not auto)

## Scroll fade indicator
- Bottom gradient fade (60px) + bouncing chevrons when more content below
- Hidden once user scrolls to bottom
