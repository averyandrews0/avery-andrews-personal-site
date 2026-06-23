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

- `links.email` and `links.emailLabel`
- `links.linkedin` and `links.linkedinLabel`
- project links where `href: "#"` appears
- writing links where `href: "#"` appears
- any wording in the experience, project, writing, or resume summary arrays

Replace the resume PDF:

- Put the final resume at `public/resume.pdf`
- Keep the filename as `resume.pdf` unless you also update `links.resume`

Replace the photo placeholder:

- Add a professional headshot to `public/`
- Update `components/Hero.tsx` to render the image instead of the initials placeholder

## GitHub Pages Deployment

This repo includes `.github/workflows/deploy.yml`.

To publish:

1. Push the repo to GitHub on the `main` branch.
2. In GitHub, open **Settings > Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Run the `Deploy to GitHub Pages` workflow, or push another commit to `main`.

The workflow automatically handles the base path for normal project repos like `username/repo-name`. If you use a user site repo such as `username.github.io`, it builds without a base path.

## Notes

- The contact links are placeholders by request.
- The site uses semantic sections and anchor navigation with smooth scrolling.
- Heavy animations are intentionally avoided for a more professional feel.
