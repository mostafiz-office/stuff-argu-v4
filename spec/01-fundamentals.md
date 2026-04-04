# Fundamentals

**Version:** 1.0.0  
**Updated:** 2026-04-04

---

## Overview

Core architectural decisions, technology stack, design system, and data flow patterns for the RiseUp Asia Presentation application.

---

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 18.x |
| Build Tool | Vite | 5.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| Animation | Framer Motion | 12.x |
| Routing | React Router DOM | 6.x |
| PDF Export | jsPDF + html2canvas | 4.x / 1.4 |
| Notifications | Sonner | 1.x |
| Icons | Lucide React | 0.462 |
| State | React Context | Built-in |

---

## Architecture

### Component Hierarchy

```
App
└── BrowserRouter
    └── Routes
        └── Index (/)
            └── PresentationProvider (Context)
                └── PresentationEngine
                    ├── AnimatePresence + motion.div (active slide)
                    ├── SlideNavigation
                    └── DownloadPanel (conditional)
```

### Key Architectural Patterns

1. **JSON-Driven Content** — All presentation content (headlines, metrics, contact info, pricing) is stored in `src/data/presentation-config.json` and distributed via `PresentationContext`. Slides consume config via `usePresentation()` hook. This enables client-specific customization without code changes.

2. **ScaledSlide Wrapper** — Every slide is wrapped in `ScaledSlide` which renders content at a fixed 1920×1080 canvas and applies `transform: scale()` to fit the viewport. This ensures pixel-perfect layout regardless of screen size.

3. **Transition Engine** — `PresentationEngine` cycles through 5 transition styles (slide, fade, zoom, flip, rise) based on slide index. Uses Framer Motion's `AnimatePresence` with `mode="wait"` for clean enter/exit animations.

4. **Asset Preloading** — `useAssetPreloader` hook eagerly loads all local images (via Vite's `import.meta.glob`) and external CDN icons (Simple Icons, Devicon) in background batches of 8, starting 300ms after mount.

5. **URL-Driven Navigation** — Current slide index is synced with `?slide=N` query parameter via React Router's `useSearchParams`. Supports direct linking to any slide.

---

## Design System

### CSS Custom Properties (HSL-based)

All colors are defined as HSL values in `src/index.css` using CSS custom properties:

| Token | Purpose |
|-------|---------|
| `--pres-bg` | Main background |
| `--pres-bg-surface` | Elevated surface background |
| `--pres-text` | Primary text color |
| `--pres-text-dim` | Secondary/muted text |
| `--pres-accent` | Brand accent (amber/gold) |
| `--pres-accent-glow` | Accent gradient endpoint |

### Typography

| Font | Usage |
|------|-------|
| Ubuntu | Headlines, navigation |
| Poppins | Body text, descriptions |

### Visual Effects

- **Noise overlay** — Subtle grain texture via `.noise-overlay` CSS class
- **Glass cards** — `.glass-card` class for frosted-glass card surfaces
- **Gradient borders** — Used on highlight cards and CTAs

---

## Slide Organization

Slides are organized into 5 sections (40+ total):

| Section | Slides | Content |
|---------|--------|---------|
| 1. Introduction | 1–2 | Title, CEO profile |
| 2. Services | 3–13 | Service divider, engineering, AI, web, SEO, marketing, staff aug, talent, quote, recap |
| 3. Team | 14–20 | Team divider, key players, CTO, team overview, culture, tech stack, observations |
| 4. Case Studies | 21–34 | Projects divider, Validata, AutoUT, VPN, ConnectIQ, BabelHealth, Veradigm, LLM, transcripts, Greenlight, Zapro, QuickCycle, testimonials, industries |
| 5. Closing | 35–40 | Support divider, competitive edge, cost comparison, after-sales, next steps, contact |

### Slide Types

| Type | Pattern | Examples |
|------|---------|----------|
| **Divider** | Full-bleed gradient with floating tech icons | ServicesDividerSlide, TeamDividerSlide |
| **Profile** | Photo + bio + highlights layout | CEOSlide, CTOSlide, SyedurRahmanSlide |
| **Service** | Icon grid + description + capabilities | SoftwareEngineeringSlide, AIDevelopmentSlide |
| **Case Study** | Project details + tech stack + metrics | ValidataSlide, BabelHealthSlide |
| **Testimonial** | Client quotes with attribution | TestimonialsSlide, TestimonialsSlide2 |
| **Data** | Charts, comparisons, pricing tables | CostComparisonSlide, PricingSlide |

---

## Data Flow

```
presentation-config.json
       │
       ▼
PresentationProvider (React Context)
       │
       ▼
usePresentation() hook
       │
       ▼
Individual Slide Components
```

### Hidden Slides

The config supports a `features.hiddenSlides` array (1-indexed) to conditionally exclude slides from the visible deck without removing code.

---

## External Asset Strategy

| Source | CDN | Usage |
|--------|-----|-------|
| Simple Icons | `cdn.simpleicons.org` | Technology logos (colored & white variants) |
| Devicon | `cdn.jsdelivr.net/gh/devicons/devicon` | Java, C#, SQL Server, Slack icons |
| Simple Icons (SVG) | `cdn.jsdelivr.net/npm/simple-icons@latest` | TechStackSlide raw SVG icons |

Icons are preloaded via `useAssetPreloader` and cached by the browser's native image cache.

---

## Export System

| Format | Method | Details |
|--------|--------|---------|
| **PDF** | jsPDF + html2canvas | Iterates all slides, navigates to each, captures at 1920×1080, assembles multi-page PDF |
| **Single Image** | html2canvas | Captures current slide at 2× resolution, supports PNG/JPG |
| **Animated HTML** | Blob download | Wraps live presentation URL in an iframe-based HTML file |

Export is gated behind `?export=1` query parameter.

---

## File Structure

```
src/
├── App.tsx                          # Root component with routing
├── main.tsx                         # Entry point
├── index.css                        # Design system tokens + global styles
├── pages/
│   ├── Index.tsx                    # Slide assembly + PresentationProvider
│   └── NotFound.tsx                 # 404 page
├── components/
│   ├── presentation/
│   │   ├── PresentationEngine.tsx   # Core engine: transitions, navigation, export
│   │   ├── ScaledSlide.tsx          # 1920×1080 → viewport scaling wrapper
│   │   ├── SlideHeader.tsx          # Logo overlay on slides
│   │   ├── SlideNavigation.tsx      # Arrow keys, dots, keyboard nav
│   │   └── DownloadPanel.tsx        # PDF/image/HTML export panel
│   ├── NavLink.tsx                  # Navigation link component
│   └── ui/                         # shadcn/ui component library
├── slides/                          # 40+ individual slide components
│   ├── TitleSlide.tsx
│   ├── CEOSlide.tsx
│   └── ...
├── context/
│   └── PresentationContext.tsx      # JSON config → React Context
├── data/
│   └── presentation-config.json    # Centralized content configuration
├── hooks/
│   ├── useAssetPreloader.ts        # Background image preloading
│   └── use-mobile.tsx              # Mobile detection hook
├── assets/                          # Local images (portraits, logos)
└── lib/
    └── utils.ts                     # Utility functions (cn helper)
```
