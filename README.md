# Arjan Bista — Mechanical Engineering Portfolio

A responsive Next.js portfolio converted for static hosting on GitHub Pages. It uses Next.js App Router, TypeScript, CSS and Lucide icons, and includes a filterable project grid, project detail modals, mechanical design gallery, about/education, experience timeline, skills and contact links.

## Run locally

Requirements: Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for GitHub Pages

```bash
npm ci
npm run build:github-pages
```

The static website is generated in `out/`. The included GitHub Actions workflow builds and deploys the site automatically whenever you push to `main`.

## Enable GitHub Pages

1. Push this project to the GitHub repository named `arjan-portfolio` under your account.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main` (or manually run the workflow under **Actions**) and wait for the deployment to finish.
5. Your site URL will be `https://<your-github-username>.github.io/arjan-portfolio/`.

The base path in `next.config.mjs` is set for a repository named `arjan-portfolio`. If you rename the repository, update `repositoryName` in that file.

## Personalize before publishing

1. In `app/page.tsx`, replace the sample project image URLs with your own competition photos, clay-printer photos, CAD renders and simulation screenshots. Current images are placeholders hosted on Unsplash.
2. Replace `arjan.bista@example.com` with your real email.
3. Replace the LinkedIn and GitHub links with your actual profile URLs.
4. Add your CV at `public/Arjan-Bista-CV.pdf`. The resume link points to this file; until you add it, the CV link will not work.
5. Review project wording and keep only claims/results that match your own work.
6. For an interactive CAD model, export the assembly from CAD as `.glb`/`.gltf` and add web-ready model assets under `public/models/`.

## Main files

- `app/page.tsx` — page content, project data, filtering and detail modal.
- `app/globals.css` — responsive design and layout.
- `app/layout.tsx` — metadata and root layout.
- `public/models/` — suggested place for web-ready 3D model assets.
- `.github/workflows/deploy.yml` — automatic GitHub Pages deployment.
