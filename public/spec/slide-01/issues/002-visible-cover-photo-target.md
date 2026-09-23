# Issue 002 — Visible Cover Photo Updated in the Wrong Component

## Problem
The requested Marek portrait was added to `TitleSlide`, but the live pricing presentation uses `PricingCoverV3` or `PricingCoverV1` as slide 1. The visible cover therefore continued to show Alim.

## Root Cause
The edited component was not part of the active slide array in `src/pages/Index.tsx`. Both selectable cover variants still imported `alim-updated.png`.

## Fix
- Updated `PricingCoverV3` to render `marek.png` as the large cover portrait.
- Updated the alternate `PricingCoverV1` variant as well, so `?cover=1`, `?cover=2`, and random cover selection remain consistent.
- Sized the portrait within a fixed bottom-aligned region to preserve the canvas boundary.

## Prevention Rule
Before changing visible slide content, trace the active slide array and every selectable variant. A component with a similar name is not proof that it is rendered.