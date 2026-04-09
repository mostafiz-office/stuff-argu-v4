# Specification Root — RiseUp Asia Pricing Deck

**Version:** 1.0.0  
**Updated:** 2026-04-09  
**AI Confidence:** Production-Ready  
**Ambiguity:** None

---

## Purpose

Root index for the RiseUp Asia pricing deck presentation specification. This spec tree documents every visual element, animation, layout coordinate, and content data structure used across the 11-slide pricing deck built with React 18, Vite, Tailwind CSS, and Framer Motion.

---

## Module Inventory

| # | Module | Description |
|---|--------|-------------|
| 01 | [Design System](./01-design-system/00-overview.md) | Theme variables, typography, motion patterns, slide components |
| 02 | [Slides](./02-slides/00-overview.md) | Per-slide specifications for all 11 active pricing deck slides |

---

## Technology Stack

| Technology | Version | Role |
|-----------|---------|------|
| React | 18.3 | UI framework |
| Vite | 5.x | Build tool |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility styles |
| Framer Motion | 12.x | Animation library |
| Lucide React | 0.462 | Icon system |

---

## Supporting Files

| File | Purpose |
|------|---------|
| [spec-index.md](./spec-index.md) | Flat index of all spec files |
| [99-consistency-report.md](./99-consistency-report.md) | Spec tree health and consistency |

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Source CSS Variables | `src/index.css` |
| Tailwind Config | `tailwind.config.ts` |
| Slide Deck Entry | `src/pages/Index.tsx` |
| Presentation Engine | `src/components/presentation/PresentationEngine.tsx` |
