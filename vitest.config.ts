import { defineConfig } from 'vitest/config';
import path from 'path';

// Minimal config - only what's needed to resolve the project's existing
// `@/*` -> `./src/*` path alias (tsconfig.json) inside test files.
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
