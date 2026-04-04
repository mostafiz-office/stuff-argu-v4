# Issues

**Version:** 1.0.0  
**Updated:** 2026-04-04  
**Status:** Active

---

## Overview

Tracked issues, bugs, and investigations for the RiseUp Asia Presentation.

---

## Issue Index

| # | Issue | Status | Severity |
|---|-------|--------|----------|
| 01 | Hover animation inconsistency on testimonial cards | Resolved | Medium |
| 02 | SlideHeader blocking pointer events on cards | Resolved | Medium |

---

## Resolved Issues

### 01 — Hover Animation Inconsistency

**Problem**: Testimonial cards (e.g., Konstantinos P. on TitleSlide) had inconsistent hover behavior — sometimes the hover animation triggered, sometimes it didn't.

**Root Cause**: The absolute-positioned text container (`z-index: 10`) was overlapping the recommendation cards, intercepting mouse events before they reached the card elements.

**Resolution**: Added `pointer-events-none` to the overlapping text container and `pointer-events-auto` to interactive elements (CTA link) within it.

### 02 — SlideHeader Blocking Pointer Events

**Problem**: The `SlideHeader` component (z-index 20) overlapped the top portion of slide content, blocking hover interactions on cards near the top of slides.

**Resolution**: Added `pointer-events-none` to the `SlideHeader` container so hover events pass through to cards beneath.

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Project Overview | [../00-overview.md](../00-overview.md) |
