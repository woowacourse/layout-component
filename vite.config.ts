import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylelint from 'vite-plugin-stylelint';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			name: 'index',
			fileName: 'index',
		},
		rollupOptions: {
			external: ['react'],
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
	plugins: [
		react(),
		stylelint({
			fix: true,
		}),
		dts(),
	],
});
