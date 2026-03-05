<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let showNps = false;

  onMount(() => {
    // Load the script from packages/script
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      // In production, this would load from packages/script/dist/index.js
      // For demo purposes, we'll show a placeholder
      script.innerHTML = `
        // Demo placeholder - in production this would be packages/script/dist/index.js
        console.log('Simple NPS script loaded');
        window.initSimpleNps = function() {
          console.log('Demo: Simple NPS would show here');
          alert('Demo: This would show Simple NPS. In production, load the built script from packages/script/dist/index.js');
        };
      `;
      document.head.appendChild(script);
    }
  });

  function showDemo() {
    showNps = true;
    if (typeof window !== 'undefined' && window.initSimpleNps) {
      window.initSimpleNps();
    }
  }
</script>

<svelte:head>
  <title>Demo - Simple NPS</title>
  <meta name="description" content="Interactive demo of Simple NPS" />
</svelte:head>

<section class="demo">
  <h1>Interactive Demo</h1>
  <p>Try Simple NPS in action. In a real implementation, this would show the actual NPS.</p>


    <div class="demo-trigger">
      <h3>Try It Out</h3>
      <p>Click the button below to trigger Simple NPS:</p>
      <button on:click={showDemo} class="btn primary">Show Simple NPS</button>
    </div>

</section>

<style>
  .demo {
    max-width: 800px;
    margin: 0 auto;
  }

  .demo h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .demo > p {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }

  .demo-controls {
    margin-bottom: 3rem;
  }

  .config-section,
  .demo-trigger {
    margin-bottom: 2rem;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
  }

  .demo-trigger {
    text-align: center;
  }

  .demo-trigger p {
    margin-bottom: 1rem;
  }

  .btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;
  }

  .btn.primary {
    background-color: #0066cc;
    color: white;
  }

  .btn.primary:hover {
    background-color: #0052a3;
  }

  .implementation-notes {
    border-top: 1px solid #eee;
    padding-top: 3rem;
  }

  .note {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-left: 4px solid #0066cc;
    border-radius: 0 6px 6px 0;
  }

  .note h3 {
    margin: 0 0 1rem 0;
    color: #333;
  }

  .note p {
    margin-bottom: 1rem;
  }

  .note p:last-child {
    margin-bottom: 0;
  }

  pre {
    background-color: #fff;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    border: 1px solid #e9ecef;
    margin-top: 1rem;
  }

  code {
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.9rem;
  }

  h2 {
    margin-bottom: 2rem;
    color: #333;
  }

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
</style>