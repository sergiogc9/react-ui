import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';

import ThemeDecorator from 'storybook/decorators/Theme';
import { DocsContainer } from './utils/components/DocsContainer';

addDecorator(ThemeDecorator);
addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage,
		theme: themes.dark
	},
	controls: { expanded: true },
	layout: 'centered',
	options: {
		storySort: {
			order: ['Theme', 'Collections', 'Components']
		}
	}
});
