# Slide 8 — Align Alim expert value with slide 4 ($9,999/mo)

## Problem (verified)
Slide 4 (Premium Expert Bonus, `PremiumExpertSlideV2`) shows the fixed ~10K/month expertise calculation: "Up to $10K" stat card and the "$10K/mo Expert" pill.

Slide 8 (Starter for Founders, `StarterTierSlideV9Clone`) still shows the old value **$11,999/mo** in three places:
1. Alim reveal box: "4h/day · $625/hr · **$11,999/mo** value"
2. Right-side metric card: "**$11,999** — Expert bonus included"
3. That metric card's rich tooltip: "Alim's expert oversight valued at **$11,999/mo**"

This is inconsistent with slide 4's ~10K/mo calculation.

## Change
On `src/slides/StarterTierSlideV9Clone.tsx`, replace all three `$11,999` occurrences with `$9,999` (and `$11,999/mo` with `$9,999/mo`):
- Alim box value line → "4h/day · $625/hr · $9,999/mo value"
- Metric card → "$9,999 — Expert bonus included"
- Metric tooltip → "Alim's expert oversight valued at $9,999/mo — included as a bonus with your tier"

All three state the same Alim expert value, so they change together — leaving the metric card at $11,999 would contradict the Alim box on the same slide.

No layout, animation, or gating changes. The three-step gate (Alim box → rocket → advance) stays untouched.

## Spec updates
- `public/spec/slide-10/` (this slide's spec): update `$11,999` in `data/slide-10-content.json`, `04-components.md`, and any other occurrence.
- `public/spec/slide-11/` (mirror folder for the unused `StarterTierSlideV9` variant): same `$11,999` → `$9,999` updates so the docs don't drift.

## Verification
- Playwright: open `/?slide=8`, confirm no `$11,999` remains anywhere on the slide and `$9,999/mo` appears in both the Alim box and the metric card/tooltip.
- Confirm slide 4 (`/?slide=4`) still shows "Up to $10K" / "$10K/mo Expert" unchanged.
- Build check via build-errors.log.
