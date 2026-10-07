# Global Hover Interactions

> **Source**: `src/index.css` (`.rec-card`), `SlideNavigation.tsx`, various slide components.

## 1. Card Hover (`.rec-card`)

### Default State

| Property | Value |
|----------|-------|
| Transform | `translateZ(0)` (GPU layer) |
| Cursor | `pointer` |
| Transition | `transform 0.3s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s` |

### Hover State

| Property | Value |
|----------|-------|
| Transform | `scale(1.06) translateY(-8px) translateZ(0)` |
| Border | `hsl(var(--pres-accent) / 0.6)` |
| Box shadow | `0 16px 52px hsl(var(--pres-accent) / 0.18), 0 0 36px hsl(var(--pres-accent) / 0.1)` |
| Background | `hsl(var(--pres-bg) / 0.88)` |

### Child Element Hover Effects

| Child | Class | Hover Change |
|-------|-------|-------------|
| Avatar image | `.rec-card-avatar` | `scale(1.12)`, amber border, amber glow |
| Name text | `.rec-card-name` | Color → `hsl(var(--pres-accent))` |
| Title text | `.rec-card-title` | Color → `hsl(var(--pres-text))` |
| Quote text | `.rec-card-quote` | Color → `hsl(var(--pres-text))` |
| Badge | `.rec-card-badge` | Background intensity increase, `scale(1.06)` |
| Arrow icon | `.rec-card-arrow` | `translateX(4px)`, `opacity: 1` |

## 2. HoverCard Component (Cover V3)

Expandable card with grid-template-rows animation:

| Property | Default | Hover |
|----------|---------|-------|
| Background | `hsl(var(--pres-bg) / 0.85)` | `hsl(var(--pres-accent) / 0.12)` |
| Border | `1.5px solid hsl(var(--pres-accent) / 0.4)` | `1.5px solid hsl(var(--pres-accent) / 0.7)` |
| Content height | `gridTemplateRows: "0fr"` | `gridTemplateRows: "1fr"` |
| Transition | `background 0.35s ease, border-color 0.35s ease` |

## 3. Icon Button Hover (HUD)

| State | Text Color | Background |
|-------|-----------|------------|
| Default | `hsl(0 0% 100% / 0.9)` | Transparent |
| Hover | `hsl(var(--pres-accent))` | `hsl(0 0% 100% / 0.1)` |

HUD controls also move up by `1px` on hover and scale to `0.92` while pressed. Navigation dots enlarge to `1.35×`. All keyboard-focusable controls use a visible amber `3px` focus ring.

## 4. Keyword Badge Hover (Cover V1 — Framer Motion)

| Property | Default | Hover |
|----------|---------|-------|
| Scale | 1.0 | 1.18 |
| Y offset | 0 | -10px |
| Box Shadow | `0 0 8px hsl(var(--pres-accent) / 0.15)` | `0 0 35px hsl(var(--pres-accent) / 0.55)` |

## 5. Presentation Actions

`.presentation-action` is the shared CTA treatment. It lifts by `3px` and scales to `1.015` on hover, then compresses to `0.98` while pressed. Informational cards use restrained border, background, and shadow responses; video playback must never be triggered by hover.
