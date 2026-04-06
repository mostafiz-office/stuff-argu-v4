# Slide 8 — CTA (Call to Action)

**Component:** `src/slides/PricingCTASlide.tsx`

---

## Layout

Centered flex layout with two sections side by side (gap 20):

- **Left (700px)**: CTA text content
- **Right**: QR code card

## Left — CTA Content

1. **Label**: "Ready to Start?" uppercase (18px Poppins, dim)
2. **Heading**: "Let's Build Your Dream Team" (72px Ubuntu, "Dream Team" in accent)
3. **Subtitle**: "Schedule a 15-minute call..." (22px Poppins muted)
4. **CTA Button**: `<a>` linking to `https://client.rasia.pro/hiring-v1`
   - Accent background, dark text, rounded-full (50px radius)
   - CalendarCheck icon + "Schedule a Call" + ArrowRight
5. **Contact info row**: Mail + email, Phone + number

## Right — QR Code

- Card with blurred surface background + accent border
- `@/assets/qr-code.png` (280×280, white padding, rounded)
- "Scan to connect" caption below

## Background Effects

- Dot pattern (full slide, accent 0.06, radial mask 80%)
- Large centered glow (accent 0.1, blurred 80px, 1000×700)
- Bottom accent gradient line (4px)

## Animations

- All elements use `fade(0–4)` for sequential entrance
- QR code uses `fade(3)` (appears with CTA button)

## Assets

| Asset | Path |
|-------|------|
| QR Code | `@/assets/qr-code.png` |
