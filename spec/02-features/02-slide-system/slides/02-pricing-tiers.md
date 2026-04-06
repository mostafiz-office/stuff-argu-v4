# Slide 2 — Pricing Tiers

**Component:** `src/slides/PricingTiersSlide.tsx`

---

## Layout

- **Top**: "Choose Your Plan" heading (68px) + subtitle
- **Body**: 3-column grid of tier cards (`left:80, right:80, top:240, bottom:80`)
- Background: 45° crosshatch pattern (accent, 0.03 opacity)

## Tier Cards (3)

Each card is wrapped in `<HoverVideoPreview>` (YouTube hover preview) and contains:

| Field | Tier 1 — Growth | Tier 2 — Skilled | Tier 3 — Leadership |
|-------|-----------------|------------------|---------------------|
| Experience | 2-3+ Years | 7-15+ Years | 7-15+ Years |
| Price | $4,299/mo | $6,800–$8,000/mo | $7,500–$10,000/mo |
| Badge | ⭐ MOST POPULAR | 🏆 BEST VALUE | 👑 PREMIUM |
| Badge color | Accent | Green (`142 71% 45%`) | Purple gradient (`280→320`) |
| Border | Accent | Green | Purple |
| Background | Accent gradient 0.1→surface | Green gradient 0.12→surface | Purple gradient 0.12→surface |
| Features | 4 items | 4 items | 4 items |

### Card Sub-components

- **RocketAnimation** (`intensity={1|2|3}`): Animated rockets that appear, wait 3s on pad, then launch at different speeds (Tier 3 fastest → Tier 1 slowest). 15s cycle with repeat.
- **Premium Add-on box**: Alim Ul Karim — $625/hr, $50,000/mo, 4h/day
- **HoverVideoPreview**: YouTube ID `uveR9C5CgSY`, position varies per column

## RocketAnimation Component

**File:** `src/components/presentation/RocketAnimation.tsx`

Three tier-specific rockets with unique colors:
- Tier 1: Blue (`#38bdf8`)
- Tier 2: Green (`#4ade80`)  
- Tier 3: Purple (`#a78bfa`)

Animation sequence (15s cycle):
1. **0–0.15s**: Appear instantly at bottom (`bottom: -60px`)
2. **0–3s**: Stationary on pad with vibration (`x` shake) and pulsing glow
3. **3s → variable**: Launch upward (-560px). Tier 3 arrives at 35%, Tier 2 at 45%, Tier 1 at 55% of duration
4. **Hover at top**: Remain visible until 90% mark
5. **Fade out**: 90–100%

Sub-elements: launch pad glow, smoke particles (5), glow halo, rocket image, flame trail

## Assets

| Asset | Path |
|-------|------|
| Rocket Tier 1 | `@/assets/rocket-tier1.png` |
| Rocket Tier 2 | `@/assets/rocket-tier2.png` |
| Rocket Tier 3 | `@/assets/rocket-tier3.png` |
