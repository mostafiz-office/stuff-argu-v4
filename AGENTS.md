# Project Rules

- Mark the presentation as natively dark and use `pres-dark-safe-accent` for dark text on amber highlights, preventing mobile browser auto-darkening from reducing contrast.
- Alternate the two Slide 1 covers deterministically from the last persisted cover; randomness can repeat and appear broken.
- Centralize presentation motion and optional audio cues; consistent timing and muted-by-default sound keep the deck polished and meeting-safe.
- The Riseup favicon master lives at `public/spec/assets/favicon.ico` and the live icon at `public/favicon.ico`; every deploy ZIP must contain both (Vite copies `public/` into `dist/` automatically).
- Keep dense feature comparisons inside a dedicated scroll region with persistent tier context; this preserves readable presentation-scale type without expanding the slide canvas.
- Present the three core customer problems as separate photo-led slides; one dominant problem per slide keeps the sales narrative focused and readable.
- Place a title-only solution bridge immediately after the three problem slides; the pause separates problem framing from pricing.
- Keep the post-pyramid promises as two slides of three stacked statement bands, one claim each; extra paragraphs or icons would repeat the dense-text problem the deck already fixed.