# karambaroud.github.io

My personal portfolio, live at [karambaroud.github.io](https://karambaroud.github.io).

I built this with **Next.js (static export)**, **TypeScript**, and **Tailwind CSS**. It deploys to GitHub Pages through GitHub Actions on every push to `main`.

## How it's organized

The whole site follows one rule: **content is data, components are presentation.**

```
data/content.json     <- all site content lives here (single source of truth)
lib/content.ts        <- TypeScript types + typed export of the JSON
app/layout.tsx        <- shared shell: fonts, metadata/OG tags, nav, footer
app/page.tsx          <- composes the sections
components/           <- each section maps over content.json; nothing hardcoded
public/               <- headshot, resume PDF, wordle project, .nojekyll
.github/workflows/    <- build + deploy to GitHub Pages
```

The nav, header, and footer exist exactly once in the shared layout. My old site had them copy-pasted into every page, and I'm not doing that again.

## Updating content

I edit `data/content.json`, commit, and push. The site rebuilds and deploys on its own. I never need to touch a component to change content.

- **Adding a project:** append an object to `projects`. The shape is defined by the `Project` type in `lib/content.ts`: title, description, `tags` (`ML`, `Embedded`, `Full-Stack`, `Computer Vision`, `Game Dev`), `tech`, `links.github` / `links.live` (both optional), `image`, `year`.
- **Project screenshots:** drop the image in `public/projects/` and set the project's `image` field to `"/projects/<file>.png"`. Anything with `image: null` gets a styled placeholder.
- **Adding a job:** append to `experience` (see the `Experience` type).
- **Skills / education / impact stats / hero copy:** edit the matching key.

The resume button points at `public/resume.pdf`, so replacing that file updates the download.

## Running locally

```bash
npm install
npm run dev      # dev server at localhost:3000
npm run build    # static export to out/
```

## Deployment

`.github/workflows/deploy.yml` builds the static export and publishes it with `actions/deploy-pages`. Pages is configured with **GitHub Actions** as the source.
