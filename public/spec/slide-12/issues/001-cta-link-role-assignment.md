# Issue 001 — Final CTA Links Assigned to the Wrong Actions

## Problem
The final slide's primary "Schedule a Call" action was changed to the hiring URL, while the phone-number area was not updated in the active pricing CTA slide.

## Root Cause
The links were edited in a different contact component instead of verifying the active final slide in `src/pages/Index.tsx`.

## Fix
- "Schedule a Call" opens `https://meet.rasia.pro/intro-call`.
- The phone number is removed and replaced by "Call Now", which opens `https://client.rasia.pro/hiring-v1`.

## Prevention Rule
Preserve link roles: scheduling actions use the meeting URL; the replacement for the phone-number row uses the hiring URL. Verify the active slide component before editing.