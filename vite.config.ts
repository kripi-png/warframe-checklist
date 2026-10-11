import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
    }),
    tailwindcss(),
    sveltekit(),
    svelteTesting(),
  ],
  test: {
    includeSource: ['src/**/*.{js,ts,svelte}'],
    expect: { requireAssertions: true },
    globals: true,
    coverage: {
      exclude: ['./setupTest.ts'],
    },
    projects: [
      {
        extends: true,
        test: {
          include: ['src/**/*.test.svelte.{js,ts}'],
          name: 'unit',
          environment: 'jsdom',
        },
      },
      {
        extends: './vite.config.ts',
        test: {
          name: 'server',
          environment: 'node',
          include: ['src/**/*.{test,spec}.{js,ts}'],
          exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
        },
      },
    ],
  },
});
