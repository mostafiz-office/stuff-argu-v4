# Correct the visible cover photo and final-slide links

## Confirmed problems
- The visible first-slide variants (`cover=1` and `cover=2`) still render Alim’s image, so the previous Marek update did not affect the actual pricing presentation cover.
- On the visible final slide, **Schedule a Call** currently points to the hiring link instead of the meeting link.
- The same final slide still shows `+1 (567) 978 1833` as plain text.

## Changes
1. Replace Alim’s large cover portrait with the existing Marek image on both first-slide variants, preserving the current portrait placement while correcting its orientation/crop if needed.
2. Restore **Schedule a Call** to `https://meet.rasia.pro/intro-call`.
3. Replace the phone-number row with a **Call Now** button linking to `https://client.rasia.pro/hiring-v1`.
4. Update the relevant presentation specification and issue record so future edits target the slides actually used by the pricing deck.
5. Verify both cover variants and the final slide in the preview, including each link destination.

## Acceptance checks
- Both first-slide variants visibly show Marek, not Alim.
- **Schedule a Call** opens the meeting URL.
- No phone number remains on the final slide; **Call Now** opens the hiring URL.
- The presentation still builds without errors and the affected content stays within the slide boundary.
