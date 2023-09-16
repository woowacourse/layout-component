import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
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
  },
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    terser(),
  ],
}));
