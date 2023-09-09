import { DocsPage } from '@storybook/addon-docs';
import { Preview } from '@storybook/react';

import ThemeDecorator from 'storybook/decorators/Theme';
import { DocsContainer } from './utils/components/DocsContainer';

const preview: Preview = {
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			container: DocsContainer,
			page: DocsPage
		},
		controls: { expanded: true },
		layout: 'centered',
		options: {
			storySort: {
				order: ['Home', 'Theme', 'Collections', 'Components', 'Form']
			}
		}
	}
};

export default preview;
