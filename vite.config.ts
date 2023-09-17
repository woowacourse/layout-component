import { defineConfig, type PluginOption } from 'vite';

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

import * as path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['src/stories/**', 'react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  plugins: [react(), dts(), visualizer() as PluginOption],
});
