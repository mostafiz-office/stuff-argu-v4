# Slides 02–04 — Problem Story · Layout Architecture

> **Inherits**: [`global/03-spacing-layout.md`](../global/03-spacing-layout.md)

## Z-Layer Stack
| z-index | Element |
|---------|---------|
| z-0 | Full-bleed 1920×1088 photograph, object-cover |
| z-1 | Left-to-right dark readability overlay |
| z-10 | Left narrative content and bottom accent line |
| z-20 | SlideHeader logo |

## Spatial Grid

### Narrative Block
| Property | Value |
|----------|-------|
| Position | `left: 100px`, vertically centered |
| Width | approximately 840px; right side reserved for the photographic subject |
| Order | eyebrow → two-line statement → short line → metric/consequence |

### Background Composition
- Subject remains on the right third.
- Left 48% is low-detail negative space.
- Overlay reaches near-opaque at the left edge and fades toward the subject.
