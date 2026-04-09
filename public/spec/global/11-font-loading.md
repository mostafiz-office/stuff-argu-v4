# Global Font Loading

> **Source**: `index.html` `<head>` section.

## 1. Google Fonts URL

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 2. Font Weights Loaded

| Family | Weights |
|--------|---------|
| Ubuntu | 400, 500, 700 |
| Poppins | 300, 400, 500, 600, 700 |

## 3. Display Strategy

`display=swap` — text renders immediately in fallback font, swaps when custom font loads.

## 4. Fallback Chain

```css
font-family: 'Ubuntu', sans-serif;    /* headings */
font-family: 'Poppins', sans-serif;   /* body */
```
