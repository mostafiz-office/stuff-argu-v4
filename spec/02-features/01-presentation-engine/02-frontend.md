# Presentation Engine — Frontend

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

UI components that render the presentation viewport, scaled slides, navigation controls, and header overlay.

---

## Components

### PresentationEngine

- Renders a `.presentation-viewport` container with a noise overlay
- Uses `AnimatePresence` with `mode="wait"` for one-at-a-time slide transitions
- Each slide is wrapped in a `motion.div` with computed transition variants
- Conditionally renders `SlideNavigation` and `DownloadPanel`

### ScaledSlide

- Fixed canvas: `1920 × 1080` pixels
- Calculates scale factor: `Math.min(parentWidth / 1920, parentHeight / 1080)`
- Applies via `transform: scale(N)` on a `.slide-content` div
- Uses `ResizeObserver` pattern via window resize listener

### SlideNavigation

- Left/right arrow buttons
- Dot indicators for slide position
- Keyboard navigation support (arrow keys)
- Optional download button (shown when `?export=1`)

### SlideHeader

- Absolute-positioned overlay at top of each slide
- Displays company logo
- Uses `pointer-events-none` to avoid blocking hover interactions on slide content

---

## Responsive Behavior

The `ScaledSlide` component ensures the presentation looks identical on all screen sizes by scaling down from the 1920×1080 design canvas. No responsive breakpoints are needed within slides — all layouts are fixed-position at the design resolution.

---

## Visual Effects

| Effect | Implementation |
|--------|---------------|
| Noise texture | CSS `::after` pseudo-element with SVG noise filter |
| Glass cards | `backdrop-filter: blur()` + semi-transparent background |
| Gradient borders | CSS border-image or pseudo-element gradients |
| Hover animations | Framer Motion `whileHover` with scale/shadow transforms |
