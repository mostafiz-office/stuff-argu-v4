# Slide 6 — How It Works

**Component:** `src/slides/PricingHowItWorksSlide.tsx`

---

## Layout

- **Top center**: "How It Works" heading (68px) + subtitle (centered)
- **Timeline**: Horizontal connector line at y=410 (accent gradient, 3px, animates `scaleX: 0→1`)
- **Body**: 4-column grid of step cards (centered, text-center)
- Background: -45° crosshatch pattern

## Steps (4)

| Step | Icon | Title | Time Badge |
|------|------|-------|------------|
| 01 | MessageSquare | Discovery Call | Day 1 |
| 02 | UserCheck | 7-Stage Vetting | As fast as 20 min |
| 03 | Rocket | Onboarding | Day 6–14 |
| 04 | HeartHandshake | Ongoing Support | Ongoing |

### Step Card Anatomy

1. **Circle** (80×80): Surface background, 3px accent border, accent glow shadow, icon centered
2. **Step label**: "STEP 01" uppercase, accent color, 14px
3. **Title**: Ubuntu 26px bold
4. **Description**: Poppins 17px muted
5. **Time badge**: Accent pill (rounded-full, accent bg 0.1, accent border 0.2)

## Animations

- Timeline line: `scaleX 0→1` from left, delay 0.5, duration 1s
- Step cards: staggered `y: 40→0` with `delay: 0.4 + i * 0.18`
