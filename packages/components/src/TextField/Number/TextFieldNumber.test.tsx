import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import TextFieldNumber from 'components/TextField/Number';
import { TextFieldNumberProps } from './types';

const textFieldNumberTestId = 'textFieldNumber';
const mockOnChange = jest.fn();
const renderTextFieldNumber = (props?: Partial<TextFieldNumberProps>) =>
	render(withTheme(<TextFieldNumber data-testid={textFieldNumberTestId} onChange={mockOnChange} {...props} />));

describe('TextFieldNumber component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render input with default props', () => {
		renderTextFieldNumber();
		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;
		expect(input).toHaveAttribute('inputmode', 'decimal');
		expect(input).toHaveAttribute('type', 'text');
	});

	it('should render input with no value by default', () => {
		renderTextFieldNumber();
		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;
		expect(input).toHaveAttribute('value', '');
	});

	it('should render input with defaultValue prop', () => {
		renderTextFieldNumber({ defaultValue: 150 });
		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;
		expect(input).toHaveAttribute('value', '150');
	});

	it('should sum 1 number by clicking the arrow up icon', () => {
		renderTextFieldNumber();
		fireEvent.click(screen.getByTestId('text-field__number_up_arrow'));
		expect(mockOnChange.mock.calls[0][0].target.value).toEqual('1');
	});

	it('should subtract 1 number by clicking the arrow down icon', () => {
		renderTextFieldNumber({ defaultValue: 100 });
		fireEvent.click(screen.getByTestId('text-field__number_down_arrow'));
		expect(mockOnChange.mock.calls[0][0].target.value).toEqual('99');
	});

	it('should not sum 1 number by clicking the arrow up icon if controlled', () => {
		renderTextFieldNumber({ value: 100 });
		fireEvent.click(screen.getByTestId('text-field__number_up_arrow'));
		expect(mockOnChange.mock.calls[0][0].target.value).toEqual('100');
	});

	it('should not subtract 1 number by clicking the arrow down icon if controlled', () => {
		renderTextFieldNumber({ value: 100 });
		fireEvent.click(screen.getByTestId('text-field__number_down_arrow'));
		expect(mockOnChange.mock.calls[0][0].target.value).toEqual('100');
	});

	it('should call onChange handler when typing a number character', () => {
		renderTextFieldNumber();
		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;
		userEvent.type(input, '4');
		expect(mockOnChange).toHaveBeenCalledTimes(1);
		expect(mockOnChange.mock.calls[0][0].target.value).toEqual('4');
	});

	it('should not call onChange handler when typing a text character', () => {
		renderTextFieldNumber();
		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;
		userEvent.type(input, 'de');
		expect(mockOnChange).toHaveBeenCalledTimes(0);
	});

	it('should call onChange handler when clicking up arrow', () => {
		renderTextFieldNumber();
		fireEvent.click(screen.getByTestId('text-field__number_up_arrow'));
		expect(mockOnChange).toHaveBeenCalled();
	});

	it('should call onChange handler clicking down arrow', () => {
		renderTextFieldNumber({ defaultValue: 100 });
		fireEvent.click(screen.getByTestId('text-field__number_down_arrow'));
		expect(mockOnChange).toHaveBeenCalled();
	});

	it('should not call onChange handler if not provided', () => {
		renderTextFieldNumber({ defaultValue: 100, onChange: undefined });
		fireEvent.click(screen.getByTestId('text-field__number_down_arrow'));
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should not call onChange handler if maximum value', () => {
		renderTextFieldNumber({ value: 100, max: 100 });

		expect(screen.getByTestId('text-field__number_up_arrow')).toBeDisabled();

		fireEvent.click(screen.getByTestId('text-field__number_up_arrow'));

		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should not call onChange handler if default maximum value', () => {
		renderTextFieldNumber({ defaultValue: 100, max: 100 });

		expect(screen.getByTestId('text-field__number_up_arrow')).toBeDisabled();

		fireEvent.click(screen.getByTestId('text-field__number_up_arrow'));

		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should not call onChange handler if minimum value', () => {
		renderTextFieldNumber({ value: 0, min: 0 });

		expect(screen.getByTestId('text-field__number_down_arrow')).toBeDisabled();

		fireEvent.click(screen.getByTestId('text-field__number_down_arrow'));

		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should use another input mode', () => {
		renderTextFieldNumber({ inputMode: 'numeric' });
		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;
		expect(input).toHaveAttribute('inputmode', 'numeric');
	});

	it('should not call onchange if typing a text', () => {
		renderTextFieldNumber();

		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;

		userEvent.type(input, 's');

		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should sum 1 with up arrow', () => {
		renderTextFieldNumber({ defaultValue: 10 });

		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;

		fireEvent.keyDown(input, { key: 'ArrowUp' });

		expect(screen.getByDisplayValue('11')).toBeInTheDocument();
		expect(mockOnChange.mock.calls[0][0].target.value).toBe('11');
	});

	it('should subtract 1 with down arrow', () => {
		renderTextFieldNumber({ defaultValue: 10 });

		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;

		fireEvent.keyDown(input, { key: 'ArrowDown' });

		expect(screen.getByDisplayValue('9')).toBeInTheDocument();
		expect(mockOnChange.mock.calls[0][0].target.value).toBe('9');
	});

	it('should not subtract 1 with up arrow if value is higher than maximum', () => {
		renderTextFieldNumber({ max: 10, value: 10 });

		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;

		fireEvent.keyDown(input, { key: 'ArrowUp' });

		expect(screen.getByDisplayValue('10')).toBeInTheDocument();
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should not subtract 1 with down arrow if value is less than minimum', () => {
		renderTextFieldNumber({ min: 10, value: 10 });

		const input = screen.getByTestId(textFieldNumberTestId)!.querySelector('input')!;

		fireEvent.keyDown(input, { key: 'ArrowDown' });

		expect(screen.getByDisplayValue('10')).toBeInTheDocument();
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should render field as disabled', () => {
		renderTextFieldNumber({ defaultValue: 10, isDisabled: true });

		expect(screen.getByTestId('text-field__number_up_arrow')).toBeDisabled();
		expect(screen.getByTestId('text-field__number_down_arrow')).toBeDisabled();
	});
});
