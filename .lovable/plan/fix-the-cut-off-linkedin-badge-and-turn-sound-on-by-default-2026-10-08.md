# Fix the cut-off LinkedIn badge and turn sound on by default

## What I understand
1. On slide 1, the "LinkedIn" badge on a recommendation card (Jakub's, in your screenshot) is cut off at the right edge, because the long role line pushes it outside the card.
2. Sound should be on when the deck opens. Anyone can still mute it with the existing sound button.

## What changes
- **Recommendation cards:** the LinkedIn badge moves to the top-right corner of the card, in its own space. Long role lines shorten with "…" instead of pushing the badge out. This applies to all three recommenders on both covers.
- **Sound:** it starts on for everyone. If someone mutes it, the deck remembers that choice on that browser.
- Browsers won't play any sound until the visitor first clicks or presses a key, so the first click or key press starts the sound. There is no way around this.

## Technical details
- `PricingCoverShared.tsx` QuoteCard: the header becomes a `min-w-0 flex-1` text block plus a `shrink-0` badge, with `overflow-hidden` on the card so nothing spills.
- `presentationSound.ts`: default `muted = false`. Mute only when storage says "off", and resume the AudioContext on the first pointer or key event.
- Check both covers in the browser at 1023 and 1280 widths and confirm the badge is fully visible. Confirm the sound button shows "on" for a new visitor.
- Update the specs: an issue note under `public/spec/slide-01/issues/`, plus the AGENTS.md motion/sound rule, which changes from muted by default to on by default with a mute option.
