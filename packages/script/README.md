# Simple NPS

A lightweight, configurable Net Promoter Score (NPS) built with Svelte that compiles to a single JavaScript. Data is sent to your own Google Analytics account.

## Features

- 📦 **Single Script Deployment** - A single JS file with 0 additional dependencies
- 🌐 **Internationalization** - Configurable text in multiple languages
- 📊 **Google Analytics** - Results are sent directly to your Google Analytics
- 🎨 **Customizable Theme** - Colors, styling, and branding options
- 📱 **Responsive Design** - Works on desktop and mobile
- ⚡ **Lightweight** - Minimal footprint, fast loading

## Minimal setup

1. set Google Analytics account  
```html
<script>
window.simpleNpsConfig = {
  gaId: "G-XXXXXXXXXX",
};
</script>
```
2. load from CDN
```html
<script src="https://cdn.jsdeliver.net/npm/simple-nps@1.0.0/dist/simple-nps.js">
```

## Customization

Here are the default options, all overridable.

```html
<script>
window.simpleNpsConfig = {
  gaId: "G-XXXXXXXXXX",
  i18n: {
    en: {
      intro: "How likely are you to recommend us?",
      notLikely: "Not at all likely",
      extremelyLikely: "Extremely likely",
      submitBtn: "Submit",
      thankYou: "Thank you for your feedback!",
      followUp: "Could you tell us why?"
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
</script>

Add a custom entry point.

```html
<div id="simple-nps"></div>
```

## Google Analytics Events

The automatically tracks these GA4 events:

- `nps_score`: When user submits rating (0-10)
- `nps_feedback`: When user submits follow-up text

Scores are automatically categorized:

- **Detractors**: 0-6 (Red)
- **Passives**: 7-8 (Yellow/Orange)
- **Promoters**: 9-10 (Green)


## Development

```bash
nvm use
npm install
npm run dev
```

### 2. Build for Production

```bash
npm run build
```

This generates `dist/simple-nps.iife.js` - a single file ready for deployment.
