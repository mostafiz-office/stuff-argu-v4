# Global Asset Preloading

## 1. Strategy
All slide images are listed in `src/lib/preloadImages.ts` and downloaded + decoded as soon as the deck loads, so later slides (e.g. slide 5 Alim photo) show instantly. Any new slide image must be added to that list.

## 2. Images
| Asset | Path | Used On | Size |
|-------|------|---------|------|
| Marek portrait | `src/assets/marek.webp` | Cover (slide 1) | ~100 KB |
| Company logo | `src/assets/riseup-asia-logo.png` | Every slide | ~40 KB |
| Alim photo | `src/assets/alim-updated.webp` (1200×800) | Slide 5 | ~48 KB (was 1.4 MB PNG) |
| QR code | `src/assets/qr-code.png` | Slide 11 | ~34 KB |

## 3. Priority
Cover portrait and logo load with high priority; the rest follow in the background.

## 4. Caching
`public/.htaccess` caches images for 1 year. Vite hashes filenames per build, so updated images still appear.
