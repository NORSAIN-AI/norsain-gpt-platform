import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: [
      'tests/**/*.test.ts',
      'tests/**/*.test.mts',
      'scripts/**/*.test.ts',
      'scripts/**/*.test.mts'
    ],
    exclude: [
      'node_modules',
      'dist',
      '.git',
      '.github'
    ],
    reporters: ['default'],
    coverage: {
      enabled: false,
    },
  },

  resolve: {
    alias: {
      // OPTIONAL: make imports cleaner
      '@scripts': path.resolve(__dirname, './scripts'),
      '@utils': path.resolve(__dirname, './scripts/utils'),
      '@agents': path.resolve(__dirname, './agents'),
    }
  },

  esbuild: {
    target: 'node20',
    format: 'esm',
  }
});
