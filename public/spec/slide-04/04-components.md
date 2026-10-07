# Slide 04 — Components
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader
    ├── motion.h1 (title)
    └── motion.div (table container)
        ├── div (header row, grid 1.8fr 1fr 1fr 1fr)
        │   ├── div (empty label col)
        │   └── motion.div × 3 (column headers with text badge, name, price)
        ├── div (scrollable feature rows)
        │   └── motion.div × 14 (feature rows)
        │       ├── span (label)
        │       └── div × 3 (CheckCircle / X / text value)
        └── coordinated row and tier-column hover states
```
## Hover behavior
- Hovering a feature row highlights all four cells in that row.
- Hovering any tier header or tier cell highlights that tier's header and cells across the table.
- Tier badges are text-only: `BEST VALUE` and `PREMIUM`.
