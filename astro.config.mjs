import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://quantumseg.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: { '/advisory': '/revenue-solutions' },
});
