# Export System — Backend Logic

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

Client-side capture and generation logic for PDF, image, and HTML exports.

---

## PDF Generation (`downloadAllAsPDF`)

1. Save current slide index
2. Iterate all slides (0 to N-1):
   a. Navigate to slide via `onNavigate(i)`
   b. Wait for slide to render (`waitForSlideToRender`)
   c. Attempt capture up to 3 times with `captureCurrentSlide()`
   d. Validate capture is not blank via `isLikelyBlankCapture()`
   e. Add captured JPEG to jsPDF document at 1920×1080
3. Save PDF as `riseup-asia-presentation.pdf`
4. Restore original slide index
5. Report skipped slides if any

### Blank Detection (`isLikelyBlankCapture`)

Downsamples canvas to 64×36, calculates luminance mean and standard deviation. A capture is "blank" if:
- Mean luminance < 14 (near-black)
- Standard deviation < 8 (uniform color)

---

## Image Capture (`captureCurrentSlide`)

Uses `html2canvas` with these settings:

| Setting | Value |
|---------|-------|
| Width | 1920 |
| Height | 1080 |
| Scale | 1× (PDF) or 2× (single image) |
| CORS | Enabled |
| Background | `#0a0a12` |

The `onclone` callback resets transforms on `.slide-content` to ensure full-resolution capture.

---

## HTML Export (`downloadAnimatedHtml`)

Generates a self-contained HTML file with an `<iframe>` pointing to the live presentation URL. Includes:
- Dark theme styling
- Fullscreen iframe
- Fallback direct link

---

## Export Gating

Export is only available when `?export=1` (or any truthy value) is in the URL. The `isExportQueryEnabled` function rejects `0`, `false`, `off`, `no`.
