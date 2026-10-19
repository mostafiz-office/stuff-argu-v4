# Per-Slide State & Issues

16 slides in deck order. Each section: what the slide is, the file(s), which
feedback was applied, and CURRENT issues with exact fix instructions.
"Fix" = concrete change an AI can make without asking the owner.
"Blocked" = needs owner input first.

---

## Slide 1 — Cover ("the fighting plan" hero)

**Files:** `src/slides/PricingCoverShared.tsx`, `src/components/presentation/CoverHeadline.tsx`
**Applied:** FB-01 (cut copy, single yellow focus "80%"), FB-02 (water-fill + label-drop), FB-04 (CTA button).
**Applied:** FB-03 (Batch 11 — cover headline now Plus Jakarta Sans, the reference font: verified via the site's Google Fonts link + letterform match on the designed image).

**Issues:**
1. **[A4 — fixed Batch 10]** Returning to the cover swapped variants with the new headline
   starting at opacity 0 (brief invisible flash). Fix: both cover variants stay mounted;
   the swap is now a 500ms opacity crossfade. File: `src/pages/Index.tsx` (`CoverWrapper`).
2. **[A7 — acceptable, no fix]** Testimonial avatars show an empty gray circle for a moment
   while lazy-loading. Transient; leave as is.

---

## Slide 2 — Outage Panic (PROBLEM 01)

**File:** `src/slides/PainPointsSlide.tsx` (Outage variant), beats in `src/components/presentation/PainBeats.tsx`
**Applied:** FB-07 (imagery untouched), FB-08 (cinematic staged headline), FB-09 (red marker
on "Outage Panic"), FB-10 (layout variant), FB-11 (metric "$18,500/M" restyle).
**Applied:** FB-06 (Batch 10 — plain human copy: sharper `short`/`resolution` lines; beats, metrics, staging untouched).

**Issues:** none. Contrast, alignment, spacing verified clean.

---

## Slide 3 — Fragile AI Code (PROBLEM 02)

**File:** `src/slides/PainPointsSlide.tsx` (Fragile variant)
**Applied:** FB-07…FB-11 as above; FB-09 = yellow underline sweep on "AI Code".
**Blocked:** FB-06 (owner copy).

**Issues:** none. Verified clean.

---

## Slide 4 — Hiring Sinkhole (PROBLEM 03)

**File:** `src/slides/PainPointsSlide.tsx` (Hiring variant)
**Applied:** FB-07…FB-11 as above; FB-09 = drag-reveal on the metric.
**Blocked:** FB-06 (owner copy).

**Issues:** none. Verified clean.

---

## Slide 5 — The Solutions (SolutionBridge)

**File:** `src/slides/SolutionBridgeSlide.tsx`, pyramid in `src/components/presentation/PyramidVisual.tsx`
**Applied:** FB-12 (line shrinks/glides left on gated Next, pyramid rises right), FB-13 (three
staged phrases: "Find Top 5% Talent" yellow marker, "Avoid Missing Deadlines" red underline,
"Save Time Hiring" bold white), FB-14 (standalone slides removed; this replaces them).

**Issues:** none. (A5 from the audit was a mid-transition frame — the code animates the
headline to full opacity; no change needed.)

---

## Slide 6 — Delivery Promises ("What you get")

**File:** `src/slides/PromiseBandsSlide.tsx` (Delivery variant)
**Applied:** G-01 (eyebrow demoted to muted; the promise statements are the focus).

**Issues:** none. Verified clean.

---

## Slide 7 — Product Health ("Built to stay stable")

**File:** `src/slides/PromiseBandsSlide.tsx` (Health variant)
**Applied:** none specific; covered by global principles.

**Issues:** none. Verified clean.

---

## Slide 8 — Who We Are

**File:** `src/slides/IdentitySlides.tsx`
**Applied:** G-01 (headline "?" demoted to white; the giant "?" keeps the single yellow focus).

**Issues:** none. Verified clean.

---

## Slide 9 — Pricing Tiers

**File:** `src/slides/PricingTiersSlide.tsx`; data in `src/data/tierFeatures.ts`; offer config in `src/lib/pricingConfig.ts`
**Applied:** FB-15 (0.7s card entrance, dot texture), FB-16 (header removed, cards enlarged),
FB-17 (prices flat), FB-18 (per-card differentiators; Leadership highlights "up to 15"),
FB-19 (offer mode in `PRICING_OFFER` — active:false, wasPrices EMPTY), FB-20 (Red Hat Display
`.font-price` numerals, "160 hrs/M"), FB-21 ("Tier 2 Growth" / "Tier 3.A Skilled" /
"Tier 3.B Leadership"), FB-22 (hover tooltips with tier meanings).

**Issues:** none. Verified clean (tooltips, differentiators, flat prices all render).

**Note for future AI:** `PRICING_OFFER.wasPrices` is intentionally empty. Never invent
pre-offer prices — the owner must supply the real ones before `active` is flipped to true.

---

## Slide 10 — Chief Architect Included (PremiumExpert)

**File:** `src/slides/PremiumExpertSlideV2.tsx`
**Applied:** G-01 (badge + subline demoted; the "100% free" pill is the focus).

**Issues:** none. Verified clean.

---

## Slide 11 — What The Chief Architect Is Worth (ExpertValuation)

**File:** `src/slides/ExpertValuationBreakdownSlide.tsx`
**Applied:** FB-24 (gift block redesigned: bigger visual, "Chief Architect / FREE with your tier"
two-line focus, $10k valuation in hover tooltip); G-01 (headline demoted to white, "FREE" keeps yellow).

**Issues:** none. Verified clean.

---

## Slide 12 — What's Included

**File:** `src/slides/WhatsIncludedSlide.tsx`
**Applied:** FB-25 (copy cut 59→35 words, 2–3 word titles, uniform p-7 cards).

**Issues:** none. Verified clean.

---

## Slide 13 — How It Works

**File:** `src/slides/PricingHowItWorksSlide.tsx`
**Applied:** FB-26 (solid 4px accent connector line with glow; Discovery Call card opens a
3-segment detail overlay: Requirements / Stack & workflow / Tier match), FB-27 (no "20 minutes"
in the discovery detail); G-01 (step labels white, time badges neutral).

**Issues:** none. Verified clean.
**Caveat:** Step 02 keeps its "In 20 min" time badge by reviewer-intent judgment call
(the complaint targeted the discovery detail, and the badge supports the cover's
"Hire in 20 Min" claim). Owner can overrule — one-line change.

---

## Slide 14 — Startup Offer (StarterTier)

**File:** `src/slides/StarterTierSlideV9Clone.tsx`
**Applied:** FB-28 ("Startup Offer" title with accent "Offer"; noise banner removed),
FB-29 (experience focus block + rewritten guarantees with hover tooltips),
FB-30 (3-beat gate: bonus card → rocket → "RISE UP" overlay); G-01/G-02 (Batch 7 audit).

**Issues:**
1. **[A3 — fixed Batch 10]** Copy conflict resolved: all experience strings aligned to
   "1+ Year" (heading, block subtext, both tooltips). Confirm the numbers on review.
2. **[A6 — acceptable, no fix]** The "GROWTH BOOSTER" rocket briefly overlaps the Tier 1
   card's upgrade text mid-flight. Transient by design; leave as is.

---

## Slide 15 — Savings ("Pay Less. Ship More.")

**File:** `src/slides/PricingSavingsSlide.tsx`
**Applied:** FB-31 ("7% saving" as the single yellow highlight), FB-32 (stacked white headline),
FB-33 (80% callout in white, neutral badges, plain rate numbers, staggered rows), FB-34 (USD note, /M).

**Issues:**
1. **[A2 — fixed Batch 10, confirm]** The dictated "7% saving" matched no number on the slide
   (cards show 76/71/68/67%). Judgment call: highlight now reads "76% saving" — the slide's
   top figure, without the "up to" the reviewer disliked. Say the word if it should be 7%.

---

## Slide 16 — CTA ("Let's Build Your Dream Team")

**File:** `src/slides/PricingCTASlide.tsx`
**Applied:** FB-35 (headline de-yellowed to all white; QR + Schedule-a-Call kept).

**Issues:** none. Verified clean.
**Caveat:** no earlier CTA design exists in git history to "revert" to — the review-time CTA
already was this headline + QR + Schedule-a-Call. If the owner meant a different version,
they must point to it.

---

## Deck-wide

- **Toolbar** (`src/components/presentation/SlideNavigation.tsx`): Prev | counter | Next |
  sound | **camera** (FB-05: `getUserMedia` bubble, draggable, mirrored, "Camera unavailable"
  notice with Try again/Dismiss) | share | fullscreen. Bottom dot nav.
- **[A1 — fixed in this push]** Dot-nav tooltip labels were a stale 18-slide list
  ("Talent Pyramid", "Riseup Asia", …) mismatching the 16 slides. Replaced with the correct
  16-label list matching deck order above.
- **Header** (`src/components/presentation/SlideHeader.tsx`): logo + "RISE ASIA LLC" +
  tagline "Top 5% Engineers, On Demand" (FB-23 — confirm on review).
- **Overlays:** TierDetailSlide, TierPlanDetail (from pricing slide's "Compare pricing").
