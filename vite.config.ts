import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

const makeExternalPredicate = (externalArr: string[]) => {
  if (externalArr.length === 0) {
    return () => false;
  }

  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);

  return (id: string) => pattern.test(id);
};

const externals = makeExternalPredicate(Object.keys(pkg.peerDependencies));

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          react: 'React',
          '@emotion/react/jsx-runtime': 'jsxRuntime',
          '@emotion/react': 'react',
          '@emotion/styled': 'styled',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  plugins: [react(), tsconfigPaths(), dts()],
});
