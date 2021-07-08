import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Switch from 'components/Switch';
import { SwitchProps } from './types';

const switchTestId = 'AwesomeSwitch';

const mockOnClick = jest.fn();
const mockOnChange = jest.fn();
const renderSwitch = (props?: Partial<SwitchProps>) =>
	render(withTheme(<Switch data-testid={switchTestId} {...props} />));

describe('Switch component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});
	it('should render the switch background', () => {
		renderSwitch();
		const switchTest = screen.getByTestId(switchTestId);
		expect(switchTest.querySelector(`div`)).toBeInTheDocument();
	});
	it('should render the switch toggle', () => {
		renderSwitch();
		const switchTest = screen.getByTestId(switchTestId);
		expect(switchTest.querySelector(`span`)).toBeInTheDocument();
	});

	it('should render the correct size on size s', () => {
		renderSwitch({ aspectSize: 's' });
		const switchTest = screen.getByTestId(switchTestId);
		expect(switchTest.querySelector(`span`)).toHaveStyle(`height: 16px;width: 16px`);
	});

	it('should render switch toggle as disabled', () => {
		renderSwitch({ isDisabled: true });
		const switchTest = screen.getByTestId(switchTestId);
		expect(switchTest.querySelector(`span`)).toHaveStyle(`
      background-color: ${theme.colors.neutral['300']};
    `);
	});

	it('should render switch background as disabled', () => {
		renderSwitch({ isDisabled: true });
		const switchTest = screen.getByTestId(switchTestId);
		expect(switchTest.querySelector(`div`)).toHaveStyle(`
      background-color: ${theme.colors.neutral['300']};
    `);
	});

	it('should call onChange when click', async () => {
		renderSwitch({ onChange: mockOnChange });
		const switchTest = screen.getByTestId(switchTestId);

		userEvent.click(switchTest);
		await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(1));
	});

	it("should not call onChange if we don't provide any", async () => {
		renderSwitch({ onChange: undefined });
		const switchTest = screen.getByTestId(switchTestId);

		userEvent.click(switchTest);
		await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(0));
	});
	it('should not call onChange handler if disabled', async () => {
		renderSwitch({ isDisabled: true });
		const switchTest = screen.getByTestId(switchTestId);

		userEvent.click(switchTest);
		await waitFor(() => expect(mockOnChange).not.toHaveBeenCalled());
	});
	it('should do nothing if disabled', () => {
		renderSwitch({ isDisabled: true });
		expect(mockOnClick).toHaveBeenCalledTimes(0);
	});
});
