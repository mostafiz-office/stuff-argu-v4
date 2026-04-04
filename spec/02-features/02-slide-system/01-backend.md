# Slide System — Data Patterns

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

How slides consume and display data from the centralized configuration system.

---

## Data Consumption

All slides access configuration via the `usePresentation()` hook:

```typescript
const config = usePresentation();
// Access: config.company.name, config.hero.headline1, config.leader.name, etc.
```

### Config Sections Used by Slides

| Config Section | Used By |
|---------------|---------|
| `company` | TitleSlide, SlideHeader, ContactSlide |
| `hero` | TitleSlide (headlines, CTA) |
| `leader` | CEOSlide (bio, highlights) |
| `contact` | ContactSlide (email, phone, LinkedIn) |
| `pricing` | PricingSlide (plans, savings) |
| `stats` | KeyStatsSlide (metrics) |
| `mindMap` | CEOSlide (skill tags) |
| `customization` | Theme overrides |

---

## Slide Assembly

Slides are assembled in `src/pages/Index.tsx` as a flat array of React elements:

```typescript
const slides = [
  <TitleSlide key="1" />,
  <CEOSlide key="2" />,
  // ... 40+ slides
];
```

The array order determines presentation sequence. Keys are for React reconciliation only.

---

## External Data Sources

| Data | Source | Caching |
|------|--------|---------|
| Tech logos | Simple Icons CDN | Browser cache via preloader |
| Dev logos | Devicon CDN | Browser cache via preloader |
| Portrait photos | Local `/src/assets/` | Vite bundle |
