# Borders & Shapes

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

Border and shape rules for cards, badges, buttons, and decorative elements.

---

## Card Styles

| Card Type | Border Radius | Border | Background |
|-----------|--------------|--------|------------|
| Standard card | `rounded-2xl` (16px) | `1px solid hsl(var(--pres-accent) / 0.1)` | `hsl(var(--pres-bg-surface))` |
| Featured card | `rounded-2xl` (16px) | `2px solid hsl(var(--pres-accent) / 0.4)` | Gradient: accent 10% → surface |
| Glass card | `24px` | `1px solid hsl(var(--pres-accent) / 0.08)` | Glass: surface 80% + card 60%, blur 20px |
| Hover card (cover) | `rounded-xl` (12px) | `1.5px solid hsl(var(--pres-accent) / 0.4)` | `hsl(var(--pres-bg) / 0.85)`, blur 12px |
| Guarantee card | `rounded-xl` (12px) | `1px solid hsl(var(--pres-accent) / 0.1)` | `hsl(var(--pres-bg-surface))` |
| Urgency CTA | `rounded-xl` (12px) | `1.5px solid hsl(25 95% 53% / 0.35)` | Gradient orange 12% → accent 8% |

---

## Badge / Pill Styles

| Type | Border Radius | Background | Border |
|------|--------------|------------|--------|
| Hours badge | `rounded-lg` (8px) | `hsl(var(--pres-accent) / 0.08)` | `1px solid hsl(var(--pres-accent) / 0.15)` |
| Keyword pill | `20–24px` | `hsl(var(--pres-bg-surface) / 0.9)` | `1px solid hsl(var(--pres-text-muted) / 0.25)` |
| Savings badge | `rounded-full` | Tier color | — |
| Best Value tag | `rounded-full` | `hsl(142 70% 45%)` | — |
| Premium tag | `rounded-full` | Gradient purple 60% → pink 55% | — |
| Time badge | `rounded-full` | `hsl(var(--pres-accent) / 0.1)` | `1px solid hsl(var(--pres-accent) / 0.2)` |

---

## Button Styles

| Button | Border Radius | Background | Text Color |
|--------|--------------|------------|------------|
| Primary CTA | `50px` (pill) | `hsl(var(--pres-accent))` | `hsl(var(--pres-bg))` (dark) |
| Secondary CTA | `50px` (pill) | Transparent | `hsl(var(--pres-accent))` |
| CTA border | — | — | `1.5px solid hsl(var(--pres-accent) / 0.3)` |

---

## Decorative Elements

| Element | Description |
|---------|-------------|
| Accent bar | 4px height, gradient `--pres-accent → --pres-accent-glow`, 2px radius |
| Bottom accent line | Full-width, 4px, gradient `transparent → accent → transparent` |
| Table separator | `2px solid hsl(var(--pres-accent) / 0.3)` (header), `1px solid hsl(var(--border) / 0.5)` (rows) |
| Timeline connector | 3px height, gradient `accent → accent/0.2`, full-width |
| Step circle | 80px, `rounded-full`, 3px solid accent, glow shadow |

---

## Icon Containers

| Type | Size | Background | Border Radius |
|------|------|------------|---------------|
| Large icon box | 60–70px | `hsl(var(--pres-accent) / 0.12)` | `rounded-2xl` (16px) |
| Medium icon box | 44–52px | `hsl(var(--pres-accent) / 0.12)` | `rounded-xl` (12px) |
| Small icon box | 44px | `hsl(var(--pres-accent) / 0.1)` | `rounded-lg` (8px) |
| Step circle | 80px | `hsl(var(--pres-bg-surface))` | `rounded-full` |
