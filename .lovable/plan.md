# Redesign slide 4 as an Apple-style scrolling comparison

## Findings

- Apple’s iPhone comparison keeps three products in stable columns, gives each product a large, clear header, and lets specifications continue vertically instead of compressing the entire comparison into one screen.
- Apple separates information into spacious comparison sections with strong labels and generous vertical rhythm, making each feature easier to scan.
- Slide 4 currently fits all 14 feature rows into one fixed-height view. Its tier names, prices, badges, and every feature compete for space, so the content reads as a dense spreadsheet.
- The slide already has coordinated row and tier-column hover states, so these can be retained and strengthened within the new layout.
- Because this is a presentation rather than a web page, scrolling must stay inside slide 4 and must not accidentally move to another slide.

## Changes

### Apple-inspired comparison structure

- Keep the existing dark Riseup visual identity, tier colors, prices, and feature values; borrow Apple’s information hierarchy rather than its exact appearance.
- Create three large, evenly sized tier headers for Growth, Skilled, and Leadership, with prominent names and prices and restrained text-only badges.
- Keep the tier headers visible while the feature content scrolls beneath them, so viewers always know which columns they are comparing.
- Increase feature-label and value sizes substantially; show fewer rows at once instead of shrinking all 14 rows.

### Grouped, scrollable feature area

- Organize the existing 14 features into clear sections such as **Delivery**, **Team & Leadership**, and **Support & Assurance**.
- Add spacious section dividers and larger comparison rows, preserving every current feature and value.
- Place the rows in a dedicated vertical scrolling area with a visible custom rail/thumb and a subtle “scroll for more” cue that disappears at the end.
- Support mouse wheel, trackpad, touch dragging, and scrollbar interaction inside the comparison area.
- Prevent vertical scrolling inside slide 4 from triggering presentation navigation; left/right navigation and the existing controls will continue to change slides.

### Interaction and polish

- Preserve full-row highlighting and coordinated tier-column highlighting across both sticky headers and visible cells.
- Use restrained color/brightness transitions without moving or resizing the table.
- Add a soft top/bottom edge treatment to clarify that more comparison content exists while keeping text fully readable.
- Respect reduced-motion preferences and the deck’s centralized presentation motion.

## Technical details

- Refactor `TierDetailSlide` into a fixed tier-header region plus an independently scrollable, grouped feature region.
- Track scroll position to update the custom scrollbar and hide the continuation cue at the bottom.
- Isolate wheel/touch interaction from the deck’s global next/previous controls while the pointer or focus is within the comparison viewport.
- Use existing semantic presentation tokens and add only reusable comparison-specific styles where needed.

## Validation and documentation

- Verify slide 4 at the current 1023×649 view and at 1280px desktop width.
- Confirm tier headers remain aligned and visible throughout scrolling.
- Confirm all 14 feature values remain accurate, readable, and reachable.
- Test mouse wheel, trackpad-style scrolling, dragging the scrollbar, touch scrolling, row hover, and each tier-column hover.
- Confirm slide navigation still works outside the comparison area and no content overlaps the bottom navigation.
- Check reduced-motion behavior, runtime console output, and the final build.
- Update the slide 4 overview, layout, component, interaction, data, consistency, and issue documentation to match the redesigned behavior.
