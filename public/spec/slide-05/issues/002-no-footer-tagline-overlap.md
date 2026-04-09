# Issue 002 — No Separate Footer Tagline (Overlap Risk)

## Problem
A standalone tagline positioned near the bottom of the slide overlapped with the bonus panel or navigation elements, making it unreadable.

## Rule
**Do NOT place a separate text element at the bottom of Slide 05.** Any supporting message must be embedded inside the bonus panel header as a subtitle line.

## Current Solution
- The message "You pay for execution. Expert oversight is included at no extra cost." is rendered as a `<p>` subtitle inside the bonus panel, directly below the heading.
- No `<motion.p>` footer element exists anymore.

## Why
- The slide uses absolute positioning; a bottom-anchored text easily collides with the bonus panel or the slide navigation.
- Embedding the message inside the panel keeps layout self-contained and collision-free.
