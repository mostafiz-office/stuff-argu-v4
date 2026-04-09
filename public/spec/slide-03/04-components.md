# Slide 03 — Pricing Tiers · Components

## Component Tree
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader
    ├── div (crosshatch pattern, z-1)
    ├── motion.h1 (title, z-10)
    ├── motion.p (subtitle, z-10)
    └── div (3-col grid, z-10)
        └── HoverVideoPreview × 3
            └── motion.div (tier card)
                ├── div (badge: BEST VALUE / MOST POPULAR / PREMIUM)
                ├── p (tier name)
                ├── p (experience)
                ├── div (price + suffix)
                ├── div (hours badge)
                └── div (features × 4)
                    └── CheckCircle + span
```

## HoverVideoPreview
Wraps each card. On hover, shows YouTube video preview. Position varies: left, center, right.
