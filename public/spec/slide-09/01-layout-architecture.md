# Slide 09 — Layout
## Title: left: 80px, top: 90px
## Price: left: 80px, top: 170px
## Table: left: 80px, right: 80px, top: 180px (with 60px marginTop on header), bottom: 100px
## Grid: `1fr 200px`
## Scroll: `relative flex-1` parent with `absolute inset-0 overflow-y-scroll` child (matches Slide 03 TierDetailSlide pattern exactly)
## Custom scroll rail: right-2, 14px wide, with gradient thumb
## "Scroll for more" prompt: bottom fade gradient + pulsing chevrons, auto-hides at end
## Navigation clearance: 100px bottom ensures 24px+ gap above navigation dots
## HIDDEN: Both `StarterTierDetailSlide.tsx` (slide 8) and `StarterTierDetailSlideV2.tsx` (slide 9) are hidden via `hiddenSlides: [8, 9]` in presentation-config.json
