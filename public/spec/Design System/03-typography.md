# Typography

**Version:** 1.0.0  
**Updated:** 2026-04-09

---

## Overview

Typography rules define font families, size hierarchy, weight usage, and text spacing across all presentation slides. All typographic choices serve readability at presentation scale (1920×1080 projected or screen-shared).

---

## Font Stacks

| Role | Primary Font | Fallback | Usage |
|------|-------------|----------|-------|
| **Headings** | Ubuntu | sans-serif | All H1–H4, tier names, metric values |
| **Body Text** | Poppins | sans-serif | Descriptions, feature lists, labels, buttons |

### Loading Strategy

Fonts are loaded via Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### CSS Assignment

```css
body { font-family: 'Poppins', sans-serif; }
h1, h2, h3, h4, h5, h6 { font-family: 'Ubuntu', sans-serif; }
.slide-content { font-family: 'Poppins', sans-serif; }
.slide-content h1–h6 { font-family: 'Ubuntu', sans-serif; }
```

---

## Size Hierarchy — Slide Headings

| Context | Font | Size | Weight | Style |
|---------|------|------|--------|-------|
| Cover title | Ubuntu | 80–82px | 700 | Normal |
| Section title (large) | Ubuntu | 68–76px | 700 | Normal or Italic |
| Section title (medium) | Ubuntu | 64px | 700 | Normal |
| Pricing title | Ubuntu | 46–52px | 700 | Normal |
| Starter slide title | Ubuntu | 48px | 700 | Normal |
| Metric value | Ubuntu | 28–48px | 700 | Normal |
| Tier name (table) | Ubuntu | 28px | 700 | Normal |
| Card title | Ubuntu | 20–26px | 700 | Normal |

---

## Size Hierarchy — Body Text

| Context | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Subtitle/tagline | Poppins | 22–24px | 400 | 1.6–1.7 |
| Card description | Poppins | 17–21px | 400 | 1.4–1.5 |
| Feature list item | Poppins | 18px | 400–600 | 1.4 |
| Price label | Poppins | 18–20px | 500–600 | — |
| Button text | Poppins | 16–20px | 600 | — |
| Badge/pill text | Poppins | 13–16px | 600–700 | — |
| Category label | Poppins | 14px | 700 | — |
| Caption/meta | Poppins | 11–13px | 400–600 | — |

---

## Italic Usage

| Context | Style |
|---------|-------|
| Cover titles | **Normal** (non-italic) |
| "Get Up To 4× Value" heading | **Italic** |
| Bottom tagline quotes | **Italic** |
| "Impossible to say no" tagline | **Italic** |
| Testimonial quotes | **Italic** |

**Rule:** Italic is used sparingly for emphasis quotes and value propositions, never for all headings.

---

## Accent Text Patterns

Headlines frequently highlight key words in amber:

```tsx
<span style={{ color: "hsl(var(--pres-accent))" }}>Elite</span> Engineers
```

Common patterns:
- `<span accent>Word</span> Rest` — Single word highlight
- `Get Up To <span accent>4× Value</span>` — Value proposition highlight
- `<strong accent>top 5% engineers</strong>` — Inline bold emphasis

---

## Letter Spacing

| Context | Letter Spacing |
|---------|---------------|
| Category labels (uppercase) | `0.12em–0.2em` |
| Badge text | `0.05em–0.08em` |
| Normal text | Default (none) |

---

## Text Transform

| Context | Transform |
|---------|-----------|
| Tier names | `uppercase` |
| Category labels | `uppercase` |
| Step labels | `uppercase` |
| All other text | None |
