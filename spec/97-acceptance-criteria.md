# Acceptance Criteria — RiseUp Asia Presentation

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

28 testable criteria across 6 areas.

---

## AC-01: Presentation Engine

| # | Criterion |
|---|-----------|
| AC-001 | All slides render without errors at 1920×1080 design resolution |
| AC-002 | Slides scale proportionally to any viewport size via ScaledSlide |
| AC-003 | Forward/backward navigation updates `?slide=N` query parameter |
| AC-004 | Direct URL access to `?slide=N` loads the correct slide |
| AC-005 | Keyboard arrow keys navigate between slides |
| AC-006 | Transition animations play smoothly (no frame drops > 16ms) |
| AC-007 | Hidden slides (via config) are excluded from navigation |

---

## AC-02: Slide Content

| # | Criterion |
|---|-----------|
| AC-008 | All text content matches `presentation-config.json` values |
| AC-009 | All portrait images load without artifacts or background remnants |
| AC-010 | External CDN icons (Simple Icons, Devicon) render correctly |
| AC-011 | Hover animations on cards trigger consistently on all slides |
| AC-012 | No text overflow or clipping at 1920×1080 |

---

## AC-03: Export System

| # | Criterion |
|---|-----------|
| AC-013 | PDF export captures all slides without blank pages |
| AC-014 | PDF file opens correctly in standard PDF readers |
| AC-015 | Single slide image export produces correct resolution (3840×2160 at 2×) |
| AC-016 | PNG and JPG format selection works correctly |
| AC-017 | HTML export generates a valid, openable HTML file |
| AC-018 | Export panel only appears when `?export=1` is in URL |
| AC-019 | Progress bar updates during PDF generation |

---

## AC-04: Asset Preloading

| # | Criterion |
|---|-----------|
| AC-020 | All local images preload within 10 seconds of page load |
| AC-021 | External CDN icons are cached after preloading |
| AC-022 | Preloading does not block initial page render |
| AC-023 | No console errors from failed image loads |

---

## AC-05: Configuration

| # | Criterion |
|---|-----------|
| AC-024 | Modifying `presentation-config.json` updates all consuming slides |
| AC-025 | Partial config overrides merge correctly with defaults |
| AC-026 | Missing config fields fall back to defaults without errors |

---

## AC-06: Visual Design

| # | Criterion |
|---|-----------|
| AC-027 | All colors use HSL design tokens from CSS custom properties |
| AC-028 | Noise overlay renders consistently across slides |
