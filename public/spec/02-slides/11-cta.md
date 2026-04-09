# Slide 11 — CTA (Call to Action)

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Component:** `PricingCTASlide`  
**File:** `src/slides/PricingCTASlide.tsx`

---

## Purpose

Final conversion slide with large headline, CTA button linking to scheduling page, contact details, and QR code for instant access.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + dot pattern (masked) + large center glow |
| Content | Centered (flex) | Left text + Right QR code, gap-20 |
| Bottom line | `bottom: 0` | 4px accent gradient |

---

## Content Data

### Left Column (maxWidth: 700)
- Pre-title: "Ready to Start?" (18px, dim, uppercase, 0.2em spacing)
- Headline: `"Let's Build Your\nDream Team"` (72px Ubuntu Bold)
- "Dream Team" in accent
- Body: `"Schedule a 15-minute call. We'll match you with the right talent within days."` (22px)

### CTA Button
- Text: "Schedule a Call"
- Icons: CalendarCheck + ArrowRight
- Style: Primary amber button, 50px radius, 20px Poppins Bold
- Link: `https://client.rasia.pro/hiring-v1` (target: _blank)

### Contact Info
| Channel | Icon | Value |
|---------|------|-------|
| Email | Mail | contact@riseup-asia.com |
| Phone | Phone | +1 (567) 978 1833 |

### QR Code (Right)
- Image: `src/assets/qr-code.png`
- Size: 280×280px
- Container: 14px padding, rounded-20, bg-card 50%, accent border 20%
- Caption: "Scan to connect" (15px dim)

---

## Background Effects

### Dot Pattern
```tsx
backgroundImage: "radial-gradient(circle 1.2px, accent 6%, transparent)"
backgroundSize: "14px 14px"
maskImage: "radial-gradient(ellipse 80% 80%, black 20%, transparent 65%)"
```

### Center Glow
- Size: 1000×700px
- Intensity: accent 10%
- Blur: 80px

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Pre-title | fade(0) | 0s | 0.7s |
| Headline | fade(1) | 0.2s | 0.7s |
| Body | fade(2) | 0.4s | 0.7s |
| CTA button | fade(3) | 0.6s | 0.7s |
| Contact info | fade(4) | 0.8s | 0.7s |
| QR code | fade(3) | 0.6s | 0.7s |

---

## Component Dependencies

| Component | Source |
|-----------|--------|
| `ScaledSlide` | `@/components/presentation/ScaledSlide` |
| `SlideHeader` | `@/components/presentation/SlideHeader` |

### Icons
`CalendarCheck`, `Mail`, `Phone`, `ArrowRight`

### Assets
| Asset | Path |
|-------|------|
| QR Code | `src/assets/qr-code.png` |
