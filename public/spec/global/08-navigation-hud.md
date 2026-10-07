# Global Navigation HUD

> **Source**: `SlideNavigation.tsx`, `SlideHeader.tsx`.

**⚠️ MANDATORY**: Rendered by `PresentationEngine.tsx`, NOT by individual slides.

## 1. Top-Right Control Bar

| Property | Value |
|----------|-------|
| Position | `fixed top-6 right-6 z-50` |
| Background | `bg-black/60 backdrop-blur-md` |
| Shape | Pill (`rounded-full`) |
| Padding | `px-2 py-1.5` |
| Border | `1px solid hsl(0 0% 100% / 0.1)` |

### Button Order (left to right)

1. ◀ Previous — disabled on first slide
2. Slide counter — `{current} / {total}`
3. ▶ Next — disabled on last slide
4. │ divider
5. Sound — muted by default; preference persists locally
6. │ divider
7. Share — copies the current URL
8. │ divider
9. Fullscreen — toggle

## 2. Bottom Dot Navigation

| Property | Value |
|----------|-------|
| Position | `fixed bottom-6 left-1/2 -translate-x-1/2 z-50` |
| Layout | `flex items-center gap-2` |
| Inactive dot | `8px × 8px` circle |
| Active dot | `32px × 8px` pill, amber |

Each dot exposes a numbered title in the format `N. Slide title`, without a “Slide” prefix.

## 3. SlideHeader

| Property | Value |
|----------|-------|
| Logo Image | `src/assets/riseup-asia-logo.png` |
| Logo Height | `48px` |
| Position | `absolute top-0 left-0 right-0`, padding `60px horizontal, 36px vertical` |
| Logo Opacity | `0.8` |
| Pointer Events | `none` |
| z-index | `20` |

## 4. Keyboard Navigation

| Key | Action |
|-----|--------|
| → / ↓ / Space / Enter | Next slide or trigger the active slide gate |
| ← / ↑ | Previous slide |
| Escape | Exit fullscreen |
| F | Toggle fullscreen |

Slide 9 preserves its three-step Next gate: reveal the architect bonus, launch the contained rocket, then advance.
