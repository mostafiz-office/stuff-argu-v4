# Slide 05 — Components
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader
    ├── div (bg glow)
    ├── motion.div (title block)
    ├── motion.div (Alim photo card)
    ├── div (value stat cards × 3)
    ├── motion.div (FREE bonus panel — per-tier rows)
    │   ├── div (header: 🎁 FREE EXPERT BONUS INCLUDED WITH EVERY TIER)
    │   └── div (flex-col gap-2)
    │       └── motion.div × 4 (tier bonus rows)
    │           ├── span (tier name, 200px min-width)
    │           ├── span ("You pay" label, dim)
    │           ├── span (price, 17px)
    │           ├── ArrowRight icon (→)
    │           ├── span ("You get" label, dim)
    │           ├── span.rounded-full (FREE bonus pill, green bg, Gift icon)
    │           ├── span.rounded-full (hours badge)
    │           └── span? (⏳ limited badge, Starter only)
    └── motion.p (tagline)
```
## Layout: Each tier row shows "You pay X → You get Y FREE" — NO totals shown to avoid price confusion
## IMPORTANT: Never show combined totals (price + bonus) — it creates false impression that customer pays more
