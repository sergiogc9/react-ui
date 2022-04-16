import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import { DropdownMenuItemIcon } from './styled';
import { DropdownMenuItemIconProps } from './types';

const dropdownMenuItemIconTestId = 'DropdownMenuItemIcon';

const renderDropdownMenuItemIcon = (props?: Partial<DropdownMenuItemIconProps>) =>
	render(
		withTheme(
			<DropdownMenuItemIcon
				data-testid={dropdownMenuItemIconTestId}
				icon="add"
				styling="outlined"
				{...(props as any)}
			/>
		)
	);

describe('DropdownMenuItemIcon component', () => {
	afterEach(cleanup);

	it('should render the icon', () => {
		renderDropdownMenuItemIcon();
		expect(screen.getByTestId(dropdownMenuItemIconTestId)).toBeInTheDocument();
	});
});
