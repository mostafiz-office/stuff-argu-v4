# Fix slide 2 spacing and slide 4 comparison interactions

## Findings

- **Slide 2:** all three cards use the same tall fixed minimum height, with the statistic pushed to the bottom by automatic spacing. This creates the large empty middle area shown in the screenshot. The centre card also visually touches the neighbouring card boundary in the captured view, making the three-card alignment feel uneven.
- **Slide 4:** the title currently says **“Feature Comparison”**. The Skilled and Leadership labels use star/crown emoji, and row hover is currently only a very faint full-row tint; there is no column-hover state.

## Changes

### Slide 2
- Rebalance the three cards into equal, aligned columns with consistent internal spacing.
- Remove the large empty middle gap by using a compact content stack instead of pushing each statistic to the card bottom.
- Keep each card’s current short copy and metric, while tightening card height and vertical rhythm.
- Ensure the centre card has the same left/right breathing room and boundary alignment as the other two cards.

### Slide 4
- Change the heading to **“Features Comparison.”**
- Remove the star and crown emoji; keep the labels as clean text: **“BEST VALUE”** and **“PREMIUM.”**
- Add a clear row highlight when hovering any feature row.
- Add coordinated column highlighting across the column header and all cells when hovering a pricing column.
- Keep hover contrast restrained and consistent with each tier color, without changing pricing or feature data.

## Validation and documentation

- Check slides 2 and 4 at the current desktop window and at 1280px wide.
- Confirm card spacing is even, no text or controls overlap, and row/column hover states remain aligned.
- Update the related slide specifications and issue notes to match the implemented behavior.
