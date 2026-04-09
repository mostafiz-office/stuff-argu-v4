# Global Asset Preloading

## 1. Strategy

Images imported via ES6 `import` are bundled by Vite and automatically optimized.

## 2. Critical Images

| Asset | Import Path | Used On |
|-------|-------------|---------|
| Company logo | `src/assets/riseup-asia-logo.png` | Every slide (SlideHeader) |
| CEO portrait | `src/assets/alim-updated.png` | Cover V3, Cover V1, Premium Expert |
| QR Code | `src/assets/qr-code.png` | CTA slide |
| Claudio photo | `src/assets/testimonials/claudio-c.png` | Cover V3, Cover V1 |
| Konstantinos photo | `src/assets/testimonials/konstantinos-p.png` | Cover V3, Cover V1 |

## 3. Loading Priority

Cover slide images use `loading="eager"` and `fetchPriority="high"` for instant display.

## 4. Image Optimization

All images are PNG with transparency. Vite handles content hashing for cache busting.
