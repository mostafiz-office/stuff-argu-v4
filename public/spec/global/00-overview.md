# Global Design System — Staff Augmentation Pricing Deck

> **Scope**: Single source of truth for every shared design token, pattern, and interaction used across all slides.  
> **Purpose**: Any AI agent creating or modifying a slide MUST read this folder first. Slide-specific specs inherit from and reference these globals — they only document overrides.

## File Index

| # | File | Purpose |
|---|------|---------|
| 01 | `01-color-tokens.md` | All HSL CSS custom properties and opacity conventions |
| 02 | `02-typography.md` | Font families, weight scale, size scale |
| 03 | `03-spacing-layout.md` | Canvas dimensions, padding system, z-index layers, grid |
| 04 | `04-button-system.md` | All button variants, pill styles, icon buttons |
| 05 | `05-animation-system.md` | Framer Motion defaults, spring presets, CSS keyframes |
| 06 | `06-hover-interactions.md` | Hover states for cards, buttons, links, nav elements |
| 07 | `07-glass-card-system.md` | Glass card, accent bar, metric glow, chart bar styles |
| 08 | `08-navigation-hud.md` | Top-right control bar, bottom dot nav, keyboard shortcuts |
| 09 | `09-noise-texture.md` | Noise overlay, halftone dot pattern, slide background |
| 10 | `10-slide-template.md` | How to create a new slide spec that references globals |
| 11 | `11-font-loading.md` | Google Fonts `<link>` tags, weights, display strategy |
| 12 | `12-tailwind-config.md` | Tailwind class-to-CSS-variable mapping |
| 13 | `13-transition-cycle.md` | Slide-to-slide transition type cycle order and direction logic |
| 14 | `14-export-system.md` | Download panel, PDF/image export, capture settings |
| 15 | `15-toast-system.md` | Sonner toast notifications — all messages and variants |
| 16 | `16-animation-rules.md` | CSS vs Framer Motion decision matrix, anti-patterns |
| 17 | `17-asset-preloading.md` | Background image preloading, batch timing |

## How Slide Specs Reference Globals

Every slide-specific file (e.g., `slide-01/02-color-tokens.md`) should begin with:

```
> Inherits: `global/01-color-tokens.md`
> Overrides: none | list specific overrides
```

If a global token is changed (e.g., `--pres-accent` from amber to blue), all slide specs automatically reflect the new value because they reference this file rather than duplicating values.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript 5 |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animation | Framer Motion 12 |
| Build | Vite 5 |
| Fonts | Google Fonts (Ubuntu, Poppins) |
| Toasts | Sonner |
| Export | html2canvas (client-side) |

---

## ⚠️ MANDATORY Global Layers Checklist

**Every slide reproduction MUST include these global layers.** They are rendered by the Presentation Engine, NOT by individual slide components.

| # | Layer | Source | Applied By |
|---|-------|--------|------------|
| 1 | **`.slide-dark-bg` background** | `09-noise-texture.md` §2 | Each slide's root `<div>` uses class `slide-dark-bg` |
| 2 | **`.slide-dark-bg::before` halftone** | `09-noise-texture.md` §3 | CSS pseudo-element — automatic when class is applied |
| 3 | **`.noise-overlay` grain** | `09-noise-texture.md` §1 | Single `<div class="noise-overlay">` rendered by PresentationEngine, above all slides |
| 4 | **Navigation HUD (top bar)** | `08-navigation-hud.md` §1 | `SlideNavigation` component rendered by PresentationEngine (fixed position, z-50) |
| 5 | **Navigation dots (bottom)** | `08-navigation-hud.md` §2 | Same `SlideNavigation` component — bottom dot strip with tooltips |
| 6 | **Keyboard & touch navigation** | `08-navigation-hud.md` §5–6 | Event listeners in `SlideNavigation` |
| 7 | **Slide-to-slide transitions** | `13-transition-cycle.md` | `AnimatePresence` in PresentationEngine |

**If any of these are missing, the reproduction is incomplete.**

---

## Architecture: Engine vs Slide Components

```
PresentationEngine.tsx          ← Renders global layers (noise, nav HUD, transitions)
├── <div class="noise-overlay">  ← Film grain (always visible)
├── <AnimatePresence>            ← Slide transitions
│   └── <SlideComponent />       ← Individual slide (uses .slide-dark-bg)
│       └── div.slide-dark-bg    ← Dark bg + halftone ::before pseudo
├── <SlideNavigation />          ← Top bar + bottom dots (fixed, z-50)
```

Each slide component is responsible for:
- Applying `slide-dark-bg` class to its root container
- Its own content, decorative layers (slide-specific glows, patterns)
- SlideHeader (logo)

The Engine is responsible for:
- Noise overlay
- Navigation HUD
- Slide transitions
- Keyboard/touch handlers
