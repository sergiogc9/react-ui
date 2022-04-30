import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import path from 'path';

import pkg from './package.json';
import globalPkg from '../../package.json';

const config = [
	{
		input: 'src/index.ts',
		output: {
			dir: 'dist',
			format: 'es',
			sourcemap: 'true'
		},
		external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(globalPkg.peerDependencies || {})],
		plugins: [typescript(), terser({ format: { comments: false } })]
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/index.d.ts' }],
		plugins: [
			dts(),
			alias({
				entries: [
					{
						find: /^theme\/(.+)/,
						replacement: path.resolve(__dirname, './src/$1')
					}
				]
			})
		]
	}
];

export default config;
