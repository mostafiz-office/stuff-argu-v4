# Feedback Spec — Stuff Augmentation Pricing Deck

How to use this folder (read in this order):

1. **`checklist.md`** — the master checklist. Every feedback item from the reviewer's
   video, marked DONE / BLOCKED / OPEN, with the repo file and commit. Start here to
   see what is finished and what still needs work.
2. **`slides.md`** — per-slide file. 16 sections, one per slide: what the slide is,
   which feedback was applied, and the CURRENT issues (contrast, alignment, spacing,
   UI/UX) with exact fix instructions any AI can follow.
3. **`audit-2026-10-19.md`** — the raw visual-audit report (browser pass over all
   16 slides on the live Lovable app). Evidence behind the issues in `slides.md`.
4. **`transcript_bn.md` / `transcript_en.md`** — the reviewer's video, timestamped.
   Source of truth when a checklist item is ambiguous.
5. **`feedback-items.md`** — the original 35-item breakdown (superseded by
   `checklist.md` + `slides.md`, kept for history).
6. **`gap-analysis.md`**, **`slide-map.md`** — analysis notes from spec creation.

## Key facts

- Repo: `alimtvnetwork/stufff-aug-v4` (React 18 + Vite 5 + TS + Tailwind + shadcn/ui + Framer Motion).
- Live app: https://stufff-aug-v4.lovable.app/ — this is where feedback work lands.
- NOTE (2026-10-19): the public URL https://stuff-aug-v1.riseupasia.xyz/ serves an
  OLD v1 build from a different Lovable project. It does NOT receive these changes
  until the custom domain is pointed at the v4 deployment. Verify fixes on the
  lovable.app URL, not the custom domain.
- Design tokens: CSS vars `--pres-accent` (amber ~#FFAD01), `--pres-bg`,
  `--pres-bg-surface`, `--pres-text`, `--pres-text-muted`, `--pres-text-dim`.
  Fonts: Ubuntu headings (`font-heading`), Poppins body (`font-body`),
  Red Hat Display price numerals (`.font-price`).
- Global rules (from the reviewer): yellow is a highlighter, max ONE yellow focus
  per slide; never highlight dollar amounts (prices always flat); "Everything is
  USD" as one small corner note, `$` only elsewhere, `/M` not `/mo`; ~25 visible
  words max per slide outside data tables; staged reveals via button press, never
  auto-advance; no em-dashes in visible copy.

## Conventions for fixes

- One commit per feedback item; push to `main` only on the owner's approval tap.
- Never rewrite git history (Lovable two-way sync).
- Reusable components live in `src/components/presentation/` (`reveal.tsx`,
  `DeckButton.tsx`, `UsdNote.tsx`, `PainBeats.tsx`, `PyramidVisual.tsx`,
  `CameraBubble.tsx`). Build new effects there, not inline in slides.
- Slide files live in `src/slides/`. Navigation gate pattern: a slide sets
  `window.__slideNavigationGate = { trigger, tooltip, step, totalSteps }` in a
  `useEffect`; `SlideNavigation` calls `trigger()` on Next.
