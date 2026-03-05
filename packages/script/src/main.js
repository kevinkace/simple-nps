import { mount } from 'svelte'
import App from './App.svelte'

// Function to initialize the NPS
function initSimpleNps() {
  // Get configuration from global variable
  const config = window.simpleNpsConfig || {};

  // Find or create target element
  let target = document.getElementById('simple-nps');
  if (!target) {
    target = document.createElement('div');
    target.id = 'simple-nps';
    document.body.appendChild(target);
  }

  // Mount the Svelte app
  const app = mount(App, {
    target,
    props: {
      config
    }
  });

  return app;
}

initSimpleNps();

// Export default for IIFE
export default initSimpleNps;