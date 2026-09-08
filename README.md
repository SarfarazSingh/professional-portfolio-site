# Sarfaraz Singh Wahad — Portfolio

An evidence-led, dual-track professional portfolio for AI and digital transformation roles as well as engineering and mission-critical systems leadership.

## Experience

The portfolio is organised around one career trajectory:

- **Operate** — technical operations and nuclear-safety leadership in the Indian Navy Submarine Service
- **Transform** — enterprise GenAI, automation, and architecture programmes at PwC
- **Build** — AI products and ventures including TrackSense AI and UP-ON.AI

Recruiters can select either career lens on the homepage or use the dedicated `/recruiter` briefing route to match evidence and CVs to a hiring mandate.

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

## Permanent production (Vercel)

You do not need a local copy if you already have the code on GitHub. Vercel should import that GitHub repo. GitHub Pages is a weaker fit for this Next.js app because it needs a static export and cannot run the Open Graph image route.

### Fastest path: GitHub → Vercel

1. Create an empty GitHub repository (for example `professional-portfolio-site`).
2. Push this codebase to `main`.
3. Open [vercel.com/new](https://vercel.com/new), import that GitHub repo, keep the Next.js defaults, and deploy **Production**.
4. Set `NEXT_PUBLIC_SITE_URL` to the Vercel domain (or your custom domain) and redeploy.

After that, every push to `main` publishes production automatically.

### If the code is still only on Origin

```bash
curl -fsSL https://downloads.cursor.com/origin/install.sh | sh
origin auth login
origin repo clone sarfaraz-wahad/professional-portfolio-site
cd professional-portfolio-site
git remote add github git@github.com:<your-github-user>/professional-portfolio-site.git
git push -u github main
```

Then import that GitHub repo in Vercel as above.

Do not use GitHub Pages unless you later convert the project to `output: "export"`. Keep Vercel as the production host.
