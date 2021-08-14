import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'collections/private/utils/tests';

import SwitchBox from './SwitchBox';
import { SwitchBoxProps } from './types';

const switchBoxTestId = 'switchBox';
const switchBoxText = 'Awesome SwitchBox';

const mockOnChange = jest.fn();

const renderSwitchBox = (props: Partial<SwitchBoxProps> = {}) => {
	return render(
		withTheme(
			<SwitchBox data-testid={switchBoxTestId} onChange={mockOnChange} {...props}>
				{switchBoxText}
			</SwitchBox>
		)
	);
};

describe('SwitchBox component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render switchBox', () => {
		renderSwitchBox();

		expect(screen.getByText(switchBoxText)).toBeInTheDocument();
	});

	it('should call onChange handler', () => {
		renderSwitchBox();

		userEvent.click(screen.getByTestId('switchBox-switch'));

		expect(mockOnChange).toHaveBeenCalled();
	});
});
