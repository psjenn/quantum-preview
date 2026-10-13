import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://quantumseg.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  redirects: { '/advisory': '/revenue-solutions' },
});
