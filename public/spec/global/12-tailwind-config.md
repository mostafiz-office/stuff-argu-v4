# Global Tailwind Configuration

> **Source**: `tailwind.config.ts`.

## 1. Token-to-Class Mapping

All `--pres-*` CSS custom properties are mapped to Tailwind utility classes:

```ts
colors: {
  "pres-bg": "hsl(var(--pres-bg))",
  "pres-surface": "hsl(var(--pres-bg-surface))",
  "pres-card": "hsl(var(--pres-bg-card))",
  "pres-accent": "hsl(var(--pres-accent))",
  "pres-accent-glow": "hsl(var(--pres-accent-glow))",
  "pres-accent-dark": "hsl(var(--pres-accent-dark))",
  "pres-text": "hsl(var(--pres-text))",
  "pres-text-muted": "hsl(var(--pres-text-muted))",
  "pres-text-dim": "hsl(var(--pres-text-dim))",
}
```

## 2. Font Family Extension

```ts
fontFamily: {
  heading: ["Ubuntu", "sans-serif"],
  body: ["Poppins", "sans-serif"],
}
```

## 3. Plugins

- `tailwindcss-animate` — for `animate-*` utilities
- `@tailwindcss/typography` — for prose rendering

## 4. Content Paths

```ts
content: ["./index.html", "./src/**/*.{ts,tsx}"]
```
