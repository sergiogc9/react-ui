import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import DropdownMenuItem from './styled';
import { DropdownMenuItemProps } from './types';

const dropdownMenuItemTestId = 'DropdownMenuItem';
const text = 'Awesome text';

const renderDropdownMenuItem = (props?: Partial<DropdownMenuItemProps>) =>
	render(
		withTheme(
			<DropdownMenuItem data-testid={dropdownMenuItemTestId} {...props}>
				{text}
			</DropdownMenuItem>
		)
	);

describe('DropdownMenuItem component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderDropdownMenuItem();
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
