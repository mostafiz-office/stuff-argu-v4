# Slide 07 (runtime) — Delivery Promises "What you get"

Component: `src/slides/PromiseBandsSlide.tsx` → `DeliveryPromisesSlide`. Sits immediately after the Talent Pyramid (runtime slide 6) and before Pricing Tiers (runtime slide 9).

## Layout (1920×1080)

- Eyebrow "DELIVERY" — 22px, uppercase, `tracking-[0.3em]`, amber, at left 80 / top 146.
- Title "What you get" — 92px heading, white, 14px below the eyebrow.
- Three stacked bands in a box at left/right 80, top 390, bottom 120, `justify-between`.

| Band | Statement (60px heading, bold) |
|---|---|
| 01 | Hiring solved in **15–21 days** |
| 02 | Our engineers **never** miss a deadline |
| 03 | The **shortest path** to the correct answer |

Bold = amber (`text-pres-accent`).

## Band anatomy

Amber index numeral (`.promise-band-index`, 34px, `min-width: 74px`) → 1px vertical divider (`.promise-band-rule`) → statement. Bands separated by a hairline `border-bottom` (last band's hairline is transparent).

## Hover

`.promise-band:hover` → band background `hsl(var(--pres-text) / 0.04)`, `translateY(-2px)`, soft drop shadow, amber left accent bar (`.promise-band::before`, 5px wide, 56% tall, glowing) fades in, and the numeral goes from 75% to full amber.

## Motion

Eyebrow `fadeUp(0.03)`, title `fadeUp(0.09)`, bands `fadeUp(staggerDelay(i, 0.16, 0.07))` — the last band settles ~0.6s after the slide mounts. Reduced motion is handled globally (`MotionConfig reducedMotion="user"` plus the `prefers-reduced-motion` CSS block).

## Rules

One claim per band, no supporting sentences, no icons, no emoji, no photography. Copy is the polished form of the client's six raw lines; wording lives in project memory, not here.
