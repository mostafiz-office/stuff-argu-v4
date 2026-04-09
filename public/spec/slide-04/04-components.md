# Slide 04 — Components
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader
    ├── motion.h1 (title)
    └── motion.div (table container)
        ├── div (header row, grid 1.8fr 1fr 1fr 1fr)
        │   ├── div (empty label col)
        │   └── motion.div × 3 (column headers with badge, name, price)
        ├── div (scrollable feature rows)
        │   └── motion.div × 14 (feature rows)
        │       ├── span (label)
        │       └── div × 3 (CheckCircle / X / text value)
        └── div (scroll indicator: fade gradient + bouncing chevrons)
```
## Scroll behavior: `overflow-y: auto`, thin scrollbar, fade gradient when more content below.
