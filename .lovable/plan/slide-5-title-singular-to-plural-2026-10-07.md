# Slide 5 title: singular to plural

Change the slide 5 headline from "We have a solution for you." to "We have solutions for you."

## What changes

- **Slide 5 headline** — the words become "We have **solutions** for you." with "solutions" still in the amber accent colour. The dropped "a" and added "s" keep the line about the same width, so it stays on one line at the current size.
- **Navigation tooltip** — the dot tooltip for slide 5 becomes "5. The Solutions" so it matches the headline.
- **Spec files** — the slide 5 spec page, its issue note, and the deck-wide slide index are updated to the new wording.
- **Project memory** — the deck facts record now says the bridge reads "We have solutions for you."

## What stays the same

Everything else on the slide is untouched: the large centred title, the accent rule underneath, the fade-in entrance, the horizontal accent line, and the soft glow behind the text. Slide count (14), slide order, cover alternation, preloading, and the Starter Tier rocket sequence are unaffected.

## Technical details

- `src/slides/SolutionTransitionSlide.tsx` line 20: `We have a <span className="text-pres-accent">solution</span> for you.` → `We have <span className="text-pres-accent">solutions</span> for you.`
- `src/components/presentation/SlideNavigation.tsx` line 255: tooltip entry `"The Solution"` → `"The Solutions"`.
- `public/spec/slide-13/00-overview.md` line 12, `public/spec/slide-13/issues/001-solution-bridge.md` line 9, `spec/02-features/02-slide-system/slides/00-overview.md` lines 23 and 57: wording updated to plural.
- `mem://features/deck-facts` line 6: bridge wording updated to plural.
- Verification: build log clean, then a browser check at the current preview size (1023 wide) and at 1280 wide confirming slide 5 shows the plural headline on a single line with the accent on "solutions", and the slide 5 tooltip reads "5. The Solutions".
