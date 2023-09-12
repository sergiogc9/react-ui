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
		'../src/components/(Icon|IconButton|Image|Link|LoadingBar||Modal|Overlay|Popover|RadioButton|Ripple|Select|Skeleton|Spinner|Status|Stepper|Svg|Switch|Table|Tabs|Text|Title|TextArea|TextField|Toasts|Tooltip)/**/*.mdx',
		'../src/components/(Icon|IconButton|Image|Link|LoadingBar||Modal|Overlay|Popover|RadioButton|Ripple|Select|Skeleton|Spinner|Status|Stepper|Svg|Switch|Table|Tabs|Text|Title|TextArea|TextField|Toasts|Tooltip)/**/*.stories.@(js|jsx|ts|tsx)'
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
		// This modifies the existing image rule to exclude `.svg` files
		// since we handle those with `@svgr/webpack`.
		const imageRule = config.module.rules.find((rule: any) => {
			if (typeof rule !== 'string' && rule.test instanceof RegExp) {
				return rule.test.test('.svg');
			}
		});
		if (typeof imageRule !== 'string') {
			imageRule.exclude = /\.svg$/;
		}

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader']
		});

		return config;
	}
};
export default config;
