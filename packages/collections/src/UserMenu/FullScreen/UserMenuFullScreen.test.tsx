import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Box } from '@sergiogc9/react-ui';

import { withTheme } from 'collections/private/utils/tests';

import UserMenuFullScreen from './UserMenuFullScreen';
import { UserMenuFullScreenProps } from './types';

const text = 'Awesome text!';
const triggerTestId = 'usermenu-trigger';

const Component = (props?: Partial<UserMenuFullScreenProps>) => {
	const ref = React.useRef(null);
	return (
		<>
			<Box data-testid={triggerTestId} ref={ref} />
			<UserMenuFullScreen appendTo={{ current: document.body }} isVisible reference={ref} {...props}>
				{text}
			</UserMenuFullScreen>
		</>
	);
};

const getComponent = (props?: Partial<UserMenuFullScreenProps>) => render(withTheme(<Component {...props} />));

describe('Full screen UserMenu component', () => {
	afterEach(cleanup);

	it('should not be visible', () => {
		getComponent({ isVisible: false });

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should be visible', () => {
		getComponent();

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should handle click on trigger and show the component', async () => {
		const mockOnClose = jest.fn();
		getComponent({ isVisible: undefined, onClose: mockOnClose });

		fireEvent.click(screen.getByTestId(triggerTestId));

		await waitFor(() => expect(screen.getByText(text)).toBeInTheDocument());

		fireEvent.click(screen.getByTestId('userMenuMobileCloseBtn'));

		expect(mockOnClose).toHaveBeenCalled();
	});
});
