# Slide 05 — Components
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader
    ├── div (bg glow)
    ├── motion.div (title block)
    ├── motion.div (Alim photo card)
    ├── div (value stat cards × 3)
    ├── motion.div (tier value panel — horizontal equation rows)
    │   ├── div (header: ✨ TOTAL VALUE YOU RECEIVE)
    │   └── div (flex-col gap-2)
    │       └── motion.div × 4 (tier equation rows)
    │           ├── span (tier name, 200px min-width)
    │           ├── span (you pay price, 18px)
    │           ├── span (+ sign)
    │           ├── span.rounded-full (bonus pill, amber bg)
    │           ├── ArrowRight icon (→)
    │           ├── span (total value, 24px bold accent)
    │           ├── span.rounded-full (hours badge)
    │           └── span? (⏳ limited badge, Starter only)
    └── motion.p (tagline)
```
## Layout: Each tier is a single horizontal row with visual equation flow: `Price + Bonus → Total`
