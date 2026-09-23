# Slide 11 — CTA (Call to Action)

**Version:** 1.2.0  
**Updated:** 2026-09-23 (contact block restack)  
**Component:** `PricingCTASlide`  
**File:** `src/slides/PricingCTASlide.tsx`

---

## Purpose

Final slide. Large headline CTA. Below the body text, a left-aligned vertical stack: email row, "Schedule a Call" (meeting page), then a same-size "Call Now" (hiring page). QR code appears on the right.

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

### Contact Block (vertical stack, left-aligned, in this order)
| Order | Item | Style / URL |
|-------|------|-------------|
| 1 | Email — Mail icon + contact@riseup-asia.com | 17px Poppins, muted text, accent icon |
| 2 | 📅 Schedule a Call → | Filled accent pill, 20px, padding `16px 40px` → `https://meet.rasia.pro/intro-call` |
| 3 | 📞 Call Now | Filled accent pill, **same size as Schedule a Call** (20px, padding `16px 40px`), Phone icon on the left → `https://client.rasia.pro/hiring-v1` |

**Rule:** button icons must render in the button's text color (`--pres-bg`), never the accent color — an accent icon on an accent background is invisible (this hid Call Now's phone icon in v1.1.0).

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
| Email row | fade(3) | 0.6s | 0.7s |
| Schedule a Call | fade(4) | 0.8s | 0.7s |
| Call Now | fade(5) | 1.0s | 0.7s |
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
