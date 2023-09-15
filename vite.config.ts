import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/lib/index.ts',
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        dir: 'dist',
        format: 'esm',
        exports: 'named',
      },
    },
    lib: {
      entry: 'src/lib/index.ts',
      name: 'react-axios',
      formats: ['es', 'umd'],
    },
  },
});
