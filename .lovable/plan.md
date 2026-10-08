# Add a shared recommendation to both cover variants

## Confirmed direction
Use Cristian Stancalău’s verified recommendation on both alternating covers.

- Cover V1 remains: Cristian + Jakub.
- Cover V3 becomes: Adam + Cristian.
- Keep the existing compact card design, exact excerpts, portraits, attribution, amber emphasis, and LinkedIn destination.
- Keep deterministic cover alternation and all slide navigation unchanged.

## Implementation
1. Assign Cristian’s existing typed recommendation to Cover V3 as its second card, reusing the current verified content and image rather than duplicating testimonial data.
2. Confirm both cards fit Cover V3 without overlap, clipping, or unreadably small text at the current presentation viewport.
3. Update the Slide 1 content data, cover specifications, and recommendation issue record to document Cristian as the intentionally shared recommendation.
4. Correct the related deck documentation count while those Slide 1 records are being updated.

## Verification
- Reload repeatedly to confirm deterministic V1/V3 alternation still works.
- Confirm V1 shows Cristian + Jakub and V3 shows Adam + Cristian.
- Confirm names, portraits, excerpts, highlights, and links are correct.
- Check arrow-key/Next navigation, visual fit at desktop and current 1023×649 viewport, console errors, type checking, and the final build status.
