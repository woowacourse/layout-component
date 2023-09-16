import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const inputSrc = [
  ['./src/index.ts', 'cjs'],
  ['./src/index.ts', 'esm'],
];

export default inputSrc.map(([input, format]) => ({
  input,
  output: {
    dir: `dist/${format}`,
    format,
    preserveModules: format === 'cjs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    peerDepsExternal(),
    terser(),
  ],
}));
