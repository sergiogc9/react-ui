import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import UserMenuFooter from '.';
import { UserMenuFooterProps } from './types';

const userMenuFooterTestId = 'UserMenuFooter';
const text = 'Awesome text';

const renderUserMenuFooter = (props?: Partial<UserMenuFooterProps>) =>
	render(
		withTheme(
			<UserMenuFooter data-testid={userMenuFooterTestId} {...props}>
				{text}
			</UserMenuFooter>
		)
	);

describe('UserMenuFooter component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderUserMenuFooter();
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
