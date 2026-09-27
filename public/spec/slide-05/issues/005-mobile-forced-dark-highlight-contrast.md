# Issue 005 — Mobile Forced-Dark Highlight Contrast

## Problem

Some Android browsers can automatically recolor web pages in dark mode even when the presentation already uses a dark design. On the Premium Expert Bonus slide, this changed the intended near-black `$10K/mo Expert` text to gray and reduced its contrast against the amber highlight.

## Verified behavior

- Intended: near-black text on a bright amber highlight.
- A normal browser and forced-dark Chromium preserve the intended rendering.
- The supplied mobile screenshot shows browser-level recoloring of the highlighted text.

## Rule

- The presentation declares `color-scheme: dark` so browsers recognize it as natively dark.
- Dark text placed on amber highlights must use `pres-dark-safe-accent`.
- That class must keep an explicit semantic text fill and opt out of forced color adjustment.
- Do not change the wording, pricing, layout, or animation to work around browser recoloring.

## Acceptance criteria

1. `$10K/mo Expert` stays near-black on amber in normal mode.
2. `$10K/mo Expert` stays near-black on amber when browser dark mode is enabled.
3. The complete headline remains visible at desktop and portrait-mobile sizes.