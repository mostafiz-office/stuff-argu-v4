# Add 14-Day Trial Line — Slide 6 "What's Included"

## Goal
On the "What's Included" slide (6 of 9), append the disclaimer to the last paragraph of the slide — the subtitle under the title.

## Change
In `src/slides/WhatsIncludedSlide.tsx` (subtitle paragraph, line ~60):

Current:
    Every plan comes with these guarantees — no extra charges.

New:
    Every plan comes with these guarantees — no extra charges. 14-day trial with money-back guarantee (conditions apply).

The line stays in the same style (Poppins 22px, muted text color, same fade-in animation) — no layout or styling changes.

## Documentation
- Update `public/spec/slide-07/data/slide-07-content.json` subtitle field to match.
- Update `public/spec/slide-07/00-overview.md` where the subtitle is quoted.

## Verification
- Check the build log shows OK.
- Playwright: open `/?slide=6`, screenshot, confirm the full sentence renders on one/two clean lines without colliding with the card grid below (subtitle is absolute-positioned at top 178px; grid starts at 260px — sentence stays on a single wrapped line region).
