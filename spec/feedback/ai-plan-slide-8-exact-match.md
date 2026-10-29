# AI Plan — Slide 8 exactly like v1 slide 2 ("Choose Your Plan")

## Goal

Rebuild the deck's slide 8 (`src/slides/PricingTiersSlide.tsx`, the pricing
tiers slide) so it is EXACTLY the old v1 deck's slide 2, same to same:
same layout, same sizes, same text, same colors, same spacing.
Reference: https://stuff-aug-v1.riseupasia.xyz/?slide=2
(and the owner's screenshot of that slide).

## Source of truth — read this first

Every value below comes from v1's OWN compiled code
(`bundle.js`, pricing component), NOT from eyeballing the screenshot.
Screenshot estimates used in earlier drafts were wrong on headline size,
grid width, card height, and range-price size; the code values below
supersede them. The one fact taken from the screenshot (zoomed crop)
is the check icon shape: amber circle outline with a check inside.

## The slide frame

- Canvas: 1920 x 1080, dark background (`slide-dark-bg`), white text,
  body font Poppins (the slide div already sets `font-sans`).
- Logo header only, top-left (existing `SlideHeader`, untouched).
- No headline-to-grid vertical centering: every block below is
  absolutely positioned at v1's coordinates.

## Exact spec — layout

| Block | Position / size | Type |
|---|---|---|
| Headline | left 80px, top 90px | Ubuntu 700, 52px, white; word "Plan" in pres-accent |
| Subline | left 80px, top 178px | Poppins 18px, pres-text-muted |
| Grid | left 80px, right 80px, top 240px, bottom 80px | 3 columns, gap 32px (gap-8); grid is 1760px wide, row is 760px tall |
| Cards | fill the grid row (h-full), content top-aligned | rounded-2xl, padding 28px vertical / 24px horizontal, 2px borders, overflow hidden |
| Background texture | full slide, behind content | repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px) |
| Center glow | NONE — v1 has no ambient glow on this slide | delete it if present |

## Exact spec — cards (all three)

- Name: Poppins 16px, 600 weight, pres-text-dim, uppercase,
  letter-spacing 0.12em.
- Experience: Poppins 18px, 500 weight, pres-accent, margin-top 8px,
  line-height 1.3.
- Price: Ubuntu 700, white; 48px when the price string is 8 characters
  or shorter, 36px when longer (so the single price is 48px and both
  range prices are 36px). Suffix: Poppins 20px, pres-text-dim.
- Hours pill: margin-top 8px, inline-flex, rounded-lg, padding 12px
  horizontal / 6px vertical, background hsl(var(--pres-accent) / 0.08),
  border 1px solid hsl(var(--pres-accent) / 0.15), Poppins 16px 600
  pres-accent text, width fit-content.
- Feature list: margin-top 12px, space-y 10px (space-y-2.5), flex-1
  (so the list stretches and the empty space sits below the features,
  like v1). Rows: flex, items-start, gap 12px (gap-3).
- Feature icon: circled check, 18px, pres-accent, margin-top 3px,
  shrink-0. In lucide-react this is `CheckCircle2` (circle outline with
  a check inside), NOT the plain `Check` tick.
- Feature text: Poppins 18px, pres-text-muted, line-height 1.4.
- Featured card (middle): border pres-accent/40, background
  linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%,
  hsl(var(--pres-bg-surface)) 100%), plus the amber glow shadow.
  Other cards: solid pres-bg-surface, border white/10.
- Badge (middle card only): absolute top-0 right-0, padding 16px
  horizontal / 8px vertical, rounded-bl-xl, solid pres-accent
  background, dark text, Poppins 14px 700, letter-spacing 0.05em,
  Award icon 14px, text "BEST VALUE".
- Entrance: cards fade up, stagger delay 0.3 + index * 0.12, duration
  0.6. Headline delay 0, subline delay 0.15.

## Exact data — the three tiers

| Field | Tier 2 Growth | Tier 3.A Skilled | Tier 3.B Leadership |
|---|---|---|---|
| Name | Tier 2 — Growth | Tier 3.A — Skilled | Tier 3.B — Leadership |
| Experience | 2-3+ Years Experience | 7-15+ Years Experience | 7-15+ Years Experience |
| Price | $4,299 | $6,800–$8,000 | $7,500–$10,000 |
| Suffix | /mo | /mo | /mo |
| Hours pill | 160 hrs/month | 160 hrs/month | 160 hrs/month |

Notes: names use an em-dash (U+2014) and render uppercase via class.
Experience uses a plain ASCII hyphen (2-3+, 7-15+). Price ranges use
an en-dash (U+2013). The headline is "Choose Your Plan" (trailing
space after "Your", then "Plan" in amber). The subline is exactly:
"All plans include 160 dedicated hours/month. Scale anytime."

Features (4 per tier, plain strings, no highlighted words inside):

- Growth: "Fluent, autonomous coder", "Breaks down & delegates
  tasks", "Full sprint participation", "Daily standups & Slack access".
- Skilled: "Best-in-class developer", "Deep expertise in their stack",
  "Manages 3-5 team members", "Architecture & code quality".
- Leadership: "Project management focus", "Manages up to 15
  developers", "CTO-level strategic oversight", "24/7 SLA & priority
  support".

## Decisions already made (do not re-ask)

- D1 experience: cards use v1's ranges above. Consequence: detail
  views still say 4+/6+/8+ minimum experience until their own batch.
- D2 price format: cards use v1's "/mo", en-dash ranges, and
  "160 hrs/month", even though the deck's standing rules say "/M"
  and "to". The owner's explicit "exactly same" order overrides those
  rules ON THIS SLIDE ONLY. Do not "fix" them back to /M or "to".
- D3 hover "View details" line: REMOVED (v1 has none). Cards stay
  clickable; hover tooltips already say "View details".
- D4 "Compare pricing" button below the grid: REMOVED (v1 has none).
  Comparison stays reachable from inside the detail views.
- D5 detail views: their rows and focus blocks are UNCHANGED. Only
  their header price/suffix follow the card data (they read the same
  tier objects), which is correct and consistent.
- Hover lift on cards: KEPT (our deck's interaction language; it
  signals clickability). V1's card code has no hover, but this is a
  behavior difference, not a visible static difference.
- Card click: opens our detail views, NOT v1's video popup. Never
  copy v1's video behavior.
- Deck chrome stays: toolbar, dot nav, USD corner note, bottom accent
  line, logo header. V1's toolbar/dots (2/9, 9 dots) are a different
  deck's chrome and are NOT part of this slide.

## What to change, file by file

Only `src/slides/PricingTiersSlide.tsx` changes, plus the spec
checklist. No other slide, no data file, no detail view, no overlay.

1. Imports: drop `TIER_DIFFERENTIATORS` (keep `TierKey`); replace
   `Check` with `CheckCircle2`; drop `Columns3` (button removed).
2. Tier data: names, experience, prices, suffix, hours, and feature
   lists exactly as the tables above. The old feature arrays in this
   file were dead code (the render used the shared differentiators);
   they are now the live card lists.
3. Texture: gradient stops to 28px / 0.03, remove any opacity wrapper.
4. Delete the ambient glow div.
5. Replace the centered content wrapper with absolute blocks:
   motion headline (fadeUp delay 0), motion subline (fadeUp delay
   0.15), and the grid (absolute left 80 / right 80 / top 240 /
   bottom 80, gap-8) inside the existing TooltipProvider.
6. Delete the "Compare pricing" button block and the wrapper close
   that went with it.
7. Delete the hover "View details" line; remove the now-unused
   `group` class from the card.
8. Price span: font-heading (Ubuntu) bold, size by string length
   (length > 8 gives 36px, else 48px — write both sizes as literal
   classes in a ternary so the compiler picks them up), white, or
   amber when a URL offer discounts the tier (existing logic stays).
9. Hours pill: layout classes stay; background and border go to an
   inline style with the exact 0.08 / 0.15 values (avoids Tailwind
   arbitrary-alpha risk).
10. Feature list: render the tier's own `features` string array with
    `CheckCircle2` icons and plain spans. Drop the old highlight-split
    rendering (v1's lists have no highlighted words).

## What NOT to do

- Do not change `src/data/tierFeatures.ts` (detail views keep it).
- Do not change `TierPlanDetail`, `TierDetailSlide`, tooltips,
  URL offers, or the overlay portal.
- Do not re-add the glow, the compare button, or the hover line.
- Do not "correct" /mo back to /M, dashes back to "to", or ranges
  back to 48px. Those ARE the v1 values.
- Do not copy v1's video click behavior or v1's toolbar/dots.
- Do not touch any other slide.

## Verification (all must pass before delivery)

1. Parse: `npx esbuild --loader:.tsx=tsx` on the edited file, clean.
2. Brace/paren/bracket balance check on the edited file.
3. Read-back from main after push, grep for: headline 52px,
   "Choose Your", grid absolute top-[240px] bottom-[80px],
   CheckCircle2, "160 hrs/month", "2-3+ Years", "7-15+ Years",
   en-dash range prices, 36px/48px price rule; and absence of:
   "Compare pricing", "View details", "Ambient Glow", "160 hrs/M",
   "TIER_DIFFERENTIATORS", "Columns3".
4. Visual check against the v1 screenshot proportions: header top,
   grid edges, card height filling to 80px from the bottom, features
   ending mid-card with empty space below.
5. Lovable note for the owner: his preview lags pushes; check the
   history list for this batch at the bottom before testing.
