# Fresh Eats — Landing Page

This is a small Next.js + Tailwind CSS landing page template for a fictional food delivery service called "Fresh Eats".

Tech stack:
- Next.js
- Tailwind CSS
- Vercel AI (v0) - scaffolded example (see `pages/api/generate.js`)

Quick start
1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open http://localhost:3000

Vercel deployment
1. Sign in to Vercel and create a new project linking this repository.
2. Set environment variables if you use Vercel AI (e.g., VERCEL_AI_KEY).
3. Deploy — Vercel will build the project automatically.

Notes
- The `@vercel/ai` dependency in `package.json` is a placeholder; replace with the official package version and follow Vercel docs for usage.
- Tailwind CSS is configured in `tailwind.config.js` and the global styles are in `styles/globals.css`.

Files of interest
- `pages/index.js` — page assembling components
- `components/` — Hero, Features, Testimonials, Contact, Footer
- `pages/api/generate.js` — sample API route for Vercel AI

License: MIT
