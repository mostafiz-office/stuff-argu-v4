# Match the old presentation's look: bigger photo, less text, larger type, old contact page

## What I found (compared both decks at the same window size)
- **Old slide 1:** Marek's photo fills almost the full slide height, from the top bar down to the bottom edge. The slide has one short title ("Elite Engineers On Demand"), one short sentence, chips, two buttons, one quote, and 3 short cards on the right.
- **Our slide 1:** the photo is about 60% of the height. The slide also has an intro label, a longer title, a 3-line paragraph, two full quote cards and 3 stat rows, so it reads as crowded.
- **Old contact slide (9):** a "READY TO START?" label, "Let's Build Your / Dream Team", one sentence, the email, Schedule a Call, Call Now, and a QR code on the right. It is centred, with large type and lots of empty space.
- **Our slides 5 and 6:** a long title, 4 cards each with a heading, a 2-line description and a footer line, plus a profile panel. Description text shows at about 11–13px on screen, which is hard to read.
- Our other content slides (for example slide 9) have the same issue: body text around 12–13px on screen, and the content sits in a narrower box than the old deck.

## Changes

### 1. Slide 1, both versions (same design, different wording)
- Marek's photo grows to the full slide height and sits in the centre, the same scale as the old deck. Keep the soft amber glow behind him; remove the arch outline.
- Left side, cut down:
  - small label
  - a 2-line title at about 96px. Version A: "Cut 80% Off / Hiring Time." Version B: "Senior Engineers / In 20 Minutes."
  - one short sentence
  - 3 chips
  - two buttons
  - one Marek quote
- Right side: one Marek quote card at the top right, plus 3 short highlight cards ("20+ Years", "50+ Enterprise Projects", "Chief Architect Included").
- Remove the duplicate stat rows and the name tag that sits on the photo.

### 2. Contact slide: rebuild to match the old slide 9
- Same layout as the old one:
  - "READY TO START?" label
  - "Let's Build Your / Dream Team" title
  - one sentence
  - the email line
  - Schedule a Call above Call Now (left aligned, same size)
  - QR code with "Scan to connect"
- Keep our current links (Schedule → meet.rasia.pro/intro-call, Call Now → call.rasia.pro/riseup-offical-v1) and the existing QR image.
- Match the old text sizes and proportions.

### 3. Slides 5 and 6: less text, bigger text
- **Slide 5 (Executive Oversight):**
  - shorter title
  - 4 cards, each with a heading and one short line only (drop the "Included 100% Free" footer from every card and show it once as a badge)
  - Alim panel: photo, name, title and 2 bullets (drop the quote)
- **Slide 6 (Valuation):**
  - keep the 3 step cards with one line each
  - in the tier row, show only the tier name and its "$X / mo FREE" value
  - remove the "Why is this included" paragraph
- Text sizes: card headings at least 30px and body at least 22px on the slide canvas.

### 4. Every other slide: bigger type and wider content
- The content area widens to match the old deck's margins.
- Type scale for the whole deck:
  - titles 64–72px
  - card headings 28–32px
  - body 22–24px
  - small labels at least 18px
- Where a bigger font no longer fits, I trim a line of text rather than shrinking it. For each slide I'll list what was removed so you can bring anything back.

## Checks I will actually run
- Screenshot every slide (all 11) at 1280×720 and at your current window size, side by side with the old deck.
- Confirm nothing overlaps the top bar or the bottom dots, and that slide 1 still alternates between versions on reload.
- Update the spec notes per slide.

## Technical details
- Slide 1: `PricingCoverShared.tsx`. Contact: the CTA slide component in `src/slides`. Slides 5 and 6: `PremiumExpertSlideV2`, `ExpertValuationBreakdownSlide`.
- Deck-wide: raise `text-[Npx]` values per slide file, and widen the container (`max-w`/padding) in the shared layout.
