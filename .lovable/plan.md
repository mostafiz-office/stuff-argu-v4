# Switch the cover every time you return to slide 1

## What I understand
- Today the cover (V1 or V3) only changes on a full page reload.
- You want it to also change when you leave slide 1 and come back during the same visit.
- Example: open the deck, see Cover V1. Go to slide 2 (Next, arrow key, a dot, or "Explore Tiers"), then come back to slide 1, and you see Cover V3. Leave and come back again, and you see V1.
- Reloading the page still shows the opposite of the last cover you saw, so it alternates the same way as before.

## What changes
- Each time you go from any other slide back to slide 1, the deck switches to the other cover and saves that choice, so the next reload shows the opposite one.
- Moving between other slides does nothing to the cover. Opening the pricing overlays does nothing to it either.
- Nothing else in the deck changes. There is still no visible switch button.

## Technical details
- `src/pages/Index.tsx`: in `handleNavigate`, when `newIndex === 0 && currentIndex !== 0`, flip `coverVariant`. The existing effect saves it to localStorage, sessionStorage and window.name.
- Remove the unused `handleToggleCover`.
- Add a small test for the rule "returning to slide 1 shows the other cover".
- Check it in the browser: go 1 → 2 → 1 → 2 → 1, confirm the covers go V1, V3, V1 (or start from V3), then reload and confirm the opposite cover shows.
- Update the specs and issues: `public/spec/slide-01/issues/004-cover-switch-on-return.md`, the slide-01 overview and the cover spec files, and the AGENTS.md cover-alternation rule.
