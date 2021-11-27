import React from 'react';
import theme from '@sergiogc9/react-ui-theme';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import ActionMenuItem from '.';
import { ActionMenuItemProps } from './types';

const actionMenuItemTestId = 'ActionMenuItem';
const text = 'Awesome text';

const renderActionMenuItem = (props?: Partial<ActionMenuItemProps>) =>
	render(
		withTheme(
			<ActionMenuItem data-testid={actionMenuItemTestId} {...props}>
				{text}
			</ActionMenuItem>
		)
	);

describe('ActionMenuItem component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderActionMenuItem();

		const item = screen.getByTestId(actionMenuItemTestId);

		expect(item).toBeInTheDocument();
		expect(item).toHaveStyle(`color:${theme.colors.neutral['600']}`);
	});

	it('should render the text with danger variant', () => {
		renderActionMenuItem({ variant: 'danger' });

		const item = screen.getByTestId(actionMenuItemTestId);

		expect(item).toBeInTheDocument();
		expect(item).toHaveStyle(`color:${theme.colors.red['500']}`);
	});

	it('should render the text with custom background', () => {
		renderActionMenuItem({ bg: 'blue.50' });

		const item = screen.getByTestId(actionMenuItemTestId);

		expect(item).toBeInTheDocument();
		expect(item).toHaveStyle(`background:${theme.colors.blue['50']}`);
	});
});
