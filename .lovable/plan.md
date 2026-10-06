# Restore cover rotation and readable slide typography

## Confirmed problems

- Slide 1 currently chooses its cover with `Math.random()`. Random selection can return the same cover on consecutive reloads, so it can look as though rotation is broken. The saved cover values written by the manual switch are not read during startup, so they do not provide reliable reload-to-reload alternation.
- The implemented typography has drifted below the documented presentation scale. For example, the cover specification calls for an 80px headline and 22px body, while both current covers use 48px and 17px. Most other slide titles are 46–52px although the global specification calls for 68–76px section titles, and many card/body labels are only 10–14px.
- Every slide is designed at 1920×1080 and uniformly scaled to the browser window. At the current desktop preview size, already-small canvas text becomes much smaller on screen.

## Changes

1. **Make the two covers rotate reliably**
   - Replace random selection with deterministic alternation: each full reload shows the other cover.
   - Store only the last displayed cover, with a safe fallback for restricted storage.
   - Keep the existing V1/V3 switch working and ensure its label always points to the other cover.
   - Preserve both cover photos, links, and Explore Tiers navigation.

2. **Restore Slide 1 typography**
   - Bring both cover variants back to the documented hierarchy: approximately 80px headline, 22px main copy, 16px supporting pills, and larger recommendation text.
   - Rebalance the columns and spacing so the enlarged content remains clear around Marek’s portrait and above the navigation boundary.

3. **Improve readability across every active slide**
   - Audit all slides currently mounted in the presentation, not only the cover.
   - Raise section titles toward the documented 68–76px range where content length permits.
   - Raise body, card, table, badge, and tooltip text to readable presentation sizes, prioritizing the smallest 10–14px text.
   - Reflow dense cards and tables instead of allowing larger text to overlap, clip, or enter the footer/navigation area.
   - Keep the existing content, colors, interactions, slide order, and animation gates unchanged.

4. **Prevent recurrence**
   - Update the global and slide-specific typography specifications to match the final rendered sizes.
   - Add issue notes covering deterministic two-cover alternation and minimum readable text at the scaled desktop viewport.

5. **Verification**
   - Reload repeatedly and confirm V1 → V3 → V1 alternation, then test the manual switch on both variants.
   - Check every slide at the desktop preview size for readable hierarchy, clipping, overlap, and footer clearance.
   - Re-test cover links, normal navigation, Slide 8’s gated sequence, and the final contact actions.
   - Resolve the currently reported missing-asset/type errors if they remain after the presentation files are restored by the preview environment.

## Technical details

- Use one persisted `lastCoverVariant` value and derive the next cover during initialization; do not rely on randomness.
- Keep typography expressed in the 1920×1080 slide coordinate system, then validate its actual appearance after `ScaledSlide` applies the viewport scale.
- Treat 16px as the normal minimum for meaningful body copy on the slide canvas; retain smaller sizes only for truly secondary metadata where visual testing confirms legibility.