# Project Map — distinction-creative-ws

Single-page React marketing site for Distinction Creative. No backend, no auth, no database.

## Stack

| Layer | Tool |
|---|---|
| Framework | React 18 |
| Build | Vite 6 |
| Routing | React Router 6 |
| Styling | Tailwind CSS 3 |
| UI primitives | Radix UI / shadcn |
| Animation | Framer Motion |
| State/cache | TanStack React Query |

## Routes

| Path | Component | Notes |
|---|---|---|
| `/` | `pages/Home.jsx` | Main landing page |
| `/Home` | `pages/Home.jsx` | Alias |
| `*` | `lib/PageNotFound.jsx` | 404 fallback |

## Source layout

```
src/
├── App.jsx                    # Root — QueryClient + Router + Routes
├── main.jsx                   # ReactDOM entry point
├── index.css                  # Global styles / Tailwind base
│
├── pages/
│   └── Home.jsx               # Assembles all 15 sections in order
│
├── components/
│   ├── dc/                    # Page sections (edit content here)
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── IntroSection.jsx
│   │   ├── SystemStackSection.jsx
│   │   ├── CurrentStackSection.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── PortalShowcaseSection.jsx
│   │   ├── OpenClawSection.jsx
│   │   ├── OpenClawChatSimulator.jsx
│   │   ├── MetricsSection.jsx
│   │   ├── CaseStudiesSection.jsx
│   │   ├── RoiCalculatorSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FinalCTASection.jsx
│   │   ├── TrustStrip.jsx
│   │   └── Footer.jsx
│   │
│   └── ui/                    # shadcn/ui primitives — do not edit directly
│
├── lib/
│   ├── PageNotFound.jsx       # 404 page
│   ├── query-client.js        # TanStack QueryClient instance
│   └── utils.js               # cn() helper for Tailwind class merging
│
├── hooks/
│   ├── use-mobile.jsx         # Responsive breakpoint hook
│   └── useReveal.js           # Scroll-reveal animation hook
│
└── utils/
    └── index.ts               # Shared utility functions
```

## Config files

| File | Purpose |
|---|---|
| `vite.config.js` | Vite build config; defines `@/` alias → `src/` |
| `tailwind.config.js` | Tailwind theme/content paths |
| `components.json` | shadcn/ui component config |
| `jsconfig.json` | IDE path resolution for `@/` alias |
| `eslint.config.js` | Linting rules |
| `postcss.config.js` | PostCSS (Tailwind/Autoprefixer) |

## Commands

```bash
npm run dev       # Dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Serve dist/ at http://localhost:4173
npm run lint      # ESLint check
```
