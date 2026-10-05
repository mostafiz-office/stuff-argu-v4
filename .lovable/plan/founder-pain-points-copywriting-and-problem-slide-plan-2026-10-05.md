# Modernization Plan: Founder Pain Copywriting, Problem Slide & Navigation Fix

**Date:** 2026-10-05  
**Objective:** Transform the presentation deck from generic agency messaging ("Elite Engineers on Demand") to a high-converting, founder-resonant pitch centered on visceral pain points:
1. "Save 80% hiring efforts"
2. "Waking up at midnight to fix bugs / code"
3. "Fixing AI hallucinations & vibe-coded spaghetti"
4. Adding a dedicated "The Problem" slide between Cover and Pricing Tiers
5. Zooming in Marek's photo on the cover slide
6. Bulletproof navigation controls

---

## 1. Core Copywriting Strategy & Angle

### Current Flaw
"Elite Engineers on Demand" is an agency cliché that prospects tune out. It focuses on the vendor ("we have talent"), not the prospect's acute agony.

### New Psychological Anchor
Target: Non-technical founders, solo founders, and overworked CTOs/VP Eng who:
- Spend 40+ hours/month screening resumes, doing interviews, and getting burned by bad hires (wasting 80% of hiring effort).
- Are currently relying on AI tools (Cursor, Claude, ChatGPT, v0, Lovable) or junior contractors to "vibe-code" their MVP, and are now waking up at midnight to production outages, subtle hallucinated logic bugs, broken database migrations, and security leaks.
- Need real, proven senior engineers backed by Chief Software Engineer oversight to stabilize, refactor, and scale their product without losing their sanity.

---

## 2. Structured Task List (Step-by-Step)

### Task 1: Navigation HUD & Event Propagation Fix (DONE & Verified)
- **Problem:** In preview iframe environments, CSS `perspective: 1200px` on the outer presentation wrapper captured `position: fixed` children, disrupting hit-testing on the control buttons.
- **Fix:** 
  1. Isolated 3D perspective exclusively to the slide transition container (`<motion.div>` area).
  2. Elevated `<SlideNavigation>` to `z-[250]` with explicit `pointer-events-auto` and `cursor-pointer`.
  3. Ensured bidirectional URL and button event dispatching works without interference.

### Task 2: Zoom in Marek's Cover Portrait
- **File:** `src/slides/PricingCoverV3.tsx` and `src/slides/PricingCoverV1.tsx`
- **Action:**
  - Increase container sizing and scale from `scale-100` to `scale-115` / `scale-120` with `origin-bottom`.
  - Position Marek's upper body and face prominently so it fills the right hemisphere with executive presence rather than appearing distant or shrunken.

### Task 3: Revamp Cover Slide Copywriting (High-Conversion Hook)
- **File:** `src/slides/PricingCoverV3.tsx` (and `PricingCoverV1.tsx`)
- **Key Message Overhaul:**
  - **Pre-badge:** "Stop Wasting 80% Hiring Effort" / "Founder Relief"
  - **Headline:** 
    - Line 1: "Still Debugging"
    - Line 2: "At Midnight?" (with amber accent highlight)
    - Subtitle: "We Fix AI Hallucinations & Vibe-Coded Bugs — While Saving You 80% Hiring Effort."
  - **Body Copy:** "Stop babysitting fragile prompts and interviewing unqualified applicants. Get battle-tested top 5% engineers supervised by a 20+ year Chief Architect."
  - **Pill Badges:**
    - ⚡ "Save 80% Hiring Effort"
    - 🛠️ "AI & Vibe-Code Fixes"
    - 🌙 "Zero Midnight Fires"
    - 🚀 "Deploy in 20 Minutes"

### Task 4: Create Slide 02 — "The Problem: The Vibe Coding & Hiring Trap"
- **New Component:** `src/slides/ProblemSlide.tsx`
- **Placement:** Positioned immediately after Cover (Slide 1) and before Pricing Tiers (Slide 3).
- **Core Narrative:**
  - **Header:** "The AI Vibe-Coding Trap" / "Why Founders Are Waking Up at 2 AM"
  - **Subtitle:** "Building with AI is 10x faster until production breaks. Then you're stuck in hiring hell."
  - **3 Core Founder Pain Pillars:**
    1. **"The Midnight Debugger"**: You spent all day talking to customers, and now it's 1:30 AM and you're fixing hallucinated API calls, broken migrations, and state race conditions.
    2. **"The 80% Hiring Sinkhole"**: 300 LinkedIn applications, 40 resume screens, 15 phone screens, 3 technical interviews, 1 hire... who quits or can't write production-grade code.
    3. **"The Vibe-Code Wall"**: Fast prototypes don't scale. Fragile spaghetti code collapses under real users, leaving founders paralyzed without senior architectural leadership.
  - **Transition Callout:** "How RiseUp solves this in 20 minutes with zero recruitment fatigue."

### Task 5: Align Downstream Deck Copy to the New Narrative
- **Slide 3 (Pricing Tiers):** Frame tiers not as "talent hours" but as "Engineering relief levels" (from autonomous execution to full architectural stabilization).
- **Slide 4 (Feature Comparison):** Emphasize code review, refactoring, and AI/vibe-code stabilization in the checklist.
- **Slide 5 (Premium Expert Bonus):** Position Alim's $10K/mo oversight as the ultimate insurance policy against AI hallucinations and architectural debt.
- **Slide 9 (Final CTA):** "Stop debugging alone at midnight. Book a 15-minute call and have an elite developer shipping real code this week."

### Task 6: Deck Array & Navigation Re-indexing
- Update `src/pages/Index.tsx` to include `ProblemSlide` as Slide 2 (total 10 slides).
- Update slide counter, navigation tooltips, and tests.
