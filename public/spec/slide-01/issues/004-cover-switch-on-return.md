# 004 — Cover switches when returning to slide 1
Rule: every navigation from another slide back to slide 1 flips V1/V3 and persists it, so a reload still shows the opposite of the last cover seen. Logic: src/lib/coverRotation.ts (tested).
