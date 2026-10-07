# Slide 04 — Hover & Scroll Interactions

## Comparison highlighting
- **Row hover**: raises the full feature row to a clearly visible neutral surface tint.
- **Column hover**: hovering a tier header or any cell highlights the corresponding header and all cells in that tier color.
- **Motion**: color and brightness transitions complete in 200ms without moving the table.

## Scrollbar
- **Viewport**: `.comparison-scroll`, native scrollbar hidden
- **Rail**: persistent 14px custom control at the right edge
- **Thumb**: 112px high with live position derived from scroll progress
- **Input**: wheel, trackpad, touch, Arrow Up/Down, Page Up/Down, Home/End, and pointer dragging on the rail
- **Containment**: vertical input is contained by the comparison viewport and does not change slides

## Scroll fade indicator
- Bottom gradient fade (92px) + “Scroll for more” cue when more content remains
- Hidden once user scrolls to bottom
