import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'ukko-split-pane',
      formats: ['es'],
      fileName: `index`,
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
    },
  },
  plugins: [react(), dts()],
});
