# DevSehn portfolio

A bilingual portfolio for software engineer Derik Sehn. Browse his web and
backend projects, experience, technical focus, and contact details. Built with
Next.js App Router, TypeScript, custom CSS, and a progressive WebGL signal
field in the home-page hero.

## Pages

- `/` and `/en` — Portuguese and English home pages
- `/work` and `/en/work` — project index
- `/work/eli-control` and `/work/eli-pecas` — case studies
- `/about` and `/contact` — profile and contact
- Equivalent English pages live under `/en`

The visual signal field appears only in the home-page hero. The previous Tools
pages and Lab route are not part of this portfolio.

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

To enable contact form delivery, copy `.env.example` to `.env.local` and set
the SMTP values. The form displays a clear error if email delivery is not
configured. Never expose SMTP credentials in client code.

## Design and accessibility

The signal-field shader is an abstract visual, not live equipment telemetry.
When WebGL is unavailable, reduced motion is enabled, or the field is offscreen,
the page keeps its static illustration and ordinary HTML navigation. The
case-study content remains a readable static page on every screen size.
