# Slide 01 — Cover V3 (Bold Statement)

**Version:** 1.3.0  
**Updated:** 2026-10-08  
**Status:** Active

> **Inherits Global**: All shared design tokens from [`../global/`](../global/00-overview.md). This spec documents only slide-specific details.

## Overview

Slide 1 alternates deterministically between two concise cover messages while sharing the same Marek portrait and layout. Cover V1 shows verified recommendations from Cristian Stancalău and Jakub Szubarga; Cover V3 shows Adam Lewkowicz. Each compact card identifies its real author and links to Marek's LinkedIn recommendations page.

## File Inventory

| # | File | Category |
|---|------|----------|
| 00 | `00-overview.md` | This file |
| 01 | `01-layout-architecture.md` | Positioning, z-layers |
| 02 | `02-color-tokens.md` | Slide-specific colors |
| 03 | `03-typography.md` | Font sizes |
| 04 | `04-components.md` | Component tree |
| 05 | `05-animations.md` | Entrance sequence |
| 06 | `06-hover-interactions.md` | HoverCard, badge, rec-card |
| 07 | `07-assets.md` | Images |
| 08 | `08-data-model.md` | Content data |
| — | `data/slide-01-content.json` | Structured content |
| 99 | `99-consistency-report.md` | Audit |

## Global Dependencies

| Global File | What It Provides |
|-------------|-----------------|
| `global/01-color-tokens.md` | All `--pres-*` CSS custom properties |
| `global/02-typography.md` | Ubuntu/Poppins families |
| `global/05-animation-system.md` | fade() helper, spring presets |
| `global/06-hover-interactions.md` | `.rec-card` hover rules |
| `global/09-noise-texture.md` | `.slide-dark-bg` background |

## Cross-References

| Reference | Location |
|-----------|----------|
| Component | `src/slides/PricingCoverV3.tsx` |
| Engine | `src/components/presentation/PresentationEngine.tsx` |
| ScaledSlide | `src/components/presentation/ScaledSlide.tsx` |
