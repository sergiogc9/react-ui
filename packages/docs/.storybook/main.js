const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode/register'],
	webpackFinal: async (config, { configType }) => {
		config.resolve.alias.docs = path.resolve(__dirname, '../src');
		config.resolve.alias.storybook = path.resolve(__dirname, '../.storybook');
		/**
		 * Needed for handling component types in docs section correctly.
		 * Using @sergiogc9/react-ui in mdx is not working.
		 */
		config.resolve.alias.collections = path.resolve(__dirname, '../../collections/src');
		config.resolve.alias.components = path.resolve(__dirname, '../../components/src');
		config.resolve.alias.form = path.resolve(__dirname, '../../form/src');
		config.resolve.alias.theme = path.resolve(__dirname, '../../theme/src');

		// Add SVGR Loader
		// ========================================================
		const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

		const assetLoader = {
			loader: assetRule.loader,
			options: assetRule.options || assetRule.query
		};

		// Merge our rule with existing assetLoader rules
		config.module.rules.unshift({
			test: /\.svg$/,
			use: ['@svgr/webpack', assetLoader]
		});

		// Use esbuild
		const rulesWithoutWebpack = [];
		config.module.rules.forEach(rule => {
			if (rule.test.test('.js') || rule.test.test('.ts')) console.log(`Webpack rule with test ${rule.test} removed`);
			else rulesWithoutWebpack.push(rule);
		});
		config.module.rules = rulesWithoutWebpack;

		config.module.rules.unshift({
			test: /\.tsx?$/,
			loader: 'esbuild-loader',
			options: {
				loader: 'tsx',
				target: 'es2015'
			}
		});

		config.optimization = {
			minimize: process.env.NODE_ENV === 'production',
			minimizer: [
				new ESBuildMinifyPlugin({
					target: 'es2015'
				})
			]
		};

		return config;
	}
};
