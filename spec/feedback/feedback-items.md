# Feedback Items — AI Implementation Spec

**Video:** https://www.youtube.com/watch?v=xC5kyb477TY · **Reviewer:** Alim Ul Karim (owner)
**Status legend:** `TODO` = not started · `PENDING OWNER` = blocked on owner input ·
`NEEDS CLARIFICATION` = ask before building · `DONE` = implemented + verified

Timestamp links use `?t=` seconds. Implement in deck order. Respect the repo's
root `AGENTS.md` rules and `spec/00-overview.md` conventions.

---

## Global principles (apply to EVERY slide)

### G-01 — Yellow is a highlighter, not a theme
Count every yellow element on each slide. Yellow may mark **exactly one** focus
point per slide. "Too much yellow = no focus at all." Audit all 20 slides and
remove/retone non-focus yellows.
*Acceptance:* each slide has ≤1 yellow-highlighted element; the rest of the
palette stays dark/neutral.

### G-02 — Cut ~80% of words
Maximum **two focus words** per slide. Delete decorative sentences, duplicate
labels, and obvious statements. If a line doesn't sell, it goes.
*Acceptance:* no slide carries more than ~25 visible words outside data tables.

### G-03 — Staged reveal, never a text dump
Text arrives **one idea at a time** with animation between arrivals. Giving
everything at once causes information overload and kills the sale. This is "the
main game of UI/UX" per the reviewer.
*Acceptance:* every multi-line slide reveals lines/segments sequentially on
advance; nothing important appears simultaneously with something else.

### G-04 — Never highlight money
Dollar amounts are **always flat**: normal weight, never bold, never yellow,
never enlarged for emphasis. (Only a shockingly low price would ever earn
focus — $6,000-type figures must visually recede.)
*Acceptance:* no price figure anywhere uses highlight color, bold, or
display-size treatment.
**Status: DONE (Batch 1, commit 923bf8e)** — tier cards, plan detail, comparison header, savings rows, and starter card prices are flat (normal weight, white/muted, regular size); all `/mo` → `/M`. Value-context figures on `ExpertValuationBreakdownSlide` ($625/hr, up to $10k/M) keep their value-card treatment — that slide had no reviewer feedback (see gap-analysis).

### G-05 — Say less, make it beautiful
Whatever text remains must have consistent line counts, padding, and rhythm.
Fix all padding-touching-edges and 1-line-vs-2-line inconsistencies.
*Acceptance:* visual consistency pass over all slides; no text touches
container edges.

### G-06 — USD once
One small corner note per pricing context: **"Everything is USD"**. Everywhere
else the `$` symbol alone suffices — never repeat "USD". Write `/M`, not `/mo`
("everyone understands M").
*Acceptance:* single USD note; `$` only; `/M` suffixes.
**Status: DONE (Batch 1, commit 923bf8e)** — `<UsdNote />` ("Everything is USD") placed on PricingTiers, TierDetail, Savings, Starter slides; all `/mo` in src → `/M`; zero `/mo` tokens remain in src.

### G-07 — Reusable animation patterns
Build each new reveal/highlight effect (marker stroke, drag-reveal, water-fill,
label-drop) as a **reusable component/spec sample** so it can be reused on
other slides and projects.
*Acceptance:* effects live in shared modules, not inline in one slide.
**Status: DONE (Batch 1, commit 923bf8e)** — `src/components/presentation/reveal.tsx` ships `WaterFill`, `LabelDrop` (amber + white tones), `MarkerHighlight`; `DeckButton.tsx` is the single shared CTA per FB-04/G-08.

### G-08 — Slide-like navigation
Deck advances on **button press**, never automatically. Keep Next/CTA buttons
consistently placed and styled.
*Acceptance:* no auto-advance timers; buttons behave identically on all slides.

---

## Slide 1 — Cover (PricingCoverV1 / V3 / Shared)

### FB-01 — Cover: cut copy, single yellow focus · TODO
- **Video:** [00:00–00:56](https://www.youtube.com/watch?v=xC5kyb477TY&t=7s) · **Files:** `src/slides/PricingCoverShared.tsx` (+V1/V3 copy)
- **Now:** "Elite Engineers / Cut 80% Off / Hiring Time." plus body copy, chips, and heavy yellow everywhere.
- **Change:** Delete the "Elite Engineers" label line entirely. Cut ~80% of remaining cover words. Keep exactly two focus words. Highlight **"80%"** in yellow. Try **"Hiring"** and **"Time"** in a *different* (non-yellow) color — experiment and keep the better one.
- *Acceptance:* cover shows the headline with ONE yellow element ("80%"); total cover words ≤ ~12.

### FB-02 — Cover: 80% water-fill + label-drop animation · TODO
- **Video:** [00:56–03:42](https://www.youtube.com/watch?v=xC5kyb477TY&t=56s) · **Files:** `src/slides/PricingCoverShared.tsx`, `src/lib/presentationMotion.ts`
- **Now:** headline fades in flatly; no staged animation.
- **Change:** On load: (1) "Hiring" starts **white**, then slowly fades/visualizes in;
  (2) **"80%" fills up like water** — an animated fill rising to 80%; (3) a
  **label/badge drops from the top** onto "Time" — the word visually sinks into
  the label and pops back up in **black** text on the label. Build the label in
  **yellow AND white variants** and keep the better-looking one (reviewer leans
  white: "too much yellow already"). Model the motion on the Bootcamp Feedback
  reference slide (screenshot `fb_0300_bootcamp_ref.jpg`).
- *Acceptance:* three-step staged cover animation; reusable `WaterFill` and
  `LabelDrop` components per G-07; both label color variants viewable.

### FB-03 — Cover: copy the reference font CSS exactly · TODO
- **Video:** [03:42–04:06](https://www.youtube.com/watch?v=xC5kyb477TY&t=222s) · **Files:** `src/slides/PricingCoverShared.tsx`, `src/index.css`
- **Now:** cover font "looks unprofessional / bad".
- **Change:** Take the **exact HTML+CSS — including the font family, weights,
  sizes, letter-spacing — from the "Bootcamp Feedback" reference slide** and
  apply it verbatim to the cover headline. Do not approximate; copy it.
  (Reference lives on the owner's bootcamp site — ask the owner for its URL if
  the screenshot is insufficient.)
**Status: BLOCKED ON OWNER (Batch 2)** — the exact font CSS cannot be copied from the `fb_0300_bootcamp_ref.jpg` screenshot alone ("do not approximate"). Checked riseup-pro.com homepage + sitemap and ran a web search — the Bootcamp Feedback page was not findable. Need the page URL; will copy the CSS verbatim once received.
- *Acceptance:* cover typography pixel-matches the reference treatment.

### FB-04 — Cover: CTA button matches reference · DONE (Batch 1, commit 923bf8e)
- **Video:** [04:06–04:13](https://www.youtube.com/watch?v=xC5kyb477TY&t=246s) · **Files:** `src/slides/PricingCoverShared.tsx`
- **Now:** "Book a Call" button style differs from the reference.
- **Change:** Restyle the cover CTA button to **exactly match the professional
  button on the Bootcamp Feedback reference slide** (shape, padding, color,
  hover). Apply the same button component to all slide CTAs per G-08.
- *Acceptance:* one shared button style used on cover + all CTAs.

### FB-05 — Cover: "IOP camera" element · NEEDS CLARIFICATION
- **Video:** [04:26](https://www.youtube.com/watch?v=xC5kyb477TY&t=266s) · **Files:** `src/slides/PricingCoverShared.tsx`
- **Now:** element absent.
- **Change:** Reviewer asked to "add the IOP camera thing" — meaning is unclear
  from the audio. **Ask the owner what this is before building** (picture-in-picture?
  camera pan effect? something else?).
- *Acceptance:* clarified with owner, then specified.

---

## Slides 2–4 — Pain slides (PainPointsSlide.tsx)

### FB-06 — Pain slides: new copywriting · PENDING OWNER
- **Video:** [04:46–05:01](https://www.youtube.com/watch?v=xC5kyb477TY&t=286s) · **Files:** `src/slides/PainPointsSlide.tsx`
- **Now:** placeholder-ish English copy on all three pain slides.
- **Change:** The owner will **supply better copywriting for all three pain
  pages**. Do NOT invent it — leave clean, clearly-marked copy slots and
  continue with layout/animation work.
- *Acceptance:* copy slots ready; final copy swapped in when the owner delivers.

### FB-07 — Pain slides: keep the imagery · DONE (Batch 3, commit a66395c)
- **Video:** [05:11–05:17](https://www.youtube.com/watch?v=xC5kyb477TY&t=311s) · **Files:** `src/slides/PainPointsSlide.tsx`
- **Now:** photographic backgrounds that read as AI-generated.
- **Change:** **Keep them.** They look professional — "definitely can't throw
  away." No image replacement work needed.
- *Acceptance:* no change; recorded so no AI "fixes" it later.
**Status: DONE (Batch 3)** — imagery untouched in the rewrite; same three photo assets.

### FB-08 — Pain slides: 3-segment text treatment · DONE (Batch 3, commit a66395c)
- **Video:** [05:21–06:34](https://www.youtube.com/watch?v=xC5kyb477TY&t=321s) · **Files:** `src/slides/PainPointsSlide.tsx`, `src/index.css`
- **Now:** flat stacked text.
- **Change:** (1) First line **in English**, as its own segment; (2) a **light
  text-shadow** under the headline — reuse the exact shadow technique from the
  reference; (3) copy arrives in **three staged segments**: the big middle
  writing lands first; (4) the middle segment's highlight color is
  **configurable** (yellow or red) via props/config.
- *Acceptance:* 3-step reveal; shadow matches reference; color configurable.
**Status: DONE (Batch 3, commit a66395c)** — new `PainBeats` component: eyebrow as its own English segment, then beats arrive staged (big beat first); `.pain-headline-shadow` in index.css gives the light cinematic shadow; highlight color is a per-slide `highlight: "yellow" | "red"` config (Outage=red, others=yellow).

### FB-09 — Pain slides: Narrative Institute animation reference · DONE (Batch 3, commit a66395c)
- **Video:** [06:34–09:15](https://www.youtube.com/watch?v=xC5kyb477TY&t=394s) · **Files:** `src/slides/PainPointsSlide.tsx`, `src/lib/presentationMotion.ts`
- **Now:** basic fade/slide animations.
- **Change:** Study the **Narrative Institute** video (search by company name —
  screenshot `fb_0600_narrative_ref.jpg` shows the style): cinematic, staged
  text arrival. The *style of arrival* matters, not the words; use brand yellow
  instead of their red. Implement per G-03/G-07 as reusable reveal components.
- *Acceptance:* pain-slide text animation evokes the reference rhythm.
**Status: DONE (Batch 3, commit a66395c)** — beats arrive cinematic-style (drift up + resolve from blur, 0.55s stagger) via the reusable `CinematicLine`/`PainBeats` components; brand yellow used instead of red, red kept only where the pain tone calls for it (Outage). Note: the reference video itself wasn't retrievable (screenshot shows the reviewer's OneNote, not the video), so the rhythm is built from the spec's written description.

### FB-10 — "Outage Panic" slide: staged headline sequence · DONE (Batch 3, commit a66395c)
- **Video:** [09:15–10:34](https://www.youtube.com/watch?v=xC5kyb477TY&t=555s) · **Files:** `src/slides/PainPointsSlide.tsx` → `OutagePanicSlide`
- **Now:** "The 2 AM / Outage Panic / Production breaks while you sleep / $18,500/mo" all visible at once.
- **Change:** Staged sequence: **"Outage Panic"** arrives first (big) → **"2 AM"**
  below → **"Production Break"** big below. Each step lands separately so the
  viewer absorbs the story beat by beat. (FB-06 copy replaces words later; keep
  the staging structure.)
- *Acceptance:* three distinct arrival beats; works with swapped copy.
**Status: DONE (Batch 3, commit a66395c)** — Outage slide now stages "Outage Panic" (big, marker highlight) → "2 AM" → "Production Break" (big) at 0.15/0.70/1.25s. Beats are data (`Problem.beats`), so FB-06 copy swaps in without touching the staging.

### FB-11 — Pain slides 2–3: mirror layouts, varied highlights · DONE (Batch 3, commit a66395c)
- **Video:** [10:34–13:42](https://www.youtube.com/watch?v=xC5kyb477TY&t=634s) · **Files:** `src/slides/PainPointsSlide.tsx`
- **Now:** all three pain slides share the same layout.
- **Change:** **Mirror the layout** between consecutive pain slides (image
  left/right swap; text follows) so they feel blended, not repetitive. Give
  each slide a **different highlight treatment** (marker stroke, underline
  sweep, etc. — in brand colors), built as reusable spec samples per G-07
  (incl. the "mouse drags and pulls a reveal" concept).
- *Acceptance:* no two pain slides share layout orientation; ≥2 highlight
  styles exist as reusable components.
**Status: DONE (Batch 3, commit a66395c)** — layouts alternate left/right/left with a mirrored overlay gradient (`problem-story-overlay-right`); three reusable highlight styles in `reveal.tsx`: `MarkerHighlight` (Outage), `UnderlineSweep` (Fragile), `DragReveal` — the drag-to-reveal concept (Hiring).

---

## Slide 5–6 — Solution bridge + pyramid (SolutionTransitionSlide / TalentPyramidSlide)

### FB-12 — Solution: shrink-left transition, pyramid on right · TODO
- **Video:** [13:42–15:02](https://www.youtube.com/watch?v=xC5kyb477TY&t=822s) · **Files:** `src/slides/SolutionTransitionSlide.tsx`, `src/slides/TalentPyramidSlide.tsx`, `src/components/presentation/PresentationEngine.tsx`
- **Now:** "We have solutions for you." is a full standalone slide; pyramid is a separate slide.
- **Change:** Remove the standalone beat. When the solution line is triggered,
  it **shrinks and animates to the LEFT** (small), while the **hiring pyramid
  ("How We Find the Top 5%") appears on the RIGHT** — one continuous,
  near-3D transition. The viewer must **feel no slide change**.
- *Acceptance:* single continuous transition; pyramid + shrunken solution line
  coexist; slide count reduced by one.
**Status: DONE (Batch 4, commit a0563ba)** — new `src/slides/SolutionBridgeSlide.tsx` replaces both standalone slides: the solution line opens big and centered, then on Next shrinks/glides left (scale 0.32, near-3D rotateY) while the pyramid rises on the right — one continuous transition, same elements, no slide change. Uses the deck navigation-gate pattern (4 gated beats). Slide count 18 → 16; per-slide transitions in `PresentationEngine` re-aligned with comments.

### FB-13 — Solution: three staged phrases on the right · TODO
- **Video:** [15:02–16:33](https://www.youtube.com/watch?v=xC5kyb477TY&t=902s) · **Files:** `src/slides/TalentPyramidSlide.tsx`
- **Now:** pyramid slide has no staged phrase sequence.
- **Change:** After FB-12's transition, three phrases arrive **one by one** on
  the right, next to the pyramid (keep the Riseup logo visible):
  1. **"Find Top 5% Talent"** — highlight **"5%"**
  2. **"Avoid Missing Deadlines"** — focus **"Missing"**
  3. **"Save Time Hiring"** — focus **"Hiring"**
  Few words total; each phrase gets its own arrival beat.
- *Acceptance:* three beats, correct focus words, logo persists.
**Status: DONE (Batch 4, commit a0563ba)** — after the split, three gated Next presses reveal: "Find Top 5% Talent" ("5%" in yellow marker), "Avoid Missing Deadlines" ("Missing" in red underline), "Save Time Hiring" ("Hiring" bold white, no yellow per G-01). Riseup logo persists via `SlideHeader`.

### FB-14 — Remove standalone logo slide · TODO
- **Video:** [16:56](https://www.youtube.com/watch?v=xC5kyb477TY&t=1016s) · **Files:** `src/slides/IdentitySlides.tsx` → `BrandLogoSlide`, `src/pages/Index.tsx`
- **Now:** dedicated brand-logo slide in the sequence.
- **Change:** **Delete it** ("logo দরকার নাই" — not needed). Remove from the
  slide array in `Index.tsx`; keep the logo mark inside other slides' headers.
- *Acceptance:* deck flows without a logo-only beat.
**Status: DONE (Batch 4, commit a0563ba)** — `BrandLogoSlide` removed from the `Index.tsx` slide array (import dropped too); logo remains in every slide header. Note: `src/slides/IdentitySlides.tsx` still exports `BrandLogoSlide` and the old `SolutionTransitionSlide.tsx`/`TalentPyramidSlide.tsx` files remain unreferenced — harmless dead code (bundler tree-shakes them); owner can delete the files in the Lovable UI if desired.

---

## Slide 11 — Pricing tiers (PricingTiersSlide.tsx)

### FB-15 — Tier cards: fix animation smoothness · TODO
- **Video:** [17:18–17:50](https://www.youtube.com/watch?v=xC5kyb477TY&t=1038s) · **Files:** `src/slides/PricingTiersSlide.tsx`, `src/lib/presentationMotion.ts`
- **Now:** card entrance/hover animation feels stiff vs. the reference.
- **Change:** Match the **smoothness** of the reference card animation
  (screenshot `fb_2130_designmodo_ref.jpg`): slower ease, no jank. Add the
  reference's **subtle dot texture** to the cards instead of flat fills.
- *Acceptance:* side-by-side feel matches reference smoothness; dot texture present.

### FB-16 — Tiers: remove top header writing, reclaim space · TODO
- **Video:** [17:50–19:16](https://www.youtube.com/watch?v=xC5kyb477TY&t=1070s) · **Files:** `src/slides/PricingTiersSlide.tsx`
- **Now:** "End Stalled Projects: Pick Your Tier" header above the cards.
- **Change:** **Delete the header writing** — "it's waste; the three pricings
  are self-understood." Use the reclaimed vertical space to **enlarge the tier
  cards**. Keep the small "Compare pricing" affordance.
- *Acceptance:* no header text; cards visibly larger; compare affordance kept.

### FB-17 — Tiers: prices always flat · TODO
- **Video:** [19:16–19:46](https://www.youtube.com/watch?v=xC5kyb477TY&t=1156s) · **Files:** `src/slides/PricingTiersSlide.tsx`, `src/slides/TierDetailSlide.tsx`
- **Now:** prices ($4,299 / $6.8K–$8K / $7.5K–$10K) are large and prominent.
- **Change:** Per G-04: prices stay **flat, normal weight, never highlighted**.
  Focus goes to **base value** and the tier's unique points, not the number.
- *Acceptance:* no price uses bold/highlight/display sizing.

### FB-18 — Tiers: portrait the upgrade reason (2–3 unique points) · TODO
- **Video:** [19:46–20:12](https://www.youtube.com/watch?v=xC5kyb477TY&t=1186s) and [23:37–25:52](https://www.youtube.com/watch?v=xC5kyb477TY&t=1417s) · **Files:** `src/slides/PricingTiersSlide.tsx`, `src/data/tierFeatures.ts`
- **Now:** cards list features uniformly; the *reason to pay more* isn't portraited.
- **Change:** Each card leads with **2–3 unique differentiators** answering
  "why this price":
  - **Leadership:** "Manages **up to 15**" (highlight the number-of-people),
    **CTO-level architecture oversight**
  - **Skilled:** **mid-level architecture oversight**, inventor/mentor developers
  - **Growth:** no mentor developers (position honestly)
  Restructure `tierFeatures.ts` so differentiators render as the card's focus
  block, distinct from the full comparison table.
- *Acceptance:* each card's top block = its unique 2–3 points; upgrade reason
  readable in <3 seconds.

### FB-19 — Tiers: settings-controlled offer area · TODO
- **Video:** [20:12–20:53](https://www.youtube.com/watch?v=xC5kyb477TY&t=1212s) · **Files:** `src/slides/PricingTiersSlide.tsx` (+ config)
- **Now:** no offer mechanism (the SEO deck had one).
- **Change:** Add an **offer area controllable from settings/config**: when an
  offer is active, the old price shows **strikethrough** and the offer is
  highlighted; when inactive, everything from FB-19 hides and prices stay flat
  (not even bold) per FB-17.
- *Acceptance:* config flag toggles offer mode; strikethrough + highlight only
  in offer mode.
**Status: DONE** — new `src/lib/pricingConfig.ts` (`PRICING_OFFER.active` flag, badge text, `wasPrices`). Offer mode shows struck-through old price + badge; inactive hides everything, prices stay flat. `wasPrices` intentionally left empty — fill real pre-offer prices before activating, never invent them.

### FB-20 — Tiers: DesignModo reference, Red Hat Display, consistency · TODO
- **Video:** [20:53–23:37](https://www.youtube.com/watch?v=xC5kyb477TY&t=1253s) · **Files:** `src/slides/PricingTiersSlide.tsx`, `src/index.css`, `index.html`
- **Now:** inconsistent card typography/spacing ("never approved from my side").
- **Change:** (1) Study the **DesignModo pricing page** (screenshot
  `fb_2130_designmodo_ref.jpg`) — borrow its price portrayal and card rhythm;
  (2) try **Red Hat Display** for price numerals (add via Google Fonts);
  (3) full **consistency pass**: same paddings, radii, type scale on all three cards.
- *Acceptance:* consistency checklist signed off against the reference.
**Status: DONE** — Red Hat Display loaded via Google Fonts, `.font-price` utility applied to tier numerals; consistency: uniform p-12/radius/type scale across cards (shared JSX), 160 hrs/month becomes 160 hrs/M.

### FB-21 — Tiers: remove hyphens from tier names; add focus · TODO
- **Video:** [22:52–23:37](https://www.youtube.com/watch?v=xC5kyb477TY&t=1372s) · **Files:** `src/slides/PricingTiersSlide.tsx`, `src/slides/TierDetailSlide.tsx`
- **Now:** "Tier 2 — Growth" etc.; all cards look identical ("a confused person never buys").
- **Change:** **Remove the hyphen** from tier names ("Tier 2 Growth" or
  equivalent clean form). Give each card a **distinct visual focus** (per
  FB-18's differentiators) so the eye lands somewhere deliberate.
- *Acceptance:* no hyphens in tier names; each card has one clear focus.
**Status: DONE** — Tier 2 Growth, Tier 3.A Skilled, Tier 3.B Leadership (flows to plan detail + comparison); each card focus = its differentiator block, Skilled keeps the BEST VALUE badge.

### FB-22 — Tiers: hover tooltip with tier name · TODO
- **Video:** [26:03–26:30](https://www.youtube.com/watch?v=xC5kyb477TY&t=1563s) · **Files:** `src/slides/PricingTiersSlide.tsx`
- **Now:** "Growth / Skilled" confuse people; no tooltip.
- **Change:** On **hover**, show a **tooltip with the tier name** (and one-line
  plain-English meaning). Price in the tooltip stays flat/white — never a focus.
- *Acceptance:* hovering any card reveals its name tooltip.
**Status: DONE** — shadcn tooltip on each card: tier name + one-line plain-English meaning + price flat/white.

### FB-23 — Brand lockup: RISE ASIA LLC + tagline · TODO (part PENDING OWNER)
- **Video:** [27:10–27:34](https://www.youtube.com/watch?v=xC5kyb477TY&t=1630s) · **Files:** all slides with brand lockup; `src/components/presentation/SlideHeader.tsx`
- **Now:** "Riseup Asia" mixed case, no tagline.
- **Change:** Write the brand as **"RISE ASIA" in ALL CAPS + "LLC"** everywhere.
  Add the tagline **"Premium Software Developer Franchise"** as a placeholder
  everywhere the lockup appears — the owner will supply the **final tagline**
  (PENDING OWNER); swap it in when delivered.
- *Acceptance:* all-caps lockup everywhere; tagline placeholder present.
**Status: DONE** — SlideHeader now shows RISE ASIA LLC all-caps + Premium Software Developer Franchise placeholder (BRAND_TAGLINE, clearly marked PENDING OWNER); brand text updated in savings row, starter guarantee, CTA alt, page title.

### FB-24 — Complimentary/gift block redesign · DONE
- **Video:** [27:38–28:26](https://www.youtube.com/watch?v=xC5kyb477TY&t=1658s) · **Files:** `src/slides/PricingTiersSlide.tsx` (gift/complimentary block)
- **Now:** wordy gift explanation.
- **Change:** Cut the writing; make the **gift visual nicer**; put focus on the
  **complimentary benefit** itself; keep surrounding text normal; **hover**
  reveals the benefit detail.
- *Acceptance:* gift block ≤ 2 lines + visual; hover explains.
- *Ambiguity (gap-analysis 2026-10-19):* at 27:38–28:06 the screen showed the
  "Chief Architect" slide — verify whether the confusing gift block lives on the
  pricing slide or the architect slide before editing.
**Status: DONE** — ambiguity resolved: the block lives on ExpertValuationBreakdownSlide (the Chief Architect slide on screen at 27:38-28:06), not the pricing slide. Redesigned the Your Value card: nicer gift visual, 2-line benefit focus (Chief Architect / FREE with your tier), the $10k valuation moved into the hover tooltip; surrounding text untouched.

---

## Slide 16 — What's Included (WhatsIncludedSlide.tsx)

### FB-25 — Cut copy, fix consistency · TODO
- **Video:** [28:26–28:50](https://www.youtube.com/watch?v=xC5kyb477TY&t=1706s) · **Files:** `src/slides/WhatsIncludedSlide.tsx`
- **Now:** six cards with uneven copy (2 lines vs 1 line), padding touching edges.
- **Change:** **Say less** — shorten every card; unify to consistent line counts
  and padding; whatever remains must look "gorgeous at a glance."
- *Acceptance:* uniform card rhythm; no edge-touching text; total words cut ~50%.

---

## Slide 17 — How It Works (PricingHowItWorksSlide.tsx)

### FB-26 — Fix connector line; Discovery Call opens detail · TODO
- **Video:** [28:50–29:29](https://www.youtube.com/watch?v=xC5kyb477TY&t=1730s) · **Files:** `src/slides/PricingHowItWorksSlide.tsx`
- **Now:** background connector line renders poorly; stages aren't interactive.
- **Change:** Fix the **background line visibility**; make **"Discovery Call" a
  clickable stage** that opens a **detail view** (the reviewer expects tappers
  to explore).
- *Acceptance:* line clearly visible; clicking Discovery Call shows detail.

### FB-27 — Remove "20 minutes"; keep 3 segments · TODO
- **Video:** [29:29–29:53](https://www.youtube.com/watch?v=xC5kyb477TY&t=1769s) · **Files:** `src/slides/PricingHowItWorksSlide.tsx`
- **Now:** "20 minutes" label shown.
- **Change:** **Delete the "20 minutes" label.** The Discovery Call detail shows
  **3 segments** instead.
- *Acceptance:* no "20 minutes" text; 3 segments in the detail view.
- *Ambiguity (gap-analysis 2026-10-19):* audio at 29:38–29:53 is garbled — alternate
  reading is "the discovery call is 20 minutes across 3 segments." If the owner
  confirms a 20-minute call, show "20 min · 3 segments" in the detail view instead.

---

## Slide 18 — Startup offer (StarterTierSlideV9Clone.tsx)

### FB-28 — Rename: "Startup Offer"; remove brain-noise element · TODO
- **Video:** [29:53–30:33](https://www.youtube.com/watch?v=xC5kyb477TY&t=1793s) · **Files:** `src/slides/StarterTierSlideV9Clone.tsx`
- **Now:** titled "Zero Risk. All Upside." with a visually noisy element.
- **Change:** Title becomes **"Startup Offer"** ("We Offer for Startup" —
  never "Zero Risk"). **Remove the element that "disturbs the brain"**
  (see `fb_3030_startup.jpg` — the noisy yellow pill/stat cluster top-right;
  confirm against video at 30:26 before deleting). Highlights must make the
  viewer feel "I'll take it" instantly.
- *Acceptance:* new title; noise element gone; single clear highlight.

### FB-29 — Startup copy: experience focus, hover detail · TODO
- **Video:** [30:33–31:31](https://www.youtube.com/watch?v=xC5kyb477TY&t=1833s) · **Files:** `src/slides/StarterTierSlideV9Clone.tsx`
- **Now:** confusing "No contra… / Hiring" fragments.
- **Change:** Delete the confusing fragments. Copy centers on **"1+ Year"**:
  **engineering experience + industry experience** ("doing coding for 3 years",
  "4 years of industrial experience"); supporting detail below; **hover**
  reveals more.
- *Acceptance:* clean experience-led copy; hover detail works.

### FB-30 — Startup: staged reveal; RISE UP big · TODO
- **Video:** [31:31–32:27](https://www.youtube.com/watch?v=xC5kyb477TY&t=1891s) · **Files:** `src/slides/StarterTierSlideV9Clone.tsx`
- **Now:** everything visible at once.
- **Change:** Per G-03: **first part shows, then items arrive one by one**; all
  text starts flat white. **"RISE UP" appears big, uppercase** as its own beat.
- *Acceptance:* sequential arrival; RISE UP beat present.
- *Note (gap-analysis 2026-10-19):* reviewer may have been describing the current
  state ("is in big uppercase") rather than requesting a change — if it's already
  so, keep it; the staged arrival is the actual change.

---

## Slide 19 — Savings (PricingSavingsSlide.tsx)

### FB-31 — Highlight ONLY "7% saving" · TODO
- **Video:** [32:27–32:53](https://www.youtube.com/watch?v=xC5kyb477TY&t=1947s) · **Files:** `src/slides/PricingSavingsSlide.tsx`
- **Now:** "Pay Less. Ship More." + "80%" heavily yellow-highlighted.
- **Change:** Count the yellow (G-01). The **only** highlight is **"7% saving"**
  — not "up to 7%", just "7% saving". Everything else becomes normal writing.
- *Acceptance:* one yellow element ("7% saving"); rest flat.

### FB-32 — "Pay Less." / "Ship More." stacking (no yellow) · TODO
- **Video:** [32:53–33:06](https://www.youtube.com/watch?v=xC5kyb477TY&t=1973s) · **Files:** `src/slides/PricingSavingsSlide.tsx`
- **Now:** "Pay Less. Ship More." on one line, both yellow.
- **Change:** Stack them: **"Pay Less."** on its own line, **"Ship More."** on the
  line below — as the headline, in **normal (non-yellow) text**. Per FB-31, the
  slide's ONE yellow highlight stays **"7% saving"**; the reviewer's "these two
  would be highlighted" was hypothetical ("যদি হাইলাইট করতাম" — *if* I were
  highlighting). Do not yellow-highlight Pay Less / Ship More.
- *Acceptance:* stacked headline, no yellow on it; "7% saving" remains the sole highlight.

### FB-33 — Clarify "80%"; staged summary; numbers not names · TODO
- **Video:** [33:06–33:32](https://www.youtube.com/watch?v=xC5kyb477TY&t=1986s) · **Files:** `src/slides/PricingSavingsSlide.tsx`
- **Now:** "80% hiring effort saved" unexplained; summary static; "Rise Asia LLC" written out.
- **Change:** (1) **Clarify what "80%" means** in plain words; (2) summary rows
  arrive **one by one** (G-03); (3) write **just the number**, not "Rise Asia LLC".
- *Acceptance:* 80% explained; staged summary; no brand-name repetition.

### FB-34 — USD note; /M suffix · TODO
- **Video:** [33:32–33:52](https://www.youtube.com/watch?v=xC5kyb477TY&t=2012s) · **Files:** `src/slides/PricingSavingsSlide.tsx`
- **Now:** "USD" repeated; "/mo" suffixes.
- **Change:** Per G-06: one small **"Everything is USD"** corner note; `$`
  elsewhere; **"/M"** not "/mo".
- *Acceptance:* single USD note; /M suffixes.

---

## Slide 20 — CTA / Contact (PricingCTASlide.tsx)

### FB-35 — Follow the previous contact page design · TODO
- **Video:** [33:52–34:54](https://www.youtube.com/watch?v=xC5kyb477TY&t=2032s) · **Files:** `src/slides/PricingCTASlide.tsx`
- **Now:** current contact card ("RiseupAsia" + QR) has too much yellow highlight.
- **Change:** **Revert to the previous contact page design** — "Let's Build Your
  Dream Team" + QR + Schedule-a-Call ("the previous one was better; it has
  everything"). Alignment rule: **centered** text is fine as-is; **left**-aligned
  text must align its supporting elements with the writing.
- *Acceptance:* CTA matches `fb_3330_cta_good.jpg`; alignment rule applied.
- *Ambiguity (gap-analysis 2026-10-19):* reviewer said "the previous contact page…
  the one on the left" — mapping to the "Let's Build Your Dream Team" version is
  best-effort. Confirm with the owner before deleting the current card.

---

## Blocked / clarification summary

| ID | Blocker | Owner action |
|---|---|---|
| FB-05 | "IOP camera" meaning unclear | Explain what element/effect this is |
| FB-06 | Pain-slide copy | Supply final copywriting for 3 pain pages |
| FB-23 | Final tagline | Supply final tagline (placeholder "Premium Software Developer Franchise" meanwhile) |

*Implement everything else without waiting.*
