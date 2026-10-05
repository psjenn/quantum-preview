import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://quantumseg.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Fetch the next page on hover/focus so navigation is near-instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  redirects: { '/advisory': '/revenue-solutions' },
});
