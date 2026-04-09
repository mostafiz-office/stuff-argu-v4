# Design Principles

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

These principles define the visual philosophy. They are non-negotiable — every slide, component, and future extension must follow them.

---

## 1. Variable-Driven, Never Hardcoded

**Rule:** Every color that appears in a component MUST reference a CSS custom property.

```tsx
/* ✅ CORRECT */
color: "hsl(var(--pres-accent))"
background: "hsl(var(--pres-bg-surface))"

/* ❌ WRONG — hardcoded values */
color: "#FFAD01"
background: "#1a1a2e"
```

**Exception:** Cost savings slide uses per-tier colors (`#ef4444`, `#7c3aed`, `#ec4899`, `#f97316`) for visual differentiation — these are data-driven palette colors, not theme tokens.

---

## 2. HSL Color Model

All colors use **HSL** format stored as space-separated values without the `hsl()` wrapper:

```css
--pres-accent: 41 100% 50%;   /* NOT: hsl(41, 100%, 50%) */
```

This allows opacity modifiers:

```tsx
background: "hsl(var(--pres-accent) / 0.12)"   /* 12% opacity accent */
```

---

## 3. Semantic Token Naming

Tokens are named by **purpose**, not by color:

| ✅ Semantic | ❌ Literal |
|------------|-----------|
| `--pres-accent` | `--amber` |
| `--pres-bg` | `--dark-blue` |
| `--pres-text-muted` | `--gray` |

---

## 4. Fixed Canvas Architecture

All slides are designed at exactly **1920×1080 pixels**. The `ScaledSlide` component calculates a CSS `transform: scale()` factor to fit the viewport while preserving aspect ratio. Coordinates in slide components are always in the 1920×1080 coordinate space.

---

## 5. Absolute Positioning for Slide Elements

Slide elements use absolute positioning within the 1920×1080 canvas:

```tsx
className="absolute left-[80px] top-[90px] z-10"
```

Standard margins: `left: 80px`, `right: 80px`, `top: 90px`, `bottom: 60–80px`.

---

## 6. Dark-Only Theme

The presentation uses a single dark theme. There is no light mode toggle. The background is near-black with greenish undertones (`240 20% 4%`), and the primary accent is brand amber (`41 100% 50%`, `#FFAD01`).

---

## 7. Framer Motion for All Animation

All animations use Framer Motion's declarative API:

```tsx
const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" },
});

<motion.h1 {...fade(0)}>Title</motion.h1>
```

**No CSS `@keyframes` for content animation** — only CSS is used for structural effects (`.rec-card` hover, `.nav-dot` transitions, `.slide-dark-bg::before` texture).

---

## 8. Component Consistency

Every slide follows the same structural pattern:
1. `<ScaledSlide>` wrapper
2. `.slide-dark-bg` background container
3. `<SlideHeader />` for brand logo
4. Content elements with absolute positioning and `z-10`
