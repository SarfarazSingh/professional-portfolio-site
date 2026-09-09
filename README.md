# Sarfaraz Singh Wahad — Portfolio

An evidence-led, dual-track professional portfolio for AI and digital transformation roles as well as engineering and mission-critical systems leadership.

## Experience

The portfolio is organised around one career trajectory:

- **Operate** — technical operations and nuclear-safety leadership in the Indian Navy Submarine Service
- **Transform** — enterprise GenAI, automation, and architecture programmes at PwC
- **Build** — AI products and ventures including TrackSense AI and UP-ON.AI

Recruiters can select either career lens on the homepage or use the dedicated `/recruiter` briefing route to match evidence and CVs to a hiring mandate.

The homepage also includes an opt-in ElevenLabs voice guide. It uses the
allowlisted public agent ID in the browser; the ElevenLabs API key is used only
to provision the agent and is never committed or sent to visitors.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43127](http://localhost:43127).

For a production check:

```bash
npm run lint
npm run build
npm start
```

## Content and verification

Profile, chronology, projects, and writing are maintained as typed data under `content/`. Case studies explicitly distinguish public evidence, self-reported programme outcomes, planned product targets, and confidential details.

Before a public deployment, set `NEXT_PUBLIC_SITE_URL` to the canonical production origin so metadata, the sitemap, and robots file use the final domain.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui foundation
- Static rendering with small client islands for filters, themes, and recruiter views

## Accessibility

The site includes semantic landmarks, keyboard-operable controls, visible focus states, reduced-motion handling, responsive layouts, print styles, and light/dark themes.

## Permanent production (Vercel + GitHub Pages)

Vercel is the primary production host. GitHub Pages is the static fallback and deploys automatically from `main` via `.github/workflows/github-pages.yml`.

### Vercel

1. Push this repository to GitHub.
2. Open [vercel.com/new](https://vercel.com/new), import the GitHub repo, keep the Next.js defaults, and deploy **Production**.
3. Set `NEXT_PUBLIC_SITE_URL` to the Vercel domain (or your custom domain) and redeploy.

### GitHub Pages

After the GitHub repo exists:

1. Settings → Pages → Source: **GitHub Actions**.
2. Push to `main` (or run the **Deploy to GitHub Pages** workflow).
3. The site will be at `https://<github-user>.github.io/professional-portfolio-site/`.

The Pages build uses `output: "export"` only when `GITHUB_PAGES=true`. Local and Vercel builds keep the normal Next.js server output.
