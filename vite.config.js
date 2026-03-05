import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        css: 'injected',
        dev: false,
        hydratable: false,
        legacy: false
      }
    })
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.js',
      name: 'SimpleNPS',
      fileName: 'simple-nps',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      },
      treeshake: 'smallest'
    },
    cssCodeSplit: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: {
        toplevel: true
      },
      format: {
        comments: false
      }
    },
    sourcemap: false
  }
})
