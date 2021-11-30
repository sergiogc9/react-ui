import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import { simulateScreenWidthChange } from 'collections/private/utils/tests/ui';

import { UserMenuProps } from './types';
import UserMenu from '.';

const UserMenuTestId = 'UserMenu';
const text = 'Awesome text!';
const footerText = 'Footer';

const renderUserMenu = (props?: Partial<UserMenuProps>) =>
	render(
		withTheme(
			<UserMenu
				appendTo={{ current: document.body }}
				data-testid={UserMenuTestId}
				isMobileFullScreenEnabled={false}
				isVisible={false}
				{...props}
			>
				{text}
				<UserMenu.Footer>{footerText}</UserMenu.Footer>
			</UserMenu>
		)
	);

describe('UserMenu component', () => {
	afterEach(cleanup);

	it('should not be visible', () => {
		renderUserMenu();

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should be visible', () => {
		renderUserMenu({ isVisible: true });

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should be in full screen when screen size change small sizes', async () => {
		simulateScreenWidthChange(300);
		renderUserMenu({ isVisible: true, isMobileFullScreenEnabled: true });

		await waitFor(() => expect(screen.queryByTestId('userMenuMobileCloseBtn')).toBeInTheDocument());
		expect(screen.getByText(footerText)).toBeInTheDocument();
	});

	it('should render user menu when the isVisible prop is undefined', async () => {
		simulateScreenWidthChange(300);
		renderUserMenu({ isMobileFullScreenEnabled: true });

		await waitFor(() => expect(screen.queryByText(text)).toBeNull());
	});
});
