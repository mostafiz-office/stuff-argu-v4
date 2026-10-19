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
| FB-03 | Cover | Copy reference font CSS exactly | ⏳ | — | needs bootcamp page URL |
| FB-04 | Cover | CTA button matches reference | ✅ | `DeckButton.tsx` | `923bf8e` |
| FB-05 | Deck | "Start camera" webcam overlay in toolbar | ✅ | `CameraBubble.tsx`, `SlideNavigation.tsx` | Batch 8 |
| FB-06 | Pain | New copywriting | ⏳ | `PainPointsSlide.tsx` | needs owner copy |
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
| FB-23 | Deck | "RISE ASIA LLC" lockup + tagline | ✅ / ⏳ tagline | `SlideHeader.tsx` | Batch 5 |
| FB-24 | Valuation | Gift block redesign | ✅ | `ExpertValuationBreakdownSlide.tsx` | Batch 5 |
| FB-25 | Included | Cut copy ~50%, uniform cards | ✅ | `WhatsIncludedSlide.tsx` | Batch 6 |
| FB-26 | HowItWorks | Connector line + Discovery Call detail | ✅ | `PricingHowItWorksSlide.tsx` | Batch 6 |
| FB-27 | HowItWorks | Remove "20 minutes", 3 segments | ⚠️ | `PricingHowItWorksSlide.tsx` | kept "In 20 min" vetting badge — confirm |
| FB-28 | Starter | "Startup Offer" title, remove noise | ✅ | `StarterTierSlideV9Clone.tsx` | Batch 6 |
| FB-29 | Starter | Experience-led copy + hover | 🔴 copy conflict | `StarterTierSlideV9Clone.tsx` | heading "1+ Year" vs subtext "3+ years" — needs owner numbers |
| FB-30 | Starter | Staged reveal, RISE UP beat | ✅ | `StarterTierSlideV9Clone.tsx` | Batch 6 |
| FB-31 | Savings | Highlight ONLY "7% saving" | ⚠️ | `PricingSavingsSlide.tsx` | contradicts 76/71/68/67% cards — confirm figure |
| FB-32 | Savings | Stacked headline, no yellow | ✅ | `PricingSavingsSlide.tsx` | Batch 6 |
| FB-33 | Savings | Clarify 80%, staged rows, plain numbers | ✅ | `PricingSavingsSlide.tsx` | Batch 6 |
| FB-34 | Savings | USD note, /M suffixes | ✅ | verified, no change | — |
| FB-35 | CTA | De-yellow, keep content | ⚠️ | `PricingCTASlide.tsx` | no earlier design found to revert to |

## New issues from the 2026-10-19 visual audit

| # | Slide | Issue | Status | Fix |
|---|-------|-------|--------|-----|
| A1 | Deck | Dot-nav tooltip labels wrong from slide 6 onward (stale 18-slide list) | 🔴 | `SlideNavigation.tsx` — replace label array with 16-slide list (done, in this push) |
| A2 | Savings | "7% saving" contradicts 76/71/68/67% cards | ⏳ | Owner: confirm the intended figure (see FB-31) |
| A3 | Starter | "1+ Year Industry Experience" vs "3+ years engineering" / "3+ years coding, 4 in industry" | ⏳ | Owner: give the true numbers; align all three |
| A4 | Cover | Rotating hero word passes through near-invisible state mid-swap | 🔴 minor | Crossfade words instead of fade-out-then-in (`CoverHeadline.tsx`) |
| A5 | Solution | Resting headline "We have solutions for you." dimmed, hard to read | 🔴 minor | Brighten teaser state or add "press Next" hint (`SolutionBridgeSlide.tsx`) |
| A6 | Starter | "GROWTH BOOSTER" rocket briefly overlaps Tier 1 card text | ✅ acceptable | Transient by design — no fix |
| A7 | Cover | Testimonial avatars show empty circle while lazy-loading | ✅ acceptable | Transient — no fix |

## Blocked on owner (nothing to build until these arrive)

1. FB-03: bootcamp page URL for the exact font CSS.
2. FB-06: pain-slide copywriting.
3. FB-23: final tagline (placeholder "Premium Software Developer Franchise" is live).
4. FB-27: confirm keeping the "In 20 min" vetting badge on Step 02.
5. FB-31/A2: confirm the intended saving figure ("7% saving" vs the 76/71/68/67% cards).
6. FB-35: point to the "previous" CTA design if a different one was meant.
7. A3: the true experience numbers for the Starter tier.

## Deployment note (2026-10-19)

`stufff-aug-v4.lovable.app` serves the current code (verified in the built JS bundle).
`stuff-aug-v1.riseupasia.xyz` serves an OLD v1 build from a different Lovable project —
none of this work is live there. The custom domain must be pointed at the v4
deployment in the Lovable dashboard (owner action). Always verify fixes on the
lovable.app URL.
