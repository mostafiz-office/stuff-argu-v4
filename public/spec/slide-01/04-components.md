# Slide 01 — Cover V3 · Components

## Component Tree

```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader (logo, z-20)
    ├── div (diagonal accent stripe, z-1)
    ├── div (center glow, z-1)
    ├── div (Alim photo container, z-4)
    ├── div (HoverCard stack, z-6)
    │   ├── HoverCard × 3
    ├── div (left content block, z-10)
    │   ├── div (icon + category label)
    │   ├── h1 (headline)
    │   ├── p (body)
    │   ├── div (keyword pills × 4)
    │   └── div (CTA buttons × 2)
    ├── div (rec card Konstantinos, z-8)
    ├── div (rec card Claudio, z-8)
    └── div (bottom accent line, z-10)
```

## HoverCard Component

Custom component with expandable content on hover:

| Property | Value |
|----------|-------|
| Border radius | `rounded-xl` |
| Backdrop filter | `blur(12px)` |
| Max width | `360px` |
| Expand animation | `gridTemplateRows: 0fr → 1fr` over `0.35s ease` |

## Icon Container (Category)

| Property | Value |
|----------|-------|
| Size | `60 × 60px` |
| Border radius | `rounded-2xl` |
| Background | `hsl(var(--pres-accent) / 0.12)` |
| Border | `1px solid hsl(var(--pres-accent) / 0.25)` |
| Icon | `Users` 30px, accent color |
