import { defineConfig } from '@playwright/test';
export default defineConfig({
  webServer: {
    command: 'npx serve nodes/browser-node/pkg',
    port: 5000,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: { baseURL: 'http://localhost:5000' },
});
