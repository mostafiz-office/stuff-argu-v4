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
