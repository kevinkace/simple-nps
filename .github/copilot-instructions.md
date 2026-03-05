<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Simple NPS Project

This is a Svelte-based Net Promoter Score (NPS) that compiles to a single JavaScript file.

### Project Requirements
- Single script output, 0 dependencies
- Configurable via window.simpleNpsConfig global variable
- Svelte + plain CSS (no Tailwind)
- CSS and strings bundled into single JS file
- Internationalization support
- Google Analytics integration

### Configuration Example
```javascript
window.simpleNpsConfig = {
  gaId: "G-209jf",
  i18n: {
    en: {
      intro: "What do you think about my app?"
    }
  }
}
```

### Progress Tracker
- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements
- [x] Scaffold the Project
- [x] Customize the Project - NPS component created with configuration system
- [x] Install Required Extensions - No extensions required for this project type
- [x] Compile the Project - Run `nvm use && npm install && npm run build` to generate single JS file
- [x] Create and Run Task - Build task created, requires Node.js v20.19+
- [x] Launch the Project - Development server available via `npm run dev`
- [x] Ensure Documentation is Complete - Added Node.js requirements and nvm usage