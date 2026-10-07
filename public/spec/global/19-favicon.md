# Favicon

**Updated:** 2026-10-07

## Rule

The Riseup favicon master copy lives at `public/spec/assets/favicon.ico`. The live site icon lives at `public/favicon.ico` and is referenced by `index.html` as `<link rel="icon" type="image/x-icon" href="/favicon.ico">`.

## ZIP guarantee

Vite copies everything under `public/` into the build output (`dist/`), which is what the deploy ZIP is packaged from. As long as both files exist in `public/`, every build automatically includes:

| Output path | Purpose |
|-------------|---------|
| `dist/favicon.ico` | Live site favicon (browser tabs, bookmarks) |
| `dist/spec/assets/favicon.ico` | Master copy stored with the spec |

No packaging step is needed — never exclude `public/` or its contents when building the ZIP.

## Asset details

- Source: uploaded `file.ico`, MS Windows icon resource, 256x256, 32 bits/pixel.
- Visual: white "R" with orange lightning bolt on a dark rounded square.
- Used as-is; no conversion required.
