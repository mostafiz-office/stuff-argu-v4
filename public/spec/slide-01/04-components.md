# Slide 01 — Cover V3 · Components

## Component Tree

```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader (logo, z-20)
    ├── div (diagonal accent stripe, z-1)
    ├── div (center glow, z-1)
    ├── div (Marek photo container, z-4)
    ├── div (left content block, z-10)
    │   ├── div (icon + category label)
    │   ├── h1 (headline)
    │   ├── p (body)
    │   ├── div (keyword pills × 4)
    │   └── div (CTA buttons × 2)
    ├── RecommendationCard × 1–2 (variant-specific)
    ├── div (three expertise highlights)
    └── div (bottom accent line, z-10)
```

## RecommendationCard Component

Compact linked card showing the actual recommender and a shortened verified excerpt:

| Property | Value |
|----------|-------|
| Border radius | `rounded-xl` |
| Backdrop filter | `blur(12px)` |
| Avatar | 48px circular uploaded portrait |
| Quote | 18px italic; one amber highlighted phrase |
| Link | Marek's LinkedIn recommendations page |

## Icon Container (Category)

| Property | Value |
|----------|-------|
| Size | `60 × 60px` |
| Border radius | `rounded-2xl` |
| Background | `hsl(var(--pres-accent) / 0.12)` |
| Border | `1px solid hsl(var(--pres-accent) / 0.25)` |
| Icon | `Users` 30px, accent color |
