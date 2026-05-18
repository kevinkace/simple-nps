# Simple NPS Monorepo

This repository contains the Simple NPS script package and website.

- Website: https://simplenps.site
- Script package docs (canonical): packages/script/README.md

## Monorepo Structure

```
simple-nps/
|- packages/
|  |- script/        # publishable NPS script package
|- apps/
|  |- website/       # SvelteKit docs + demo site
```

## Where Docs Live

- `./README.md` (this file): workspace and contributor guide
- `./packages/script/README.md`: script usage, configuration, events, and testing
- `./apps/website`: public docs + demo experience

## Development

```bash
nvm use
npm install
```

Run script package in dev mode:

```bash
npm run dev:script
```

Run website in dev mode:

```bash
npm run dev:website
```

Build script package only:

```bash
npm run build:script
```

Build website only:

```bash
npm run build:website
```

Build everything:

```bash
npm run build
```

## Testing

Run script package Playwright tests:

```bash
cd packages/script
npx playwright install chromium
npm run test:e2e
```

## Publishing And Usage

For package usage, CDN snippet, and full configuration reference, use:

- `./packages/script/README.md`
