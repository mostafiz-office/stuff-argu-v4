# Fix the slide 16 rocket: perfectly upright, big and clearly visible

## What's wrong now
- The rocket is a 48px emoji, turned with a rough 45° tilt, so it doesn't point straight up.
- It flies only inside the small pricing card, and the card cuts off anything outside its edges, so the rocket is barely visible and gets clipped.

## What you'll see
- On the second Enter on slide 16, a large rocket (about 3x bigger) points exactly straight up (90°).
- It launches from the bottom of the slide, with a flame trail and glow, and climbs straight up through the whole slide before leaving off the top.
- The "Growth booster" label rides with it, bigger and readable.
- Same steps as now: first Enter shows Alim's box, second Enter launches the rocket, third Enter goes to the next slide.
- With reduced motion turned on, the rocket fades in and out without flying.

## Verification
At 1023x649 and 1280x720, capture mid-flight frames to confirm the rocket is upright, fully visible, not clipped, and that the three Enter steps still work. Then update the slide 16 spec and build a fresh deploy ZIP.

## Technical details
- Measure the actual angle of `rocket-emoji.svg` and apply the exact correction, or draw a simple upright SVG rocket in brand amber if the emoji can't be aligned cleanly.
- Render `RocketAnimation` at slide level (outside the card's `overflow-hidden`), positioned over the slide canvas; vertical-only motion (y from bottom to top), no x drift or rotation.
