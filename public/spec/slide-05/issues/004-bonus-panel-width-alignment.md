# Issue 004 — Bonus Panel Must Match Upper Card Alignment

## Problem
The FREE Expert Bonus panel looked too narrow and disconnected from the upper value cards, which made the slide feel unresolved and visually frustrating.

## Rule
- The bonus panel must share the same right-side alignment as the upper right "Up to $10K" value card.
- On this slide layout, the panel starts at `left: 120px` and extends to the same right edge as the top card row.
- Do not use the old narrow panel width when the upper cards extend farther right.

## Current Solution
- Bonus panel width is expanded to `1148px` so its right edge aligns with the upper card group.
- Internal tier row spacing remains readable without changing the "You pay → You get FREE" framing.

## Why
- Shared alignment makes the slide feel deliberate and polished.
- A wider panel improves scanability and removes the cramped look that caused repeated confusion.