# Restack CTA slide contact block (slide 12, "Let's Build Your Dream Team")

## Problem
On the final slide the contact block sits in one horizontal row: email, then Call Now — with the Schedule a Call button above them. The user wants a clean left-aligned vertical order: **email first, then Schedule a Call, then Call Now**. Also, the Call Now button is smaller than Schedule a Call, and its Phone icon is invisible (it is rendered in the same accent color as the button background, so it disappears).

## Current state (verified — src/slides/PricingCTASlide.tsx)
- Schedule a Call button: padding `16px 40px`, fontSize 20, CalendarCheck icon + ArrowRight, links to `https://meet.rasia.pro/intro-call`.
- Below it, a flex row: email (Mail icon + contact@riseup-asia.com) and a small Call Now button (padding `10px 22px`, fontSize 17) linking to `https://client.rasia.pro/hiring-v1`.
- Call Now's Phone icon has `color: hsl(var(--pres-accent))` on an accent background → invisible.

## Change
Replace the bottom contact row with a left-aligned vertical stack after the body text:
1. **Email row** — Mail icon + `contact@riseup-asia.com` (unchanged style).
2. **Schedule a Call** — unchanged style, size, link, and icons.
3. **Call Now** — same size as Schedule a Call (fontSize 20, padding `16px 40px`, pill shape), Phone icon on the left rendered in the dark background color (visible), same accent background, same link `https://client.rasia.pro/hiring-v1`.
- All three items left-aligned with consistent vertical spacing (~20px), each keeping its fade-in animation (fade 3/4/5 order).

## Update spec
- `spec/02-features/02-slide-system/slides/11-cta.md` — bump version, document the new vertical order and matching button sizes, and note the rule: icon color must contrast with the button background.

## Verify
- Playwright screenshot of the final slide: email above Schedule a Call above Call Now, all left-aligned, Call Now same size as Schedule a Call with a visible phone icon.
- Confirm both button links still open the correct URLs.
- Build OK in build log.
