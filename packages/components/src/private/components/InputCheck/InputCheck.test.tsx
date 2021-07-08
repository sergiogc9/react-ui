import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme, { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import InputCheck from './InputCheck';
import { InputCheckProps } from './types';

const InputCheckTestId = 'AwesomeInputCheck';
const label = 'Nice input!';

const mockOnChange = jest.fn();
const mockOnClick = jest.fn();
const renderInputCheck = (props?: Partial<InputCheckProps>) =>
	render(withTheme(<InputCheck data-testid={InputCheckTestId} {...props} />));

describe('InputCheck component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render the InputCheck', () => {
		renderInputCheck();
		const InputCheckTest = screen.getByTestId(InputCheckTestId);

		expect(InputCheckTest).toBeInTheDocument();
		expect(InputCheckTest.querySelector('svg')).not.toBeInTheDocument();
	});

	it('should render the svg icon if type is checkbox and isDefaultSelected', () => {
		renderInputCheck({ type: 'checkbox', isDefaultSelected: true });

		const InputCheckTest = screen.getByTestId(InputCheckTestId);
		expect(InputCheckTest.querySelector('svg')).toBeInTheDocument();
	});

	it('should render the correct background color if type is checkbox and isDefaultSelected', () => {
		renderInputCheck({ type: 'checkbox', isDefaultSelected: true });
		const InputCheckTest = screen.getByTestId(InputCheckTestId).firstChild;

		expect(InputCheckTest).toHaveStyleRule(
			'background-color',
			getColorFromTheme(theme, theme.components.inputCheck.colors.selected),
			{
				modifier: '::after'
			}
		);
	});

	it('should render the correct background color if type is radio and isDefaultSelected', () => {
		renderInputCheck({ type: 'radio', isDefaultSelected: true });
		const InputCheckTest = screen.getByTestId(InputCheckTestId).firstChild;

		expect(InputCheckTest).toHaveStyleRule(
			'background-color',
			getColorFromTheme(theme, theme.components.inputCheck.colors.selected),
			{
				modifier: '::after'
			}
		);
	});

	it('should render InputCheck as selected', () => {
		renderInputCheck({ isSelected: true });
		const InputCheckTest = screen.getByTestId(InputCheckTestId);

		expect(InputCheckTest).toBeInTheDocument();
	});

	it('should render InputCheck as disabled', () => {
		renderInputCheck({ isDisabled: true });
		const InputCheckTest = screen.getByTestId(InputCheckTestId).firstChild;

		expect(InputCheckTest).toHaveStyle(`
      opacity: 0.4;
    `);
	});

	it('should show label', () => {
		renderInputCheck({ label });

		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it('should show label with correct size', () => {
		renderInputCheck({ aspectSize: 'l', label });

		expect(screen.getByText(label)).toHaveStyle(`font-size: 16px;`);
	});

	it('should show label as disabled', () => {
		renderInputCheck({ isDisabled: true, label });

		expect(screen.getByText(label)).toHaveStyle(`
      opacity: 0.4;
    `);
	});

	it('should call onChange when clicking on checkbox input', async () => {
		renderInputCheck({ onChange: mockOnChange, type: 'checkbox' });
		const InputCheckTest = screen.getByTestId(InputCheckTestId);
		const input = InputCheckTest.querySelector('input')!;

		userEvent.click(input);

		await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(1));
	});

	it('should not call onChange when clicking on checkbox input', async () => {
		renderInputCheck({ onChange: undefined, type: 'checkbox' });
		const InputCheckTest = screen.getByTestId(InputCheckTestId);
		const input = InputCheckTest.querySelector('input')!;

		userEvent.click(input);

		await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(0));
	});

	it('should not call onChange if checkbox input is disabled', async () => {
		renderInputCheck({
			isDisabled: true,
			onChange: mockOnChange,
			type: 'checkbox'
		});
		const InputCheckTest = screen.getByTestId(InputCheckTestId);
		const input = InputCheckTest.querySelector('input')!;

		userEvent.click(input);

		await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(0));
	});

	it('should call onChange when clicking on label', async () => {
		renderInputCheck({ onChange: mockOnChange, label });

		userEvent.click(screen.getByText(label));

		await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(1));
	});

	it('should not call onChange when clicking on label if disabled', async () => {
		renderInputCheck({ isDisabled: true, onChange: mockOnChange, label });

		userEvent.click(screen.getByText(label));

		await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(0));
	});

	it('should call onClick when click', async () => {
		renderInputCheck({ onClick: mockOnClick });
		const InputCheckTest = screen.getByTestId(InputCheckTestId);

		userEvent.click(InputCheckTest);

		await waitFor(() => expect(mockOnClick).toHaveBeenCalledTimes(1));
	});

	it("should not call onClick if we don't provide any", async () => {
		renderInputCheck({ onClick: undefined });
		const InputCheckTest = screen.getByTestId(InputCheckTestId);

		userEvent.click(InputCheckTest);

		await waitFor(() => expect(mockOnClick).toHaveBeenCalledTimes(0));
	});

	it('should not call onClick handler if disabled', async () => {
		renderInputCheck({ isDisabled: true });
		const InputCheckTest = screen.getByTestId(InputCheckTestId);

		userEvent.click(InputCheckTest);

		await waitFor(() => expect(mockOnClick).not.toHaveBeenCalled());
	});
});
