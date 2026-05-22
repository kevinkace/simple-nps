<script>
  import '../app.css';
  import { page } from '$app/stores';
  import GdprNotification from '$lib/components/GdprNotification.svelte';
  import GTMLoader from '$lib/components/GTMLoader.svelte';

  const GTM_ID = 'GTM-T496R6FP';

  const navItems = [
    { href: '/demo', label: 'Demo', path: '/demo' },
    { href: '/legal', label: 'Privacy & Legal', path: '/legal' }
  ];

  let isMenuOpen = false;

  $: if ($page.url.pathname) {
    isMenuOpen = false;
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<svelte:head>
  <title>Simple NPS</title>
  <meta name="description" content="Simple NPS - Lightweight Net Promoter Score Script" />
</svelte:head>

<div>
  <nav class="fixed">
    <h1>
      <a href="/">
        <img src="/logo.svg" alt="Simple NPS" class="logo" />
        Simple NPS
      </a>
    </h1>

    <button
      class="hamburger"
      type="button"
      aria-label="Toggle navigation menu"
      aria-controls="site-nav"
      aria-expanded={isMenuOpen}
      on:click={toggleMenu}
    >
      <span class:open={isMenuOpen}></span>
      <span class:open={isMenuOpen}></span>
      <span class:open={isMenuOpen}></span>
    </button>

    <ul id="site-nav" class:open={isMenuOpen}>
      {#each navItems as item}
        <li><a href={item.href} class:active={$page.url.pathname === item.path}>{item.label}</a></li>
      {/each}
    </ul>
  </nav>
</div>

<main>
  <div class="fixed">
    <slot />
  </div>
</main>

<GTMLoader gtmId={GTM_ID} />

<GdprNotification />

<style>
  main {
    flex: 1;
  }

  .fixed {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
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
    z-index: 2;
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

  .hamburger {
    display: none;
    width: 44px;
    height: 44px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    z-index: 2;
  }

  .hamburger span {
    width: 18px;
    height: 2px;
    background: #333;
    border-radius: 999px;
    transition: transform 0.2s ease, opacity 0.2s ease;
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

  @media (max-width: 760px) {
    nav {
      position: relative;
    }

    .hamburger {
      display: inline-flex;
    }

    nav ul {
      position: absolute;
      top: calc(100% + 0.75rem);
      right: 0;
      left: 0;
      display: none;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.75rem;
      background: #fff;
      border: 1px solid #eee;
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      z-index: 1;
    }

    nav ul.open {
      display: flex;
    }

    nav a {
      display: block;
      padding: 0.6rem 0.75rem;
    }

    .hamburger span.open:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .hamburger span.open:nth-child(2) {
      opacity: 0;
    }

    .hamburger span.open:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
</style>