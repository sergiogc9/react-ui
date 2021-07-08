import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getPopoverContentMock, withTheme } from 'components/private/utils/tests';

import TextFieldDate from '.';
import { TextFieldDateProps } from './types';

jest.mock('components/Popover', () => getPopoverContentMock());

const mockOnChange = jest.fn();
const renderTextFieldDate = (props?: Partial<TextFieldDateProps>) =>
	render(
		withTheme(
			<TextFieldDate
				name="date-picker-input-test"
				date={new Date('2020-05-11T00:00:00.000Z')}
				onDateChange={mockOnChange}
				{...props}
				datePickerProps={props?.datePickerProps}
			/>
		)
	);

describe('TextFieldDate component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render input', () => {
		const { container } = renderTextFieldDate();

		expect(container.querySelector('input[value="May 11, 2020"]')).toBeInTheDocument();
	});

	it('should render input with empty value by default', () => {
		const { container } = renderTextFieldDate({
			date: undefined
		});

		expect(container.querySelector('input[value=""]')).toBeInTheDocument();
	});

	it('should render input with default value', () => {
		const { container } = renderTextFieldDate({
			date: undefined,
			defaultDate: new Date('2020-05-20T00:00:00.000Z')
		});

		expect(container.querySelector('input[value="May 20, 2020"]')).toBeInTheDocument();
	});

	it('should render input with correct locale', () => {
		const { container } = renderTextFieldDate({
			datePickerProps: { locale: 'ca-ES' }
		});

		expect(container.querySelector('input[value="11 de maig de 2020"]')).toBeInTheDocument();
	});

	it('should remove value when clicking remove button', () => {
		const { container } = renderTextFieldDate({
			date: undefined,
			defaultDate: new Date('2020-05-20T00:00:00.000Z'),
			hasRemoveButton: true
		});

		userEvent.click(screen.getByTestId('textfield__remove-button'));

		expect(container.querySelector('input[value=""]')).toBeInTheDocument();
	});

	it('should not call onDateChange when clicking remove button', () => {
		const { container } = renderTextFieldDate({
			date: undefined,
			defaultDate: new Date('2020-05-20T00:00:00.000Z'),
			hasRemoveButton: true,
			onDateChange: undefined
		});

		userEvent.click(screen.getByTestId('textfield__remove-button'));

		expect(container.querySelector('input[value=""]')).toBeInTheDocument();
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('should not render popover by default', () => {
		renderTextFieldDate();

		expect(screen.queryByText('Mon')).not.toBeVisible();
	});

	it('should render popover after clicking input', () => {
		const { container } = renderTextFieldDate();
		const input = container.querySelector('input[value="May 11, 2020"]');
		userEvent.click(input!);

		expect(screen.getByText('Mon')).toBeVisible();
	});

	it('should hide popover after clicking outside popover', () => {
		const { container } = renderTextFieldDate();
		const input = container.querySelector('input[value="May 11, 2020"]');

		userEvent.click(input!);
		expect(screen.getByText('Mon')).toBeVisible();

		userEvent.click(document.body);
		expect(screen.queryByText('Mon')).not.toBeVisible();
	});

	it('should change input value after selecting new date', () => {
		const { container } = renderTextFieldDate({
			date: undefined,
			defaultDate: new Date('2020-05-20T00:00:00.000Z')
		});
		const input = container.querySelector('input[value="May 20, 2020"]');

		userEvent.click(input!);
		expect(screen.getByText('Mon')).toBeVisible();

		userEvent.click(screen.getByText('25'));

		expect(container.querySelector('input[value="May 25, 2020"]')).toBeVisible();
	});

	it('should call on change handler', () => {
		const { container } = renderTextFieldDate({
			date: undefined,
			defaultDate: new Date('2020-05-20T00:00:00.000Z')
		});
		const input = container.querySelector('input[value="May 20, 2020"]');

		userEvent.click(input!);
		expect(screen.getByText('Mon')).toBeVisible();

		userEvent.click(screen.getByText('25'));

		expect(mockOnChange).toHaveBeenCalledWith(new Date('2020-05-25T12:00:00.000Z'));
	});

	it('should not call on change handler if not provided', () => {
		const { container } = renderTextFieldDate({
			date: undefined,
			defaultDate: new Date('2020-05-20T00:00:00.000Z'),
			onDateChange: undefined
		});
		const input = container.querySelector('input[value="May 20, 2020"]');

		userEvent.click(input!);
		expect(screen.getByText('Mon')).toBeVisible();

		userEvent.click(screen.getByText('25'));

		expect(mockOnChange).not.toHaveBeenCalled();
	});
});
