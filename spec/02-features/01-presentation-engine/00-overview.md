# Presentation Engine

**Version:** 1.0.0  
**Updated:** 2026-04-04  
**Status:** Complete

---

## Overview

The presentation engine is the core runtime that manages slide transitions, keyboard/click navigation, URL synchronization, and the viewport scaling system. It renders one slide at a time with animated transitions between slides.

---

## Dependencies

- `PresentationEngine.tsx` — Main engine component
- `ScaledSlide.tsx` — 1920×1080 → viewport scaling wrapper
- `SlideNavigation.tsx` — Navigation controls (arrows, dots, keyboard)
- `SlideHeader.tsx` — Logo overlay

---

## Files

| # | File | Description |
|---|------|-------------|
| 01 | [01-backend.md](./01-backend.md) | State management, URL sync, transition logic |
| 02 | [02-frontend.md](./02-frontend.md) | UI components, scaling, navigation controls |

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Feature Index | [../00-overview.md](../00-overview.md) |
| Fundamentals | [../../01-fundamentals.md](../../01-fundamentals.md) |
