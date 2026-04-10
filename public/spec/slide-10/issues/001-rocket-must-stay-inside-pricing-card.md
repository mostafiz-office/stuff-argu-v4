# Issue 001 — Rocket Animation Must Stay Inside Left Pricing Card

## Problem
A previous fix moved the rocket animation to the full-slide layer so the rocket and “Growth booster” label rendered outside the Tier 1 pricing card.

## Rule
The rocket animation for Slide 10 must render inside the left pricing card only. The card boundary is the visual container for both the rocket and its label.

## Required behavior
- Initial slide load: Alim upsell box is hidden
- First next action: reveal the Alim upsell box
- Second next action: play the rocket animation inside the left pricing card
- Third next action: advance to the CTA slide

## Implementation note
Keep `RocketAnimation` mounted inside the pricing card container and use the compact flight profile so the animation remains clipped to the card bounds by design.