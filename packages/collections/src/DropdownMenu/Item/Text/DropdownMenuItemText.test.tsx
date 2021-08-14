import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import DropdownMenuItemText from './styled';
import { DropdownMenuItemTextProps } from './types';

const dropdownMenuItemTextTestId = 'DropdownMenuItemText';
const text = 'Awesome text';

const renderDropdownMenuItemText = (props?: Partial<DropdownMenuItemTextProps>) =>
	render(
		withTheme(
			<DropdownMenuItemText data-testid={dropdownMenuItemTextTestId} {...props}>
				{text}
			</DropdownMenuItemText>
		)
	);

describe('DropdownMenuItemText component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderDropdownMenuItemText();
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
