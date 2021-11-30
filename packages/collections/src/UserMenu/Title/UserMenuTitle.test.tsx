import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';
import { simulateScreenWidthChange } from 'collections/private/utils/tests/ui';

import UserMenu from '../UserMenu';
import UserMenuTitle from './UserMenuTitle';
import { UserMenuTitleProps } from './types';

const userMenuTitleTestId = 'UserMenuTitle';
const text = 'Awesome text';

const renderUserMenuTitle = (isFullscreenModeEnabled: boolean, props?: Partial<UserMenuTitleProps>) =>
	render(
		withTheme(
			<UserMenu isMobileFullScreenEnabled={isFullscreenModeEnabled} isVisible>
				<UserMenuTitle data-testid={userMenuTitleTestId} {...props}>
					{text}
				</UserMenuTitle>
			</UserMenu>
		)
	);

describe('UserMenuTitle component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderUserMenuTitle(false);

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render the text on fullscreen mode', () => {
		simulateScreenWidthChange(300);
		renderUserMenuTitle(true);

		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
