# Slide 05 — Components
```
ScaledSlide
└── div.slide-dark-bg
    ├── SlideHeader
    ├── div (bg glow)
    ├── motion.div (title block)
    ├── motion.div (Alim photo card)
    ├── div (value stat cards × 3)
    └── motion.div (FREE bonus panel, width: 1148px; right edge aligned to the upper "Up to $10K" card)
        ├── div (heading row: Gift icon-box + h2 "🎁 FREE Expert Bonus — Included With Every Tier")
        ├── p (subtitle: "You pay for execution. Expert oversight is included at no extra cost.")
        └── div (flex-col gap-3)
            └── motion.div × 4 (tier bonus rows, 14px padding)
                ├── span (tier name, 200px min-width, Ubuntu 17px bold)
                ├── span ("You pay" label, dim 13px)
                ├── span (price, Poppins 18px semibold)
                ├── ArrowRight icon (→)
                ├── span ("You get" label, dim 13px)
                ├── span.rounded-full (FREE bonus pill, green bg, Gift icon, Ubuntu 17px bold)
                ├── span.rounded-full (hours badge, 12px)
                └── span? (⏳ limited badge, Starter only)
```
## Layout: Each tier row shows "You pay X → You get Y FREE" — NO totals shown
## Width alignment: Bonus panel must extend from left 120px to the same right edge as the upper right value card; do not make it narrower than the card group above
## IMPORTANT: Never show combined totals (price + bonus) — it creates false impression that customer pays more
## The tagline/message is INSIDE the bonus panel header, NOT a separate footer element — prevents overlap issues
