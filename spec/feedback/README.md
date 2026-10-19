# Video Feedback Spec — Staff Augmentation Pricing Deck

**Source:** YouTube video "Pricing UI UX Riseup ASIA LLC" — https://www.youtube.com/watch?v=xC5kyb477TY
**Duration:** 34:54 · **Language:** Bangla (with English UI terms) · **Reviewer:** Alim Ul Karim (product owner)
**Spec written:** 2026-10-19 · **Status:** feedback captured, NOT yet implemented
**Repo state reviewed:** `alimtvnetwork/stufff-aug-v4`, live at https://stuff-aug-v1.riseupasia.xyz/

## What this folder is

The product owner recorded a 35-minute, slide-by-slide UI/UX review of the live
pricing deck. This folder converts that video into **precise, numbered,
AI-executable instructions** so that any AI (or human) can implement every
piece of feedback without re-watching the video.

**Do NOT edit deck code from this folder alone** — implement from
`feedback-items.md`, which is the normative spec. The transcripts are the
source of truth for *intent*; the items are the source of truth for *what to build*.

## Files

| File | Purpose |
|---|---|
| `README.md` | This index. Read first. |
| `transcript_bn.md` | Full Bangla transcript with video timestamps (327 segments). Source of truth for what was said. |
| `transcript_en.md` | English translation, grouped into ~30 time blocks. Read this if you don't read Bangla. |
| `slide-map.md` | Video timestamp → deck slide → repo file path mapping. |
| `feedback-items.md` | **The spec.** 35 numbered feedback items (FB-01…FB-35) + 8 global principles (G-01…G-08). Each item: timestamp, affected slide + repo file, current state, exact requested change, acceptance criteria, dependencies. |
| `screenshots/` | 18 timestamped screenshots from the video (what the reviewer was looking at). |

## Counts

- **35 feedback items** across 9 slide groups (Cover, Pain slides ×3, Solution bridge,
  Pricing tiers, What's Included, How It Works, Startup offer, Savings, CTA/Contact)
- **8 global design principles** that apply to every slide
- **3 items blocked on owner input** (marked `PENDING OWNER`): pain-slide copywriting,
  final tagline, one unclear request ("IOP camera")
- **0 items implemented yet** — implementation is a separate, later task

## Global principles (summary — see `feedback-items.md` for full text)

1. **Yellow is a highlighter, not a theme.** Count every yellow use; highlight ONE focus point per slide.
2. **Cut ~80% of words.** Two focus words max per slide.
3. **Staged reveal.** Never dump all text at once — one idea lands, then the next.
4. **Never highlight dollar numbers.** Prices are always flat, normal weight.
5. **Say less, make it beautiful.** Fix padding/line consistency everywhere.
6. **USD once.** One small "Everything is USD" corner note; `$` elsewhere; `/mo` → `/M`.
7. **Reusable animation patterns** — build highlight/reveal effects as reusable spec samples.
8. **Slide-like navigation** — advance on button press, never automatic.

## How an implementing AI should work

1. Read this README + `feedback-items.md` fully.
2. For each item, open the mapped repo file from `slide-map.md` and the referenced
   screenshot in `screenshots/`.
3. Implement items slide by slide, in deck order. Respect the repo's own
   `spec/00-overview.md` conventions and root `AGENTS.md` project rules
   (native dark, `pres-dark-safe-accent`, deterministic cover rotation, etc.).
4. Items marked `PENDING OWNER` must NOT be guessed — leave a clean placeholder
   and continue with the rest.
5. Items marked `NEEDS CLARIFICATION` — ask the owner before building.
6. After implementing, verify each item against its acceptance criteria and
   update the checkbox in `feedback-items.md`.

## Reference material mentioned in the video (external)

- **Narrative Institute** — search by company name; the text-reveal animation reference
  for pain slides (staged, cinematic text arrival).
- **DesignModo pricing page** — pricing-card inspiration; try **Red Hat Display** for prices.
- **Owner's bootcamp site** — the "Bootcamp Feedback" slide is the style source for the
  cover font/button/animation (exact HTML+CSS to be copied). Ask the owner for its URL.
- Owner has ~20 Lovable accounts available for experimentation.
