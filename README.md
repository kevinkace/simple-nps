# Simple NPS

**The simplest Net Promoter Score (NPS).**  
Built with Svelte. Compiles to a single JavaScript file. NPS results are sent to your own Google Analytics account.

[https://simplenps.site](https://simplenps.site)


## Features

- 📦 **Single Script Deployment** - A single JS file with 0 additional dependencies
- 🌐 **Internationalization** - Configurable text in multiple languages
- 📊 **Google Analytics** - Results are sent directly to your Google Analytics
- 🎨 **Customizable Theme** - Colors, styling, and branding options
- 📱 **Responsive Design** - Works on desktop and mobile
- ⚡ **Lightweight** - Minimal footprint, fast loading


## Minimal setup

1. set config
```html
<script>
window.simpleNpsConfig = { gaId : "G-123123123" };
</script>
```
2. load the script
```html
<script src="https://cdn.jsdeliver.net/npm/simple-nps@0.0.5/dist/simple-nps.js">
```


## Customization

Here is the default configuration.

```html
<script>
window.simpleNpsConfig = {
  storageKey: 'nps_survey_completed',
  i18n: {
    en: {
      intro: "How likely are you to recommend us?",
      notLikely: "Not likely",
      extremelyLikely: "Extremely likely",
      submitBtn: "Submit",

      thankYou: "Thank you for your feedback!",

      followUp: "Could you tell us why?",
      followUpPlaceholder: "Your feedback helps us improve...",
      followUpSubmit: "Submit feedback",
      followUpSkip: "Skip",

      close: "Close"
    }
  },
  language: 'en',
  theme: {
    primaryColor: '#007bff',
    backgroundColor: '#ffffff',
    textColor: '#333333',
    borderRadius: '8px'
  },
  showFollowUp: false,
  delay: 1000,
  thankYouDuration: 1500
};
</script>
```

Add an optional custom entry point.

```html
<div id="simple-nps"></div>
```


## Google Analytics Events

The automatically tracks these GA4 events:

- `nps_score`: When user submits rating (0-10)
- `nps_feedback`: When user submits follow-up text, includes the NPS rating
- `nps_dismissed`: When user closes the form without submitting feedback

Scores are automatically categorized:

- **Detractors**: 0-6 (Red)
- **Passives**: 7-8 (Yellow/Orange)
- **Promoters**: 9-10 (Green)

You can view the collected data in your Google Analytics dashboard under the "Events" section.


## Monorepo Structure

```
./packages/script/ # publishable NPS script package
./apps/website/    # SvelteKit docs + demo site
```
