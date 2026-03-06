<svelte:head>
  <title>Simple NPS - Lightweight Net Promoter Score</title>
  <meta name="description" content="A lightweight, configurable Net Promoter Score (NPS) built with Svelte that compiles to a single JavaScript file. Data is sent to your own Google Analytics account." />
</svelte:head>

<section class="hero">
  <h1>Simple NPS</h1>
  <p>A lightweight, configurable Net Promoter Score (NPS) built with Svelte that compiles to a single JavaScript file. Data is sent to your own Google Analytics account.</p>

  <div class="features">
    <div class="feature">
      <h3>📦 Single Script Deployment</h3>
      <p>A single JS file with 0 additional dependencies</p>
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

    <div class="feature">
      <h3>⚡ Lightweight</h3>
      <p>Minimal footprint, fast loading</p>
    </div>
  </div>

  <div class="cta">
    <a href="/demo" class="btn primary">Try Demo</a>
    <a href="/docs" class="btn secondary">View Documentation</a>
  </div>
</section>

<section class="setup">
  <h2>Minimal Setup</h2>

  <h3>1. Set Google Analytics Account</h3>
  <pre><code>{`<script>
window.simpleNpsConfig = {
  gaId: "G-XXXXXXXXXX",
};
</script>`}</code></pre>

  <h3>2. Load from CDN</h3>
  <pre><code>{`<script src="https://cdn.jsdelivr.net/npm/simple-nps@0.0.2/dist/simple-nps.js"></script>`}</code></pre>
</section>

<section class="customization">
  <h2>Customization</h2>

  <p>Here are the default options, all overridable:</p>

  <pre><code>{`<script>
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
</script>`}</code></pre>

  <h3>Add a Custom Entry Point</h3>
  <pre><code>{`<div id="simple-nps"></div>`}</code></pre>
</section>

<section class="analytics">
  <h2>Google Analytics Events</h2>

  <p>The script automatically tracks these GA4 events:</p>

  <ul>
    <li><strong>nps_score</strong>: When user submits rating (0-10)</li>
    <li><strong>nps_feedback</strong>: When user submits follow-up text</li>
  </ul>

  <p>Scores are automatically categorized:</p>

  <ul>
    <li><strong>Detractors</strong>: 0-6 (Red)</li>
    <li><strong>Passives</strong>: 7-8 (Yellow/Orange)</li>
    <li><strong>Promoters</strong>: 9-10 (Green)</li>
  </ul>
</section>

<section class="development">
  <h2>Development</h2>

  <h3>1. Setup</h3>
  <pre><code>nvm use
npm install
npm run dev</code></pre>

  <h3>2. Build for Production</h3>
  <pre><code>npm run build</code></pre>

  <p>This generates <code>dist/simple-nps.iife.js</code> - a single file ready for deployment.</p>
  <p>Host this file on your CDN and load it in your website.</p>
</section>

<style>
  .hero {
    text-align: center;
    padding: 4rem 0;
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .feature {
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
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

  .btn.secondary {
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
  }

  .btn.secondary:hover {
    background-color: #007bff;
    color: white;
  }

  section {
    padding: 3rem 0;
    max-width: 800px;
    margin: 0 auto;
  }

  section:not(.hero) {
    border-top: 1px solid #eee;
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

  ul {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #444;
  }

  p {
    margin: 1rem 0;
    color: #444;
    line-height: 1.6;
  }
</style>