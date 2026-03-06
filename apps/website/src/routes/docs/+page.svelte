<svelte:head>
  <title>Documentation - Simple NPS</title>
  <meta name="description" content="Complete documentation for Simple NPS including configuration, integration, and customization options." />
</svelte:head>

<article class="docs">
  <h1>Documentation</h1>

  <nav class="toc">
    <h2>Table of Contents</h2>
    <ul>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#configuration">Configuration</a></li>
      <li><a href="#internationalization">Internationalization</a></li>
      <li><a href="#analytics">Analytics Integration</a></li>
      <li><a href="#customization">Customization</a></li>
      <li><a href="#api">API Reference</a></li>
      <li><a href="#gtm-integration">Easy to use with Google Tag Manager</a></li>
    </ul>
  </nav>

  <section id="installation">
    <h2>Installation</h2>

    <h3>Direct Include</h3>
    <pre><code>{`<script src="https://your-domain.com/packages/script/dist/index.js"></script>`}</code></pre>

    <h3>Build from Source</h3>
    <pre><code>git clone https://github.com/your-username/simple-nps
cd simple-nps/packages/script
npm install
npm run build</code></pre>

    <p>The built file will be in <code>packages/script/dist/index.js</code>.</p>
  </section>

  <section id="configuration">
    <h2>Configuration</h2>

    <p>Configure the script by setting <code>window.simpleNpsConfig</code> before calling <code>initSimpleNps()</code>:</p>

    <pre><code>{`window.simpleNpsConfig = {// Google Analytics 4 Measurement ID (optional)
  gaId: "G-YOUR-MEASUREMENT-ID",

  // Internationalization settings
  i18n: {
    en: {
      intro: "How likely are you to recommend us to a friend or colleague?",
      followUp: {
        detractor: "Sorry to hear that. What could we improve?",
        passive: "Thanks for the feedback. What would make this better?",
        promoter: "Great! What do you love most about our service?"
      },
      placeholder: "Tell us more...",
      submit: "Submit",
      thankYou: "Thank you for your feedback!"
    }
  },

  // Default language (defaults to 'en')
  defaultLanguage: "en",

  // Custom styling (optional)
  customCSS: "
    .simple-nps-container {
      /* Your custom styles */
    }
  "
};`}</code></pre>
  </section>

  <section id="internationalization">
    <h2>Internationalization</h2>

    <p>The script supports multiple languages. Add language objects to the <code>i18n</code> configuration:</p>

    <pre><code>{`window.simpleNpsConfig = {
  i18n: {
    en: {
      intro: "How likely are you to recommend us?",
      followUp: {
        detractor: "What could we improve?",
        passive: "What would make this better?",
        promoter: "What do you love most?"
      },
      placeholder: "Tell us more...",
      submit: "Submit",
      thankYou: "Thank you for your feedback!"
    },
    es: {
      intro: "¿Qué probabilidad hay de que nos recomiendes?",
      followUp: {
        detractor: "¿Qué podríamos mejorar?",
        passive: "¿Qué haría que esto fuera mejor?",
        promoter: "¿Qué es lo que más te gusta?"
      },
      placeholder: "Cuéntanos más...",
      submit: "Enviar",
      thankYou: "¡Gracias por tu comentario!"
    },
    fr: {
      intro: "Quelle est la probabilité que vous nous recommandiez?",
      followUp: {
        detractor: "Que pourrions-nous améliorer?",
        passive: "Qu'est-ce qui rendrait cela meilleur?",
        promoter: "Qu'aimez-vous le plus?"
      },
      placeholder: "Dites-nous en plus...",
      submit: "Soumettre",
      thankYou: "Merci pour vos commentaires!"
    }
  },
  defaultLanguage: "en"
};`}</code></pre>

    <p>The script will use the browser's language if available, otherwise fall back to the default language.</p>
  </section>

  <section id="analytics">
    <h2>Analytics Integration</h2>

    <p>The script integrates with Google Analytics 4 to track NPS events:</p>

    <h3>Automatic Events</h3>
    <ul>
      <li><strong>nps_score_selected</strong> - When user selects a score (0-10)</li>
      <li><strong>nps_feedback_submitted</strong> - When user submits feedback text</li>
      <li><strong>nps_dismissed</strong> - When user closes the NPS</li>
    </ul>

    <h3>Event Parameters</h3>
    <pre><code>{`// Example: nps_score_selected event
gtag('event', 'nps_score_selected', {
  'score': 9,
  'category': 'promoter', // 'detractor', 'passive', or 'promoter'
  'custom_parameter_1': 'value'
});`}</code></pre>

  </section>

  <section id="customization">
    <h2>Customization</h2>

    <h3>CSS Styling</h3>
    <p>The script includes default styles, but you can override them:</p>

    <pre><code>{`/* Target the container */
.Simple-nps {
  font-family: 'Your Custom Font';
  border-radius: 12px;
}

/* Style the score buttons */
.simple-nps-container .score-button {
  background-color: #your-color;
  border-radius: 8px;
}

/* Style the selected score */
.simple-nps-container .score-button.selected {
  background-color: #selected-color;
}

/* Style the feedback textarea */
.simple-nps-container .feedback-textarea {
  border: 2px solid #your-border-color;
}`}</code></pre>

    <h3>Positioning</h3>
    <p>The script uses absolute positioning by default. Key CSS classes:</p>

    <ul>
      <li><code>.simple-nps-container</code> - Main container</li>
      <li><code>.simple-nps-overlay</code> - Background overlay</li>
      <li><code>.simple-nps-content</code> - Content container</li>
      <li><code>.simple-nps-score-buttons</code> - Score button container</li>
      <li><code>.simple-nps-score-button</code> - Individual score buttons</li>
    </ul>
  </section>

  <section id="api">
    <h2>API Reference</h2>

    <h3>initSimpleNps()</h3>
    <p>Initializes and shows the NPS script.</p>

    <pre><code>// Basic usage
initSimpleNps();

// The function does not take parameters -
// use window.simpleNpsConfig for configuration</code></pre>

    <h3>Configuration Object</h3>

    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>gaId</code></td>
          <td>string</td>
          <td><code>null</code></td>
          <td>Google Analytics 4 Measurement ID</td>
        </tr>
        <tr>
          <td><code>i18n</code></td>
          <td>object</td>
          <td>English only</td>
          <td>Language strings for internationalization</td>
        </tr>
        <tr>
          <td><code>defaultLanguage</code></td>
          <td>string</td>
          <td><code>"en"</code></td>
          <td>Fallback language code</td>
        </tr>
        <tr>
          <td><code>customCSS</code></td>
          <td>string</td>
          <td><code>""</code></td>
          <td>Custom CSS to inject</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="gtm-integration">
    <h2>Google Tag Manager Integration</h2>

    <h3>Step 1: Upload the Script</h3>
    <p>Upload the built script from <code>packages/script/dist/index.js</code> to your website and note the URL.</p>

    <h3>Step 2: Create GTM Variables</h3>
    <p>Create variables in GTM for configuration:</p>

    <ul>
      <li><strong>GA Measurement ID</strong> - Your Google Analytics 4 ID</li>
      <li><strong>NPS Trigger Condition</strong> - When to show the script</li>
    </ul>

    <h3>Step 3: Create Custom HTML Tag</h3>
    <pre><code><script src="https://your-domain.com/packages/script/dist/index.js"></script>
{`<script>
window.simpleNpsConfig = {
  gaId: "${'{{'}GA Measurement ID${'}}'}", // GTM variable
  i18n: {
    en: {
      intro: "How likely are you to recommend us?",
      followUp: {
        detractor: "What could we improve?",
        passive: "What would make this better?",
        promoter: "What do you love most?"
      },
      placeholder: "Tell us more...",
      submit: "Submit",
      thankYou: "Thank you for your feedback!"
    }
  }
};

// Show the NPS
initSimpleNps();
</script>`}</code></pre>

    <h3>Step 4: Configure Triggers</h3>
    <p>Set up triggers based on your needs:</p>

    <ul>
      <li><strong>Page View</strong> - Show on specific pages</li>
      <li><strong>Timer</strong> - Show after user spends time on site</li>
      <li><strong>Scroll Depth</strong> - Show after user scrolls</li>
      <li><strong>Custom Event</strong> - Show based on user actions</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Don't show the NPS immediately - wait for user engagement</li>
      <li>Use frequency capping to avoid annoying users</li>
      <li>Consider mobile vs desktop display preferences</li>
      <li>Test thoroughly before deploying to production</li>
    </ul>
  </section>
</article>

<style>
  .docs {
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .docs h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .toc {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 3rem;
    border: 1px solid #e9ecef;
  }

  .toc h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #333;
  }

  .toc ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .toc li {
    margin-bottom: 0.5rem;
  }

  .toc a {
    text-decoration: none;
    color: #0066cc;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    display: block;
    transition: background-color 0.2s;
  }

  .toc a:hover {
    background-color: #e3f2fd;
  }

  section {
    margin-bottom: 4rem;
    padding-top: 2rem;
  }

  section:target {
    border-top: 3px solid #0066cc;
    padding-top: 2rem;
  }

  h2 {
    color: #333;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #eee;
  }

  h3 {
    color: #444;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  pre {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 6px;
    overflow-x: auto;
    border: 1px solid #e9ecef;
    margin: 1.5rem 0;
  }

  code {
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.9rem;
  }

  :not(pre) > code {
    background-color: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    border: 1px solid #e9ecef;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    overflow: hidden;
  }

  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e9ecef;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #333;
  }

  tr:last-child td {
    border-bottom: none;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 1rem 0;
    color: #444;
  }

  a {
    color: #0066cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>