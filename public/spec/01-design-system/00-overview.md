# Design System — RiseUp Asia Presentation

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**Status:** Active  
**AI Confidence:** Production-Ready  
**Ambiguity:** Low

---

## Overview

This is the **canonical design system specification** for the RiseUp Asia pricing deck presentation. It defines all visual behavior, color tokens, typography rules, motion patterns, and component construction guidance. Any AI agent or human contributor reading this specification should be able to:

1. **Reproduce** the current visual language on any slide
2. **Extend** the system with new slides that remain visually consistent
3. **Re-theme** the entire presentation by changing centralized CSS custom property values

The design system follows a **variable-driven architecture**: all colors are defined as CSS custom properties (HSL format) in `src/index.css`. Components reference semantic tokens via `hsl(var(--token))` — never hardcoded color values.

All animations use **Framer Motion** — the presentation is a React SPA with a 1920×1080 fixed canvas that scales to fit any viewport.

---

## Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Variable-First** | Every color references a CSS custom property. No hardcoded hex/rgb in components. |
| **HSL Color Model** | All colors use HSL format for easy theme derivation. |
| **Framer Motion** | All animations use Framer Motion's `motion` components with declarative `initial`/`animate`/`transition` props. |
| **Fixed Canvas** | All slides are authored at 1920×1080px and scaled via CSS transform to fit the viewport. |
| **Semantic Tokens** | Colors named by purpose (`--pres-accent`, `--pres-text-muted`), not by value. |
| **Dark-Only** | The presentation has a single dark theme — no light mode. |

---

## File Inventory

| # | File | Category | Description |
|---|------|----------|-------------|
| 00 | [00-overview.md](./00-overview.md) | Overview | This file — design system entry point |
| 01 | [01-design-principles.md](./01-design-principles.md) | Principles | Visual philosophy and consistency rules |
| 02 | [02-theme-variable-architecture.md](./02-theme-variable-architecture.md) | Theme | Complete CSS custom property registry |
| 03 | [03-typography.md](./03-typography.md) | Typography | Font stacks, size hierarchy, weight rules |
| 04 | [04-spacing-layout.md](./04-spacing-layout.md) | Layout | 1920×1080 canvas, slide positioning, grid patterns |
| 05 | [05-borders-shapes.md](./05-borders-shapes.md) | Borders | Border thickness, radius, card styles |
| 06 | [06-motion-transitions.md](./06-motion-transitions.md) | Motion | Framer Motion patterns, fade/stagger/spring animations |
| 07 | [07-slide-components.md](./07-slide-components.md) | Components | ScaledSlide, SlideHeader, HoverVideoPreview, RocketAnimation |
| 08 | [08-slide-backgrounds.md](./08-slide-backgrounds.md) | Backgrounds | `.slide-dark-bg`, halftone texture, glow effects |
| 97 | [97-acceptance-criteria.md](./97-acceptance-criteria.md) | Testing | Testable criteria for design compliance |
| 99 | [99-consistency-report.md](./99-consistency-report.md) | Meta | Consistency validation report |

---

## Cross-References

| Reference | Location |
|-----------|----------|
| CSS Variables Source | `src/index.css` |
| Tailwind Config | `tailwind.config.ts` |
| Slides Spec | `../02-slides/00-overview.md` |
