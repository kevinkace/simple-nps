# Simple NPS

## Development

```bash
nvm use
npm install
npm run build
```

This generates `dist/simple-nps.iife.js` - a single file ready for deployment.

## End-to-End Testing

Run Playwright tests for the script package:

```bash
npx playwright install chromium
npm run test:e2e
```

Playwright will build the script package, start a local preview server, and run browser tests against `test.html`.
