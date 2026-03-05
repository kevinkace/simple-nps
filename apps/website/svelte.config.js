import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: false
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Handle 404s during prerender when using base path
        if (message.includes('does not begin with `base`')) {
          console.warn(`Prerender warning: ${message}`);
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;