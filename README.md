# CampD Website

## Overview

CampD Nexus is the central launchpad for the CampD collective. It collects mod lists, detailed guides, blog updates, wiki knowledge, and shared repository links into a cohesive site that can be self-hosted or served from GitHub Pages.

- **Landing Page** – Tiles highlight the latest mod lists, wiki entries, and blog dispatches. Content is injected from structured JSON/Markdown so updates can flow through Git without touching layout code.
- **Game Hub** – Each game gets a dedicated overview page backed by `src/content/modLists/*` data. Visitors can scan required mods, optional add-ons, and jump to supporting guides. Authentication/editor flows are Git-based for now (Decap CMS coming later).
- **Guides** – Markdown-driven how-tos (e.g., Stellaris starter guide) rendered via Astro dynamic routes. Guides carry metadata such as version and tags to signal what’s current.
- **Wiki** – Knowledge base for operations, roles, and recurring tasks. Entries are Markdown files with frontmatter for summary, tags, and last-updated timestamps.
- **Blog** – Updates, retrospectives, and release notes organized by year. Posts can optionally include hero images and tags for filtering later.
- **Repositories** – Placeholder list of shared GitHub projects. Once real URLs and automation exist, the page can display status badges sourced from GitHub Actions.

The current content is seeded with representative placeholders so every navigation target renders. Swap in real Markdown/JSON files as contributors add material.

## Styling

### Overall Style
- Modern Flow
- Dark and light themes
- Blue accents on both
- Tile system for displaying links to posts/pages.
- The tile should be medium sized.
- The tile should be reactive to being moused over and clicked on.
- The tile will include a square image as an icon for whatever page it leads to.
- The tile will have a title, description, date and a little icon for displaying a tag (Mod-List, Guide, Blog, etc.).
- Tiles should be maintainable via structured content files (Markdown/JSON) so updates can be reviewed in Git.

### Functionality
- Most pages (wiki, blog, GitHub repositories, game pages) should be editable by trusted contributors through a Git-based workflow (pull requests or a Git-centric CMS).

## Technology Stack (Static GitHub Pages Plan)
- **Site Generator:** Astro 4 with Markdown/MDX support; chosen for its simple content model, partial hydration for interactive tiles, and excellent GitHub Pages integration.
- **Styling & UI:** Tailwind CSS plus a small set of shadcn/ui-inspired components adapted for Astro; dark/light themes handled with CSS variables and the `@astrojs/tailwind` plugin.
- **Content Storage:** Markdown for wiki, blog, and mod guides; JSON data files for tile metadata and mod lists, all versioned in `content/`.
- **Editing Workflow:** GitHub pull requests as the primary contribution path; Decap CMS added for a friendlier editor that authenticates via GitHub and commits directly to the repo.
- **Search:** Pagefind static index generated at build time to provide wiki-style search without external services.
- **Automation:** GitHub Actions to lint content, build Astro, and deploy to GitHub Pages on merge; scheduled workflow to rebuild search index if needed.
- **Media Assets:** Store images in the repo where feasible; for larger assets, use Git LFS or a CDN-backed bucket referenced in Markdown.
- **Extensibility:** If we later need dynamic features (live edits, user auth), we can bolt on a lightweight API (Cloudflare Workers/Supabase) while still serving the static site from GitHub Pages.

## Getting Started
- Prerequisites: Node.js 18+ and npm.
- Change into the project directory: `cd Site2025`
- Install dependencies: `npm install`
- Development server: `npm run dev -- --open` (launches Astro on `http://localhost:4321`)
- Build for production: `npm run build` (outputs static site to `dist/`)
- Preview production build: `npm run preview`
- Deployment target: GitHub Pages via workflow pushing contents of `dist/`
- Current wiki, blog, games, and repositories pages render seeded placeholders—swap the content files as collections expand.
- GitHub Pages: `.github/workflows/deploy.yml` builds on every push to `main` and deploys via Actions; after the first successful run, enable Pages in repository settings (source: GitHub Actions) and optionally wire the custom Cloudflare domain.

## Content Organization & Workflow
- `src/content/wiki/<slug>.md` for group knowledge entries; nest folders (e.g., `wiki/ops/field-guide.md`) to mirror hierarchy.
- `src/content/blog/<year>/<slug>.md` for blog posts with frontmatter (`title`, `summary`, `author`, `published`, optional `heroImage`).
- Blog detail pages render through `src/pages/blog/[year]/[slug].astro`, so keep blog entries organized by year folders.
- `src/content/guides/<slug>.md` for detailed mod guides, including `game`, `version`, and `tags`.
- `src/content/modLists/<game>.json` for structured mod lists (mods, maintainers, resources) consumed by guides and dashboards.
- `src/content/tiles/*.json` for landing-page tiles; each file holds title, description, URL, tag, icon, and display order.
- Shared images live under `public/assets/<category>/` with slug-based filenames (e.g., `/assets/blog/campd-nexus-hero.jpg`).
- Decap CMS collections map 1:1 to these directories so non-technical editors can modify Markdown/JSON; PRs generated by Decap get auto-labeled for review.

## Contribution Guidelines
- Use feature branches named `feature/<short-description>` for changes; Decap-generated branches follow `cms/<collection>/<slug>`.
- Every pull request targets `main`, must pass lint/build checks, and receives at least one approval from another contributor before merge.
- Keep content changes focused: one topic or page per PR, with clear summaries and checklist for media additions.
- Editorial style: write in neutral, wiki-friendly tone; use Markdown headings (`##`) max depth 3; include metadata (tags, dates) in frontmatter.
- Reviewers confirm links, formatting, and search index updates when relevant; maintainers merge via squash to keep history tidy.

## Domain & Legal Notes
- Configure Cloudflare DNS to point the custom domain to GitHub Pages; keep Cloudflare providing TLS and caching.
- Skip analytics/tracking by default to keep the site lightweight and privacy friendly.
- Adopt a permissive content license later if needed (e.g., Creative Commons); current plan keeps content proprietary until we decide otherwise.