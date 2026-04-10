# Issue 001 — Scroll Viewport Must Not Conflict With Navigation

## Problem
Slide 09 can visually collide with the bottom navigation if the feature table is allowed to expand without a properly bounded scroll viewport.

## Root Cause
The scroll UI pattern from slide 03 only works when the feature list lives inside a constrained viewport. Without `overflow-hidden` on the parent and an absolute inset scroll container, the content extends downward instead of clipping cleanly, so the custom rail and scroll prompt do not behave correctly.

## Rule
- Keep the table wrapper at `top: 240px` and `bottom: 200px`
- Preserve at least 24px clearance above navigation dots
- Use `overflow-hidden` on the scroll viewport parent
- Use an `absolute inset-0` scroll container
- Keep the custom right-side rail and "Scroll for more" prompt aligned with the slide 03 pattern

## Status
Resolved on 2026-04-10.
