import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task.js';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    video: false,
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },
});
