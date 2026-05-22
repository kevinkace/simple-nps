<svelte:head>
  <title>Simple NPS - Lightweight Net Promoter Score</title>
  <meta name="description" content="A lightweight, configurable Net Promoter Score (NPS) built with Svelte that compiles to a single JavaScript file. Data is sent to your own Google Analytics account." />
</svelte:head>

<section class="hero">
  <h1>Simple NPS</h1>

  <p>
    <strong>The simplest Net Promoter Score (NPS).</strong><br>
    Built with Svelte. Compiles to a single JavaScript file. Data is sent to your own Google Analytics account.
  </p>

  <div class="features">
    <div class="feature">
      <h3>📦 Single Script Deployment</h3>
      <p>A single JS file with 0 additional dependencies</p>
    </div>

    <div class="feature">
      <h3>⚡ Lightweight</h3>
      <p>Minimal footprint, fast loading</p>
    </div>

    <div class="feature">
      <h3>🌐 Internationalization</h3>
      <p>Configurable text in multiple languages</p>
    </div>

    <div class="feature">
      <h3>📊 Google Analytics</h3>
      <p>Results are sent directly to your Google Analytics</p>
    </div>

    <div class="feature">
      <h3>🎨 Customizable Theme</h3>
      <p>Colors, styling, and branding options</p>
    </div>

    <div class="feature">
      <h3>📱 Responsive Design</h3>
      <p>Works on desktop and mobile</p>
    </div>
  </div>

  <div class="cta">
    <a href="/demo" class="btn primary">Try Demo/playground</a>
  </div>
</section>

<section class="quickstart">
  <h2>Quick Start</h2>

  <p>1. set the config</p>

  <pre><code>{`<script>
  window.simpleNpsConfig = { gaId : "G-123123123" };
</script>`}</code></pre>

  <p>2. add the script</p>

  <pre><code>{`<script src="https://cdn.jsdelivr.net/npm/simple-nps@0.0.5/dist/simple-nps.js"></script>`}</code></pre>
</section>

<section id="customization">
  <h2>Customization</h2>

  <p>Configure text, colors, and behavior through the global config object.</p>

  <pre><code>{`<script>
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
</script>`}</code></pre>

  <p>Add an optional custom entry point.</p>

  <pre><code>{`<div id="simple-nps"></div>`}</code></pre>
</section>

<section id="data-collection">
  <h2>Data Collection</h2>

  <p>Data is sent to your Google Analytics account using the gtag event tracking. Events include:</p>

  <ul>
    <li><code>nps_score</code>: When user submits rating (0-10)</li>
    <li><code>nps_feedback</code>: When user submits follow-up text, includes the NPS rating</li>
    <li><code>nps_dismissed</code>: When user closes the form without submitting feedback</li>
  </ul>


  <p>Scores are automatically categorized:</p>

  <ul>
    <li><strong>Detractors</strong>: 0-6 (Red)</li>
    <li><strong>Passives</strong>: 7-8 (Yellow/Orange)</li>
    <li><strong>Promoters</strong>: 9-10 (Green)</li>
  </ul>

  <p>You can view the collected data in your Google Analytics dashboard under the "Events" section.</p>
</section>

<style>
  .hero {
    text-align: center;
    padding: 2rem 0;
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .hero p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .feature {
    text-align: left;
  }

  .feature h3 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.1rem;
  }

  .feature p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn.primary {
    background-color: #007bff;
    color: white;
  }

  .btn.primary:hover {
    background-color: #0056b3;
  }

  section {
    padding: 2rem 0;
    max-width: 800px;
    margin: 0 auto;
  }

  section:not(.hero) {
    border-top: 1px solid #c0c0c0;
  }

  h2 {
    margin-bottom: 2rem;
    color: #333;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  pre {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 6px;
    overflow-x: auto;
    border: 1px solid #e9ecef;
    margin: 1rem 0;
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

  p {
    margin: 1rem 0;
    color: #444;
    line-height: 1.6;
  }
</style>