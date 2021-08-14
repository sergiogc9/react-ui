import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import DropdownMenuFooter from './styled';
import { DropdownMenuFooterProps } from './types';

const dropdownMenuFooterTestId = 'DropdownMenuFooter';
const text = 'Awesome text';

const renderDropdownMenuFooter = (props?: Partial<DropdownMenuFooterProps>) =>
	render(
		withTheme(
			<DropdownMenuFooter data-testid={dropdownMenuFooterTestId} {...props}>
				{text}
			</DropdownMenuFooter>
		)
	);

describe('DropdownMenuFooter component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderDropdownMenuFooter();
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
