# Asset Preloading

**Version:** 1.0.0  
**Updated:** 2026-04-04  
**Status:** Complete

---

## Overview

The asset preloading system ensures all images (local and external CDN) are cached by the browser before the user navigates to later slides. This eliminates image flicker and loading delays during the presentation.

---

## Implementation

Single hook: `useAssetPreloader` in `src/hooks/useAssetPreloader.ts`

### Local Assets

Vite's `import.meta.glob` with `{ eager: true }` resolves every image in `src/assets/` at build time:

```typescript
const assetModules = import.meta.glob<{ default: string }>(
  "/src/assets/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);
```

### External Assets

Manually listed CDN URLs for:
- Simple Icons (various color variants)
- Devicon icons
- Simple Icons SVG via jsDelivr

### Loading Strategy

- **Batch size**: 8 images per tick
- **Interval**: 80ms between batches
- **Delay**: 300ms after mount before starting
- **Method**: `new Image(); img.src = url;` (leverages browser cache)
- **Cleanup**: Cancelled on unmount via boolean flag

---

## Cross-References

| Reference | Location |
|-----------|----------|
| Feature Index | [../00-overview.md](../00-overview.md) |
| External Assets Memory | Refers to Simple Icons / Devicon CDN strategy |
