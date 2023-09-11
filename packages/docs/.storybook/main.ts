const path = require('path');
import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			builder: {
				useSWC: true
			}
		}
	},
	// stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	stories: [
		'../src/components/(Alert|Animation|Avatar|Badge|Box|Button|CheckBox|Chip|Counter|DatePicker|Divider|FloatingButton|GoogleMapsAutocomplete|Icon|IconButton|Image|Link|LoadingBar||Modal|Overlay|Popover|RadioButton|Ripple|Select)/**/*.mdx',
		'../src/components/(Alert|Animation|Avatar|Badge|Box|Button|CheckBox|Chip|Counter|DatePicker|Divider|FloatingButton|GoogleMapsAutocomplete|Icon|IconButton|Image|Link|LoadingBar||Modal|Overlay|Popover|RadioButton|Ripple|Select)/**/*.stories.@(js|jsx|ts|tsx)'
	],
	docs: {
		autodocs: true
	},
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],

	webpackFinal: async (config: any, { configType }) => {
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
		const assetRule = config.module.rules.find(({ test }: any) => {
			if (test.test) return test.test('.svg');
			else return false;
		});

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
export default config;
