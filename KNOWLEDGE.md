## Quick Facts
- Project: CampD Website (`Site2025`)
- Key pages: Main landing, game mod list/guide, GitHub repositories, blog posts, wiki.

## Recent Updates
- Astro project scaffolded with Tailwind integration, base layout, header/footer, and theming utilities.
- Seeded `src/content` collections (wiki, blog, guides, modLists, tiles) and wired homepage cards/feeds to live data.
- Added wiki/blog/game repo pages & dynamic routes with placeholder copy; PLAN now focuses on search, CMS, content expansion, deployment, contributions, and polish.
- Added GitHub Actions workflow (`.github/workflows/deploy.yml`) and README note for GitHub Pages deployment flow.
- Added reminder in `README.md` to run npm commands from the project root (`Site2025`) before installing or building.
- Blog detail routing updated to `src/pages/blog/[year]/[slug].astro` to support year-based directories in `src/content/blog/`.

