import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import UserMenuItemText from './styled';
import { UserMenuItemTextProps } from './types';

const userMenuItemTextTestId = 'UserMenuItemText';
const text = 'Awesome text';

const renderUserMenuItemText = (props?: Partial<UserMenuItemTextProps>) =>
	render(
		withTheme(
			<UserMenuItemText data-testid={userMenuItemTextTestId} {...props}>
				{text}
			</UserMenuItemText>
		)
	);

describe('UserMenuItemText component', () => {
	afterEach(cleanup);

	it('should render the text', () => {
		renderUserMenuItemText();
		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
