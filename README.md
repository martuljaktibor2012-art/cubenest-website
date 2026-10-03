# cubenest-website
Minecraft Hosting Website Guide

## Deployment

This repository currently contains a static coming-soon page in `public/index.html`.
Netlify publishes the `public` directory directly using `netlify.toml`; no npm
installation or build command is required. This overrides the previous site
settings, which attempted to run `npm run build` and publish `dist` even though
the repository had no `package.json` or application source files.

To preview the page locally, run `netlify dev --port 8889`.
Replace the coming-soon page with the full website when its source is available.
