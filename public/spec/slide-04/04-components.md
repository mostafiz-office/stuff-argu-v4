# Slide 04 — Components
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader
    ├── motion.h1 (title)
    └── div.comparison-table
        ├── div.comparison-header (persistent grid 1.35fr + 3 equal tier columns)
        │   ├── comparison label and scroll hint
        │   └── motion.div × 3 (large tier name, price, optional text badge)
        └── div (feature viewport wrapper)
            ├── div.comparison-scroll (keyboard/touch/wheel scroll region)
            │   └── section × 3
            │       ├── sticky group label
            │       └── motion.div × grouped feature rows
            │           ├── feature label
            │           └── tier value × 3
            ├── custom scroll rail + live thumb
            ├── bottom fade
            └── conditional “Scroll for more” cue
```
## Hover behavior
- Hovering a feature row highlights all four cells in that row.
- Hovering any tier header or tier cell highlights that tier's header and cells across the table.
- Tier badges are text-only: `BEST VALUE` and `PREMIUM`.

## Scroll behavior
- The header band remains visible while only the grouped feature viewport scrolls.
- Wheel, trackpad, touch, keyboard, and custom-rail dragging are supported.
- Vertical interaction inside the feature viewport does not navigate the presentation.
