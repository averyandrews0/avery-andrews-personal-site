# Avery Andrews Personal Website

A clean personal website for Avery Andrews, built with Next.js, React, TypeScript, and Tailwind CSS. The site is configured for static export and GitHub Pages hosting.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- GitHub Pages via GitHub Actions

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Build the static site:

```bash
pnpm build
```

The exported site will be generated in `out/`.

## Replace Placeholder Content

Most editable content lives in `components/site-data.ts`.

Before publishing, update:

- any wording in the project, writing, or education arrays

Replace the resume PDF:

- Put the final resume at `public/resume.pdf`
- Keep the filename as `resume.pdf` unless you also update `links.resume`

## Reusable UI Components

The project now includes `components/ui/`, which is the conventional location
used by shadcn-compatible projects for reusable UI primitives. Keeping these
components there makes them easy to import and avoids mixing presentational
building blocks with page-specific sections. The project already uses Tailwind
CSS and TypeScript; no shadcn setup is required unless you want to add shadcn
components later.

## GitHub Pages Deployment

This repo includes `.github/workflows/deploy.yml`.

To publish:

1. Push the repo to GitHub on the `main` branch.
2. In GitHub, open **Settings > Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Run the `Deploy to GitHub Pages` workflow, or push another commit to `main`.

The site is configured for the custom domain `averyandrews.org`, so public assets use root-level paths such as `/resume.pdf`.

## Notes

- The theme control defaults to dark mode and remembers each visitor's light or dark preference.
- The site uses semantic sections and anchor navigation with smooth scrolling.
- Heavy animations are intentionally avoided for a more professional feel.
