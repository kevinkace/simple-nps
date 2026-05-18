<svelte:head>
  <title>Demo - Simple NPS</title>
  <meta name="description" content="Interactive demo of Simple NPS" />

  <script src="https://unpkg.com/simple-nps@0.0.5/dist/simple-nps.iife.js" defer></script>
</svelte:head>

<div class="flex">
  <h1>Simple NPSDemo</h1>
  <p>Look in the bottom corner.</p>

  <button onclick={() => window.nps.init()} class="btn secondary">
    Re-initialize NPS
  </button>
</div>

<style>
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 3rem;
  }
</style>