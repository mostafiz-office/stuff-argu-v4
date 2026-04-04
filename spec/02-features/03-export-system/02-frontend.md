# Export System — Frontend

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

The `DownloadPanel` component provides the export UI as a slide-in panel from the right edge.

---

## Panel Layout

- **Trigger**: Download button in `SlideNavigation` (visible only with `?export=1`)
- **Backdrop**: `bg-black/40` with `backdrop-blur-sm`
- **Panel**: 360px wide, full height, spring-animated entry from right

---

## Export Options

### 1. Full Presentation (PDF)

- Button: "Download PDF"
- Shows progress bar with percentage during generation
- Disabled state while any export is in progress

### 2. Current Slide (Image)

- Format selector dropdown: PNG or JPG
- Button: "Download Slide N"
- Captures at 2× resolution for high quality

### 3. Animated HTML

- Button: "Download HTML"
- Generates iframe-based HTML file
- Only shown when `allowHtmlDownload` prop is true

---

## State Indicators

| State | Visual |
|-------|--------|
| Idle | Primary gradient button |
| Loading | Spinning loader icon + "Generating… N%" |
| Disabled | Muted colors, `cursor: not-allowed` |
| Progress | Animated progress bar below PDF button |

---

## Styling

Uses presentation design tokens (`--pres-accent`, `--pres-bg`, `--pres-text`, etc.) with inline styles for consistency with the slide design system.
