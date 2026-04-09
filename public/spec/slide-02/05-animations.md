# Slide 02 — Cover V1 · Animations

> **Inherits**: [`global/05-animation-system.md`](../global/05-animation-system.md)

## Entrance Sequence
| Element | Type | Delay |
|---------|------|-------|
| Icon container | fade(0) | 0s |
| Category label | fade(1) | 0.2s |
| Headline | fade(2) | 0.4s |
| Body | fade(3) | 0.6s |
| CTA button | fade(4) | 0.8s |
| Rec cards | recCardFadeIn | 0.65s + i×0.15s |
| Website URL | opacity 0→1 | 0.9s |

## Keyword Badge Animation
| Phase | Properties |
|-------|-----------|
| Entrance | `opacity: 0, scale: 0.3, y: 20` → `opacity: 1, scale: 1` · spring(180, 14) · delay 0.5+i×0.12 |
| Float loop | `y: [0, -6, 0]` · duration 3s · delay 1.2+i×0.3 · infinite |
| Glow pulse | `boxShadow` cycles between 0.15 and 0.35 accent opacity · duration 2.5s · infinite |
| Hover | `scale: 1.18, y: -10, boxShadow: 0.55 accent opacity` |
