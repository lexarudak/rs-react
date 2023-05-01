import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/vars/index.scss";',
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name][extname]`,
      },
    },
  },
  server: {
    host: true,
    port: 3001,
  },
});
