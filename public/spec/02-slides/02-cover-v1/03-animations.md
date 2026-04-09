# Slide 02 — Cover V1 · Animations

## Entry Sequence

| Element | Type | Delay | Duration |
|---------|------|-------|----------|
| Icon box | fade(0) | 0s | 0.7s |
| Category label | fade(1) | 0.2s | 0.7s |
| Title | fade(2) | 0.4s | 0.7s |
| Body | fade(3) | 0.6s | 0.7s |
| CTA | fade(4) | 0.8s | 0.7s |
| Keyword badges | spring scale + floating loop | 0.5s + i×0.12s | spring + 3s loop |
| Testimonials | recCardFadeIn | 0.65s + i×0.15s | 0.6s |
| Domain text | opacity 0→1 | 0.9s | 0.6s |

## Badge Floating Animation
- Y-axis: `[0, -6, 0]` over 3s, infinite loop
- Box-shadow pulse: `[low-glow, high-glow, low-glow]` over 2.5s, infinite loop
- Hover: scale 1.18, y: -10, stronger glow
