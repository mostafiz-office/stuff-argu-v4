# Slide Components

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

Shared presentation components used across all slides.

---

## ScaledSlide

**File:** `src/components/presentation/ScaledSlide.tsx`

Wraps every slide to provide 1920×1080 → viewport scaling.

| Property | Value |
|----------|-------|
| Canvas size | 1920×1080 |
| Scale method | `Math.min(parentWidth / 1920, parentHeight / 1080)` |
| CSS class | `.slide-scaler .slide-content` |
| Transform origin | `center center` |
| Resize listener | Yes — recalculates on `window.resize` |

### Usage

```tsx
<ScaledSlide>
  <div className="slide-dark-bg relative w-full h-full overflow-hidden">
    <SlideHeader />
    {/* Slide content */}
  </div>
</ScaledSlide>
```

---

## SlideHeader

**File:** `src/components/presentation/SlideHeader.tsx`

Persistent brand logo in top-left corner of every slide.

| Property | Value |
|----------|-------|
| Logo source | `src/assets/riseup-asia-logo.png` |
| Logo height | `48px` |
| Positioning | `absolute top-0 left-0 right-0 z-20` |
| Padding | `px-[60px] py-[36px]` |
| Dark mode opacity | `0.8` |
| Light mode opacity | `0.6` + `brightness-0` |
| Pointer events | `pointer-events-none` (non-interactive) |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dark` | `boolean` | `true` | Dark background (white logo) vs accent background |

---

## HoverVideoPreview

**File:** `src/components/presentation/HoverVideoPreview.tsx`

Wraps tier cards to show a YouTube video preview on hover. **Currently disabled** (`HOVER_VIDEO_ENABLED = false`).

| Property | Value |
|----------|-------|
| Enabled | `false` (renders children only) |
| Hover delay (leave) | 300ms timeout |
| Video format | YouTube embed, autoplay, muted, looped |
| Aspect ratio | 9:16 portrait in phone-style frame |
| Z-index on hover | `z-50` |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `youtubeId` | `string` | Required | YouTube video ID |
| `children` | `ReactNode` | Required | Card content |
| `position` | `"left" \| "right" \| "center"` | `"center"` | Video popup position |

---

## RocketAnimation

**File:** `src/components/presentation/RocketAnimation.tsx`

Animated rocket visual used on Starter Tier slides. Plays once on slide entry.

| Property | Value |
|----------|-------|
| Play count | Once (no loop) |
| Label text | "Growth booster" |
| Label position | Left side of rocket |

### Props

| Prop | Type | Description |
|------|------|-------------|
| `intensity` | `number` | Animation intensity multiplier |
| `profile` | `string` | Layout profile (`"compact"` for smaller slides) |
| `flyingLabel` | `string` | Text label displayed alongside rocket |

---

## PresentationEngine

**File:** `src/components/presentation/PresentationEngine.tsx`

Main slide navigation controller.

| Feature | Description |
|---------|-------------|
| Navigation | Keyboard arrows, click, touch swipe |
| Nav dots | Bottom-center dot indicators with `.nav-dot` class |
| Transition | Slide switching with current index state |
| Provider | Wrapped in `PresentationProvider` context |
