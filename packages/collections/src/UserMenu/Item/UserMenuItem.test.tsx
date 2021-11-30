import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import UserMenuItem from './UserMenuItem';
import { UserMenuItemProps } from './types';

const userMenuItemTestId = 'UserMenuItem';
const text = 'Awesome text';

const renderUserMenuItem = (props?: Partial<UserMenuItemProps>) =>
	render(
		withTheme(
			<UserMenuItem data-testid={userMenuItemTestId} {...props}>
				{text}
			</UserMenuItem>
		)
	);

describe('UserMenuItem component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderUserMenuItem();
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
