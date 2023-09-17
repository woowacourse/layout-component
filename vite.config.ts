import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@wainaat/layout-component',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
