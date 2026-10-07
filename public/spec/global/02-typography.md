# Global Typography

> **Source**: Google Fonts loaded in `index.html`, configured in `tailwind.config.ts` and `src/index.css`.

## 1. Font Families

| Role | Family | CSS | Usage |
|------|--------|-----|-------|
| **Headings** | Ubuntu | `font-family: 'Ubuntu', sans-serif` | All `h1`–`h6`, slide titles, section headers |
| **Body** | Poppins | `font-family: 'Poppins', sans-serif` | Paragraphs, labels, buttons, nav, descriptions |

Both families are applied globally via `@layer base` in `index.css`:
- `body` → Poppins
- `h1`–`h6` → Ubuntu
- `.slide-content` scope mirrors the same split

## 2. Weight Scale

| Weight | CSS Value | Ubuntu Usage | Poppins Usage |
|--------|-----------|-------------|---------------|
| Regular | `400` | — | Body text, descriptions |
| Medium | `500` | — | Labels, captions |
| SemiBold | `600` | Section titles | Button text, emphasized body |
| Bold | `700` | Slide headlines, H1–H3 | Strong emphasis |

## 3. Size Scale (Slide Canvas at 1920×1080)

All sizes are in `px` within the 1920×1080 coordinate space.

| Token | Size (px) | Usage |
|-------|-----------|-------|
| `display-xl` | 80–82 | Cover slide headlines |
| `display-lg` | 68–76 | Section titles (What's Included, How It Works, Cost Savings) |
| `display-md` | 48–64 | Slide titles (Feature Comparison, Starter Tier, Premium Expert) |
| `display-sm` | 36–48 | Card titles, price display |
| `title-lg` | 26–28 | Card headings, step titles, stat values |
| `title-md` | 20–24 | Feature labels, body-lg |
| `body-lg` | 17–22 | Primary body text, descriptions |
| `body-md` | 14–18 | Card descriptions, secondary body |
| `body-sm` | 13–14 | Nav counter, tooltips, badges |
| `caption` | 11–12 | Meta labels, sub-captions |

### Shared presentation tokens

The live deck now exposes reusable CSS tokens instead of requiring every slide to invent its own headline scale:

| Token / utility | Size | Purpose |
|---|---:|---|
| `--pres-title` / `.pres-title` | `72px` | Primary slide titles |
| `--pres-title-compact` / `.pres-title-compact` | `64px` | Dense comparison titles |
| `--pres-body` / `.pres-body` | `24px` | Prominent body copy |
| `--pres-card-title` / `.pres-card-title` | `30px` | Card headings |
| `--pres-card-body` / `.pres-card-body` | `22px` | Card descriptions |
| `--pres-label` | `18px` | Labels and compact metadata |

## 4. Line Height

| Context | Line Height |
|---------|-------------|
| Headlines | `1.05–1.1` |
| Subheadlines | `1.25–1.3` |
| Body text | `1.4–1.6` |
| Labels/buttons | `1.0` |

## 5. Text Colors

| Semantic Use | Token | CSS |
|-------------|-------|-----|
| Primary text | `--pres-text` | `hsl(0 0% 100%)` |
| Secondary text | `--pres-text-muted` | `hsl(218 11% 65%)` |
| Tertiary / labels | `--pres-text-dim` | `hsl(220 9% 46%)` |
| Accent text | `--pres-accent` | `hsl(41 100% 50%)` |

## 6. Text Shadow

```css
.metric-glow {
  color: hsl(var(--pres-accent));
  text-shadow: 0 0 30px hsl(var(--pres-accent) / 0.4),
               0 0 60px hsl(var(--pres-accent) / 0.15);
}
```

## 7. Font Smoothing

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

## 8. Italic Conventions

| Context | Style |
|---------|-------|
| Slide titles | **Non-italic** (default) |
| Cost Savings headline ("Get Up To / 4× Value") | *Italic* |
| Taglines / quotes | *Italic* |
| Category labels | Non-italic, uppercase |
