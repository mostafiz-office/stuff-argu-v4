# Spacing & Layout

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

The presentation uses a fixed 1920×1080 canvas with CSS transform scaling. All coordinates are authored in this fixed space.

---

## Canvas System

| Property | Value |
|----------|-------|
| Design width | 1920px |
| Design height | 1080px |
| Aspect ratio | 16:9 |
| Scaling method | CSS `transform: scale()` via `ScaledSlide` |
| Scale calculation | `Math.min(parentWidth / 1920, parentHeight / 1080)` |
| Transform origin | `center center` |

### Constants

```typescript
// src/constants/presentation.ts
export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;
```

---

## Standard Margins

| Edge | Value | Usage |
|------|-------|-------|
| Left | 80px | Title, content blocks, tables |
| Right | 80px | Content blocks, tables |
| Top (title) | 85–100px | Slide titles below header |
| Top (subtitle) | 148–178px | Subtitle below title |
| Top (content start) | 200–260px | Main content area |
| Bottom | 60–80px | Content area bottom boundary |

---

## Content Zones

### Two-Column Layout

```
┌──────────────────────────────────────────────┐
│ [Logo]                                        │
│                                                │
│  ┌─────────────┐     ┌──────────────────┐     │
│  │ LEFT         │     │ RIGHT            │     │
│  │ 560–700px    │     │ flex-1 / 680–780px│    │
│  │ Title +      │     │ Cards / Bars /   │     │
│  │ Description  │     │ Table            │     │
│  └─────────────┘     └──────────────────┘     │
│                                                │
└──────────────────────────────────────────────┘
```

Used by: Cover slides, Cost Savings, Starter Tier V9

### Full-Width Grid

```
┌──────────────────────────────────────────────┐
│ [Logo]                                        │
│  Title                                        │
│  Subtitle                                     │
│                                                │
│  ┌──────┐ ┌──────┐ ┌──────┐ (┌──────┐)       │
│  │ Col  │ │ Col  │ │ Col  │  │ Col  │        │
│  └──────┘ └──────┘ └──────┘  └──────┘        │
│                                                │
└──────────────────────────────────────────────┘
```

Used by: Pricing Tiers (3-col), What's Included (3×2), How It Works (4-col)

### Table Layout

```
┌──────────────────────────────────────────────┐
│ [Logo]                                        │
│  Title                                        │
│                                                │
│  Feature Label  │ Col 1 │ Col 2 │ Col 3      │
│  ───────────────┼───────┼───────┼───────     │
│  Row 1          │  ✓    │  ✓    │  ✓         │
│  Row 2          │  ✗    │  ✓    │  ✓         │
│  ...            │       │       │            │
│                                                │
└──────────────────────────────────────────────┘
```

Used by: Feature Comparison, Starter Tier Detail

---

## Grid Specifications

| Slide | Grid | Columns | Gap |
|-------|------|---------|-----|
| Pricing Tiers | `grid-cols-3` | Equal | `gap-8` (32px) |
| What's Included | `grid-cols-3 grid-rows-2` | Equal | `gap-6` (24px) |
| How It Works | `grid-cols-4` | Equal | `gap-8` (32px) |
| Feature Comparison | `gridTemplateColumns: "1.8fr 1fr 1fr 1fr"` | Custom | — |
| Premium Expert values | `grid-cols-4` | Equal | `gap-4` (16px) |
| Starter Tier V9 | Flex `gap-8` | 560px fixed + flex-1 | `gap-8` |

---

## Z-Index Layers

| Layer | Z-Index | Content |
|-------|---------|---------|
| Background texture | `z-[1]` | Halftone pattern, glow effects |
| Alim photo | `z-[3]`–`z-[5]` | Photo with drop shadow |
| Hover cards | `z-[6]` | Interactive expertise cards |
| Keyword badges | `z-[7]` | Floating skill pills |
| Testimonial cards | `z-[8]` | Corner recommendation cards |
| Main content | `z-10` | Titles, grids, tables |
| Slide header (logo) | `z-20` | Brand logo |
| Video overlay | `z-[100]` | HoverVideoPreview iframe |
