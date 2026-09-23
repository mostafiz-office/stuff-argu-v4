# Issue 002 — Alternate Cover Must Match the Primary Cover Portrait

## Problem
The presentation randomly selects between two cover variants. Updating only one can make the old portrait appear intermittently.

## Fix
Both `PricingCoverV3` and `PricingCoverV1` now use `marek.png` and keep the portrait inside a fixed bottom-aligned image region.

## Prevention Rule
Any approved cover portrait change must be applied and verified on both `?cover=1` and `?cover=2`.