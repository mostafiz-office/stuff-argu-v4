# Slide 02 — Cover V1 · Components

## Component Tree
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader (logo, z-20)
    ├── div (left warm glow, z-1)
    ├── motion.div × 3 (keyword badges, z-7)
    ├── div × 2 (rec cards, z-8)
    ├── div (Alim photo, z-5)
    ├── div (left content block, z-10)
    │   ├── div (icon container 70×70)
    │   ├── p (category label)
    │   ├── h1 (headline)
    │   ├── p (body)
    │   └── div (CTA button)
    ├── div (bottom accent line, z-10)
    └── motion.div (website URL, z-10)
```

## Icon Container
| Property | Value |
|----------|-------|
| Size | `70 × 70px` |
| Background | `hsl(var(--pres-accent) / 0.12)` |
| Border | `1px solid hsl(var(--pres-accent) / 0.25)` |
| Icon | `Users` 36px |
