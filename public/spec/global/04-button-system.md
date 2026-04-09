# Global Button System

> **Source**: `SlideNavigation.tsx`, various slide components.

## 1. Primary CTA Button

Used on cover slides and CTA slide.

| Property | Value |
|----------|-------|
| Padding | `14px 36px` |
| Border radius | `50px` (pill shape) |
| Background | `hsl(var(--pres-accent))` solid |
| Text color | `hsl(var(--pres-bg))` (dark on amber) |
| Font | Poppins, 18px, SemiBold (600) |
| Icon | Right-aligned ArrowRight, 20px |
| Display | `inline-flex items-center gap-10` |

## 2. Secondary / Outline Button

Used as alternative CTA (e.g., "View Tiers" on Cover V3).

| Property | Value |
|----------|-------|
| Padding | `14px 24px` |
| Border radius | `50px` |
| Background | Transparent |
| Border | `1.5px solid hsl(var(--pres-accent) / 0.3)` |
| Text color | `hsl(var(--pres-accent))` |
| Font | Poppins, 16px, Medium (500) |

## 3. Navigation Icon Buttons (HUD)

| Property | Value |
|----------|-------|
| Size | `40px × 40px` |
| Shape | `rounded-full` |
| Background | Transparent → `hsl(0 0% 100% / 0.1)` on hover |
| Icon color | `hsl(0 0% 100% / 0.9)` → `hsl(var(--pres-accent))` on hover |
| Icon size | `18–20px` |

## 4. Navigation Dots (Bottom Bar)

| Property | Value |
|----------|-------|
| Inactive dot | `8px × 8px` circle, `bg-pres-text-dim` |
| Active dot | `32px × 8px` pill, `bg-pres-accent` |
| Transition | `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` |
| Spacing | `gap: 8px` |

## 5. Keyword Pill Badge

Used on cover slides for floating keyword indicators.

| Property | Value |
|----------|-------|
| Padding | `8–10px 18–26px` |
| Border radius | `20–24px` |
| Background | `hsl(var(--pres-accent) / 0.1)` or `hsl(var(--pres-bg-surface) / 0.9)` |
| Border | `1–1.5px solid hsl(var(--pres-accent) / 0.25–0.3)` |
| Text | Poppins, 16–20px, SemiBold, accent or white |
| Icon | CheckCircle, 15–19px |

## 6. Hours/Tag Badge

Used on tier cards for "160 hrs/month" indicator.

| Property | Value |
|----------|-------|
| Padding | `px-3 py-1.5` |
| Border radius | `rounded-lg` |
| Background | `hsl(var(--pres-accent) / 0.08)` |
| Border | `1px solid hsl(var(--pres-accent) / 0.15)` |
| Text | Poppins, 16px, SemiBold, accent color |
