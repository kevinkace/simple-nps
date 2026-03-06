<script>
  import { onMount } from 'svelte';

  let showNps = false;
</script>

<svelte:head>
  <title>Demo - Simple NPS</title>
  <meta name="description" content="Interactive demo of Simple NPS" />

  <script src="https://unpkg.com/simple-nps@0.0.2/dist/simple-nps.iife.js"></script>
</svelte:head>

<section class="demo">
  <h1>Simple NPSDemo</h1>
  <p>Look in the bottom corner.</p>
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

  .demo p {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }
</style>