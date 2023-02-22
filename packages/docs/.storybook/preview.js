import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';

import ThemeDecorator from 'storybook/decorators/Theme';
import { DocsContainer } from './utils/components/DocsContainer';

addDecorator(ThemeDecorator);
addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage
	},
	controls: { expanded: true },
	layout: 'centered',
	options: {
		storySort: {
			order: ['Home', 'Theme', 'Collections', 'Components']
		}
	}
});
