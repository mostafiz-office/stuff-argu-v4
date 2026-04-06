# Slide 1 — Cover

**Component:** `src/slides/PricingCoverSlide.tsx`

---

## Layout

Two-zone split:

- **Left (680px)**: Icon box, "Staff Augmentation" label, "Pricing Plans" headline (88px Ubuntu), value proposition paragraph, "Explore Plans" CTA button
- **Right**: Full-height Alim portrait photo (PNG, opacity-faded edges), positioned from `left: 580` scaled 1.25×

## Background Effects

- Dot pattern on right 55% width with radial mask (accent color, 0.14 opacity)
- Left-side radial glow (accent, 0.06 opacity, blurred 40px)
- Bottom accent gradient line (4px)

## Interactive Elements

### Skill Keyword Badges (3)
- Positioned absolutely: "AI Architecture", "15+ Yrs Engineering", "Innovation"
- Connected to center point (1020, 430) via SVG quadratic Bézier curves
- Spring entrance animation + infinite floating `y` bounce + pulsing `boxShadow`
- `whileHover` scale 1.18 + elevated glow

### LinkedIn Recommendation Cards (2)
- Konstantinos P. (top-left) and Marek Flejszman (bottom-right)
- Connected to center via dashed SVG lines
- Clickable `<a>` linking to Alim's LinkedIn recommendations
- Card: blurred backdrop, avatar, name/title, quote, "Verified" LinkedIn badge
- CSS keyframe `recCardFadeIn` entrance

## Data

- Keywords: static array `{ label, x, y }`
- Recommendations: static array `{ name, title, quote, image, x, y }`
- Alim LinkedIn URL constant

## Assets

| Asset | Path | Usage |
|-------|------|-------|
| Alim photo | `@/assets/alim-updated.png` | Right-side portrait |
| Marek photo | `@/assets/testimonials/marek-f.png` | Recommendation card |
| Konstantinos photo | `@/assets/testimonials/konstantinos-p.png` | Recommendation card |
