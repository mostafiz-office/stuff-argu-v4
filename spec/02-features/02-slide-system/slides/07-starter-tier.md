# Slide 7 — Starter Tier (Tier 1)

**Component:** `src/slides/StarterTierSlide.tsx`

---

## Layout

Two-column split:

- **Left (620px)**: Full pricing card wrapped in `<HoverVideoPreview>`
- **Right (flex-1)**: Savings stat, supporting text, "Ideal For" section

## Left Column — Pricing Card

Identical structure to Tier 1 card on Slide 2, but standalone and larger:

- **Badge**: 🚀 STARTER (accent background, top-right)
- **Label**: "Starter" uppercase
- **Experience**: "3+ Years Coding · 1+ Year Industry"
- **Price**: $1,900/mo (64px Ubuntu)
- **Hours**: 160 hrs/month badge
- **RocketAnimation**: `intensity={1}`
- **Features** (6 items): Staggered `x: -12→0` entrance
- **Premium Add-on**: Alim Ul Karim box (same as Slide 2 cards)

## Right Column

### Savings Stat Card
- Gradient background (accent 0.12 → surface)
- "vs US Market Rate" label with TrendingDown icon
- **76%** (56px Ubuntu accent) + "Savings" label
- Struck-through US price → arrow → RiseUp price
- Spring entrance animation (`scale: 0.8→1`)

### Supporting Text
- "Tight on budget but ready to build?" paragraph (22px Poppins)

### Ideal For Section
- Surface card with 4 rows:
  - Lightbulb: Pre-seed & seed-stage startups
  - Zap: Bootstrapped founders shipping fast
  - Target: MVPs & well-defined sprints
  - Wallet: Budget-conscious teams needing quality
- Each row: 36×36 icon box + text, staggered `x: 12→0` entrance

## Background

- Ambient radial glow (accent 0.06, blurred 80px, centered at 35% horizontal)
