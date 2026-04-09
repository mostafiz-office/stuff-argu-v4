# Global Glass Card System

> **Source**: `src/index.css` utility classes.

## 1. Glass Card (`.glass-card`)

```css
.glass-card {
  background: linear-gradient(135deg, hsl(var(--pres-bg-surface) / 0.8), hsl(var(--pres-bg-card) / 0.6));
  border: 1px solid hsl(var(--pres-accent) / 0.08);
  backdrop-filter: blur(20px);
  border-radius: 24px;
}
```

## 2. Accent Bar (`.accent-bar`)

```css
.accent-bar {
  height: 4px;
  background: linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)));
  border-radius: 2px;
}
```

## 3. Metric Glow (`.metric-glow`)

```css
.metric-glow {
  color: hsl(var(--pres-accent));
  text-shadow: 0 0 30px hsl(var(--pres-accent) / 0.4), 0 0 60px hsl(var(--pres-accent) / 0.15);
}
```

## 4. Chart Bar (`.chart-bar`)

```css
.chart-bar {
  background: linear-gradient(180deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-dark)));
  border-radius: 8px 8px 0 0;
}
.chart-bar::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 40%;
  background: linear-gradient(180deg, hsl(0 0% 100% / 0.15), transparent);
  border-radius: 8px 8px 0 0;
}
```

## 5. Icon Container Pattern

| Variant | Background | Border |
|---------|-----------|--------|
| Accent tint | `hsl(var(--pres-accent) / 0.1–0.12)` | `1px solid hsl(var(--pres-accent) / 0.15–0.25)` |
| Surface | `hsl(var(--pres-bg-surface))` | `1px solid hsl(var(--border))` |

Size: typically `44–52px × 44–52px`, `border-radius: 8–12px`.

## 6. Surface Card Pattern

Standard card used on most slides:

```css
background: hsl(var(--pres-bg-surface));
border: 1px solid hsl(var(--pres-accent) / 0.1);
border-radius: 16px;
padding: 28–32px;
```
