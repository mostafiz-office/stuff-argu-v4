# Theme Variable Architecture

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

All visual tokens are defined as CSS custom properties in `src/index.css` under `:root`. The presentation uses a single dark theme — no `.dark` class switching.

---

## Presentation Tokens

These are the primary tokens used across all slide components:

| Token | HSL Value | Hex Approx | Purpose |
|-------|-----------|------------|---------|
| `--pres-bg` | `240 20% 4%` | `#0a0a11` | Main slide background |
| `--pres-bg-surface` | `240 17% 8%` | `#121220` | Card/surface background |
| `--pres-bg-card` | `240 15% 11%` | `#181829` | Elevated card background |
| `--pres-accent` | `41 100% 50%` | `#FFAD01` | Brand amber — primary accent |
| `--pres-accent-glow` | `41 100% 65%` | `#FFD04D` | Lighter amber for gradients |
| `--pres-accent-dark` | `33 100% 40%` | `#CC8800` | Darker amber for bar charts |
| `--pres-text` | `0 0% 100%` | `#FFFFFF` | Primary text (white) |
| `--pres-text-muted` | `218 11% 65%` | `#9BA3AF` | Secondary text |
| `--pres-text-dim` | `220 9% 46%` | `#6B7280` | Tertiary/dim text |

---

## Shadcn/Tailwind Tokens

These map to the shadcn component library and Tailwind config:

| Token | Value | Maps To |
|-------|-------|---------|
| `--background` | `240 20% 4%` | Same as `--pres-bg` |
| `--foreground` | `0 0% 100%` | Same as `--pres-text` |
| `--primary` | `41 100% 50%` | Same as `--pres-accent` |
| `--primary-foreground` | `240 20% 4%` | Dark text on accent buttons |
| `--secondary` | `240 10% 14%` | Muted surface |
| `--muted` | `240 10% 14%` | Muted backgrounds |
| `--muted-foreground` | `218 11% 65%` | Same as `--pres-text-muted` |
| `--border` | `240 10% 18%` | Default border color |
| `--ring` | `41 100% 50%` | Focus ring (amber) |
| `--radius` | `0.75rem` | Default border radius |
| `--destructive` | `0 84.2% 60.2%` | Error/delete red |

---

## Per-Tier Accent Colors

Used on the Feature Comparison slide and Cost Savings slide for visual tier differentiation:

| Tier | Color | HSL | Usage |
|------|-------|-----|-------|
| Growth (Tier 2) | Amber | `var(--pres-accent)` | Default accent |
| Skilled (Tier 3.A) | Green | `142 70% 45%` | Best value highlight |
| Leadership (Tier 3.B) | Purple | `280 60% 60%` | Premium highlight |

---

## Cost Savings Palette

Each comparison row uses a unique color pair:

| Role | US Color | RiseUp Color |
|------|----------|-------------|
| Starter | `#ef4444` (red) | `hsl(var(--pres-accent))` |
| Mid-Level | `#f97316` (orange) | `hsl(142 71% 45%)` (green) |
| Skilled | `#7c3aed` (purple) | `#a78bfa` (light purple) |
| Leadership | `#ec4899` (pink) | `#f472b6` (light pink) |

---

## Usage Pattern

```tsx
// Inline style (most common in slides)
style={{ color: "hsl(var(--pres-accent))" }}

// With opacity
style={{ background: "hsl(var(--pres-accent) / 0.12)" }}

// Tailwind class (for border utility)
className="border-border"

// Gradient
style={{ background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.7))" }}
```

---

## Variable Dependency Flow

```
┌─────────────────────────────────┐
│   src/index.css :root           │
│   --pres-bg, --pres-accent...   │
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│   tailwind.config.ts            │
│   primary: "hsl(var(--primary))"│
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│   Slide Components              │
│   hsl(var(--pres-accent))       │
│   hsl(var(--pres-bg-surface))   │
└─────────────────────────────────┘
```
