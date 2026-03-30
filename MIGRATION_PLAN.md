# Migration Plan — distinction-creative-ws

## Status

Base44 dependencies fully removed as of 2026-03-29. The site is self-contained and deployable.

## Remaining tasks

### 1. Favicon
A favicon was removed (it pointed to `base44.com`). Add a real one.

- Drop a `favicon.svg` (or `.ico`) into the `public/` directory — create the folder if needed
- Update `index.html`:
  ```html
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  ```

### 2. Page title / meta tags
`index.html` has a title but no Open Graph or SEO meta tags. Add before launch:

```html
<meta name="description" content="..." />
<meta property="og:title" content="Distinction Creative" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />
```

### 3. Contact / CTA forms
The site has CTA sections. If any forms submit data, they need a destination:
- Option A: [Formspark](https://formspark.io) / [Formspree](https://formspree.io) — no backend needed
- Option B: Wire to an API route if a backend is added later

Audit which sections have active `<form>` elements before launch.

### 4. Deployment
The site is a static Vite build — `dist/` can go anywhere.

| Platform | Command |
|---|---|
| Vercel | `vercel` (auto-detects Vite) |
| Netlify | drag `dist/` or connect repo |
| Cloudflare Pages | connect repo, build cmd: `npm run build`, output: `dist` |
| Self-hosted | serve `dist/` with nginx or Caddy |

### 5. Analytics (optional)
The Base44 plugin provided built-in analytics tracking. Replace if needed:
- [Plausible](https://plausible.io) — privacy-friendly, one script tag
- [Fathom](https://usefathom.com) — similar
- Google Analytics — add gtag script to `index.html`

### 6. Remove unused dependencies (optional, low priority)
These packages are installed but appear unused in the current codebase:

| Package | Notes |
|---|---|
| `@stripe/react-stripe-js`, `@stripe/stripe-js` | Referenced in content copy only, no payment code |
| `@hello-pangea/dnd` | Drag-and-drop library — no usage found |
| `html2canvas`, `jspdf` | PDF export — no usage found |
| `react-leaflet`, `leaflet` | Maps — no usage found |
| `baseline-browser-mapping` | devDependency, purpose unclear |

Remove only after confirming nothing relies on them.

## Out of scope for this repo

The portal (`distinction-portal`) is a separate migration effort with its own plan. It shares no code with this repo.
