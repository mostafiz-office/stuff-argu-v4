# Configuration System

**Version:** 1.0.0  
**Updated:** 2026-04-04  
**Status:** Complete

---

## Overview

The configuration system centralizes all presentation content in a single JSON file, distributed via React Context. This architecture enables rapid client-specific customization without code changes.

---

## Components

### `presentation-config.json`

Root-level config sections:

| Section | Fields | Used By |
|---------|--------|---------|
| `company` | name, website, tagline, founded | Title, header, contact slides |
| `hero` | headline1, headline2, ctaText, ctaUrl | Title slide |
| `leader` | name, title, highlights, yearsExperience | CEO slide |
| `mindMap` | Array of skill tags | CEO slide |
| `contact` | email, phone, linkedin, location | Contact slide |
| `pricing` | savingsVsUS, plans array | Pricing slide |
| `stats` | Various metrics | Stats slides |
| `features` | hiddenSlides, feature flags | PresentationEngine |
| `customization` | Theme overrides | Global styling |

### `PresentationContext.tsx`

- Creates React Context with default config
- `PresentationProvider` accepts optional `Partial<PresentationConfig>` for overrides
- Shallow-merges each top-level section
- `usePresentation()` hook for consumption

---

## Customization Workflow

1. Copy `presentation-config.json`
2. Modify content (headlines, metrics, contact info)
3. Pass as prop to `PresentationProvider`
4. All slides automatically reflect changes

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Feature Index | [../00-overview.md](../00-overview.md) |
| Fundamentals | [../../01-fundamentals.md](../../01-fundamentals.md) |
