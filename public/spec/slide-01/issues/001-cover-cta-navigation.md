# Issue 001 — Cover CTA Navigation Must Use Router-Safe Slide Jumps

## Problem
The secondary CTA on the cover slide (`Explore Tiers`) did not reliably navigate to slide 2 because it was implemented as a clickable `div` and updated query params by mutating the existing `URLSearchParams` instance.

## Root Cause
React Router navigation is less reliable when route state is updated through in-place search-param mutation. A semantic interactive element and a fresh params object are required for predictable navigation.

## Fix
- Use a semantic `button` for the secondary CTA
- Create a fresh `URLSearchParams` instance on click
- Set `slide=2` and pass the new object to `setSearchParams`

## Rule
All slide-jump CTAs must use router-safe navigation with semantic interactive elements. Do not use clickable `div`s for primary navigation actions.
