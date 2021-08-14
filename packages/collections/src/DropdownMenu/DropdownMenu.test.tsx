import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import DropdownMenu from '.';
import { DropdownMenuProps } from './types';

const dropdownMenuTestId = 'DropdownMenu';
const text = 'Awesome text';

const renderDropdownMenu = (props?: Partial<DropdownMenuProps>) =>
	render(
		withTheme(
			<DropdownMenu data-testid={dropdownMenuTestId} {...props}>
				{text}
			</DropdownMenu>
		)
	);

describe('DropdownMenu component', () => {
	afterEach(cleanup);

	it('should not be visible', () => {
		renderDropdownMenu();
		expect(screen.queryByText(text)).toBeNull();
	});

	it('should be visible', () => {
		renderDropdownMenu({ isVisible: true });
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
