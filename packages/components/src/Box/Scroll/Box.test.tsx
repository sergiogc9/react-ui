import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Box from 'components/Box';
import { BoxProps } from 'components/Box/types';

const testID = 'box';

const renderBox = (props?: BoxProps) => render(withTheme(<Box data-testid={testID} {...props} />));

describe('Box', () => {
	afterEach(cleanup);

	it('should render box by default', () => {
		renderBox({ justifyContent: 'center' });
		const box = screen.getByTestId(testID);

		expect(box).toHaveStyle('display: block;');
		expect(box).toHaveStyle('justify-content: center;');
	});

	it('should render box with custom color', () => {
		renderBox({ color: 'yellow.500' });
		const box = screen.getByTestId(testID);

		expect(box).toHaveStyle(`color: ${theme.colors.yellow['500']};`);
	});

	it('should render box margin from theme', () => {
		renderBox({ padding: 2 });
		const box = screen.getByTestId(testID);

		expect(box).toHaveStyle(`padding: 8px;`);
	});
});
