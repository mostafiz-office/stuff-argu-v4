# Slide 11 — CTA (Call to Action)

**Version:** 1.1.0  
**Updated:** 2026-09-23  
**Component:** `PricingCTASlide`  
**File:** `src/slides/PricingCTASlide.tsx`

---

## Purpose

Final slide. Large headline CTA with "Schedule a Call" linking to the meeting page. QR code appears on the right. Contact email and a separate "Call Now" hiring action appear below the CTA.

---

## Layout

| Zone | Position | Content |
|------|----------|---------|
| Background | Full slide | `.slide-dark-bg` + dot pattern (radial gradient, masked) + large center glow |
| Center content | Flex centered, `gap: 20` | Left: text block + CTA; Right: QR code |
| Bottom accent | `bottom: 0` | 4px gradient line |

---

## Content Data

### Pre-headline
```
Ready to Start?
```
(18px Poppins, uppercase, 0.2em spacing)

### Headline
```
Let's Build Your Dream Team
```
(72px Ubuntu bold)

### Body
```
Schedule a 15-minute call. We'll match you with the right talent within days.
```

### CTA Button
| Label | URL | Style |
|-------|-----|-------|
| 📅 Schedule a Call → | `https://meet.rasia.pro/intro-call` | Filled accent pill, 20px, opens new tab |

### Contact Info
| Channel | Value |
|---------|-------|
| Email | contact@riseup-asia.com |
| Call Now | `https://client.rasia.pro/hiring-v1` |

### QR Code
- Image: `src/assets/qr-code.png`
- Size: 280×280px with white background padding
- Label: "Scan to connect"
- Container: rounded, border accent/0.2, bg-card/0.5

---

## Animations

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Pre-headline | fade(0) | 0s | 0.7s |
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

### Assets
- `qr-code.png` — QR code image

### Icons (lucide-react)
`CalendarCheck`, `Mail`, `Phone`, `ArrowRight`

---

## Cross-References

| Reference | Location |
|-----------|----------|
| How It Works | [08-how-it-works.md](./08-how-it-works.md) |
| Starter Tier V9 | [10-starter-tier-v9.md](./10-starter-tier-v9.md) |
