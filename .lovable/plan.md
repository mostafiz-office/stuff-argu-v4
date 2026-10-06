# Slide 1 — Bigger Marek, bigger text, real second version

## What I found
- Both cover versions do switch on reload, but they use the **same headline** ("Cut 80% Off Your Developer Hiring Timeline."), so the slide looks identical every time.
- The Marek photo box is 480×860 inside a 1920×1080 slide, so he looks small. The headline is 60px and the cards use 14–18px text, which reads as small.
- The text block starts at 80px from the left, but it sits inside a centred, narrow column, so it looks pushed inward.

## Changes (both covers, same layout)
1. **Marek photo larger and featured**
   - Photo about 640px wide × 1000px tall, placed in the centre-right and anchored to the bottom.
   - Soft amber glow behind him and a thin amber outline that rises behind his shoulders.
   - A small highlighted name tag on the photo: "Marek F. · Engineering Leader" with an amber "LinkedIn Verified" mark, linked to Marek's recommendations.
2. **Text moved left and made bigger**
   - The text column starts at 64px from the left edge, about 820px wide.
   - Headline 84–88px, small intro label 18px, paragraph 26px, highlight chips 18px, buttons 22px.
   - The Marek quote card under the buttons: name 22px, quote 20px.
3. **Right-side cards larger:** names 22px, quotes 19px, stat rows 20px. Same three items as now, kept clear of the photo and of the navigation bar.
4. **Second version with different wording.** The layout stays identical; only the words change.
   - Version A (current): "Cut 80% Off Your / Developer Hiring Timeline."
   - Version B (new): "Hire Senior Engineers / In 20 Minutes, Not 3 Months." Version B also gets a new paragraph, new chip labels and a new intro label, with the same buttons and Marek cards.
   - Reloading keeps alternating A → B → A.

## Checks I will actually run
- Screenshot slide 1 on 4 reloads and confirm the headline changes A/B/A/B.
- Check that the photo, text and cards don't overlap each other or the navigation, at a 1280-wide desktop view and at your current window size.
- Update the slide 1 notes afterwards.

## Technical details
- Edit `PricingCoverV1.tsx` and `PricingCoverV3.tsx` together so the layout stays the same; only the text constants differ between them.
- The existing localStorage/sessionStorage/window.name alternation stays as it is.
