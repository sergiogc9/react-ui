import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import DropdownMenuTitle from './styled';
import { DropdownMenuTitleProps } from './types';

const dropdownMenuTitleTestId = 'DropdownMenuTitle';
const text = 'Awesome text';

const renderDropdownMenuTitle = (props?: Partial<DropdownMenuTitleProps>) =>
	render(
		withTheme(
			<DropdownMenuTitle data-testid={dropdownMenuTitleTestId} {...props}>
				{text}
			</DropdownMenuTitle>
		)
	);

describe('DropdownMenuTitle component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderDropdownMenuTitle();
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
