# Slide 04 — Consistency Report
**Last Audit:** 2026-04-09 · **Status:** ✅ Consistent

| Check | Status |
|-------|--------|
| Uses `slide-dark-bg` | ✅ |
| Uses `SlideHeader` | ✅ |
| Uses `ScaledSlide` | ✅ |
| Colors use `--pres-*` tokens | ✅ |
| Fonts match global | ✅ |
| Uses `fade(i)` helper | ✅ |
| Scrollbar always visible | ✅ (persistent custom right-edge rail + live thumb; native browser scrollbar hidden to avoid duplicate rails) |
| Leadership tagline removed | ✅ (aligned with other tiers) |

## Change Log

| Date | Change |
|------|--------|
| 2026-04-09 | Made scrollbar permanently visible (overflow-y-scroll + auto width + visible track) |
| 2026-04-09 | Removed "Impossible to say no" tagline from Leadership tier for alignment |
| 2026-04-10 | Added `display: block !important` and `scrollbar-width: auto !important` to `.tier-scroll` to override global `display: none` scrollbar rule |
| 2026-04-10 | Replaced native-scrollbar-only approach with a persistent custom right-edge scroll rail and live thumb for reliable visibility inside the scaled presentation UI |
| 2026-04-10 | Hid the native scrollbar again after adding the custom rail so only one visible scroll indicator remains on the slide |
