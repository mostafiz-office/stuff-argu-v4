# Gap Analysis — Video Feedback vs Spec Alignment

**Date:** 2026-10-19 · **Analyst:** Muse (second-pass verification)
**Video:** https://www.youtube.com/watch?v=xC5kyb477TY (34:54, Bangla)
**Spec under review:** `spec/feedback/` (feedback-items.md v1 + transcripts + slide-map + 20 screenshots)

## Method

Re-read the full 327-segment Bangla transcript end-to-end a second time, plus the
English translation, and checked **every feedback statement** against the 35 items
(FB-01…FB-35) and 8 global principles (G-01…G-08). Also grepped the transcript for
topics that might have been missed (mobile, sound, QR, testimonials, cover chips):
**none appear** — the video contains zero feedback on mobile layout, audio, QR
codes, or testimonials.

## Verdict

**Not "perfectly perfect" — but close.** 34 of 35 items align cleanly with the
video. One real wording defect was found and fixed (FB-32), four minor
ambiguities were flagged in-line in the spec, and six slides were confirmed as
intentionally having no feedback. Details below.

## Defect fixed in this pass

### D-1 — FB-31 vs FB-32 contradiction (FIXED)
- **Problem:** FB-31 said the savings slide's *only* yellow highlight is "7% saving".
  FB-32 said "'Pay Less.' highlighted, 'Ship More.' below it" — readable as
  highlighting both, contradicting FB-31.
- **Evidence:** at 33:00–33:06 the reviewer says "তাইলে পে লেস এন্ড মোর এই দুইটাতে
  হাইলাইট হতো **যদি হাইলাইট করতাম**" — "these two would be highlighted **if** I
  were highlighting" (conditional/hypothetical), while at 32:40–32:45 the firm
  directive is: highlight **only "7% saving"** (not "up to").
- **Fix applied:** FB-32 rewritten — "Pay Less." / "Ship More." stack as a
  non-yellow headline; "7% saving" remains the sole yellow highlight.

## Ambiguities flagged (in spec, awaiting owner — do not guess)

### A-1 — FB-27: "20 minutes" reading
Audio at 29:38–29:53 is garbled. Primary reading (spec): delete "20 minutes",
show 3 segments. Alternate: the discovery call *is* 20 minutes across 3 segments.
Flagged in FB-27.

### A-2 — FB-35: "the one on the left"
Reviewer: "the previous contact page was good — I mean the one on the left"
(33:52–33:56). Mapping to the "Let's Build Your Dream Team" version is
best-effort. Flagged in FB-35 — confirm before deleting the current card.

### A-3 — FB-30: "RISE UP big uppercase"
At 32:01–32:07 the reviewer may be *describing* the current state rather than
requesting a change. Flagged in FB-30 — keep if already so; staged arrival is
the real change.

### A-4 — FB-24: gift block location
At 27:38–28:06 the screen showed the "Chief Architect" slide, but the confusing
gift/complimentary block may live on the pricing slide. Flagged in FB-24 —
verify location against the video before editing.

### A-5 — FB-05: "IOP camera" (pre-existing)
Still unclear from audio. Already marked NEEDS CLARIFICATION — unchanged.

## Slides with intentionally no feedback

The reviewer showed but did **not** critique these — no items were created for
them, and none should be invented:
- Promise bands ("What you get" delivery promises)
- "Why Riseup-Asia LLC?" / Who We Are identity slides
- "How We Deliver" strip
- Premium Expert / "What The Chief Architect Is Worth" ($625/hr)
- Cover testimonial (Marek Flajzman)
- Topics never mentioned: mobile layout, audio/sound, QR codes, testimonials

## Coverage checklist (video block → spec item)

| Video time | Topic | Spec item(s) | Status |
|---|---|---|---|
| 00:00–00:56 | Cover: yellow/words | FB-01, G-01, G-02 | ✅ aligned |
| 00:56–03:42 | Cover: water-fill + label-drop | FB-02 | ✅ aligned |
| 03:42–04:13 | Cover: font + button copy | FB-03, FB-04 | ✅ aligned |
| 04:26 | "IOP camera" | FB-05 | ⚠️ needs clarification |
| 04:46–05:17 | Pain copy + AI image | FB-06 (pending owner), FB-07 | ✅ aligned |
| 05:21–06:34 | Pain text treatment | FB-08 | ✅ aligned |
| 06:34–09:15 | Narrative Institute ref, staged reveal | FB-09, G-03 | ✅ aligned |
| 09:15–10:34 | Outage Panic staging | FB-10 | ✅ aligned |
| 10:34–13:42 | Mirror layouts, highlight samples | FB-11, G-07 | ✅ aligned |
| 13:42–16:56 | Solution shrink-left + 3 phrases | FB-12, FB-13, FB-14 | ✅ aligned |
| 17:18–17:50 | Tier animation smoothness | FB-15 | ✅ aligned |
| 17:50–19:16 | Tier header removal | FB-16 | ✅ aligned |
| 19:16–19:46 | Flat prices | FB-17, G-04 | ✅ aligned |
| 19:46–20:12, 23:37–25:52 | Tier differentiators | FB-18 | ✅ aligned |
| 20:12–20:53 | Offer system | FB-19 | ✅ aligned |
| 20:53–23:37 | DesignModo ref, consistency, hyphen | FB-20, FB-21 | ✅ aligned |
| 26:03–26:30 | Hover tooltip | FB-22 | ✅ aligned |
| 27:10–27:34 | Brand lockup + tagline | FB-23 (part pending owner) | ✅ aligned |
| 27:38–28:26 | Gift/complimentary | FB-24 | ⚠️ location ambiguity (A-4) |
| 28:26–28:50 | What's Included | FB-25, G-05 | ✅ aligned |
| 28:50–29:29 | How It Works line + click | FB-26 | ✅ aligned |
| 29:29–29:53 | "20 minutes" | FB-27 | ⚠️ reading ambiguity (A-1) |
| 29:53–30:33 | Startup rename | FB-28 | ✅ aligned |
| 30:33–31:31 | Startup copy | FB-29 | ✅ aligned |
| 31:31–32:27 | Startup staged reveal | FB-30 | ⚠️ keep-vs-change (A-3) |
| 32:27–33:52 | Savings highlights, USD, /M | FB-31, FB-32 (fixed), FB-33, FB-34, G-06 | ✅ aligned after fix |
| 33:52–34:54 | CTA revert + alignment | FB-35, G-08 | ⚠️ "left" ambiguity (A-2) |

## Alignment score

- **35 feedback items:** 34 fully aligned, 1 fixed in this pass (FB-32)
- **8 global principles:** all aligned
- **Open questions for owner:** 5 (FB-05, FB-06, FB-23-tagline, A-1, A-2; A-3/A-4 are
  minor and resolvable during implementation)
- **Missed feedback statements:** 0 found in this pass

## Recommendation for the implementing AI

Implement in deck order. Treat items marked TODO as buildable now; PENDING OWNER /
NEEDS CLARIFICATION items get clean placeholders. For A-1…A-4, the flagged
fallback readings in each item are safe defaults — proceed with them unless the
owner says otherwise. Re-run this checklist after implementation and flip each
item to DONE only against its acceptance criteria.
