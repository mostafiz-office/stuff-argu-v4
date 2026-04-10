# Slide 10 (StarterTierSlideV9Clone) — Rocket Animation Gate

## Behavior
When the user navigates to this slide, the first "next" action (Enter, ArrowRight, ArrowDown, Space, next button, or swipe) triggers the rocket animation **without advancing** to the next slide. Only the **second** "next" action advances to the CTA slide.

## Implementation
- `StarterTierSlideV9Clone` registers a navigation gate on `window.__slideNavigationGate` on mount
- `SlideNavigation.goNext()` checks the gate before advancing — if active, it calls `gate.trigger()` and deactivates the gate
- Gate resets automatically when the component re-mounts (navigating away and back)
- Enter key is now handled by `SlideNavigation` uniformly with other navigation keys

## Rule
- Navigation gating is a reusable pattern: any slide can register `window.__slideNavigationGate`
- Gate must always be cleaned up on unmount (`delete window.__slideNavigationGate`)