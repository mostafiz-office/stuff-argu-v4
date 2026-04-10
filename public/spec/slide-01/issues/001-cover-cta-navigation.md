# Issue 001 — Cover CTA "Explore Tiers" Navigation Blocked by Sync-Back Race

## Problem
Clicking the "Explore Tiers" button on both cover slide variants (V1 and V3) did not navigate to slide 2. The slide stayed on slide 1.

## Root Cause
A race condition in `PresentationEngine.tsx` between two `useEffect` hooks:

1. **Effect 1** (searchParams → currentIndex): When `searchParams` changed to `slide=2`, it scheduled `setCurrentIndex(1)`.
2. **Effect 2** (currentIndex → URL sync): Ran in the same render cycle while `currentIndex` was still `0`. It saw `slideNumber = "1" ≠ searchParams("slide") = "2"` and **overwrote the URL back to `slide=1`**, undoing the navigation.

This created an infinite loop: button sets slide=2 → Effect 2 resets to slide=1 → Effect 1 re-reads slide=1 → nothing changes.

## Fix
Added a `useRef` guard (`prevIndexRef`) to Effect 2 so it only syncs to URL when `currentIndex` has actually changed — not when `searchParams` changed externally. This breaks the race.

Additionally:
- Changed the CTA from a `<div>` to a semantic `<button>` for accessibility
- Used a fresh `URLSearchParams` object on each click instead of mutating the existing instance

## Rule
When a component has bidirectional state sync (state ↔ URL), always guard the sync-back direction with a ref to prevent overwrite races. Any slide that uses `setSearchParams` for navigation will now work correctly.

## Files Changed
- `src/components/presentation/PresentationEngine.tsx` — added `prevIndexRef` guard
- `src/slides/PricingCoverV1.tsx` — semantic `<button>`, fresh URLSearchParams
- `src/slides/PricingCoverV3.tsx` — semantic `<button>`, fresh URLSearchParams
