# Dr Sobia Amjad Portfolio

Professional portfolio website for Dr Sobia Amjad, built with React, TypeScript, Vite and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run typecheck
npm run build
```

## GitHub Pages Deployment

Deployments are handled by `.github/workflows/deploy-pages.yml`.

On every push to `main`, GitHub Actions installs dependencies with `npm ci`, runs TypeScript checks, builds the Vite app, uploads the `dist` folder and deploys it to GitHub Pages.

The custom domain is configured in `public/CNAME`:

```txt
sobiaamjad.com
```

## Updating Portfolio Links and Content

Most portfolio content lives in `src/data/portfolio.ts`.

- Update the CV download link by replacing `CV_URL`.
- Update the LinkedIn link by replacing `LINKEDIN_URL`.
- Update the thesis link by replacing `THESIS_URL`.
- Edit projects in the `projects` array.
- Edit publications by updating `FEATURED_PUBLICATION_URL` and the Publications section copy in `src/components/Sections.tsx`.

Placeholder links are intentionally set to `#` until the final public URLs are available.
