import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import ActionMenu from '.';
import { ActionMenuProps } from './types';

const actionMenuTestId = 'ActionMenu';
const text = 'Awesome text';

const renderActionMenu = (props?: Partial<ActionMenuProps>) =>
	render(
		withTheme(
			<ActionMenu data-testid={actionMenuTestId} {...props}>
				{text}
			</ActionMenu>
		)
	);

describe('ActionMenu component', () => {
	afterEach(cleanup);

	it('should not be visible', () => {
		renderActionMenu();

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should be visible', () => {
		renderActionMenu({ isVisible: true });

		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
