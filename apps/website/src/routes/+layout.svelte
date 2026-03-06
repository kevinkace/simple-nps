<script>
  import { page } from '$app/stores';
  import GdprNotification from '$lib/components/GdprNotification.svelte';
  import GTMLoader from '$lib/components/GTMLoader.svelte';

  const GTM_ID = 'GTM-T496R6FP';

  const navItems = [
    { href: '/', label: 'Home', path: '/' },
    { href: '/demo', label: 'Demo', path: '/demo' },
    { href: '/docs', label: 'Documentation', path: '/docs' },
    { href: '/legal', label: 'Privacy & Legal', path: '/legal' }
  ];
</script>

<svelte:head>
  <title>Simple NPS</title>
  <meta name="description" content="Simple NPS - Lightweight Net Promoter Score Script" />
</svelte:head>

<main>
  <nav>
    <h1>
      <a href="/">
        <img src="/logo.svg" alt="Simple NPS" class="logo" />
        Simple NPS
      </a>
    </h1>
    <ul>
      {#each navItems as item}
        <li><a href={item.href} class:active={$page.url.pathname === item.path}>{item.label}</a></li>
      {/each}
    </ul>
  </nav>
  <slot />
</main>

<GTMLoader gtmId={GTM_ID} />

<GdprNotification />

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

  nav a:hover {
    background-color: #f0f0f0;
    color: #333;
  }
</style>