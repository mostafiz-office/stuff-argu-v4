# Slide Map — video timestamp → deck slide → repo file

Video: https://www.youtube.com/watch?v=xC5kyb477TY
Deck order below follows `src/pages/Index.tsx` (the live deck). "Video time" is
where the reviewer discusses/shows the slide. Screenshots in `screenshots/`
are named `fb_HHMM_<slug>.jpg`.

| # | Deck slide (as seen in video) | Video time | Repo file(s) | Screenshot |
|---|---|---|---|---|
| 1 | Cover — "Cut 80% Off Hiring Time." (rotates V1/V3) | 00:00–04:31 | `src/slides/PricingCoverV1.tsx`, `PricingCoverV3.tsx`, `PricingCoverShared.tsx` | `fb_0030_cover.jpg` |
| — | Reference: "Bootcamp Feedback" slide (style source for font/button/animation — from owner's bootcamp site, NOT this repo) | 02:02–03:42 | *(external — ask owner for URL)* | `fb_0300_bootcamp_ref.jpg` |
| — | Reference: "Introducing Alim Ul Karim" (owner's bootcamp site, style reference) | 02:30 | *(external)* | `fb_0230_intro.jpg` |
| 2 | Pain — "The 2 AM Outage Panic" | 04:30–10:34 | `src/slides/PainPointsSlide.tsx` → `OutagePanicSlide` | `fb_0430_outage.jpg` |
| — | Reference: Narrative Institute text-animation video (search by company name) | 05:30–09:15 | *(external reference)* | `fb_0600_narrative_ref.jpg` |
| 3 | Pain — "Fragile Vibe & AI Code" | 10:30–13:42 | `src/slides/PainPointsSlide.tsx` → `FragileCodeSlide` | `fb_1030_fragile.jpg` |
| 4 | Pain — "Hiring Sinkhole" (3rd pain slide) | 10:34–13:42 | `src/slides/PainPointsSlide.tsx` → `HiringSinkholeSlide` | — |
| 5 | Solution bridge — "We have solutions for you." | 13:42–16:56 | `src/slides/SolutionTransitionSlide.tsx` | `fb_1500_solution.jpg` |
| 6 | "How We Find the Top 5%" pyramid | 14:30–16:56 | `src/slides/TalentPyramidSlide.tsx` | `fb_1430_pyramid.jpg` |
| 7–8 | Promise bands ("What you get" / Delivery + Product Health) | 15:30–17:30 | `src/slides/PromiseBandsSlide.tsx` | `fb_1530_what_you_get.jpg` |
| 9–10 | Identity ("Why Riseup-Asia LLC?" / Who We Are / Brand Logo) | 18:30 | `src/slides/IdentitySlides.tsx` | `fb_1830_why_riseup.jpg` |
| 11 | Pricing — "End Stalled Projects: Pick Your Tier" | 17:50–26:30 | `src/slides/PricingTiersSlide.tsx` | `fb_1930_tiers.jpg` |
| — | Reference: DesignModo pricing page (card inspiration, Red Hat Display) | 20:53–24:00 | *(external — designmodo.com pricing)* | `fb_2130_designmodo_ref.jpg` |
| 12–14 | Tier details — Growth / Skilled / Leadership | 24:00–26:30 | `src/slides/TierDetailSlide.tsx`, `TierPlanDetail.tsx`, `src/data/tierFeatures.ts` | `fb_2430_tierdetail.jpg` |
| 15 | "What The Chief Architect Is Worth" | 27:30–28:00 | `src/slides/ExpertValuationBreakdownSlide.tsx` (+`PremiumExpertSlideV2.tsx`) | `fb_2800_architect.jpg` |
| 16 | "What's Included" | 28:26–28:50 | `src/slides/WhatsIncludedSlide.tsx` | `fb_2830_included.jpg` |
| 17 | "How It Works" (Discovery Call / 7-Stage Vetting / Rapid Onboarding / Ongoing Support) | 28:50–29:53 | `src/slides/PricingHowItWorksSlide.tsx` | `fb_2930_howitworks.jpg` |
| 18 | Startup offer — "Zero Risk. All Upside." ($1,900) | 29:53–32:27 | `src/slides/StarterTierSlideV9Clone.tsx` | `fb_3030_startup.jpg` |
| 19 | Savings — "Pay Less. Ship More." (80%) | 32:27–33:52 | `src/slides/PricingSavingsSlide.tsx` | `fb_3230_savings.jpg` |
| 20 | CTA — "Let's Build Your Dream Team" + QR (GOOD version, keep) | 33:30 | `src/slides/PricingCTASlide.tsx` | `fb_3330_cta_good.jpg` |
| 20b | Contact — "RiseupAsia" card (current, too much yellow — replace) | 34:00–34:54 | `src/slides/PricingCTASlide.tsx` | `fb_3400_cta_current.jpg` |

## Notes for the implementing AI

- The video reviews the **live published deck** (stuff-aug-v1.riseupasia.xyz), which
  matches the repo at the reviewed commit. Slide titles above are as seen in video.
- The "Bootcamp Feedback" / "Introducing Alim Ul Karim" frames are from the owner's
  **separate bootcamp site**, shown as style references — do NOT look for them in this repo.
- "Narrative Institute" and "DesignModo" are external references — open them in a
  browser when implementing the related items.
- Cover rotation (V1/V3) is deterministic per `src/lib/coverRotation.ts` — feedback
  items FB-01…FB-05 apply to **both** cover variants.
