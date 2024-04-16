import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    threads: false, // suppresses errors from canvas when starting tests
    deps: {
      inline: ['@jdlien/validator-utils'],
    },
  },
});
