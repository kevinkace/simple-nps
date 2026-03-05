<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<main>
  <nav>
    <h1>
      <a href="{base}/">
        <img src="{base}/logo.svg" alt="Simple NPS" class="logo" />
        Simple NPS
      </a>
    </h1>
    <ul>
      <li><a href="{base}/" class:active={$page.url.pathname === base + '/'}>Home</a></li>
      <li><a href="{base}/demo" class:active={$page.url.pathname === base + '/demo'}>Demo</a></li>
      <li><a href="{base}/docs" class:active={$page.url.pathname === base + '/docs'}>Documentation</a></li>
    </ul>
  </nav>
  <slot />
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    font-family: system-ui, -apple-system, sans-serif;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
  }

  nav h1 {
    margin: 0;
  }

  nav h1 a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo {
    width: 32px;
    height: 32px;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  nav a {
    text-decoration: none;
    color: #666;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  nav a:hover,
  nav a.active {
    background-color: #f0f0f0;
    color: #333;
  }
</style>