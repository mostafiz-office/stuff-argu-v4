# Master Checklist — Video Feedback vs Current State

**Video:** "Pricing UI UX Riseup ASIA LLC" (34:54, Bangla) — https://www.youtube.com/watch?v=xC5kyb477TY
**Verified against:** repo `main` (code) + https://stufff-aug-v4.lovable.app/ (visual audit 2026-10-19)
**Status key:** ✅ DONE · ⏳ BLOCKED (needs owner) · ⚠️ DONE WITH CAVEAT (owner should confirm) · 🔴 OPEN (fixable now)

## Global principles

| ID | Principle | Status | Note |
|----|-----------|--------|------|
| G-01 | Yellow = highlighter, max one focus per slide | ✅ | Batch 7 audit, 8 files |
| G-02 | Cut ~80% of words (≤ ~25 visible words/slide) | ✅ | Batch 7 audit |
| G-03 | Staged reveals, never text dumps | ✅ | Gates on bridge, tiers, starter, how-it-works, savings |
| G-04 | Never highlight dollar amounts (prices flat) | ✅ | Batch 1 |
| G-05 | Consistent padding/lines, no edge-touching text | ✅ | Batch 7 audit |
| G-06 | "Everything is USD" corner note; `$` only; `/M` not `/mo` | ✅ | Batch 1 |
| G-07 | Reusable reveal/highlight components | ✅ | `reveal.tsx`, `DeckButton.tsx` |
| G-08 | Button-press navigation, never auto-advance | ✅ | Deck-wide pattern |

## Feedback items

| ID | Slide | Ask | Status | File | Commit |
|----|-------|-----|--------|------|--------|
| FB-01 | Cover | Cut copy, single yellow focus | ✅ | `CoverHeadline.tsx` | `58a9ef2` |
| FB-02 | Cover | Water-fill + label-drop animation | ✅ | `CoverHeadline.tsx` | `58a9ef2` |
| FB-03 | Cover | Copy reference font CSS exactly | ✅ CODE / ⏳ LIVE | `CoverHeadline.tsx`, `tailwind.config.ts`, `index.html` | Batch 11 — owner sent the designed image; reference is Plus Jakarta Sans (verified via riseup-pro.com Google Fonts + letterform match); cover headline now `font-cover` |
| FB-04 | Cover | CTA button matches reference | ✅ | `DeckButton.tsx` | `923bf8e` |
| FB-05 | Deck | "Start camera" webcam overlay in toolbar | ✅ | `CameraBubble.tsx`, `SlideNavigation.tsx` | Batch 8 |
| FB-06 | Pain | New copywriting | ✅ CODE / ⏳ LIVE | `PainPointsSlide.tsx` | Batch 10 — plain human copy (confirm on review) |
| FB-07 | Pain | Imagery untouched | ✅ | `PainPointsSlide.tsx` | `a66395c` |
| FB-08 | Pain | Cinematic staged headline | ✅ | `PainBeats.tsx` | `a66395c` |
| FB-09 | Pain | Highlight styles per slide | ✅ | `PainPointsSlide.tsx` | `a66395c` |
| FB-10 | Pain | Alternating layouts | ✅ | `PainPointsSlide.tsx` | `a66395c` |
| FB-11 | Pain | Metric restyle | ✅ | `PainPointsSlide.tsx` | `a66395c` |
| FB-12 | Solution | Shrink-left transition, pyramid right | ✅ | `SolutionBridgeSlide.tsx` | `a0563ba` |
| FB-13 | Solution | Three staged phrases | ✅ | `SolutionBridgeSlide.tsx` | `a0563ba` |
| FB-14 | Deck | Remove standalone logo slide | ✅ | `PresentationEngine.tsx` | `a0563ba` |
| FB-15 | Tiers | Smooth card animation + dot texture | ✅ | `PricingTiersSlide.tsx`, `index.css` | `c46b564` |
| FB-16 | Tiers | Remove header, enlarge cards | ✅ | `PricingTiersSlide.tsx` | `c49e64e` |
| FB-17 | Tiers | Prices always flat | ✅ | Batch 1 | `923bf8e` |
| FB-18 | Tiers | 2–3 differentiators per card | ✅ | `tierFeatures.ts` | `a7d558c` |
| FB-19 | Tiers | Settings-controlled offer area | ✅ | `pricingConfig.ts` | Batch 5 |
| FB-20 | Tiers | Red Hat Display numerals | ✅ | `index.html`, `index.css` | Batch 5 |
| FB-21 | Tiers | Tier names without hyphens | ✅ | `PricingTiersSlide.tsx` | Batch 5 |
| FB-22 | Tiers | Hover tooltip with tier name | ✅ | `PricingTiersSlide.tsx` | Batch 5 |
| FB-23 | Deck | "RISE ASIA LLC" lockup + tagline | ✅ CODE / ⏳ LIVE | `SlideHeader.tsx` | Batch 10 — "Top 5% Engineers, On Demand" (confirm on review) |
| FB-24 | Valuation | Gift block redesign | ✅ | `ExpertValuationBreakdownSlide.tsx` | Batch 5 |
| FB-25 | Included | Cut copy ~50%, uniform cards | ✅ | `WhatsIncludedSlide.tsx` | Batch 6 |
| FB-26 | HowItWorks | Connector line + Discovery Call detail | ✅ | `PricingHowItWorksSlide.tsx` | Batch 6 |
| FB-27 | HowItWorks | Remove "20 minutes", 3 segments | ⚠️ | `PricingHowItWorksSlide.tsx` | kept "In 20 min" vetting badge — confirm |
| FB-28 | Starter | "Startup Offer" title, remove noise | ✅ | `StarterTierSlideV9Clone.tsx` | Batch 6 |
| FB-29 | Starter | Experience-led copy + hover | 🔴 copy conflict | `StarterTierSlideV9Clone.tsx` | heading "1+ Year" vs subtext "3+ years" — needs owner numbers |
| FB-30 | Starter | Staged reveal, RISE UP beat | ✅ | `StarterTierSlideV9Clone.tsx` | Batch 6 |
| FB-31 | Savings | Highlight the saving figure (no "up to") | ✅ CODE / ⏳ LIVE | `PricingSavingsSlide.tsx` | Batch 10 — "76% saving" (dictated "7%" matched no slide number; confirm) |
| FB-32 | Savings | Stacked headline, no yellow | ✅ | `PricingSavingsSlide.tsx` | Batch 6 |
| FB-33 | Savings | Clarify 80%, staged rows, plain numbers | ✅ | `PricingSavingsSlide.tsx` | Batch 6 |
| FB-34 | Savings | USD note, /M suffixes | ✅ | verified, no change | — |
| FB-35 | CTA | De-yellow, keep content | ⚠️ | `PricingCTASlide.tsx` | no earlier design found to revert to |

## New issues from the 2026-10-19 visual audit

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| A1 | Deck | Dot-nav tooltip labels wrong from slide 6 onward (stale 18-slide list) | ✅ CODE / ⏳ LIVE | `SlideNavigation.tsx` — 16-slide list (Batch 9) |
| A2 | Savings | "7% saving" contradicts 76/71/68/67% cards | ⏳ | Owner: confirm the intended figure (see FB-31) |
| A3 | Starter | Experience strings conflicted | ✅ CODE / ⏳ LIVE | Batch 10 — all aligned to "1+ Year" (confirm numbers) |
| A4 | Cover | Cover variant swap flashed near-invisible mid-state | ✅ CODE / ⏳ LIVE | Batch 10 — both variants stay mounted, crossfade on toggle (`Index.tsx`) |
| A5 | Solution | Resting headline looked dimmed in audit | ✅ no change | Code animates to full opacity — audit caught the 0.9s entrance fade; not a bug |
| A6 | Starter | "GROWTH BOOSTER" rocket briefly overlaps Tier 1 card text | ✅ acceptable | Transient by design — no fix |
| A7 | Cover | Testimonial avatars show empty circle while lazy-loading | ✅ acceptable | Transient — no fix |
| B1 | Deck | Gate tooltip pills read as speaker notes | ✅ CODE | Batch 12 — rewritten viewer-facing |
| B2 | HowItWorks | Steps 03/04 looked dimmed (one observation) | ✅ no change | No code mechanism; likely mid-entrance |

## New issues from the 2026-10-20 human-eye QA (Batch 13)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| C1 | Solution | Shrunken caption sits tilted (~-8°) — looks like a broken animation | ✅ CODE | Batch 13 — rotateY removed, caption sits flat |
| C2 | Compare | Prices inconsistent (card/table mismatch, missing $) | ✅ CODE | Batch 13 — full numbers everywhere: $4,299 / $6,800–$8,000 / $7,500–$10,000 |
| C3 | Compare | Experience numbers contradicted the cards (4/6/8 vs 2-3+/7-15+) | ✅ CODE | Batch 13 — cards aligned to table: 4+ / 6+ / 8+ Years (owner to confirm) |
| C4 | Compare | "Alim Expert Oversight" label unclear | ✅ CODE | Batch 13 — renamed "Chief Architect Oversight" |
| C5 | Compare | "Versatile" vague; "QA Automation Engineers" bare "2" | ✅ CODE | Batch 13 — "24/7 priority SLA"; "2 included" |
| C6 | Compare | "Scroll for more" cue covered a row value | ✅ CODE | Batch 13 — 110px bottom spacer in scroll region |
| C7 | Architect | Heading title case ("What The…") | ✅ CODE | Batch 13 — "What the Chief Architect Is Worth" |
| C8 | Architect | Tier value cards read as tier pricing; "/ M FREE" cramped | ✅ CODE | Batch 13 — "/M FREE" + "Bonus value included free with each tier" caption |
| C9 | Included | "80% Less Hiring" awkward; "Sleep At Night" case; "160 Hrs / M" | ✅ CODE | Batch 13 — "80% Less Hiring Effort", "Sleep at Night", "160 Hrs/M" |
| C10 | Starter | Stats contradicted the slide ("Pure senior dev/M", "$10,000" bonus vs $2,500/M box) | ✅ CODE | Batch 13 — "160 hrs / Pure dev time/M"; bonus stat "$2,500/M" |
| C11 | Savings | "Same senior talent" subtitle vs Starter (1+ yr) row | ✅ CODE | Batch 13 — "Top talent, a fraction of US rates." |
| C12 | CTA | "Call Now" button much narrower than "Schedule a Call" | ✅ CODE | Batch 13 — both buttons min-w-[360px] |
| C13 | Cover | Label pill behind "Time." slightly touched neighbor letters | ✅ CODE | Batch 13 — LabelDrop horizontal bleed 0.28em → 0.22em |
| C14 | Tiers | "Owns complex features end-to-end" wrapped with stranded "end" | ✅ CODE | Batch 13 — differentiator lines whitespace-nowrap |
| C15 | Starter | Mirrored duplicate strip at right edge (one observation) | ✅ no change | No mirror transform exists in code outside the (inactive) camera preview — likely QA-render artifact; recheck after deploy |
| C16 | Bands 6/7/10 | Highlight words "sit below baseline" (one observation) | ✅ no change | Plain inline spans — no code mechanism; likely mid-entrance capture; recheck after deploy |

## Owner review fixes (2026-10-20, Batch 14)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| D1 | Cover | Yellow fill behind "80%" stopped at 80% height — digit tops uncovered, looked broken | ✅ CODE | Batch 14 — fill now rises to full cover (fillPercent 100 on both cover variants; water-rise animation kept) |
| D2 | Cover | "Time." label pill padding too large; pill touched "Hiring" | ✅ CODE | Batch 14 — LabelDrop padding cut on all sides: inset -0.14em/-0.22em → -0.08em/-0.13em, radius 0.28em → 0.2em |

## Owner review fixes (2026-10-20, Batch 15 — slide 5 + header)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| E1 | Solution | Hint pill counted "(3 of 3)" while only 2 phrases were on screen — last phrase ("Save Time Hiring") hid behind one more press than promised; felt broken | ✅ CODE | Batch 15 — first phrase now arrives WITH the split: press1 = pyramid + "Find Top 5% Talent", pill "(1 of 3)" always matches phrases on screen |
| E2 | Solution | Shrunken "We have solutions for you." landed flush against the slide's left edge, misaligned with the 60px header inset | ✅ CODE | Batch 15 — caption x target -700 → -640 (left edge ≈ 62px, lines up with the logo) |
| E3 | Header (all slides) | "RISE ASIA LLC" text beside the logo looked wrong; tagline belongs under the logo | ✅ CODE | Batch 15 — shared SlideHeader rebuilt: logo on top, "Top 5% Engineers, On Demand" below it, "RISE ASIA LLC" text removed (applies deck-wide — it's one component) |

## Owner review fixes (2026-10-20, Batch 16 — slide 5 phrases)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| F1 | Solution | Pressing Next showed phrases one press at a time; owner wants all three to come up on the one press | ✅ CODE | Batch 16 — ONE Next press: line shrinks, pyramid rises, all three phrases land in a quick 0.2s stagger (the review's "one by one" feel kept via animation, no more per-phrase gate presses); hint pill is just "reveal the solution" → "Press Next to continue" |

## Owner review fixes (2026-10-20, Batch 17 — pyramid shape)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| G1 | Solution | Pyramid read as stacked flat-topped bars/steps, NOT a triangle like the original pyramid slide | ✅ CODE | Batch 17 — PyramidVisual rebuilt as a true triangle: both sides on one straight line (half-width linear from apex point to 280px base half-width), top band is a small triangle, thin dark seams kept, same colors/numbers/legend |

## Owner review fixes (2026-10-20, Batch 18 — approved bottom-up pyramid walk)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| H1 | Solution | Owner-approved choreography (supersedes E1/F1): walk the pyramid bottom→top, one level per Next press, each level's text with it; pyramid must complete before slide 6 | ✅ CODE | Batch 18 — gate: split press shows pyramid (all dimmed); 5 more presses light levels 1→5, each bright + ~1.07× bigger with glow while the rest stay dimmed; lit levels stay lit. Phrases: level 3 → "Save Time Hiring" (bottom slot), level 4 → "Avoid Missing Deadlines" (middle), level 5 → "Find Top 5% Talent" (top); fixed-height slots keep positions steady. Levels 1–2 light their legend rows. Hint pill: "reveal the solution" → "light level N (N of 5)" → "Press Next to continue". 6 gate presses + advance |

## Owner review fixes (2026-10-20, Batch 19 — levels 1–2 get big texts)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| H2 | Solution | Batch 18 gave levels 1–2 only a lit legend row — too subtle; owner: their texts must come up big like the other levels | ✅ CODE | Batch 19 — two new big-text slots (StageLine): level 1 → "Initial Sign-Up", level 2 → "Training & Assessment", same 40px entrance as the phrases; text column is now 5 fixed slots arriving bottom-first |

## Owner review fixes (2026-10-20, Batch 20 — slide 14 brand beat)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| J1 | Starter | Beat-3 overlay showed the text "RISE UP" — not the company name (Riseup Asia LLC); owner: use the logo | ✅ CODE | Batch 20 — overlay now shows the actual Riseup Asia logo (riseup-asia-logo.png) big in the center, same scale-in beat + amber underline bar (widened to 560px). Gate sequence verified by full reproduction: press 1 bonus box → press 2 rocket → press 3 logo beat → press 4 slide 15; nothing stuck or skipped |

## Owner review fixes (2026-10-20, Batch 21 — cover polish)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| K1 | Cover (both) | Filled word ("80%" / "20") was white text on the yellow fill — poor contrast; owner: the number should be black | ✅ CODE | Batch 21 — fill-word text animates white → near-black (rgba(24,18,8,1)) as the fill completes (CoverHeadline); dark on amber, same trick as the label pills |
| K2 | Cover V3 | "20" fill and "Minutes." pill touched with no gap — looked jammed/overlapping | ✅ CODE | Batch 21 — both treated words get mx-[0.09em] margins in CoverHeadline, so the painted treatments never touch |
| K3 | All slides (header) | Header logo looked faded — must be 100% opacity | ✅ CODE | Batch 21 — opacity-80 removed from the SlideHeader logo |
| K4 | All slides (header) | Logo and tagline must be the same width | ✅ CODE | Batch 21 — measured lockup: logo PNG 854×214, artwork 820×168; logo h 48→54px (box ≈216px, artwork ≈207px wide starting at x≈6px); tagline box set to ml-[6px] w-[207px], 13.5px (Poppins measures ≈204px there) and justified to fill exactly |
| K5 | Cover (both) | Too much yellow on slide 1 — yellow only for the highlights | ✅ CODE | Batch 21 — secondary cover yellows demoted to white/neutral in PricingCoverShared: right-rail stat values + borders, testimonial highlight spans, chip check icons; ambient glow halved (/20 → /10). Remaining amber: the number fill (the highlight), the Book a Call CTA (deck-wide standard button), small LinkedIn badges and hover borders |

## Owner review fixes (2026-10-20, Batch 22 — "20 Minutes." alignment)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| L1 | Cover V3 | The "20" fill and "Minutes." pill are not aligned — different heights, pill stuck out above and below the fill | ✅ CODE | Batch 22 — root cause in reveal.tsx: the fill paints exactly the word's line box, but the label rect had a -0.08em vertical bleed, making it ~14px taller with different top/bottom edges. Both treatments now paint the identical vertical box (label inset → 0em vertical, sideways bleed kept) with the same 0.2em corner radius (fill wrapper rounded to match); geometry contract documented in the component |

## Owner review fixes (2026-10-20, Batch 23 — no dashes, no underlines)

Owner rule: em dashes, hyphens in compound words, and underlines read as AI slop — remove them deck-wide. Full sweep of every slide's rendered copy, verified by grep (zero left in copy; code comments untouched).

| # | Scope | Change | Status |
|---|-------|--------|--------|
| M1 | All slides | Em dashes removed from all rendered copy (8 spots): promise line "No instability, no churn, no rewrites", valuation line, savings subtitle, CTA line, 3 starter tooltips, starter bonus name line (now "Alim Ul Karim · 20+ Yr Enterprise Veteran"), compare table cell "No mentor overhead, honest scope" | ✅ CODE |
| M2 | All slides | En dash ranges rewritten with "to": prices ($6,800 to $8,000 etc. on tiers, detail, savings), "15 to 21 days", "Day 3 to 7", "2 to 4 hrs / wk", team scope "3 to 5" | ✅ CODE |
| M3 | All slides | Hyphenated compounds opened up: full time, mentor level, CTO level, vibe code, money back guarantee, 14 day, prescreened, prevetted, mid level, AI built, late night, "Initial Sign Up" + "Client Specific Simulation" (pyramid legend and stage texts) | ✅ CODE |
| M4 | Slides 3, 7 | Underlines removed: Fragile Code's underline sweep → marker highlight; Product Health's red underline sweep → red marker highlight | ✅ CODE |
| M5 | Slides 5, 14 | Under-text bars removed: the amber accent bar under slide 5's headline, and the amber bar under slide 14's logo beat (the logo's own swoosh stays) | ✅ CODE |
| M6 | Plan overlay | Bug found by the sweep: TierPlanDetail's tier switcher buttons split names on " — " which no longer exists in tier names, so the buttons rendered EMPTY. Now derives the short name by stripping the "Tier N" prefix ("Growth" / "Skilled" / "Leadership") | ✅ CODE |
| — | Compare table | Row divider lines (border-b) kept: they are table structure, not text underlines | — |

## Owner review fixes (2026-10-20, Batch 24 — cover recommendation cards, reference matched)

Owner pointed at present-v1.riseup-asia.com slide 1 and approved a written plan to match its recommendation boxes (design, hover, text style). Applied to the shared cover QuoteCard (both variants):

| # | Aspect | Change | Status |
|---|--------|--------|--------|
| N1 | Background | Flat black/65 → subtle vertical gradient, warm charcoal top (#211d15) to black bottom | ✅ CODE |
| N2 | Border | White/15 → thin muted amber at rest (accent/30); hover brightens to full amber | ✅ CODE |
| N3 | Hover | Soft amber glow (0 0 44px, 25% amber), slight zoom scale 1.02 via whileHover (entrance transition preserved, scale has its own 0.3s timing), name turns amber via group-hover | ✅ CODE |
| N4 | Badge | Amber "LinkedIn" pill → blue "Verified" pill (#0a66c2 family) with LinkedIn icon | ✅ CODE |
| N5 | Arrow | Small amber ArrowRight added at the card's bottom-right corner | ✅ CODE |
| N6 | Quote text | Highlight span removed — quotes are now uniform italic gray; Cristian trimmed to the reference excerpt style with his real words ("...successfully led us through troubled times... so the team could focus..."); Jakub given the same light excerpt trim; Adam unchanged (already short) | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 25 — "20 Minutes." vertical shift)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| O1 | Cover V3 | Owner screenshot, measured: heights now match (122 vs 115px, Batch 22 worked) but the yellow block is SHIFTED UP vs the pill — top edge 20px higher, bottom edge 13px higher; red line drawn under the pair shows the fill's bottom not reaching the pill's bottom | ✅ CODE | Batch 25 — root cause: WaterFill's wrapper has overflow:hidden, and CSS aligns such inline-blocks by their bottom margin edge instead of the text baseline, so the fill rides ~0.15em high. Both WaterFill and LabelDrop wrappers are now `align-bottom`, so their boxes coincide by construction and the digits land on the same baseline as "Minutes." Geometry contract in reveal.tsx updated |

## Owner review fixes (2026-10-20, Batch 26 — stacked treatments touching)

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| P1 | Cover V1 | "80%" (line 1) and "Time." (line 2) read as attached: both treatments paint the FULL line height, and adjacent line boxes share an edge, so where the two overlap horizontally the paints touch with zero air | ✅ CODE | Batch 26 — both paints now stop 0.07em short at top and bottom inside their line boxes (fill paints through an inner clip window at inset-y 0.07em; label rect inset → 0.07em vertical), leaving a guaranteed 0.14em (~13px) air channel between stacked treatments. Same line pairs ("20" + "Minutes.") keep identical edges; glyph coverage unchanged (digits sit well inside the shaved box) |

## Owner review fixes (2026-10-20, Batch 27 — "Cut" name treatment)

Owner showed his "Alim Ul Karim" graphic and approved the plan in chat: apply its lettering pattern to the V1 cover headline's "Cut".

| # | Slide | Change | Status |
|---|-------|--------|--------|
| Q1 | Cover V1 | "Cut" now renders like "Alim": first letter "C" in solid amber (pres-accent), remaining letters "ut" in a pale amber gradient (#ffc95e → #ffdf9e → #fff3cf, bg-clip-text). Implemented as a data-driven `accentWord` option on CoverHeadline; V3 does not set it and is unchanged. "Time." pill untouched (dark text on white, per the approved plan); "Hiring" stays white | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 28 — "80%" gradient)

Owner chose the gradient reading of his "make 80% text color like this" ask.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| R1 | Cover V1 | "80%" now carries the name treatment like "Cut": "8" in solid amber, "0%" in the pale amber gradient, directly on the dark background. The amber water-fill box is REMOVED for this word (new `fillGradient` option on CoverHeadline) because pale gradient letters are invisible on the amber box, and the reference name graphic has no box. WaterFill entrance replaced by the standard word fade-up. V3's "20" keeps its water fill (owner named "80%" only; same option can be switched on for "20" on his word) | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 29 — "80%" water load)

Owner clarified and approved the plan in chat: the gradient "80%" should LOAD in a watery way, left to right, every time the slide loads.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| S1 | Cover V1 | The gradient "80%" now water-loads: a faint ghost copy (white 16%) sits in place; the gradient copy is revealed through a clip window growing 0% → 100% width over 1.1s (clipPath inset animation), with a soft glowing waterline bar riding the reveal front and fading out at the end. Mount-triggered, so it replays on every visit to the cover. Words after it in the line ("Off") wait an extra 0.5s, so the sequence reads: "Cut" lands, "80%" loads, "Off" arrives, "Time." pill drops | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 30 — liquid INSIDE the "80%" letters)

Owner rejected Batch 29's over-the-top wipe ("it's not watery way — 80% inside that color would be watery liquid") and approved the corrected plan: the letters are the vessel, the color inside them is liquid with a wave surface.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| T1 | Cover V1 | New `LiquidWord` component in CoverHeadline replaces the Batch 29 wipe AND the Batch 28 static gradient: the gradient "80%" is gated by a clip window whose top edge is a travelling sine wave (generated polygon, constant point count for interpolation). On mount the liquid level rises inside the letters 102% → 6% over 1.25s with the wave phase advancing (waves churn while rising); afterwards the wave loops forever (2.8s cycle, gentle bob) so the word stays liquid. No ghost, no wipe bar (per the approved plan); an invisible layout copy holds the word's box. "Off" now waits an extra 1.0s to land as the fill completes | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 31 — the water fills only 80%)

Owner corrected Batch 30 in his own words: someone pours water into the "80%", and "the water contain only eighty percent" — the liquid must stop at 80% of the word, never fill it whole. Confirmed in chat before building.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| U1 | Cover V1 | `LiquidWord` final level changed from near-full (surface at 6% of the box) to an 80% glyph fill: the rise now stops with the wave surface at 32% of the word box, computed from the measured Plus Jakarta Sans metrics (baseline at 89.2% of the 1.04em line box, cap span 71.6% of the box; 89.2 − 0.8 × 71.6 ≈ 32). The top fifth of every digit ("8", "0", "%") stays empty; the wave keeps drifting at the 80% line forever; the fill replays on every visit to slide 1 | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 32 — white top on "80%")

Owner annotated a screenshot (red box over the empty tops of the "80%" digits): "this red mark of 80% word top side make white". The top 20% must not be see-through; it keeps white text.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| V1 | Cover V1 | `LiquidWord`'s base copy is now a visible WHITE copy of the word (was an invisible layout placeholder). The liquid gradient still paints only the bottom 80% inside the letters; above the wavy waterline the digits are white text, so the word is always fully readable — white top, watery gradient below | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 33 — same liquid for "Hiring")

Owner: "make same things for Hiring word also".

| # | Slide | Change | Status |
|---|-------|--------|--------|
| W1 | Cover V1 | "Hiring" (line 2) gets the full LiquidWord treatment via a new `liquidWords` config option on CoverHeadline (V1 sets ["Hiring"]): white base word, gradient liquid ("H" solid amber, "iring" pale gradient) rising inside the letters to the same 80% waterline, wave drifting at the surface. Replaces its old slow fade. LiquidWord also gained an entrance fade at its delay (0.3s) so a liquid word never pops in before its turn — line 2 now stays hidden until 0.9s, and "80%" fades in just before its liquid starts | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 34 — "Time." pill turns yellow)

Owner: "time word background make it yellow".

| # | Slide | Change | Status |
|---|-------|--------|--------|
| X1 | Cover V1 | The "Time." label pill switches from white to yellow: V1 config `labelTone` "white" → "amber" (LabelDrop's existing amber variant, pres-accent background; the word still pops back dark on the pill, same drop animation, same geometry). V3's "Minutes." pill stays white — owner named the Time word only | ✅ CODE → REVERTED in Batch 35 (owner: white is better) |

## Owner review fixes (2026-10-20, Batch 35 — revert: "Time." pill back to white)

Owner: "make white would better revert back".

| # | Slide | Change | Status |
|---|-------|--------|--------|
| Y1 | Cover V1 | Batch 34 reverted as a forward commit (no history rewrite): V1 config `labelTone` "amber" → "white". The "Time." pill is white again, exactly as before Batch 34 | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 36 — Book a Call button matches present-v1)

Owner pointed at present-v1.riseup-asia.com/1: "from here book a call button make same thing for our ppt — write what you add for button". Plan written in chat and approved (including the link change) before building. Reference facts verified from that deck's own bundle and design system: primary CTAs use an "Accent gradient" (linear-gradient 135deg, pres-accent → pres-accent-glow), dark text; the hero "Book a Call" links to https://meet.rasia.pro/intro-call in a new tab.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| Z1 | Deck-wide (DeckButton) + Cover | Primary DeckButton fill is now the 135deg amber gradient (hsl(var(--pres-accent)) → hsl(var(--pres-accent-glow)), our glow token = 41 100% 65%) instead of flat amber; hover brightens the gradient (brightness-110) and lifts the glow shadow (25px/0.35 → 38px/0.5); base transition widened to transition-all so filter and shadow animate. Every primary CTA in the deck inherits it (cover "Book a Call", CTA slide buttons). The cover "Book a Call" link changes from client.rasia.pro/hiring-v1 to meet.rasia.pro/intro-call (new tab, as the reference). Label, arrow, pill shape, size and dark bold text unchanged | ✅ CODE → button spec SUPERSEDED by Batch 37 (the gradient came from the reference's design-system doc for a DIFFERENT button; the hero button itself is flat — the link change stands) |

## Owner review fixes (2026-10-20, Batch 37 — button rebuilt to the hero button's real spec)

Owner: "not same". Cause found and owned: Batch 36 copied the gradient recipe from present-v1's design-system doc, which describes its DOWNLOAD-panel button; the hero "Book a Call" in that deck's own hero chunk (StaffAugHeroSlide) is a different spec, extracted and explained in chat, then approved ("yes") before this build.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AA1 | Deck-wide (DeckButton) + Cover + CTA slide | DeckButton rebuilt to the present-v1 hero CTA's exact spec: FLAT pres-accent fill (gradient and glow shadow removed), Poppins semibold (font-body 600, was Ubuntu bold), 17px text (was 24px), padding 12px by 30px (was 20px by 40px), 8px icon gap, hover flips the fill to WHITE (pres-text) with the dark text unchanged, 0.2s transition. Outline variant matched to their sibling outline button: 1.5px pres-accent/40 border, transparent fill, WHITE text (was amber), same 17px size and padding. Call-site icons scaled to the new size: cover arrow 24px → 18px, cover Sparkles 24px → 16px in accent, CTA slide icons 32/28px → 18px | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 38 — no zoom on button hover)

Owner: "when hover button zoom in animation no need". Cause: the global `.presentation-action:hover` rule in index.css lifts and zooms every action element (`translateY(-3px) scale(1.015)`), and DeckButton carries that class — the zoom rode underneath Batch 37's color flip.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AB1 | Deck-wide (DeckButton) | Buttons no longer move on hover or press: a `.deck-button` override in index.css (same specificity as the global rule, placed after it) sets `transform: none` for hover and active states, and DeckButton carries the new class. Hover is now ONLY the color flip (amber → white on primary; faint amber wash on outline). Other `presentation-action` elements keep their lift — the change is scoped to buttons, as the owner asked | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 39 — slide 2 heading in the split-hook design)

Owner supplied a reference title card (Bengali/English split-sentence hook design, specced in chat + a written spec) and directed: slide 2's heading "Outage Panic 2 AM Production Break" in the same design, with the word mapping stated first and confirmed ("make it").

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AC1 | Slide 2 (Outage Panic) | The three headline beats restyled to the split-hook design via new optional PainBeat fields (sizePx, hook, dotAfter, soft, indentClass): "Outage Panic" white bold 56px with a pure-red full-stop dot after it; "2 am" (lowercased per the design) as THE hook — pure red #FF0000 text at the full 96px; "Production Break" soft white (white/90) 45px, indented ml-[150px] so it starts under the hook's second half. Ratios follow the design spec (58 / 100 / 47 against the 96px hook). The red marker highlight is removed for this slide (highlightIndex −1 — the design has no boxes behind text); the staged cinematic beat entrances are unchanged. Slides 3 and 4 keep their existing headings | ✅ CODE → geometry enhanced in Batch 40 |

## Owner review fixes (2026-10-20, Batch 40 — make slide 2 FEEL like the reference)

Owner compared screenshots side by side: "not actually same design, not feeling same". Pixel measurement of both images found the size ratios were already close (line1/hook 0.76 vs 0.79; payoff/hook 0.60 vs 0.64) — the gap was SPACING and SHADOW: the reference packs its lines (gap ≈10% of hook height; the payoff line's rows OVERLAP the hook's by ~21%, interlocked), while ours floated (gap ≈71%; +36% gap before the payoff), and the reference carries a strong soft shadow while ours was faint.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AD1 | Slide 2 (Outage Panic) | Split-hook block scaled up (64 / 110 / 52px) and packed to the reference's geometry: hook pulled up −18px (line 1 → hook gap now ~10% of hook height), payoff tucked −20px into the hook's line box with its indent widened to 160px; every line gets the reference's strong soft text shadow (0 14px 34px black/65 + 0 4px 10px black/60, replacing the faint inherited headline shadow on these beats). New generic `className` field on PainBeat carries the packing. Ubuntu has no 800 weight in this deck, so the heaviness comes from scale, packing and shadow rather than a heavier cut | ✅ CODE → copy restructured in Batch 41 |

## Owner review fixes (2026-10-20, Batch 41 — the copy mirrors the reference's word structure)

Owner: "it doesn't feel same — maybe you change copy as well, same size, same word, same character size". Correct diagnosis: the reference's hook is a WIDE two-word phrase ("copy business", 13 chars, 88% of the frame); ours was "2 am", a 4-character stub that cannot dominate at any size. The heading's copy is now rearranged into the reference's exact slots, using only the heading's own words — nothing invented, nothing dropped.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AE1 | Slide 2 (Outage Panic) | Beats are now: line 1 "Outage" white 64px + red dot + "Panic" as the small connector word (28px, new `smallAfter`/`smallSizePx` fields on PainBeat) — mirroring [বাংলাদেশ • যেখানে]; line 2 the hook becomes "production break" (lowercase, pure red) at 90px, which measures 740px wide in Ubuntu Bold = 88% of the text column, the reference hook's exact share of its frame; line 3 "2 am" soft white 58px, indented 335px (≈45% of the hook's width, the reference closing line's position). Packing and strong shadow from Batch 40 retained, margins re-derived for the new sizes (−16px / −18px) | ✅ CODE → superseded by Batch 42 (owner asked for the exact reference words) |

## Owner review fixes (2026-10-20, Batch 42 — slide 2 carries the reference's exact words)

Owner: "update slide 2 with same word". The heading now IS the reference copy — বাংলাদেশ • যেখানে / copy business / জন্য বিখ্যাত — in the reference's design, so it can be judged 1:1. Baloo Da 2 (700/800) added to index.html for the Bengali; the hook is Plus Jakarta Sans 800. Sizes solved from PIL band measurements against the reference's glyph-band ratios (line 1 = 0.79 × hook band, closing = 0.64, small word = 0.45 × line 1): line 1 112px + small word 50px, hook 94px, closing 92px. Indents follow the reference's rightward cascade (+20% / +45% of hook width). PainBeat gained per-beat `fontFamily`/`fontWeight`.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AF1 | Slide 2 | Heading copy replaced with the exact reference words (বাংলাদেশ + red dot + যেখানে / copy business / জন্য বিখ্যাত); Baloo Da 2 loaded; per-beat fonts; measured sizes and cascade indents (125px / 288px); packing + strong shadow kept; whitespace-nowrap so the long lines never wrap | ✅ CODE → dot removed in Batch 43 |

## Owner review fixes (2026-10-20, Batch 43 — the "dot" was the i of business)

Owner: "why you add dot after Bangladesh?" Pixel analysis of his reference image proved him right: the red mark is a 25×24 cluster at x≈699, y≈361, sitting directly above the 21px-wide stem of the letter "i" in "business" (x≈701) — it is the i's tittle, lifted into the notch between the white words by the tight packing. There is NO punctuation dot in the design. (The same misread put a dot in Batches 39–41 and in the split-hook spec doc; the spec doc is corrected too.)

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AG1 | Slide 2 | `dotAfter` removed from the বাংলাদেশ beat — line 1 is now just the two white words, exactly as the reference. The only red on the slide is the "copy business" hook itself | ✅ CODE → gaps re-solved in Batch 44 |

## Owner review fixes (2026-10-20, Batch 44 — gap analysis redone, margins solved from measurements)

Owner: "the gap — copy business and top and bottom words gap is not matching". Fresh pixel analysis of the reference: line 1 ink 287–383, hook body 397–514 (tall elements to 361), closing line 488–566. So the reference has **14px of air** between line 1 and the hook body, and the closing line **overlaps the hook's band by 26px**. Scaled ×0.786 to this slide: +11px air / 20px overlap. A PIL simulation of the actual CSS stack (real ink boxes of Baloo Da 2 + Plus Jakarta Sans, 0.96 line height) measured the shipped build at 15px air / **6px overlap** — the closing line floated 14px too low. Margins solved from the simulation and verified in it: hook −16 → −20px, closing −18 → −32px gives exactly +11 / 20. (Noted: PJS's i-dot/b rise is 20px vs the reference font's scaled 29px — a font-internal proportion no margin can change.)

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AH1 | Slide 2 | Hook margin −16 → −20px; closing line margin −18 → −32px, so the vertical gaps match the reference's measured geometry (top air 11px, bottom interlock 20px at slide scale) | ✅ CODE → font loading hardened in Batch 45 |

## Owner review fixes (2026-10-20, Batch 45 — the rendered font was a fallback; Baloo now loads with the slide)

Owner's screenshot of Batch 44 showed the closing line striking through "business". Root cause found by measurement, not opinion: his preview rendered the Bengali in a FALLBACK system font (ink height/width ratio 6.4 in his screenshot vs Baloo Da 2's 7.94; glyphs visibly serifed) whose ink sits ~30px higher in the em than Baloo's — every margin had been solved against Baloo's ink boxes, so the closing line landed on the red glyph bodies. Verified on the live surface too: stufff-aug-v4.lovable.app is serving a stale build (its bundle contains no Baloo and no Bengali words at all — Lovable deploy stall), and the editor preview had the new slide code with a stale index.html, which is where the font link lived. In the Baloo model the Batch 44 geometry is correct: closing line ink top = hook baseline +1px (reference: +4 at slide scale). Fix: PainBeats now injects the Baloo Da 2 stylesheet itself (`BalooFontLoader`), so the font travels with the slide code and no stale page file can strand it again. The css2 response was verified to carry a proper bengali subset for Baloo Da 2.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AI1 | Slides 2–4 (PainBeats) | `BalooFontLoader` in PainBeats injects the Baloo Da 2 (700/800) Google Fonts stylesheet on mount if absent; index.html link kept as the second path | ✅ CODE → font switched to Noto Sans Bengali in Batch 46 |

## Owner review fixes (2026-10-20, Batch 46 — Bengali face switched to Noto Sans Bengali 900, everything re-solved)

Owner: "fix it". Baloo Da 2 was the wrong face twice over: its rounded, vertically compressed forms (ink w/h 7.94, ink starting 0.45em into the em) match neither the reference's traditional Bengali face nor the fallback his screen rendered (6.4). Switched to **Noto Sans Bengali 900** (ink w/h 6.67, ink at 0.20em — measurable, traditional, closest available to both) and re-solved the whole stack against its real ink: sizes line 1 106px, small word 56px, closing 87px (band ratios 0.83 / 0.53 / 0.68 of the hook); margins hook −39px, closing −5px. Stack simulation verifies exactly: top body gap +11px, closing line ink top = hook baseline +4px, 17px tuck into the hook's band. The component loader and index.html now both load Noto Sans Bengali (700/900); beats use weight 900.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AJ1 | Slide 2 + PainBeats + index.html | Bengali font Baloo Da 2 → Noto Sans Bengali 900 everywhere (beats, loader, index link); all sizes and both margins re-solved from Noto's measured ink boxes and verified in the stack simulation | ✅ CODE → slide stripped to heading only in Batch 47 |

## Owner review fixes (2026-10-20, Batch 47 — slide 2 keeps only the heading)

Owner's red-marked screenshot: remove the eyebrow ("Problem 01 · Production Risk"), the short line ("Your customers find the bug before you do."), the metric block ("$18,500/M / Outage & Churn Bleed") and the resolution ("Every hour down loses customers you paid to win."). Keep ONLY the heading — বাংলাদেশ যেখানে / copy business / জন্য বিখ্যাত. (His screenshot also confirms Batch 46 worked: Noto Sans Bengali rendering, closing line tucked under the hook without crossing it.)

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AK1 | Slide 2 only | New `bare` flag on the Problem data (set on Outage only): ProblemStorySlide skips the eyebrow, short line and metric/resolution row entirely; the heading block centers vertically in the freed space. Slides 3–4 unchanged (flag off) | ✅ CODE → final copy applied in Batch 49 |

## Owner review fixes (2026-10-20, Batch 49 — the SaaS owner title, owner's pick)

After several copy rounds the owner briefed the persona precisely: a SaaS owner whose app (his own or his team's) was vibe coded; at midnight/2 am he can't sleep — production is down, a deadline is coming, he feels the tension. From five options written to that brief he picked: **Deadline** *coming* / **production is down** / **no sleep tonight**. Built in the split-hook template, all Plus Jakarta Sans 800, sizes/gaps solved from PJS ink boxes and verified in the stack simulation (+11px top air, closing ink top = hook baseline +4px): Deadline 96px + small "coming" 41px, hook 94px (856px wide), closing 63px; margins −5/−7px; cascade indents 171/385px. Bare mode kept — heading only on the slide. (An earlier English build, "Outage / production break / 2 am", was prepared locally as Batch 48 but never pushed — the owner interrupted it to choose copy first; this batch supersedes it.)

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AM1 | Slide 2 | Beats replaced with Deadline + coming / production is down / no sleep tonight in the split-hook template (PJS 800, measured sizes, solved margins, cascade indents) | ✅ CODE → word animation in Batch 50 |

## Owner review fixes (2026-10-20, Batch 50 — word-by-word entrance + per-word shadow)

Owner: the words should not arrive line by line — each word comes at a different time from a different direction, slowly, so people can read and relate; and every word gets a little drop shadow. New `wordAnim` mode in PainBeats (slide 2's beats only; slides 3–4 keep the line cinematic arrival): words are counted across the whole heading; word N enters at 0.25s + N×0.5s with a 0.6s slide-and-unblur. Directions: Deadline from the left, "coming" from the right, the hook's words alternate left/right (production / is / down), the closing line's words drop down from above (no / sleep / tonight). Every word carries WORD_SHADOW (0 8px 22px black/55 + 0 2px 8px black/50); the old per-line arbitrary shadow was removed from these beats so shadows don't stack.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AN1 | Slide 2 + PainBeats | `wordAnim` beat mode: per-word staggered entrances with per-word directions (left/right alternating, closing line drops down), 0.5s word stagger, per-word soft drop shadow; enabled on slide 2's three beats only | ✅ CODE |

## Owner review fixes (2026-10-20, Batch 51 — slide 3 text moves to the left)

Owner: "update slide 3 left side text placement like slide 2" — understanding shared in chat first, owner confirmed "go". Slide 3 (Fragile Vibe & / AI Code) was the mirrored layout from FB-11 (align "right": text block at pl-[980px], right-aligned, flipped overlay). Now align "left", identical placement to slide 2 (pl-[100px] pr-[980px], left-aligned, standard overlay). Copy, yellow marker highlight and line animation unchanged — placement only, as agreed.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AO1 | Slide 3 | `align: "right"` → `"left"` on the Fragile problem data — text block, alignment and overlay gradient now match slide 2's left-side placement | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 52 — slide 3 gradient-pill title)

Owner shared a reference (statement headline, key words on a gradient pill) and approved the plan in `gradient-pill-title-slide3-plan.md`: slide 3 gets a heading-only title on the RIGHT side — "Nobody can explain / what the AI wrote." in Plus Jakarta Sans 800 at 76px (measured fit: ~764px / ~689px in the 840px block) — with "explain" and "AI" on amber gradient pills (light amber → #FFAD01 → deep amber, near-black word, pill pops in 0.35s after its line). New data-driven `pillWords` on PainBeat + `PillWord` in PainBeats; the marker highlight is bypassed for pill beats (highlightIndex -1). Supersedes AO1/Batch 51: align back to "right", `bare: true` added; short/metric/resolution data kept in the file but hidden by bare mode.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AP1 | Slide 3 + PainBeats | Gradient-pill title per the approved plan: right side, bare, pillWords ["explain"] / ["AI"], PJS 800 76px | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 53 — slide 3 photo side + translucent pill)

Owner: on slide 3 he sees NO image on the left, and the pill background must be MORE TRANSPARENT like the reference. Diagnosis (verified on the live build + the photo itself): the fragile-code photo is composed subject-right / dark-wall-left (the two engineers and monitors occupy x≈42–100%; the left ~42% is a near-black wall, mean brightness 18/255). With Batch 52's text on the right, the title covers the subject and the visible left side is the empty wall — the image reads as missing. Fix: new data-driven `imageFlip` on the Problem (img `scaleX(-1)`, safe — fadeIn animates opacity only), set on slide 3 only: subject lands on the left, title sits over the dark wall on the right. Pill: opaque gradient → translucent glass gradient (rgba amber 0.80–0.88) with a light top edge border, per the reference.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AQ1 | Slide 3 + PainBeats | `imageFlip: true` on slide 3 (photo subject moves left, dark wall behind the title); PillWord background now a translucent amber gradient with a glass edge | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 54 — slide 3 matched closer to the reference)

Owner compared the build with his reference screenshot twice ("still not same") and approved the assistant's written fix list. Changes: (1) title grows 76px → 118px and restacks to 3 lines — "Nobody can / explain what / the AI wrote." (the proposed "explain what the" line measures 1007px at 118px, too wide for the 840px block, so "the" moves to line 3; all lines ≤ ~804px, verified by PIL measurement); (2) the pill becomes a DARK amber glass — vertical deep-amber gradient at 0.66–0.74 alpha, subtle light edge, WHITE word — the reference's dark-glass structure in our amber (supersedes the bright pill of Batches 52–53); (3) pill word at semibold 600 against the ExtraBold plain words (the reference's weight contrast); (4) pill padding up to 0.14em × 0.42em so the word sits centered.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AR1 | Slide 3 + PainBeats | Title 118px in 3 lines (Split A, measured); PillWord = dark amber glass, white 600 word, generous padding | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 55 — slide 3 pill clearance)

Caught on the Batch 54 simulation render before the owner saw it live: at 118px the pill is 146px tall (line box 113 + 0.28em padding) but the line pitch was 132px (0.96em box + 19px), so the "explain" and "AI" pills — whose x-ranges intersect — would touch by ~14px between lines. Line gap raised 19px → 34px (pitch 147px, clears the pill; also closer to the reference's airy leading). Slide 3 beats only.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AS1 | Slide 3 | Beat margins mt-[19px] → mt-[34px] on lines 2–3 so consecutive pills never touch | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 56 — slide 3 Ubuntu + measured pill geometry)

Owner: typography must be Ubuntu (the Batch 52 switch to Plus Jakarta Sans followed slide 2 and was never his instruction for slide 3), and the pill's top padding is too much. Fixes: slide 3's three beats now `fontFamily: 'Ubuntu'` at weight 700 (slide 2's beats verified untouched — still PJS); Ubuntu measured at 118px: lines 657 / 776 / 792px, all fit. Pill geometry MEASURED from the owner's reference image (engineering/product pills): pill height ≈ 1.07–1.16 × font size and side padding ≈ 0.22em there — PillWord now lineHeight 1 (optically centers the ink; at the inherited 0.96 line-height Ubuntu's ink sits low, which is what read as excess top padding), padding 0.05em × 0.24em (total height 1.10em, was 1.24em), radius 0.13em, word at Ubuntu 500 against the 700 plain words. Pill-to-pill clearance grows to ~17px.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AT1 | Slide 3 + PainBeats | Beats → Ubuntu 700; PillWord → measured reference geometry (lh 1, pad 0.05/0.24em, radius 0.13em, word 500) | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 57 — slide 4 letter-object title)

Owner shared a new reference ("Design / Publish": a letter replaced by a gradient tile bearing the letter; a letter replaced by an object that means the word — rocket for publish) and approved the assistant's plan (`letter-object-title-slide4-plan.md`, primary option). Slide 4 (Problem 03) is now heading-only (`bare: true`), left side, Ubuntu Bold at 176px (measured: Hiring ≈ 649px, Sinkhole ≈ 798px in the 840px block): "Hiring" with the "i" replaced by an amber gradient TILE (rotated −6°) bearing a black HOURGLASS (the 90-day wait), and "Sinkhole" with the "o" replaced by a black-hole VORTEX (dark disc, amber swirl arcs). New data-driven `tileAt`/`tileSymbol`/`objectAt`/`objectKind` on PainBeat + `TileLetter`/`VortexLetter` in PainBeats; highlight bypassed for device beats. Photo checked first (the slide 3 lesson): subject sits right, dark copy space left — no flip needed. Slides 2–3 untouched (diff-verified).

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AU1 | Slide 4 + PainBeats | Letter-object title per the approved plan: hourglass tile in "Hiring", vortex "o" in "Sinkhole", 176px Ubuntu Bold, bare | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 58 — slide 4 real black hole photo + tile presence)

Owner (after Batch 57): the reference objects are REAL (a real rocket) — replace the drawn vortex with a real black hole image; and enhance the "Hiring" tile's position/presence. Plan shared, owner said "go". Changes: (1) `VortexLetter` SVG deleted → `BlackHoleLetter`: the Event Horizon Telescope M87 photograph (CC BY 4.0, EHT Collaboration; shipped as `src/assets/blackHoleData.ts` — a data-URI module, because push-files rejects binary files; the 960px Commons JPEG, 24KB, unmodified) at 1.05em in the "o" slot, negative margins keep the letter slot at the "o" advance, radial mask (solid to 52%, gone by 71%) melts its black edges into the slide; `objectKind` renamed "vortex" → "blackhole". (2) TileLetter: 0.84em → 0.92em with −0.05em margins so it overlaps H and r like the reference's tile, centred on the cap band (verticalAlign −0.1em at the new size), hourglass 0.5em → 0.56em, deeper shadow.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AV1 | Slide 4 + PainBeats + asset | Real M87 black hole photo as the "o" of Sinkhole (radial-masked, oversized); tile enlarged/overlapping per the reference. NOTE: push-files rejects binaries (not UTF-8), so the JPEG ships as a data-URI module `src/assets/blackHoleData.ts` (unmodified bytes, EHT credit in the header) | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 59 — black hole zoomed to object scale)

Caught on the Batch 58 simulation before the owner saw it live: the M87 ring fills only ~45% of its frame, so at the planned 1.05em box the visible ring measured ~0.47em — smaller than the "o" it replaces, reading as a glowing dot instead of an object. Fix inside the approved plan: the photo now zooms 1.95× inside its box (mask moved to the wrapper span, widened to solid 62% / gone 88%), so the ring spans ~0.9em like the reference's rocket. Verified on the re-rendered simulation: word still reads instantly, ring overlaps h/l edges slightly like the reference's objects do.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AW1 | Slide 4 + PainBeats | BlackHoleLetter: img scale(1.95) inside a masked wrapper so the ring itself is the object | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 60 — owner's own black hole image, transparent, no overlap)

Owner supplied his own black hole image (white accretion-disc render) and directed: use THIS image in Sinkhole, background transparent, sized so it does NOT overlap the h or the l. Changes: (1) the M87 data module is replaced — `blackHoleData.ts` now carries the owner's image, processed offline (cropped to the ring at (550,209)–(1330,989) of his 1800×1200 PNG, alpha built from luminance with a radial falloff so the space background is transparent and the glow melts out; the dark interior disc stays; WebP 640×640, 85KB). Measured visible extent inside the 0.8em display box: solid bright parts end at ±0.33em (the letters' bearing edge), ring spans ~0.63em. (2) BlackHoleLetter simplified: 0.8em box, verticalAlign −0.13em, margins −0.11em (layout slot still the "o" advance), no mask/zoom/filter — the transparency is baked into the asset. Verified on the simulation: no square patch, no touch on h or l, word reads instantly.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AX1 | Slide 4 + PainBeats + asset | Owner's black hole image (transparent cutout) as the "o", contained in its letter space per his no-overlap rule | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 61 — black hole grown for balance)

Assistant's design review of Batch 60 (requested by the owner): both words read instantly and the tile position is right; the one imbalance — the hole (ring ~0.63em) is visually quieter than the 0.92em tile. Owner approved the recommended growth. Box 0.80em → 0.86em (ring ~0.68em), verticalAlign −0.16em, margins −0.14em. No-touch verified by font measurement at 176px: the "o" centre sits 0.370em from the h ink edge and 0.372em from the l ink edge; the asset's bright extent is 0.409 of its box, reaching 0.352em — ~3px of air remains on both sides.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AY1 | Slide 4 + PainBeats | BlackHoleLetter box 0.80em → 0.86em for device balance; no-touch re-verified by measurement | ✅ CODE |

## Owner review fixes (2026-10-21, Batch 62 — slide 3 selection-box highlight)

Owner shared a design-tool screenshot (empty rectangle outline, corner handles, mouse arrow) and asked for that highlight device on slide 3. After a clarification round he approved: AMBER box (not the screenshot's blue), pills removed, box on the highlighted words ("explain" and "AI" both boxed — his "1 & 2"; the alternative reading, "AI" back to plain, is a one-line data change if he corrects it). Implementation: new `selectWords` field on PainBeat + `SelectWord` in PainBeats — the word stays plain bold white (a selection never recolours its text); an amber outline (0.025em) draws in from the top-left via clip-path like a mouse drag at delay+0.35; four white corner handles (0.085em, amber edge) reveal as the drag passes; an amber mouse arrow (0.3em SVG) settles at the bottom-right corner at delay+0.95. PillWord remains in the file, unused. Fit re-measured: line 2 ≈ 806px, line 3 ≈ 822px in the 840 block. Checklist AZ1.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| AZ1 | Slide 3 + PainBeats | Selection-box highlight (amber outline + handles + cursor arrow) replaces the glass pill on "explain" and "AI" | ✅ CODE |

## Owner direction (2026-10-21, Batch 63 — slides 6, 7, 8 removed)

Owner: "no need slide 6,7,8 remove it". The exact list was restated and confirmed by him before executing (Delivery Promises, Product Health, Who We Are). Changes: Index.tsx — the three components leave the slides array and their imports are removed (deck 16 → 13 slides; after The Solutions the flow lands directly on Pricing Tiers); SlideNavigation.tsx — the three dot labels removed from the inline label array so dots stay aligned. The component files (PromiseBandsSlide.tsx, IdentitySlides.tsx) stay in the repo unreferenced, as with the Batch 4 removals — reversible by a forward commit. New order: Cover, Outage Panic, Fragile AI Code, Hiring Sinkhole, The Solutions, Pricing Tiers, Chief Architect, Architect Value, What's Included, How It Works, Startup Offer, Cost Savings, Contact.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BA1 | Index + SlideNavigation | Slides 6/7/8 (Delivery Promises, Product Health, Who We Are) removed from the deck; dot labels aligned; deck now 13 slides | ✅ CODE |

## Owner direction (2026-10-21, Batch 64 — slide 5: Save + Hiring highlighted)

Owner (annotated screenshot of slide 5): "also highlight save and hiring word here". The L3 phrase previously had NO marker ("Hiring" was extrabold only). Fix: PHRASES gains an optional `focus2`; "Save Time Hiring" is restructured to focus "Save" + focus2 "Hiring", both wrapped in MarkerHighlight with the L3 pyramid band's orange — hsl(35, 90%, 55%) = rgb(244, 157, 37) at 70% (bg-[rgba(244,157,37,0.7)]) — completing the slide's own system (L5 amber pres-accent, L4 red destructive, L3 orange). Save sweeps at 0.25s, Hiring at 0.45s.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BB1 | Slide 5 (SolutionBridgeSlide) | Marker highlights on "Save" and "Hiring" in the L3 phrase, L3 orange, matching the 5% / Missing system | ✅ CODE |

## Owner direction (2026-10-21, Batch 65 — pricing card hover smoothness)

Owner pointed at present-v1 slide 22's card hover ("hover in and hover out that smooth... currently it's too fast and not premium feel") and asked for the same on our slide 6 (Pricing Tiers). Extracted from present-v1's compiled CSS: its showcase card class (.player-card) runs transform, border-color and box-shadow on ONE clock — 0.45s cubic-bezier(0.22, 1, 0.36, 1) — hover translateY(-4px) scale(1.015), border accent 0.6, layered shadow + amber glow. Ours had split clocks (lift 0.35s framer, border/shadow 200ms CSS) — the snap he felt. Fix (timing only, geometry unchanged): whileHover duration 0.35 → 0.45 (same ease); card class transition duration-200 → duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]; the card's "View details →" group-hover reveal aligned to the same 450ms curve. Buttons untouched (DeckButton system). Note: the reference uses no literal transition-delay — the "little delay" feel is the 450ms expo tail, applied symmetrically in and out.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BC1 | Slide 6 (PricingTiersSlide) | All tier-card hover properties unified on the reference's 450ms cubic-bezier(0.22,1,0.36,1) clock, hover in and out | ✅ CODE |

## Owner direction (2026-10-21, Batch 66 — How It Works: all steps clickable)

Owner asked why only Step 01's detail worked on slide 10 (How It Works). Root cause (verified in code): FB-26 only ever wired Step 01 — `isDiscovery` gated the role, tabIndex, onClick and the "Tap for detail" hint; steps 02–04 were display-only. Fix (owner "go"): the overlay is now data-driven — state `detailStep: number | null`; every step carries 3 `segments` (Step 01's copy unchanged; Step 02's segments group the deck's own named stages — Screening / Real work tests / Live test & hire — no invented stage names; Step 03: Joins your tools / Learns your codebase / Starts shipping; Step 04: Architect supervision / Regular audits / Flexible scaling). All four cards are buttons (click + Enter/Space), share Step 01's accent border treatment, and show "Tap for detail". Step 02's card badge "In 20 min" untouched (FB-27 judgment call stands).

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BD1 | Slide 10 (PricingHowItWorksSlide) | Detail overlays for Steps 02–04 in Step 01's pattern; all cards clickable with the detail hint | ✅ CODE |

## Owner ruling (2026-10-21, Batch 67 — FB-27 CLOSED)

Owner: Step 02 must not say "20 minutes" — the vetting badge now reads **"7 to 21 days"** (range written with "to", per his standing rule). This closes the FB-27 judgment call: the "In 20 min" badge kept since Batch 6 is removed at his direction. Only the Step 02 card badge changed; Step 02's overlay segments carry no time claim. (The V3 cover's "Hire in 20 Minutes" headline is a separate claim — untouched, his call if he wants it revisited.)

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BE1 | Slide 10 (PricingHowItWorksSlide) | Step 02 time badge "In 20 min" → "7 to 21 days" | ✅ CODE |

## Owner direction (2026-10-21, Batch 68 — plan detail switcher tooltips)

Owner asked for tooltips on the TierPlanDetail switcher pills ("when hover on those also tooltip tier names growth, leadership of all pricing details"); plan approved, then "go". Built with the same ui/tooltip system as the pricing cards (FB-22): each switcher pill (the two non-open tiers) shows, above the pill after a 300ms hover delay — full tier name, badge chip when present (Skilled's BEST VALUE), the tier's audience line, flat price with suffix, and "Experience · hours". All values come from the tiers prop + AUDIENCE already in the component; nothing new written. "Compare all plans" gets no tooltip (it opens the full table); pill clicks still switch tiers.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BF1 | Pricing overlay (TierPlanDetail) | Hover tooltips with full pricing details on the tier switcher pills | ✅ CODE |

## Owner direction (2026-10-21, Batch 69 — gate hint pill removed)

Owner: remove the animated amber gate pill ("Press Next to reveal the bonus (1 of 3)"); replace with a light, one/two-word, non-highlighted tooltip. Plan approved, then "go". Built: SlideNavigation's shared hint is now plain muted text (13px, white/55, medium, no fill/glow/border, no bounce) at the same top-right spot, with a soft 0.3s fade on change (`.gate-hint` keyframe appended to index.css; the div is keyed by its text so each step change re-fades). Texts shortened at the source — Starter: "Reveal bonus (1 of 3)" / "Growth booster (2 of 3)" / "Almost done (3 of 3)" / "Continue"; SolutionBridge: "Reveal solution" / "Level 1 (1 of 5)" … "Level 5 (5 of 5)" / "Continue". Gate mechanics untouched. Because the renderer is shared, both gated slides (5 and 11) got the light treatment, as stated in the approved plan.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BG1 | Slides 5 + 11 (shared SlideNavigation) | Bouncing amber gate pill replaced by a light one/two-word text hint; hint texts shortened | ✅ CODE |

## Owner direction (2026-10-21, Batch 70 — Startup Offer subline removed)

Owner marked the Startup Offer subline "No contracts. No hiring risk. Just results." for removal. Deleted the span from the slide's h1; the title "Startup Offer" stands alone. Nothing else on the slide changed.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BH1 | Slide 11 (StarterTierSlideV9Clone) | Subline "No contracts. No hiring risk. Just results." removed | ✅ CODE |

## Owner direction (2026-10-21, Batch 71 — starter features restored)

Owner pointed at the review video (t=1848, the 29:53–32:27 Startup Offer block): pricing features from that feedback were missing on slide 11. Audit shared in chat first (video transcript + the 30:30 spec screenshot vs current code); owner approved the restore ("yes update"). Restored in the left pricing card, in the old card's order (price → hours/deposit → checklist → bonus box): the 4-item checklist "Fixes fragile vibe & AI code" / "Starts in 20 minutes" / "Works in your timezone & stack" / "Slack, GitHub & Jira access" (amber CheckCircle icons, white/85 text) — dropped during the FB-29/Batch 10 rewrite (Batch 10's A3 "1+ Year" alignment is what removed the coding half). Experience line restored: focus subline now "3+ years coding · 1+ year in industry", and the hover detail now opens "Doing coding for 3 years, plus one full year shipping real products…" (video: detail below + more on hover). The "Fix Fragile Vibe Code" right-side row was NOT separately restored — its feature is back as checklist item 1, per the approved proposal's scope. Verified still present (not missing): the 14 Day Money Back Guarantee / 100% Risk Free bottom banner.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BI1 | Slide 11 (StarterTierSlideV9Clone) | Tier 1 feature checklist (4 items) restored in the pricing card; "3+ years coding" restored to the experience line + hover | ✅ CODE |

## Owner direction (2026-10-21, Batch 72 — logo beat removed)

Owner: the Riseup Asia logo overlay on slide 11 must go — no Next press should bring it. Removed beat 3 of the gate entirely (overlay JSX, showRiseUp state, logo import, AnimatePresence import), superseding FB-30's third beat and Batch 20's logo treatment at his direction. The gate is now 2 beats: press 1 reveals the Chief Architect Bonus, press 2 fires the rocket (Growth Booster), press 3 advances to slide 12. Hints renumbered: "Reveal bonus (1 of 2)" / "Growth booster (2 of 2)" / "Continue".

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BJ1 | Slide 11 (StarterTierSlideV9Clone) | Logo brand beat removed; gate is now 2 beats, third Next advances | ✅ CODE |

## Owner direction (2026-10-21, Batch 73 — savings badges yellow)

Owner marked all four savings badges on slide 12 (Cost Savings) in red: "make all % yellow". The badges were neutralized in Batch 6 (FB-31) — he now overrides that for these badges. One shared span renders all four ("Up to 76% / 71% / 68% / 67% Savings"): now the deck's standard yellow badge — solid `bg-pres-accent`, dark text (`pres-dark-safe-accent`), semibold. The slide's headline highlight "76% saving" stays as is, so the slide now carries the amber headline plus four amber badges, at his explicit direction.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BK1 | Slide 12 (PricingSavingsSlide) | All four "Up to N% Savings" badges turned yellow (solid amber, dark text) | ✅ CODE |

## Owner direction (2026-10-21, Batch 74 — URL offer system)

Owner supplied the seo-packages-v2 link system (`?p1=500=highlight&p2=999&p3=1200`) and asked for the same offer mechanics here; plan shared in chat first (understanding + shortcodes + build steps + 3 decisions), owner approved the `t1 / t2 / t3a / t3b` style and the plan ("this style do it"). Built: new `src/lib/urlOffers.ts` parses the query string once — t1 Starter, t2 Growth, t3a Skilled, t3b Leadership; grammar mirrors the reference (`t2=3499` offer only, `t2=highlight` feature only, `t2=3499=highlight` both, `t2=3499=Any Words` offer + badge text). Safety: an amount counts only as a plain positive number below the tier's real low price (1900/4299/6800/7500), else ignored; if any parameter features a tier, only those tiers are featured, else deck defaults. Surfaces wired: PricingTiersSlide cards (offer price in yellow, struck real price + offer badge below it; tooltips and TierPlanDetail inherit the effective tiers; TierPlanDetail header shows struck + badge too, and its switcher tooltips show effective prices), TierDetailSlide comparison headers (struck + yellow), StarterTierSlideV9Clone card (t1: struck $1,900/M + chip + yellow offer price). Range tiers take one flat offer price (approved proposal). Cost Savings slide deliberately untouched (its percentages derive from standard prices). The FB-19 config render is superseded by the URL system; PRICING_OFFER.badgeText ("Launch offer") remains the default badge text. Example: `?t1=1500&t2=3499=highlight&t3a=5900&t3b=6900`.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BL1 | Deck-wide (urlOffers + PricingTiersSlide, TierPlanDetail, TierDetailSlide, StarterTierSlideV9Clone) | URL-driven offers: t1/t2/t3a/t3b with highlight/badge grammar; struck real price + yellow offer price | ✅ CODE |

## Owner direction (2026-10-21, Batch 75 — slide 12 badge + headline refinement)

Owner rejected Batch 73's whole-badge yellow and refined the plan over three rounds before "go": badge returns to the quiet dark pill; inside it, "Up to" stays plain white, the percentage is YELLOW TEXT ONLY (no pill/block behind the number), and "Savings" uses the slide-1 word treatment — "S" solid yellow, "avings" in the fading pale-amber gradient (90deg, #ffc95e → #ffdf9e 55% → #fff3cf, the Batch 27 recipe). Headline: "Less." and "More." in yellow (text-pres-accent); "Pay" and "Ship" stay white — this supersedes FB-32's all-white headline and FB-31's single-highlight rule at his explicit direction. The "76% saving" amber line, 80% card, rate rows and prices untouched.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BM1 | Slide 12 (PricingSavingsSlide) | Savings badges segmented (white "Up to", yellow %, S solid + fading "avings"); headline "Less."/"More." yellow | ✅ CODE |

## Owner direction (2026-10-21, Batch 76 — slide 13 design transplant)

Owner first asked for slide 13 to become present-v1 slide 26 exactly, then CORRECTED: slide 13 keeps OUR content word for word; only the DESIGN comes from present-v1's Contact slide (live /26; their spec doc "Slide 35 — Contact": QR card 412 wide, inner row gap 80, column gap 38, glow blob, halftone right half). Built: QR card moved LEFT in the reference style (white card, thin gold border, our QR image, "Scan to connect" caption); content column RIGHT — eyebrow, headline, NEW short gold underline bar, subline, email as an icon-badge row, Schedule a Call / Call Now as uniform 400px gold pills (our order and links kept); golden radial glow + halftone dot texture behind the right content; the old bottom accent line and center glow removed for fidelity. SlideHeader kept (stated assumption, uncorrected). Nothing imported from their content (no address, no social icons, no "RiseupAsia" headline). This also settles FB-35's open question in practice: the "previous" contact design he remembered is this present-v1 slide; its composition now lives on our slide 13 with our copy.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BN1 | Slide 13 (PricingCTASlide) | Design rebuilt to present-v1 Contact layout (QR left, content right, gold bar + icon-badge rows); content unchanged | ✅ CODE |

## Blocked on owner (nothing to build until these arrive)

1. FB-03: DONE — font matched from the designed image (Plus Jakarta Sans).
2. FB-27: confirm keeping the "In 20 min" vetting badge on Step 02.
3. FB-35: point to the "previous" CTA design if a different one was meant.
4. Confirm-or-tweak (my judgment calls, Batch 10): pain copy (FB-06), tagline "Top 5% Engineers, On Demand" (FB-23), "76% saving" (FB-31), Starter "1+ Year" numbers (A3).
5. Confirm-or-tweak (Batch 13, C3): tier experience figures aligned to 4+ / 6+ / 8+ years across cards and compare table.

## Deploy status (2026-10-20 QA)

**STALLED:** the live app serves a pre-Batch-9 build. Commits `3795ebc` (Batch 9:
dot-nav labels + spec rewrite), `2c61dc5` (Batch 10: copy pass + cover crossfade),
`0e3a78d` (FB-03: Plus Jakarta Sans cover), `cee874e` (Batch 12: viewer-facing gate
tooltips), and Batch 13 (human-eye QA fixes C1–C14) are on `main` (verified in repo)
but NOT live — bundle inspection confirms. Owner action: check Lovable dashboard
(GitHub sync / Publish). Code state vs live state tracked per item below as CODE/LIVE.

## Deployment note (2026-10-19)

`stufff-aug-v4.lovable.app` serves the current code (verified in the built JS bundle).
`stuff-aug-v1.riseupasia.xyz` serves an OLD v1 build from a different Lovable project —
none of this work is live there. The custom domain must be pointed at the v4
deployment in the Lovable dashboard (owner action). Always verify fixes on the
lovable.app URL.

## Owner direction (2026-10-27, Batch 77 — header tagline deleted)

Owner (annotated screenshot, red mark under the logo): "no tagline need below logo". Deleted the "Top 5% Engineers, On Demand" tagline span from the shared `SlideHeader.tsx` (the `BRAND_TAGLINE` export is gone — it was used nowhere else). The header is now the logo alone, deck-wide, since every slide renders this one component. The thin rule directly under the logo wordmark is part of the logo PNG artwork itself, not a code element, so it is untouched. Landed on top of the owner's Oct 27 Lovable-side commits (HEAD at build time `fc6fcf0`).

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BO1 | All (SlideHeader) | Tagline below logo deleted; header is logo only | ✅ CODE |

## Owner direction (2026-10-27, Batch 78 — slide number in the URL)

Owner asked why the URL never shows the slide number after changing slides. Root cause verified in code: (1) Index.tsx controls PresentationEngine, so the engine's built-in ?slide= read/write effects (uncontrolled path only) never run; (2) Index hardcoded `useState(0)` — "always initialize on Slide 1"; (3) a mount effect DELETED `slide` from the URL. Fix, all in `src/pages/Index.tsx`: the mount cleanup now strips only the legacy `cover` param; `currentIndex` initializes from `?slide=` (1-based, validated 1..13, else cover); a `currentIndex` effect writes `slide` = index+1 via replaceState on every slide change, preserving all other params (offer params t1/t2/... survive). replaceState chosen deliberately (same as the engine's existing convention): the address bar always shows the current slide without one history entry per change — so the browser Back button will NOT step through slides; switching that to pushState is a one-line change if he wants it. Gate beats don't change the index, so they write nothing. PresentationEngine untouched.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BP1 | Deck-wide (Index) | ?slide=N deep-link in + out: URL shows current slide number, link opens that slide | ✅ CODE |

## Owner direction (2026-10-28, Batch 79 — pain-slide photos swapped for owner-picked Drive photos)

Owner sent three Drive photos himself (replacing the earlier Drive-stock recommendations, which he did not pick): slide 2 = "developers-discussing-programming-code", slide 3 = "developers-working-with-computer-codes-in-team", slide 4 = "boxes-logistics-and-writing-with-business-man". All three ship as WebP data-URI modules (slide2OutageImageData, slide3FragileImageData, slide4HiringImageData — 90KB / 69KB / 70KB WebP, round-trip hash-verified) because push-files rejects binary files (Batch 60 precedent). PainPointsSlide.tsx is the only file changed: the three imports + image fields + imageAlts. NOTHING else changed per slide: slide 2 keeps its left overlay fade, title, word animation and align-left; slide 3 keeps imageFlip: true (new photo is subject-right like the old one) plus its right overlay fade and the "explain"/"AI" selection boxes; slide 4 keeps its left overlay fade, title, hourglass tile and black-hole 'o'. The old problem-*.jpg assets stay in the repo unreferenced (reversible).

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BQ1 | Slides 2, 3, 4 (PainPointsSlide) | Photos swapped for owner-picked Drive photos; fades, titles, devices unchanged | ✅ CODE |

## Owner direction (2026-10-28, Batch 80 — bottom dot of the current slide advances gated steps)

Owner report (slide 5 screenshot, red mark on the bottom dots): tapping the below navigation never brought the pyramid slide; the pyramid only appeared through the top-right Next/Prev. Root cause found in code: the pyramid is a 6-step gate driven only by Next (SlideNavigation goNext / Index handleNext check window.__slideNavigationGate first), while bottom dots call handleNavigate directly, which jumps slides and never touches the gate — and tapping the dot of the slide you are already on was an explicit no-op (newIndex !== currentIndex guard). Fix, in src/pages/Index.tsx handleNavigate only: when newIndex === currentIndex and a gate is registered, trigger it (one step per tap); when the gate is finished the tap stays put. Dots for other slides still jump as before; Next/Prev/swipe/keyboard behaviour unchanged; the pyramid design itself unchanged. Same rule automatically covers slide 11's gated bonus/rocket steps.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BR1 | Slide 5 (+ all gated slides) | Active bottom dot advances gate steps like Next; other dots unchanged | ✅ CODE |

## Owner direction (2026-10-28, Batch 81 — slide 3 photo replaced again)

Owner sent a second Drive photo for slide 3 ("diverse-programming-engineers-talking-about-html", three engineers around code monitors) with "use this image instead of current" — replacing the Batch 79 slide-3 photo the same night. Content swapped inside the existing slide3FragileImageData module (WebP q80, round-trip hash-verified), so no import change. Composition call: the Batch 53 imageFlip is REMOVED for this photo — its people already sit left-center and its code monitors sit right, so flipping would have put the people under the right-side title; unflipped, the dark monitors sit under the title behind the right overlay fade and the people stay visible left. Title, selection boxes, fade unchanged.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BS1 | Slide 3 (PainPointsSlide) | Photo replaced with owner's second pick; imageFlip removed (composition) | ✅ CODE |

## Owner direction (2026-10-28, Batch 82 — voice-feedback round 1: slides 1, 2, 4, 5)

Owner's voice round (no approval asks — "create a task list, plan it, start working"). This batch covers the fully-specified items; pricing transplant, card hovers and detail-page density follow as Batches 83–85.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BT1 | Slide 1 (V3 cover) | "20" WaterFill box now bleeds 0.13em sideways, exactly like the "Minutes." pill; treated-word wrapper margins 0.09em → 0.22em so the air to neighbours stays 0.09em on both treatments — one shared padding, no cut left edge, no near-touch between the "20" box and the pill | ✅ CODE |
| BT2 | Slide 2 hook | Recoloured word by word via new PainBeat.wordColors: "production" our yellow #FFAD01, "is" white, "down" hook red #FF0000 (was: whole line red) | ✅ CODE |
| BT3 | Slide 2 closing | "sleep" in "no sleep tonight" gets the slide 3 "explain" selection-box device (amber outline draws in, corner handles, mouse arrow) — renderWords now honours selectWords inside wordAnim; box draws after the word lands (enter + 0.6s) | ✅ CODE |
| BT4 | Slide 4 title | Hourglass tile retired at owner's word ("does not read as hiring"): new TileLetter symbol "person" — black head + shoulders silhouette on the same amber tile, same size/tilt/shadow | ✅ CODE |
| BT5 | Slide 5 pyramid | L3 "Save"/"Hiring" markers band-orange → our yellow pres-accent/70; L4 "Missing" marker destructive red → its own band red rgba(226,54,83,0.7); L5 "5%" marker → SOLID pres-accent with dark text, so the yellow on "Top 5%" is exactly our yellow | ✅ CODE |
| BT6 | Slide 5 dots | No code change: Batch 80's active-dot gate trigger verified sound (gate trigger step 0 reveals the pyramid); owner's repeat report attributed to Lovable preview sync lag — retest once the preview pulls Batch 80 | ✅ CODE (verify in preview) |

## Owner direction (2026-10-28, Batches 83–85 — voice-feedback round 2: pricing, hovers, detail pages)

Built locally in edit83/; push held for the single combined tap (Batch 82's three push cards timed out untapped — see Batch 82 note).

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BU1 | Slide 6 (Pricing Tiers) | Card design transplanted from the v1 deck's slide 2 pricing (owner's link; bundle-extracted, content untouched): rounded-2xl, 28px/24px padding, 2px borders, gradient wash on the featured card, flush top-right corner badge (solid amber, dark text, 14px, 0.05em tracking) replacing the floating pill, small uppercase dim tier name, amber experience line, 48px bold price (this deck's price face kept), text-only subtle hours pill, check-icon feature rows in muted 18px, v1 entrance (0.3 + idx*0.12, 0.6s), gap-8 grid, v1 subline above the grid. Kept: 3 tiers, URL offers, tooltips, View details reveal, Batch 65 hover lift. Dropped: dot texture, divider, Clock icon (v1 has none) | ✅ CODE |
| BU2 | Slides 7, 8, 9, 10 | Premium card hover (Batch 65 recipe) on every card: whileHover lift -8px + scale 1.015 on one 450ms cubic-bezier(0.22,1,0.36,1) clock, border + shadow on the same clock, amber glow. Slide 7 profile + pillar cards, slide 8 stat + featured cards (featured glow intensifies on hover) + tier rows (plain divs: CSS lift), slide 9 guarantee cards, slide 10 step cards (click-to-overlay untouched) | ✅ CODE |
| BU3 | Pricing detail (TierPlanDetail) | Hierarchy pass on the single-tier detail overlay: group headers get an amber accent bar + 22px, rows breathe more (16px), excluded rows double-coded (dim text + X + opacity), values never wrap (whitespace-nowrap) so the amber values stay the visual anchors. Comparison overlay untouched — it already has per-column colour highlighting | ✅ CODE |

## Owner direction (2026-10-28, Batch 86 — bottom-dot pyramid sequence must complete into slide 6)

Owner report, frustrated: tapping the bottom navigation on slide 5 never walks the pyramid into slide 6 — it jumps straight to the next slide ("experience"). Root cause, owned: Batch 80 made the current slide's dot step the gate but IGNORED trigger()'s return value, so once the pyramid was complete (reveal + 5 levels) the dot went dead instead of advancing — unlike Next, which advances when trigger() returns false. Fix, in Index.tsx handleNavigate only: the same-index dot now mirrors Next exactly — consumed step stays, exhausted gate advances to the next slide, no gate stays put. Same rule automatically completes slide 11's bonus/rocket sequence into slide 12. Dots for other slides still jump directly by design. Second factor to check in his preview: Lovable sync lag — Batch 80 (eaf40b3) plus Batches 82–85 (b35aa538) must both appear in his editor history list, or the preview is still on an older build and no dot fix will show.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BV1 | Slide 5 (+ all gated slides) | Current-dot tap advances to next slide once the gate is exhausted; stepping unchanged | ✅ CODE |

## Owner direction (2026-10-28, Batch 86b — forward dot taps must step the pyramid, not skip it)

Owner's follow-up made the real behaviour clear: he taps the NEXT dot (slide 6) from slide 5 and it jumps straight to slide 6, skipping the pyramid — "directly goes to the experience". Batch 80 never covered forward dots, only the current slide's dot; an earlier forward-dot fix was approved but never landed on main (verified: fresh HEAD has no forward branch), so it is re-applied here surgically on fresh HEAD. Fix, in Index.tsx handleNavigate only, after the Batch 86 same-index branch: a forward dot tap while a gate is unfinished advances one gated step and stays (exactly like Next); once the gate is finished the tap jumps to the tapped slide; backward taps always jump freely. Full dot rules now: current dot steps the gate and, when exhausted, advances to the next slide; forward dots step the gate while unfinished, else jump; backward dots jump. Same rules complete slide 11's bonus/rocket sequence.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BV2 | Slide 5 (+ all gated slides) | Forward dot taps advance one gated step while unfinished instead of jumping past the sequence | ✅ CODE |

## Owner direction (2026-10-28, Batch 87 — six pyramid sub-dots between slide 5 and 6 dots)

Owner confirmed the design after the understanding round: add six extra steps in the navigation between slides 5 and 6, each dot going to the next pyramid level one by one. Implementation: SolutionBridgeSlide's gate gains goToStep (1 = reveal, 2..6 = levels 1..5; works forward and back, sound only moving forward); SlideNavigation polls the gate step and, only while on slide 5, renders six small sub-dots between the slide 5 and slide 6 dots — reached steps glow amber, upcoming ones are small white. Tap in order to walk one by one, or tap any dot to jump straight to that level. Batch 86 dot-stepping untouched. Scope kept to slide 5 only (slide 11's bonus/rocket gate has no sub-dots).

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BW1 | Slide 5 nav | Six pyramid sub-dots between dots 5 and 6, visible on slide 5, each jumping to its level | ✅ CODE |

## Owner direction (2026-10-28, Batch 88 — price anchoring slides after slide 4)

Owner-approved plan: price anchoring was missing before the solution and pricing. Two new slides inserted between Hiring Sinkhole and the solution pyramid (deck 13 → 15 slides). Slide 5 "Bad Hire Cost": big red $35,000 anchor (the owner's figure, no invented splits — loss lines stay qualitative: salary while nothing ships, recruiting paid twice, fragile AI code to rewrite, deadlines missed), closing "Do you want to lose $35,000 hiring a cheap developer?". Slide 6 "The Comparison": cheap hire $35,000 lost vs Riseup engineer from $1,900/M (deck's own starter price, shown early per the approved plan so the anchor has a number), deck-true rows only, closing "Same work. A fraction of the loss.". Both single-step, no gates. Renumbering: solution pyramid → slide 7, pricing → slide 8, rest shift by two; dot labels + URL range follow; Batch 87 pyramid sub-dots moved with the solution slide (index 4 → 6). Website pages (franchise / forward-deploy SEO, linking, EAT) NOT in this batch — still needs his site + URLs.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BX1 | New slide 5 | Bad hire $35,000 anchor slide, qualitative loss lines, owner's closing line | ✅ CODE |
| BX2 | New slide 6 | Anchor comparison: $35,000 lost vs from $1,900/M Riseup engineer | ✅ CODE |
| BX3 | Deck-wide | 13 → 15 slides; labels, URL range, sub-dot index moved with solution slide | ✅ CODE |

## Owner direction (2026-10-28, Batch 89 — slide 6 becomes the problems, comparison dropped)

Owner correction on Batch 88: no comparison on slide 6 — the slide stays in the problem instead, so the anchoring plan fills out as number, then problems, then solution. New slide 6 "Behind the $35,000": four problem beats tied to the earlier pain slides (production breaks again at 2 AM; nobody can fix what was written; deadlines slip again; hire again from zero, $35,000 was only round one), closing "This is what a cheap hire really costs.". Same slot, so the deck stays 15 slides and the solution stays slide 7. AnchorComparisonSlide removed from the order and dot label "The Comparison" → "Real Cost"; the comparison file stays in the repo unreferenced, so it can return before pricing with a one-line change if he asks.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BY1 | New slide 6 | Problems-behind-the-$35,000 slide replaces the comparison slide | ✅ CODE |
| BY2 | Deck-wide | Comparison out of the order + label; file kept unreferenced (reversible) | ✅ CODE |

## Owner direction 1 (2026-10-28, Batch 90 — anchor slides join the pain family)

Owner agreed slides 5 and 6 did not match the other slides' design and picked direction 1: both rebuilt on the pain-slide shell — full-bleed photo + problem-story overlay + side text block, exactly like slides 2 to 4 — and the $35,000 anchor moved from red to the deck's own amber (pres-accent), so red stays a single-word accent on slide 2 only. Photos picked from the Drive stock folder after viewing (swap offer stands): slide 5 = late-night founder at a laptop, dark red curtains, text LEFT (clean curtain left, man right, no flip); slide 6 = dark empty office desk, text RIGHT (desk left, window side under the right overlay fade, no flip). Copy, order, and gates unchanged; deck stays 15 slides.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| BZ1 | Slide 5 | Photo-backed pain shell, amber $35,000, text left | ✅ CODE |
| BZ2 | Slide 6 | Photo-backed pain shell, amber $35,000 in title, text right | ✅ CODE |

## Owner-approved loop framing (2026-10-28, Batch 91 — slide 6 rebuilt again)

Owner caught that the four slide 6 beats are already told (01 = slide 2, 02 = slide 3, 03 = slide 2 deadline pressure + solution L4 promise, 04 = slide 4 + slide 5 loss lines), so the slide was a recap pretending to be new. Rebuilt: the four become short recap steps in ONE LOOP (amber numerals 01-04, 34px bold) with the return cue "and it starts again.", and the punch "The $35,000 was only round one." is the hero (48px bold, amber number). Big title and all four sub-lines deleted (about 75 words down to about 25). Extra dark wash (pres-bg gradient) deepens the right text zone so white type never fights the bright window. Photo, side, and order unchanged; no new numbers or claims.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CA1 | Slide 6 | Loop recap steps + return cue + punch hero; title/subs cut; deeper text wash | ✅ CODE |

## Owner pick Plan 1 (2026-10-28, Batch 92 — slide 6 becomes "only the receipt")

Owner picked Plan 1 from the 3-plan replan. REPLACES the Batch 91 loop: split layout, giant amber $35,000 at slide 5's size on the left with "is only the money." under it, hairline divider, three unpriced lines on the right with amber dots ("Customers who stop waiting." / "A team stuck rewriting." / "Nights you don't get back."). Empty-desk photo stays as a dim backdrop (both story overlays + pres-bg wash) so type never fights the window. The anchor grows in the viewer's mind with no new figure claimed; the three lines are consequences of slides 2-5, not new claims. Same slot, single step, no gate.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CB1 | Slide 6 | Receipt split: amber $35,000 + "is only the money." + 3 unpriced lines; loop removed | ✅ CODE |

## Owner direction (2026-10-28, Batch 93 — "Cut" goes white)

Owner screenshot of the V1 cover: "Cut" felt like too much coloring. Diagnosis: Cut was fully amber (C solid + "ut" pale gradient, Batch 27) next to 80% also fully amber (Batch 28) and above Hiring's amber liquid (Batch 33) — three amber words in the headline. Fix, owner-approved: remove `accentWord: "Cut"` from PricingCoverV1's headline config only. Cut now renders as a plain white word; 80% keeps its amber (it is the message), Hiring keeps its liquid, V3 untouched, CoverHeadline's accentWord option left intact (reversible in one config line). Spacing verified: the accent branch and the plain branch render identical spans, and PIL measurement on Plus Jakarta Sans 800 gives 0.26em air (about 31px at 120px) between Cut and 80% — no crowding.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CC1 | Cover V1 | "Cut" plain white; accent treatment removed from config | ✅ CODE |

## Owner pick Direction 1 (2026-10-28, Batch 94 — slide 5 stripped to pure anchor)

Owner picked Direction 1 for the cheap-feeling slide 5. Cut: the four loss lines and the closing question (generic number-plus-bullet template, repeated slides 2-4 pains, doubled slide 6's dot list). Kept: eyebrow "The cost of a cheap hire", giant amber $35,000 at 160px, "lost on one bad hire", photo shell unchanged. Added: bridge line "That is what you can count." (36px bold) — frames $35,000 as the countable part and sets up slide 6's uncountable part. Count-up animation was offered but not picked; still available as a small addition on his word. Same slot, single step, no gate.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CD1 | Slide 5 | Pure anchor: lines + question cut, bridge line added | ✅ CODE |

## Owner-approved density fix (2026-10-28, Batch 95 — all three detail pages)

Owner said "fix all" to the density + Slack plan. Density built: focus block of the tier's 3 differentiators (from TIER_DIFFERENTIATORS, highlight substring in amber) leads the right column; Delivery group leaves the list and becomes one shared muted line derived from the data ("Every plan includes: ..."); excluded X-rows filtered out of detail pages (comparison overlay keeps them); remaining rows condensed (26px to 24px, padding 16px to 12px, group gaps 56px to 36px). One shared component, so Growth, Skilled, and Leadership change together. Header, switcher pills, Compare button, tooltips, and URL offers untouched. Slack NOT changed in this batch: Skilled's Slack value still needs the owner's exact words — no guessed SLA claim was put live; it remains a one-line data change in tierFeatures.ts once he supplies it (or says "use Priority Slack" to confirm the guess).

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CE1 | All 3 detail pages | Focus block + shared delivery line + X-rows out + condensed rows | ✅ CODE |
| CE2 | Slack row | Skilled value still needs owner's exact wording — NOT guessed | ⏳ WAITING |

## Owner direction (2026-10-28, Batch 96 — slide 6 line replaced)

Owner: "is only the money." does not read clearly and must be replaced with a different line. Diagnosis: money sounds like cost, so the line can read backwards as "that is all" — the opposite of the slide's meaning. Fix, one line only: "is not the whole cost." Same size (36px bold), same position, same structure ($35,000 above it), so no layout change. Nothing else on the slide changed — right-side lines, photo, split layout all untouched.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CF1 | Slide 6 | "is only the money." → "is not the whole cost." | ✅ CODE |

## Owner-approved testimonial match (2026-10-29, Batch 97 — QuoteCard = present-v1 live cards)

Owner approved the comparison plan. QuoteCard in PricingCoverShared.tsx rebuilt to the live present-v1 cards (measured Oct 29 from present-v1.riseup-asia.com/1): warm gradient out, flat near-black bg-[#0d0d0f]/90 in; border amber/30 to faint gold amber/15; radius 12px to 14px; avatar 48px with amber ring to 44px plain; name 20px to 16px, hover-amber removed; role 15px truncated to 13px wrapping; quote 18px to 14px; Verified text 14px to 11px, icon 14px to 12px; arrow 20px to 16px; left card width 640px to 400px (right card keeps its 420px column, stat cards untouched). Hover is halo-only now: framer zoom removed AND the shared presentation-action CSS lift removed (it would otherwise still move the card on hover), full-amber border removed, softer 32px glow kept. Padding 20px, blue pill structure, italic quote, link target, both-card arrangement, and our people/quotes (Cristian/Jakub/Adam) all unchanged. Both cover variants share the component, so V1 and V3 update together. Present-v1 sizes were screenshot estimates, so border softness/radius are match-by-eye targets for his preview check.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CG1 | Cover V1 + V3 | QuoteCard rebuilt to present-v1 live card spec | ✅ CODE |

## Slide 2 line-to-line gap (2026-10-29, Batch 98 — PainPointsSlide only)

Owner (Romanized Bangla): "ektu gap hobe line to line" — a little gap between the lines. Slide 2's title was packed by design (Batch 49: hook -5px, closing -7px, lines interlocked). Changed to hook mt-[10px] and closing mt-[10px], so a little air sits between "Deadline coming" / "production is down" / "no sleep tonight". Indents (171/385px), sizes (96+41/94/63px), wordAnim, wordColors and the "sleep" selection box untouched. Block grows 32px total, absorbed by the centered text block.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CH1 | Slide 2 (Outage) | Title line gaps -5/-7px to +10/+10px | ✅ CODE |

## Pyramid markers unified (2026-10-29, Batch 99 — SolutionBridgeSlide Phrase only)

Owner (Romanized Bangla): "color gula 5% er color hobe ar ektu bigger hobe taile padding ta thik thakbe". All four phrase markers now solid bg-pres-accent with pres-dark-safe-accent text (dark text required — white on solid yellow would not read), like the 5% marker already was: Missing loses its band red rgba(226,54,83,0.7), Save/Hiring lose their amber/70 wash. Markers a little wider: px-2 on the Phrase calls overrides the component's px-1 (Tailwind scale order). Shared MarkerHighlight default untouched (PainBeats markers keep their size); pyramid bands and numbered circles untouched.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CJ1 | Slide 7 (Solution) | Phrase markers unified to solid 5% yellow + px-2 | ✅ CODE |

## Slide 8 exactly like v1 slide 2 (2026-10-29, Batch 100 — PricingTiersSlide only)

Owner: "fix it" + an AI plan so any AI can reproduce it exactly. Built to
v1's own bundle.js code values (see spec/feedback/ai-plan-slide-8-exact-
match.md, the AI-executable spec). Headline ADDED: "Choose Your Plan"
Ubuntu 700 52px left 80 top 90, "Plan" amber; subline moved to absolute
left 80 top 178 (same text); grid absolute left 80 right 80 top 240
bottom 80 (1760x760, gap 32). Names gained the dash (Tier 2 — Growth
etc.). Experience to v1 ranges (2-3+ / 7-15+ / 7-15+). Prices to v1
format: Ubuntu bold, 48px single / 36px range by string length,
"/mo" suffix, en-dash ranges; hours pill to "160 hrs/month" with exact
v1 bg/border (0.08/0.15) via inline style. Features to v1's 4-item
lists as card-local data (shared differentiators untouched, so detail
focus blocks stay); icons plain Check to circled CheckCircle2.
Texture to 28px / 3%. Ambient glow, hover "View details" line, and
"Compare pricing" button DELETED (v1 has none). KEPT: card chrome,
badge, hover lift, card click to detail views, tooltips, overlays,
URL offers, toolbar/dots, USD note, bottom line. Detail headers follow
the new price format (they read the same tier objects); detail rows
and focus blocks unchanged.

| # | Slide | Change | Status |
|---|-------|--------|--------|
| CK1 | Slide 8 (Pricing) | Rebuilt to v1 slide 2 exact code values + AI plan doc | ✅ CODE |

## Dot tooltips + camera shortcuts (2026-10-29, Batch 101 — SlideNavigation + CameraBubble)

Owner approved both plans. (1) Tooltips: dots already had native title
tooltips, but those are slow and invisible on touch — replaced with
instant custom tooltips above every main dot ("N. <Slide name>", same
labels) and every pyramid sub-dot ("Pyramid step N: <name>"). The
wrapper span (not the button) carries the tooltip so the dot's hover
scale doesn't scale the tooltip text; native titles removed from dots
to avoid double tooltips; aria-labels stay; tap still navigates
immediately (long-press shows the tooltip on touch). Toolbar button
titles untouched. (2) Camera: added C to toggle the camera (mirrors F
for fullscreen), modifier-guarded so Ctrl+C copy is never hijacked;
button title now "Start/Stop camera (C)". Error notice split by cause:
permission denied (with allow-and-retry guidance), no camera found
(original text), other (incl. preview-frame note: open the deployed
link directly). Bubble now surfaces a failed video start instead of
swallowing it. Caveat that stands: a preview iframe can block the
camera entirely and no code overrides that — test on the direct
deployed link.

| # | Area | Change | Status |
|---|------|--------|--------|
| CK2 | Dot nav | Instant custom tooltips on dots + sub-dots | ✅ CODE |
| CK3 | Camera | C shortcut + kind-aware error notice + play-error surface | ✅ CODE |

## Slide 12 = v1 slide 7 exact match (2026-10-29, Batch 102 — PricingHowItWorksSlide)

Owner approved the plan ("approve go make exactly"). Built per the
approved recommendations: D1 columns stay clickable invisibly (detail
overlays + segments untouched, "Tap for detail" line removed, so the
static slide matches v1); D2 Step 02 keeps "7 to 21 days" — v1's
"As fast as 20 min" deliberately NOT restored, per the Batch 67
accuracy correction (strict v1 on that badge is a one-line change if
he ever orders it); D3 hover lift kept. Everything else is strict v1:
headline 68px absolute top 90, subline 22px top 178 (v1's exact words),
grid absolute left/right 80 top 300 bottom 60 gap 32, plain columns
(card chrome, blur, shadow all out), 80px icon nodes with 32px icons
at 70px top margin centered on the line, line 3px gradient top 410
drawn over 1s, labels 14px bold amber, titles 26px, descs 17px,
amber-pill badges 14px, step 3 renamed "Onboarding", all four descs
and Step 03 time ("Day 6–14") replaced with v1's words, texture 28px
at 3%, center glow removed. Untouched: logo header, toolbar/dots,
bottom accent line, overlay content, URL offers, all other slides.
Note: HEAD at build time was 2599721 ("Fixed keyboard effect order",
a Lovable-side commit) — verified it did not touch this file before
editing (all Batch 66/67/84 markers intact).

| # | Area | Change | Status |
|---|------|--------|--------|
| CK4 | Slide 12 | Rebuilt to v1 slide 7 exact values | ✅ CODE |

## Slide 12 strict-v1 gaps (2026-10-29, Batch 103 — PricingHowItWorksSlide)

Owner: "now fix the gaps" after the Batch 102 landing message. Fixed:
D1 detail overlays removed entirely (click/keyboard handlers, the 63-line
overlay panel, all 12 segments, dead imports useState/AnimatePresence/X)
and D3 hover lift removed + default cursor — columns are now plain
static blocks exactly like v1. HELD: D2 Step 02 badge stays "7 to 21
days". "Fix the gaps" named no exact item, and restoring v1's "As fast
as 20 min" would contradict his explicit Batch 67 ruling (no "20
minutes" for vetting, FB-27 closed). Per the ambiguous-approval guard
it needs his explicit override phrase ("use 20 min") — a one-line
change when given. Overlay content is not destroyed: it lives in repo
history (ac95072a and earlier) and is restorable.

| # | Area | Change | Status |
|---|------|--------|--------|
| CK5 | Slide 12 | Overlays + lift removed (strict v1 static) | ✅ CODE |
| CK6 | Slide 12 | Step 02 badge held at "7 to 21 days" | ⏳ WAITING |

## Slide 13 coloring + alignment (2026-10-29, Batch 104 — StarterTierSlideV9Clone)

Owner approved the plan ("yes"; D1 conservative direction accepted as
the plan default, D2 duplication kept unchanged — no content change
without his word). Coloring: amber disciplined — focus box and bonus
panel borders/tints moved to quiet white, checklist checks + benefit
icons + sparkle unified at muted amber/80, stat/guarantee hover
borders to white/20; left card keeps its accent/40 border as the hero
and STARTER pill + Offer word stay solid amber. Contrast: dim/muted
body text lifted to white/70-75 (focus subline, /M, hours row, bonus
lines, guarantee descs, banner); right column unified to one surface
(surface/80) and one border (white/10); price medium -> bold so it
dominates the 56px stat numbers; "100% Risk Free" mono -> deck body
font. Alignment: main row items-start -> items-stretch with an
h-full chain (wrapper + card) so the left card bottom always meets
the banner bottom in both bonus states; bonus panel p-3.5 -> p-5 so
its text edge matches the focus box; divider mb-3 -> mb-5; stale
"520px" comment corrected to 600px. Untouched: all copy, prices, gate
+ rocket, tooltips, URL offers, header, glow, accent line, other
slides. D2 "160 hrs" duplication deliberately kept (pill + stat card).

| # | Area | Change | Status |
|---|------|--------|--------|
| CK7 | Slide 13 | Coloring discipline + contrast + alignment | ✅ CODE |

## Slide 13 bolder improvements (2026-10-29, Batch 105 — StarterTierSlideV9Clone)

Owner approved the second plan (D1 Offer -> white built as part of
the approved plan; D2 duplication kept, no content change). De-box:
stats lost card chrome -> borderless number row with thin vertical
dividers (grid gap removed, cells py-2 px-6, border-l on 2nd/3rd);
banner lost its box -> hairline-top strip (mt-auto, px-6 py-4).
Single amber focus: price bold AMBER unconditionally, headline
"Offer" -> white, STARTER pill -> quiet dark (white/10 + white/15
border). Alignment: stats left-aligned (same 744 content edge as
row icon boxes + banner text); verification catch: stretch alone
does NOT align visual bottoms (right content ends early), so the
banner got mt-auto — bottoms now meet in BOTH bonus states, at the
cost of ~128px air above the banner when revealed. Air: card p-9
-> p-10, right column gap-5 -> gap-6, rows space-y-4 -> space-y-5.
Hero: card gradient accent/10 -> surface (slide 8 featured
precedent), amber border kept. Render: PIL wireframe at 1920x1080
(compare/slide13-batch105-wireframe.png) confirms shared edges,
single focus, fit (content ~834 < 1080). Untouched: copy, prices,
gate + rocket, tooltips, URL offers, header, glow, accent line,
other slides. URL offer badge stays amber (conditional badge only).

| # | Area | Change | Status |
|---|------|--------|--------|
| CK8 | Slide 13 | De-boxed stats, price amber focus, aligned edges, air, hero gradient | ✅ CODE |

## Slide 13 premium round (2026-10-29, Batch 106 — StarterTierSlideV9Clone)

Owner approved the third plan, correcting Batch 105: pricing flat,
"Startup" highlighted. Price amber -> bold white (weight kept, color
removed; discounted state also white, badge + strikethrough carry
the offer). Headline: "Startup" amber + "Offer" white (swap of the
original FB-28 treatment, per his explicit call). Premium quiet
chrome: hero border amber/40 -> white/15 + 80x4px amber signature
bar centered at the top edge; focus + bonus panels lost their
borders (white/5 fill only); benefit icon boxes removed -> bare
muted-amber 24px icons on the shared 744 edge. Alignment: right
column mt-auto -> justify-between (even 88px gaps, tops + bottoms
still aligned). Caught mid-build: an extra ">" from the card edit
broke esbuild parse — fixed by removing the stray character and
re-verified clean before pushing (lesson: re-run esbuild after
every manual fix, not just after the script). Render: PIL wireframe
at 1920x1080 (compare/slide13-batch106-wireframe.png); headline
spacing corrected after a first render drew "Offer" too far right
(PIL fixed-offset artifact, not the code). Untouched: copy, price
values, gate + rocket, tooltips, offers, header, glow, accent line,
other slides, 160 hrs duplication kept.

| # | Area | Change | Status |
|---|------|--------|--------|
| CK9 | Slide 13 | Price flat, Startup highlighted, quiet chrome, even gaps | ✅ CODE |

## Pricing detail pages premium pass (2026-10-29, Batch 107 — TierPlanDetail + PricingTiersSlide Back button)

Owner approved the plan (one shared component = all three tiers:
Growth, Skilled, Leadership; comparison overlay deliberately
untouched per Batch 85). Price medium -> bold white, discounted
also white (badge + strikethrough carry the offer). Amber
discipline: row values bold amber -> bold white; focus + row
checks solid -> muted /80; focus highlight words + group bars
stay solid amber; offer + tooltip badges stay solid amber.
Quiet pills: hours pill + tier badge pill -> white/10 fill,
white/15 border, white/85 text, /80 icons. Focus block -> white/5
rounded panel, no border. Rows keep hairlines + gain subtle
hover tint (white/0.03, no lift — rows are not clickable).
Hover animation (Batch 65 recipe: y -8, scale 1.015, 0.45s
presentationEase, amber/60 border, layered glow): switcher
pills + Compare pill (motion.button) + Back button in
PricingTiersSlide (motion.button, autoFocus kept). Alignment:
left column top-140 -> top-150 + flex-col, switcher mt-auto;
right column justify-center -> justify-start, shared line
mt-auto — both columns share top y=150 and bottom y=1010.
Tradeoff, disclosed: pinning leaves ~400px air above the
switcher and ~270px above the footnote (wireframe shows both);
the slide's bottom edge is finished on both sides instead.
Render: PIL wireframe at 1920x1080
(compare/detail-growth-batch107-wireframe.png). Untouched:
copy, price values, focus items, groups, rows, shared line,
switcher behavior + tooltips, URL offers, compare overlay,
slide 8 cards, Skilled Slack wording (still needs his words).

| # | Area | Change | Status |
|---|------|--------|--------|
| CK10 | Detail pages x3 | Flat price, quiet pills/values, focus panel, pinned edges, hover lift+glow | ✅ CODE |
