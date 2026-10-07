# Clickable tier cards with a details page for each plan

## What you'll see
- On the pricing slide, each of the three tier cards (Growth, Skilled, Leadership) gets a stronger hover: the card lifts, its border glows amber, and a small "View details" hint appears.
- Clicking a card opens that plan's details page full screen, over the deck. These pages are not slides — they only appear after a click.
- "Back to pricing" button and Esc close it. While it's open, the arrow keys don't change slides.

## Each details page shows
- Tier name, experience, price, hours/month, and the "Best value" badge if the plan has one
- Who it's for (one short line)
- Everything included, grouped the same way as the features comparison (Delivery, Team and Leadership, etc.), with what this plan includes and doesn't include
- Small buttons to switch to the other two plans, plus "Compare all plans"
- Large, easy-to-read text, same dark-and-amber look

## Content
- The included and not-included items come from the existing features comparison, so the prices and features stay consistent.
- The "who it's for" line is new wording I'll write. Please confirm it or send your own.

## Unchanged
- The Compare pricing button, the slide order (still 18 slides), and the Starter Tier steps.

## Verification
At 1023×649 and 1280×720: hover on each card, click each card, switch between plans, close with the button and with Esc, confirm Next still goes to the Chief Architect slide, and make sure nothing overflows. Then update the specs and notes and build a fresh deploy ZIP.

## Technical details
- Pull the tier feature data out of `TierDetailSlide` into a shared module that the comparison and the new `TierPlanDetail` overlay both use.
- Reuse the pricing slide's existing portal overlay and the `__comparisonOpen` keyboard flag, so only one overlay can be open at a time.
