# What's Included — shorter descriptions

The screenshot is slide 15 "What's Included". Each card has a full sentence under the title, which makes the slide feel crowded. The fix: keep the titles, cut each description to one short punchy line.

## Current → New descriptions

| Card title | New description |
|---|---|
| Save 80% Hiring Effort | Seniors ready to ship in 20 minutes. |
| Fix Fragile Vibe Code | PR reviews turn hacks into clean architecture. |
| AI Hallucination Defense | Tests and reviews catch bad logic early. |
| Sleep Through the Night | Oversight stops midnight firefights. |
| 160 Dedicated Hours/Mo | Embedded in your Slack, GitHub, and Jira. |
| Zero-Risk Replacement | Not a fit? Free instant replacement. |

The 14-day trial pill at the bottom stays as is — it is already one line.

## Changes

- `src/slides/WhatsIncludedSlide.tsx` — replace the six `desc` strings with the shorter lines above. No layout, styling, or animation changes; cards get shorter automatically.

## Verification

- Playwright screenshot of slide 15 to confirm every card shows one short line, no wrapping to three lines, no clipping.
