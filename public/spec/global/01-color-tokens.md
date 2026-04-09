# Global Color Tokens

> **Source of truth**: `src/index.css` `:root` block and `tailwind.config.ts` `colors` extension.  
> All values are HSL triplets (no `hsl()` wrapper). Use as `hsl(var(--token))` in CSS or via Tailwind classes.

## 1. Presentation Semantic Tokens (`--pres-*`)

These are the primary design tokens for all slide content.

| Token | HSL Value | Tailwind Class | Description |
|-------|-----------|----------------|-------------|
| `--pres-bg` | `240 20% 4%` | `bg-pres-bg` | Deep navy-black — canvas background |
| `--pres-bg-surface` | `240 17% 8%` | `bg-pres-surface` | Elevated surface (cards, panels) |
| `--pres-bg-card` | `240 15% 11%` | `bg-pres-card` | Card interior / nested surfaces |
| `--pres-accent` | `41 100% 50%` | `text-pres-accent` | **Primary amber** `#FFAD01` — brand color |
| `--pres-accent-glow` | `41 100% 65%` | `text-pres-accent-glow` | Lighter amber for gradients and glow |
| `--pres-accent-dark` | `33 100% 40%` | `text-pres-accent-dark` | Darker amber for gradient endpoints |
| `--pres-text` | `0 0% 100%` | `text-pres-text` | Pure white — headings and primary text |
| `--pres-text-muted` | `218 11% 65%` | `text-pres-text-muted` | Light grey — secondary text, descriptions |
| `--pres-text-dim` | `220 9% 46%` | `text-pres-text-dim` | Dark grey — tertiary text, labels |

## 2. Shadcn/UI Base Tokens

Mapped to the presentation palette for component consistency.

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `240 20% 4%` | Root `<body>` background |
| `--foreground` | `0 0% 100%` | Default text color |
| `--card` | `240 17% 8%` | Card component background |
| `--card-foreground` | `0 0% 100%` | Card text |
| `--primary` | `41 100% 50%` | Primary action color (amber) |
| `--primary-foreground` | `240 20% 4%` | Text on primary buttons |
| `--secondary` | `240 10% 14%` | Secondary surfaces |
| `--secondary-foreground` | `0 0% 100%` | Text on secondary surfaces |
| `--muted` | `240 10% 14%` | Muted backgrounds |
| `--muted-foreground` | `218 11% 65%` | Muted text |
| `--accent` | `41 100% 50%` | Accent = same as primary (amber) |
| `--accent-foreground` | `240 20% 4%` | Text on accent |
| `--destructive` | `0 84.2% 60.2%` | Error/destructive actions |
| `--border` | `240 10% 18%` | Default border color |
| `--input` | `240 10% 18%` | Input borders |
| `--ring` | `41 100% 50%` | Focus ring color |
| `--radius` | `0.75rem` | Base border radius |

## 3. Opacity Conventions

| Use Case | Opacity | Example |
|----------|---------|---------|
| Active UI element | `1.0` | Primary text |
| Logo on dark slide | `0.8` | `opacity-80` on SlideHeader |
| Muted label | `0.7` | Slide counter `text-white/70` |
| Subtle border | `0.08–0.15` | Glass card borders |
| Background pattern | `0.07` | Halftone dot overlay |
| Noise texture | `0.03` | Film grain overlay |

## 4. Gradient Recipes

| Name | CSS | Usage |
|------|-----|-------|
| **Accent gradient** | `linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))` | Primary CTA buttons |
| **Glass surface** | `linear-gradient(135deg, hsl(var(--pres-bg-surface) / 0.8), hsl(var(--pres-bg-card) / 0.6))` | `.glass-card` |
| **Chart bar** | `linear-gradient(180deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-dark)))` | `.chart-bar` |
| **Accent bar** | `linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))` | `.accent-bar` |

## 5. Capture Background

For image/PDF export: `#0a0a12` (matches `--pres-bg` at `240 20% 4%`).

## 6. Changing the Brand Color

To rebrand from amber to another hue, update these three tokens in `:root`:

```css
--pres-accent: <H> 100% 50%;
--pres-accent-glow: <H> 100% 65%;
--pres-accent-dark: <H-8> 100% 40%;
```

Also update `--primary`, `--accent`, `--ring`, `--sidebar-primary`, `--sidebar-ring` to match.
