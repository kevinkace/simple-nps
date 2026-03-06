<script>
  import { onMount } from 'svelte';
  import { gdprConsent } from '../stores/gdpr.js';

  export let gtmId = '';

  let gtmLoaded = false;

  // Load GTM script
  function loadGTM(id) {
    if (gtmLoaded || !id) return;

    // GTM script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
    document.head.insertBefore(script1, document.head.firstChild);

    // GTM noscript fallback
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
    iframe.width = '0';
    iframe.height = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    // GTM data layer
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', id, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Strict;Secure'
    });

    gtmLoaded = true;
    console.log('Google Tag Manager loaded:', id);
  }

  onMount(() => {
    const unsubscribe = gdprConsent.subscribe(consent => {
      if (consent === true && gtmId) {
        loadGTM(gtmId);
      }
    });

    return unsubscribe;
  });
</script>

<!-- No visual output needed - this component only loads GTM scripts -->