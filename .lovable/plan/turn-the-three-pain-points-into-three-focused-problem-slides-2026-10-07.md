# Turn the three pain points into three focused problem slides

## Understanding

- The uploaded image is a visual reference for emphasis: one bold statement dominates the frame, selected words receive strong color contrast, and the background supports the message.
- The screenshot itself will not be placed in the presentation.
- The current slide 2 compresses three different problems into equal cards, so none receives enough attention.
- Each existing problem will become its own full slide with relevant cinematic photography:
  1. **The 2 AM Outage Panic**
  2. **Fragile Vibe & AI Code**
  3. **The 90-Day Hiring Sinkhole**
- This changes the deck from 11 slides to 13 slides. The current pricing slide and every later slide will move forward by two positions.

## Design direction

- Use one full-bleed, relevant workplace photograph per problem, generated as a cohesive three-image set.
- Darken and compose each photograph to leave a deliberate reading area for the statement.
- Make the problem statement the dominant element, using very large typography and an amber or danger-colored phrase for emphasis, similar to the reference image’s visual priority.
- Keep each slide concise: one problem title, one short supporting line, one large metric, and one brief consequence or resolution line.
- Remove the three-card layout, small icons, badges, and repeated card framing.
- Preserve Riseup’s dark identity, logo, bottom accent, transition style, and presentation-safe text contrast.

## Slide content

### Problem 1 — Outage panic
- Lead with **“The 2 AM Outage Panic”** as the dominant statement.
- Retain “Production breaks while you sleep.”
- Highlight **$18,500/mo** and “Outage & Churn Bleed.”
- Use a late-night production incident / exhausted technical leader visual.

### Problem 2 — Fragile AI code
- Lead with **“Fragile Vibe & AI Code”** as the dominant statement.
- Retain “Unreviewed AI code piles up debt.”
- Highlight **3× Slower** and “Velocity & Bug Bleed.”
- Use a tense code-review / unstable software delivery visual.

### Problem 3 — Hiring sinkhole
- Lead with **“The 90-Day Hiring Sinkhole”** as the dominant statement.
- Retain “3 months lost to unvetted hires.”
- Highlight **Save 80%** and “Recruiting Time Saved.”
- Use a stalled hiring / empty engineering seat visual.

## Presentation updates

- Replace the single `PainPointsSlide` entry with three dedicated problem-slide entries.
- Update navigation numbering, titles, tooltips, and the total slide count to 13.
- Keep arrow keys, Next/Previous, dots, sound, and slide transitions working across the inserted slides.
- Preload the three new photographs so each problem slide appears immediately.
- Preserve the existing deterministic cover alternation and Slide 9-style staged interaction after its new slide-number position.

## Validation and documentation

- Capture all three new slides at the current 1023×649 view and at 1280px desktop width.
- Confirm the main statement and metric are readable at a glance with no overlap against faces, navigation, logo, or the slide edge.
- Walk through the full 13-slide deck to confirm navigation order, numbering, tooltips, transitions, image loading, and the existing staged rocket interaction.
- Check reduced-motion behavior and the final build.
- Replace the stale slide 2 specifications with the three-slide problem sequence, add the generated-asset references, update slide numbering/index documentation, and record resolution in the related issue notes.
