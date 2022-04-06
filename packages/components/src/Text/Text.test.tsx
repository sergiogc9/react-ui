import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Text from 'components/Text';

import { TextProps } from './types';

const testID = 'Text';

const renderText = (props?: TextProps) => render(withTheme(<Text data-testid={testID} {...props} />));

describe('Text component', () => {
	afterEach(cleanup);

	it('should render Text by default', () => {
		renderText();
		const text = screen.getByTestId(testID);

		expect(text).toHaveStyle('font-weight: 400');
	});

	it('should render Text with custom color', () => {
		renderText({ color: 'red.500' });
		const text = screen.getByTestId(testID);

		expect(text).toHaveStyle(`color: ${theme.colors.red['500']};`);
	});

	it('should render Text with custom alignment', () => {
		renderText({ textAlign: 'right' });
		const text = screen.getByTestId(testID);

		expect(text).toHaveStyle('text-align: right;');
	});
});
