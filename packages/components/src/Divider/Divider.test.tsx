import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme, { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Divider from 'components/Divider';
import { DividerProps } from './types';

const testID = 'awesomeDivider';

const renderDivider = (props?: DividerProps) => render(withTheme(<Divider data-testid={testID} {...props} />));

describe('Divider component', () => {
	afterEach(cleanup);

	it('should render Divider by default', () => {
		renderDivider();
		const divider = screen.getByTestId(testID);
		expect(divider).toHaveStyle(`background-color: ${getColorFromTheme(theme, 'neutral.100')}`);
	});

	it('should render Divider with custom color', () => {
		renderDivider({ backgroundColor: 'red.500' });
		const divider = screen.getByTestId(testID);
		expect(divider).toHaveStyle(`background-color: ${theme.colors.red['500']};`);
	});

	it('should render Divider with custom height', () => {
		renderDivider({ height: '2px' });
		const divider = screen.getByTestId(testID);
		expect(divider).toHaveStyle('height: 2px;');
	});
});
