## Implementation Plan

1. **Search Integration**
   - Add Pagefind during build; configure Astro to emit the search index and embed client UI.
   - Style the search trigger and results panel to match the tile aesthetic.

2. **CMS Enablement**
   - Configure Decap CMS: create `admin/` route, define collections for each content type, and set up GitHub OAuth app.
   - Customize previews for wiki pages, guides, and blog posts so editors can validate formatting.

3. **Content Expansion**
   - Backfill priority wiki topics, additional blog posts, and at least one more guide/mod list pair.
   - Replace placeholder copy and repo links with real data once available.

4. **GitHub Pages Deployment**
   - Author GitHub Actions workflow for linting, building, and deploying to the `gh-pages` branch.
   - Configure custom domain via Cloudflare (CNAME flattening or ALIAS) once GitHub Pages is live.
   - Document deployment steps (manual + automated) in the README.

5. **Contribution Workflow**
   - Finalize contributor docs covering branching, review expectations, and CMS usage.
   - Add templates for issues and pull requests aligned with the guidelines.

6. **Enhancements & Polish**
   - Optimize images (consider Git LFS if binaries grow) and audit for accessibility/responsiveness.
   - Introduce light performance monitoring (build stats, link checker) while keeping the no-analytics stance.
   - Explore future integrations (search analytics, API hooks) once static workflow proves stable.

