<script>
  import { onMount } from 'svelte';
  import { gdprConsent } from '../stores/gdpr.js';

  let showNotification = false;

  onMount(() => {
    const consent = localStorage.getItem('gdpr-consent');

    if (consent) {
      gdprConsent.set(consent === 'accepted');
    } else {
      showNotification = true;
    }
  });

  function acceptCookies() {
    localStorage.setItem('gdpr-consent', 'accepted');
    gdprConsent.set(true);
    showNotification = false;
  }

  function declineCookies() {
    localStorage.setItem('gdpr-consent', 'declined');
    gdprConsent.set(false);
    showNotification = false;
  }
</script>

{#if showNotification}
  <div class="gdpr-notification">
    <div class="gdpr-content">
      <div class="gdpr-text">
        <p>
          We use cookies and analytics tools to improve your experience and analyze our website traffic.
          By clicking "Accept", you consent to the use of cookies and Google Tag Manager for analytics purposes.
          <a href="/docs#analytics" target="_blank">Learn more</a>
        </p>
      </div>
      <div class="gdpr-buttons">
        <button class="btn secondary" on:click={declineCookies}>
          Decline
        </button>
        <button class="btn primary" on:click={acceptCookies}>
          Accept
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .gdpr-notification {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: 1rem;
    z-index: 10000;
    border-top: 2px solid #007bff;
  }

  .gdpr-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .gdpr-text {
    flex: 1;
    min-width: 300px;
  }

  .gdpr-text p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .gdpr-text a {
    color: #87ceeb;
    text-decoration: underline;
  }

  .gdpr-buttons {
    display: flex;
    gap: 1rem;
    flex-shrink: 0;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;
    font-size: 0.9rem;
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
    color: #ccc;
    border: 1px solid #666;
  }

  .btn.secondary:hover {
    background-color: #666;
    color: white;
  }

  @media (max-width: 768px) {
    .gdpr-content {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }

    .gdpr-text {
      min-width: auto;
    }

    .gdpr-buttons {
      justify-content: center;
    }
  }
</style>