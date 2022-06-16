/* eslint-disable @typescript-eslint/no-var-requires */
const { buildPackage } = require('@sergiogc9/js-bundle');
const alias = require('@rollup/plugin-alias');
const path = require('path');

const isWatchMode = process.argv.includes('--watch');

buildPackage({
	isWatchMode,
	rollupPlugins: [
		alias({
			entries: [
				{
					find: /^theme\/(.+)/,
					replacement: path.resolve(__dirname, './src/$1')
				}
			]
		})
	]
});
