# Slide 04 — Feature Comparison · Visual Spec

## Column Header Visual
- Background tint per color at 6–8% opacity
- Border radius: `12px 12px 0 0`
- Tier name: 28px Ubuntu Bold in tier color
- Price: 18px Poppins dim
- Leadership tagline: "✨ Impossible to say no" (14px italic)

## Row Visual
- Grid: `1.8fr 1fr 1fr 1fr`
- Row padding: `6px 0`
- Row border: `1px solid hsl(var(--border) / 0.5)`
- Feature label: 18px Poppins muted
- ✓ icon: `CheckCircle` 26px in tier color
- ✗ icon: `X` 26px in `hsl(0 80% 55%)` (red)
- Text values: 18px Poppins Bold in tier color

## Scroll System

| Property | Value |
|----------|-------|
| Container | `overflow-y-auto` with ref tracking |
| Scrollbar | `scrollbarWidth: "thin"`, accent color |
| Bottom fade | 60px gradient `pres-bg → transparent` |
| Scroll indicator | "Scroll for more" with 2× ChevronDown icons |
| Indicator animation | `y: [0, 8, 0]` bouncing, 1.5s infinite |
| Auto-hide | Hides when `scrollTop + clientHeight >= scrollHeight - 4` |
