const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: async (config, { configType }) => {
		config.resolve.alias.docs = path.resolve(__dirname, '../src');
		config.resolve.alias.storybook = path.resolve(__dirname, '../.storybook');
		/**
		 * Needed for handling component types in docs section correctly.
		 * Using @sergiogc9/react-ui in mdx is not working.
		 */
		config.resolve.alias.collections = path.resolve(__dirname, '../../collections/src');
		config.resolve.alias.components = path.resolve(__dirname, '../../components/src');
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

		return config;
	}
};
