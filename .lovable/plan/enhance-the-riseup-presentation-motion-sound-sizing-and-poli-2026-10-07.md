# Enhance the Riseup presentation motion, sound, sizing, and polish

## Findings

- The corrected reference deck is accessible. It uses a polished presentation controller, layered slide entrances, responsive hover motion, reduced-motion handling, and dedicated transition/click/zoom sound cues.
- The reference keeps sound controllable from the presentation toolbar. For this deck, sound will be **muted by default** and enabled only by the viewer.
- The current deck already has five slide-change effects, but they rotate by slide number rather than matching each slide’s content. All use the same timing, so the deck can feel inconsistent instead of intentionally choreographed.
- Most current slide elements define their own entrance timing and text sizes. This creates inconsistent rhythm and makes deck-wide tuning difficult.
- Hover feedback varies widely: some cards lift or change borders, some only change color, and some visually similar items do nothing.
- No sound system exists in the current deck.
- The current 1920×1080 canvas and scaling system are sound and should remain. The main opportunity is to improve hierarchy, spacing, motion consistency, and interaction feedback within that system.
- The rendered audit found specific cleanup needs: partially settled reveals on slides 4–6, a faint/crowded lower area on slide 7, and rocket/badge overlap during slide 9’s staged reveal.

## Enhancement plan

### 1. Build one presentation motion system

- Create shared entrance patterns for headings, supporting text, cards, metrics, rows, images, and staggered groups.
- Define consistent timing, easing, distance, and spring strength so every slide feels related.
- Replace slide-number-based transitions with intentional transition assignments:
  - directional slide for narrative progression,
  - soft fade/rise for information-heavy slides,
  - restrained zoom for major value reveals,
  - no distracting 3D flip on dense tables.
- Preserve forward/backward direction and ensure every entrance restarts when a slide is entered by arrow keys, controls, dots, or swipe.
- Add a reduced-motion mode that removes large movement and keeps short opacity transitions.

### 2. Add optional presentation sound

- Add a compact sound control to the existing top toolbar.
- Keep sound muted by default and remember the viewer’s choice.
- After the viewer enables sound, use original lightweight cues for:
  - previous/next slide transitions,
  - navigation and button clicks,
  - important staged reveals such as the Chief Architect bonus and rocket.
- Use low volume, prevent overlapping sounds, stop stale sounds during rapid navigation, and respect reduced-motion/accessibility preferences.
- Provide a silent fallback when browser audio is unavailable or blocked.

### 3. Standardize typography and item scale

- Establish a presentation type scale rather than independent pixel values on every slide:
  - primary titles: approximately 68–88px depending on density,
  - supporting copy: approximately 24–28px,
  - card headings: approximately 28–34px,
  - card body text: approximately 21–24px,
  - labels and badges: at least 18px where space permits.
- Standardize icon sizes, metric sizes, card padding, grid gaps, and content safe areas.
- Keep dense content readable by shortening or reflowing text instead of shrinking it below the agreed scale.
- Preserve the current content, prices, links, two alternating covers, and slide order unless fitting requires a minor line break.

### 4. Apply purposeful hover interactions

- Give interactive cards a consistent restrained lift, border emphasis, and shadow response.
- Animate icons, arrows, and badges only when they reinforce the clickable target.
- Keep the feature comparison’s coordinated row and column highlighting, but refine its contrast and settling behavior.
- Add polished button feedback for hover, focus, and press states without video previews or surprising media playback.
- Keep non-clickable information cards visually calmer so hover does not falsely imply an action.

### 5. Improve each slide without changing its message

- **Slide 1:** choreograph the headline, Marek portrait, chips, actions, quote, and highlights in clear layers; keep Marek dominant and reduce competing motion.
- **Slide 2:** retain the balanced three-card alignment; reveal cards as one coordinated group and add restrained icon/metric emphasis.
- **Slide 3:** unify card entrance and hover behavior while preserving equal sizing and the best-value emphasis.
- **Slide 4:** use a short header/table reveal, settle every row at full opacity, and keep hover highlights immediate and readable.
- **Slide 5:** prioritize Alim’s portrait and title, then reveal the four value cards in a controlled sequence; eliminate partially faded end states.
- **Slide 6:** make the three valuation steps and four tier values read as one clear calculation, with large numbers appearing after their labels.
- **Slide 7:** clean the lower trial-note area, keep all six cards fully legible, and avoid a long stagger that leaves later cards dim.
- **Slide 8:** preserve its strong four-step structure; animate the connecting line once and bring each step in with a short sequence.
- **Slide 9:** preserve the three-step Next interaction, but prevent the rocket and “Growth Booster” label from covering text; add clear reveal sound only when enabled.
- **Slide 10:** animate the headline/callout first, then the comparison rows; keep price labels and savings badges stable on hover.
- **Slide 11:** focus motion on the headline, two calls to action, and QR code; use a subtle final-slide settle rather than continuous decoration.

### 6. Refine the presentation controls

- Keep keyboard, swipe, dots, sharing, and fullscreen behavior.
- Add the sound toggle with a clear tooltip and accessible label.
- Improve control hover/press feedback to match the reference’s precision without copying its full 26-slide toolbar or onboarding tour.
- Preserve the amber numbered navigation treatment and tooltip naming rules already established for this project.

## Technical approach

- Continue using Motion for React for slide transitions and staged entrances; use CSS transitions for hover, focus, and color changes.
- Introduce shared motion presets and presentation-size tokens, then migrate slides to those shared values.
- Keep the existing fixed 16:9 canvas and `ScaledSlide` behavior.
- Use locally served, original sound assets or synthesized cues; do not hotlink or copy the reference deck’s audio files.
- Remove or fix animation states that can remain partially transparent after entrance.
- Keep the existing slide-9 navigation gate, but coordinate it with motion and audio so each Next press has one clear result.

## Validation and documentation

- Test all 11 slides at 1280×720 and the current 1023×649 preview size.
- Verify forward/backward keyboard navigation, top controls, dots, swipe, fullscreen, and slide 9’s staged Next behavior.
- Verify hover and focus states on every interactive element; confirm non-interactive cards do not imply clicks.
- Verify sound starts muted, only plays after opt-in, remembers the setting, does not overlap, and works during rapid navigation.
- Verify reduced-motion mode and silent fallback behavior.
- Capture a full slide contact sheet plus focused screenshots of hover and staged-reveal states.
- Check the build, runtime console, and the complete presentation flow before reporting completion.
- Update the global animation, hover, navigation, typography, sound, per-slide specifications, and related issue notes to match the implemented behavior.
