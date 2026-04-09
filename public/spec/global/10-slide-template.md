# Slide Spec Template

> **Instructions**: Copy this template to create a new `public/spec/slide-NN/` folder. Replace all `{{placeholders}}` with slide-specific values.

## Required Files

| # | File | Purpose |
|---|------|---------|
| 00 | `00-overview.md` | Slide entry point, purpose, file inventory |
| 01 | `01-layout-architecture.md` | Positioning grid, z-layers |
| 02 | `02-color-tokens.md` | Slide-specific colors and opacity overrides |
| 03 | `03-typography.md` | Slide-specific font sizes |
| 04 | `04-components.md` | Component tree and element specs |
| 05 | `05-animations.md` | Entrance sequence, loops |
| 06 | `06-hover-interactions.md` | Slide-specific hover behaviors |
| 07 | `07-assets.md` | Image paths, sizes, formats |
| 08 | `08-data-model.md` | Content data, dynamic fields |
| — | `data/slide-NN-content.json` | All text/data as structured JSON |
| 99 | `99-consistency-report.md` | Audit status |

## Template Header

Each file should start with:

```markdown
# Slide NN — {{Slide Name}} · {{Section Name}}

**Version:** 1.0.0  
**Updated:** {{date}}  
**Category:** {{category}}

> **Inherits**: [`global/{{file}}`](../global/{{file}})  
> **Overrides**: {{none | list overrides}}
```
