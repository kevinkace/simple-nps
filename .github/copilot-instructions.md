<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Simple NPS Monorepo

This is a monorepo containing two projects:
1. **Script Package** (`packages/script`): The original Svelte-based NPS widget that compiles to a single JavaScript file
2. **Website** (`apps/website`): A SvelteKit documentation and demo website for the NPS widget

### Monorepo Structure
```
simple-nps/
├── packages/
│   └── script/          # Original NPS script (npm package)
│       ├── dist/
│       │   └── simple-nps.iife.js  # Built single-file script
│       ├── src/
│       │   ├── App.svelte
│       │   ├── main.js
│       │   └── app.css
│       ├── test.html        # Test page for the script
│       └── package.json
└── apps/
    └── website/         # Documentation website
        ├── src/routes/
        │   ├── +page.svelte      # Homepage
        │   ├── demo/+page.svelte # Demo page
        │   └── docs/+page.svelte # Documentation
        └── package.json
```

### Current Issues
- ❌ **Build Failing**: Node.js version 20.10.0 is incompatible with current Vite version
- ❌ **Required**: Node.js 20.19+ or 22.12+ needed
- ❌ **SyntaxError**: `styleText` export from `node:util` not available in current Node.js version
- ❌ **Script Package**: Build process broken, dist file may be outdated

### Project Requirements (Script Package)
- Single script output with 0 external dependencies  
- Configurable via `window.simpleNpsConfig` global variable
- Svelte + plain CSS (no Tailwind or external frameworks)
- CSS and strings bundled into single IIFE JS file  
- Internationalization support
- Google Analytics integration
- Auto-initialization when script loads

### Configuration Example
```javascript
window.simpleNpsConfig = {
  gaId: "G-XXXXXXXXXX",
  i18n: {
    en: {
      intro: "How likely are you to recommend our service?",
      notLikely: "Not at all likely", 
      extremelyLikely: "Extremely likely",
      submitBtn: "Submit",
      thankYou: "Thank you for your feedback!",
      followUp: "What could we improve?"
    }
  },
  language: "en",
  theme: {
    primaryColor: "#007bff",
    backgroundColor: "#ffffff", 
    textColor: "#333333",
    borderRadius: "8px"
  },
  showFollowUp: true
};
```

### Usage
```html
<!-- Configure before loading script -->
<script>
window.simpleNpsConfig = { gaId: "G-XXXXXXXXXX" };
</script>

<!-- Load the script -->
<script src="./dist/simple-nps.iife.js"></script>

<!-- Script will auto-initialize or call manually -->
<script>
window.initSimpleNps(); // Manual initialization if needed
</script>
```

### Development Commands
```bash
# Install dependencies (requires Node.js 20.19+)
nvm use         # Switch to correct Node version
npm install     # Install all workspace dependencies

# Script package development
npm run dev:script      # Dev server for script package
npm run build:script    # Build script package only

# Website development  
npm run dev:website     # Dev server for website
npm run build:website   # Build website only

# Build all packages
npm run build          # Build both script and website
```

### Reference Links
- **Working Pre-Monorepo Version**: https://github.com/kevinkace/simple-nps
- **Original Build Output**: `dist/simple-nps.iife.js` (single file, no dependencies)
- **Test Page**: `packages/script/test.html`

### Migration Issues to Fix
1. **Node.js Version**: Upgrade to 20.19+ or 22.12+ for compatibility
2. **Dependencies**: Review Vite and Svelte plugin versions for compatibility  
3. **Build Process**: Ensure IIFE build still generates correctly
4. **Auto-initialization**: Verify script initializes automatically when loaded
5. **Testing**: Confirm test.html works with built script