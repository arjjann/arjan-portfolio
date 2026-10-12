# Arjan Bista — Mechanical Engineering Portfolio

A responsive Next.js portfolio starter inspired by the supplied reference screenshot. Built with Next.js App Router, TypeScript, CSS and Lucide icons. Includes a filterable project grid, project detail modals, mechanical design gallery, about/education, experience timeline, skills, resume CTA and contact links.

## Run locally

Requirements: Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize before publishing

1. In `app/page.tsx`, replace the sample project image URLs with your own competition photos, clay-printer photos, CAD renders and simulation screenshots. The current images are placeholders.
2. Replace `arjan.bista@example.com` with your real email.
3. Replace the LinkedIn and GitHub links with your profile URLs.
4. Add your CV as `public/Arjan-Bista-CV.pdf` (the resume link points to this path).
5. Review project wording and keep only claims/results that match your own work.
6. For an interactive CAD model, export the assembly from CAD as `.glb`/`.gltf` and use Three.js / React Three Fiber to load it. Native CAD files can be offered as downloads separately where appropriate.

## Main files

- `app/page.tsx` — page content, project data, filtering and detail modal.
- `app/globals.css` — responsive visual design and layout.
- `app/layout.tsx` — metadata and root layout.
- `public/models/` — suggested place for web-ready 3D model assets.

## Deploy

Push the project to GitHub and import it into Vercel, or build and host it on any Node.js-compatible platform.
