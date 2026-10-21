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
