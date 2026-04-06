# Slide 3 — Feature Comparison

**Component:** `src/slides/TierDetailSlide.tsx`

---

## Layout

- **Top**: "Feature Comparison" heading (64px)
- **Body**: Full-width comparison table with header row + 10 feature rows

## Table Structure

### Columns (3 tiers)

| Column | Key | Price | Badge |
|--------|-----|-------|-------|
| Tier 1 | `growth` | $4,299/mo | — |
| Tier 2 | `skilled` | $6,800–8K/mo | 🏆 BEST VALUE (green) |
| Tier 3 | `leadership` | $7.5K–10K/mo | 👑 PREMIUM (purple gradient) |

Column backgrounds: Best Value columns have green tint (`0.08` / `0.06`), Premium has purple tint.

### Feature Rows (10)

| Feature | Tier 1 | Tier 2 | Tier 3 |
|---------|--------|--------|--------|
| Dedicated developer · 160 hrs/mo | ✓ | ✓ | ✓ |
| Weekly progress reports | ✓ | ✓ | ✓ |
| Daily standups | ✗ | ✓ | ✓ |
| Sprint participation | ✗ | ✓ | ✓ |
| Task breakdown & delegation | ✗ | ✓ | ✓ |
| Team management | ✗ | Up to 2 | 3–5 / Up to 15 |
| Architecture decisions | ✗ | ✗ | ✓ |
| Project management | ✗ | ✗ | ✓ |
| CTO-level oversight | ✗ | ✗ | ✓ |
| Priority Slack · 24/7 SLA | ✗ | Slack only | ✓ |

### Cell Rendering

- `true` → `<CheckCircle>` in tier color
- `false` → `<X>` in red (`0 80% 55%`)
- `string` → colored text label

## Animations

- Header columns: staggered fade-in (`delay: 0.3 + i * 0.08`)
- Feature rows: staggered slide-in from left (`delay: 0.4 + i * 0.05`)
- Grid template: `1.8fr 1fr 1fr 1fr`
