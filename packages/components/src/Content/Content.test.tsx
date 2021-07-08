import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Content from 'components/Content';
import { ContentProps } from './types';

const testID = 'content';

const renderContent = (props?: ContentProps) => render(withTheme(<Content data-testid={testID} {...props} />));

describe('Content component', () => {
	afterEach(cleanup);

	it('should render Content by default', () => {
		renderContent();
		const content = screen.getByTestId(testID);

		expect(content).toHaveStyle('font-weight: 400');
	});

	it('should render Content with custom color', () => {
		renderContent({ color: 'red.500' });
		const content = screen.getByTestId(testID);

		expect(content).toHaveStyle(`color: ${theme.colors.red['500']};`);
	});

	it('should render Content with custom alignment', () => {
		renderContent({ textAlign: 'right' });
		const content = screen.getByTestId(testID);

		expect(content).toHaveStyle('text-align: right;');
	});
});
