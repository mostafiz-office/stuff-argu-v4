# Issue 001 — Scroll Viewport Must Not Conflict With Navigation

## Problem
Slide 09 table rows extended past the navigation dots with no scroll UI visible.

## Root Cause
1. **Wrong file edited**: `hiddenSlides: [8]` in `presentation-config.json` hides `StarterTierDetailSlide.tsx` (array index 7). The user's visible "slide 8" is actually `StarterTierDetailSlideV2.tsx` (array index 8, visible index 8 after filtering).
2. **V2 had no scroll logic**: `StarterTierDetailSlideV2` used `justify-evenly` to spread rows, with no scroll container, no rail, and no overflow clipping — so all 14 rows rendered at full height and overflowed into the navigation area.

## Fix
Rewrote `StarterTierDetailSlideV2.tsx` to use the exact same scroll pattern as slide 3 (`TierDetailSlide.tsx`):
- `relative flex-1` parent with `absolute inset-0 overflow-y-scroll` child
- Custom right-side scroll rail with gradient thumb
- Bottom fade gradient + pulsing "Scroll for more" chevron prompt
- `bottom: 100` on the outer container for 24px+ navigation clearance

## Rule
- Always verify which component is VISIBLE via `hiddenSlides` in `presentation-config.json` before editing
- Keep 100px+ bottom clearance on all scrollable slides
- Use the slide 3 scroll pattern (`relative flex-1` + `absolute inset-0`) as the canonical reference

## Status
Resolved on 2026-04-10.
