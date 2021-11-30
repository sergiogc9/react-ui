import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import UserMenuItemIcon from './styled';
import { UserMenuItemIconProps } from './types';

const userMenuItemIconTestId = 'UserMenuItemIcon';

const renderUserMenuItemIcon = (props?: Partial<UserMenuItemIconProps>) =>
	render(
		withTheme(
			<UserMenuItemIcon data-testid={userMenuItemIconTestId} icon="add" styling="outlined" {...(props as any)} />
		)
	);

describe('UserMenuItemIcon component', () => {
	afterEach(cleanup);

	it('should render the icon', () => {
		renderUserMenuItemIcon();
		expect(screen.getByTestId(userMenuItemIconTestId)).toBeInTheDocument();
	});
});
