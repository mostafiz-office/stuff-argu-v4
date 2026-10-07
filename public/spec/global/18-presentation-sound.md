# Optional Presentation Sound

> **Source**: `src/lib/presentationSound.ts`, `SlideNavigation.tsx`, `PresentationEngine.tsx`.

## Behavior

- Sound is muted by default for meeting-safe playback.
- The HUD sound button explicitly enables or mutes audio.
- The preference is stored under `riseup-presentation-sound` in local storage.
- Cues are synthesized locally with the Web Audio API; no external or copied audio asset is loaded.
- Available cues are `click`, `transition`, `reveal`, and `launch`.
- Slide 9 uses distinct reveal and launch cues for its gated sequence.
- Reduced-motion users do not receive automatic sound cues.

## Implementation rules

Centralize new cues in `presentationSound.ts`, keep volumes restrained, and never autoplay sound before the user enables it.