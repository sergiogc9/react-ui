import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import DatePicker from '.';
import { DatePickerProps } from './types';

const datePickerTestId = 'AwesomeDatePicker';

const mockOnDateChanged = jest.fn();
const mockOnDateRangeChanged = jest.fn();
const renderDatePicker = (props?: Partial<DatePickerProps>) =>
	render(
		withTheme(
			<DatePicker
				data-testid={datePickerTestId}
				onDateChange={mockOnDateChanged}
				onDateRangeChange={mockOnDateRangeChanged}
				{...props}
			/>
		)
	);

describe('DatePicker component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render calendar by default', () => {
		renderDatePicker();

		expect(screen.getByText('Mon')).toBeInTheDocument();
	});

	it('should render month view', () => {
		renderDatePicker({ view: 'month' });

		expect(screen.queryByText('Mon')).toBeNull();
		expect(screen.getByText('Jan')).toBeInTheDocument();
	});

	it('should render calendar in custom locale', () => {
		renderDatePicker({ locale: 'ca-ES' });

		expect(screen.getByText('dl.')).toBeInTheDocument();
	});

	it('should render calendar with default visible month', () => {
		renderDatePicker({ defaultVisibleMonth: new Date(2021, 4, 3) });

		expect(screen.getByText('May 2021')).toBeInTheDocument();
	});

	it('should render two calendars', () => {
		renderDatePicker({
			numberOfMonths: 2,
			defaultVisibleMonth: new Date(2021, 4, 3)
		});

		expect(screen.getByText('May 2021')).toBeInTheDocument();
		expect(screen.getByText('June 2021')).toBeInTheDocument();
	});

	it('should set selected date', () => {
		renderDatePicker({
			date: new Date(2021, 4, 15),
			defaultVisibleMonth: new Date(2021, 4, 3)
		});

		expect(screen.getByText('15')).toHaveClass('DayPicker-Day--selected');
	});

	it('should not set any day as selected by default', () => {
		const { container } = renderDatePicker();

		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--selected')).toBeNull();
	});

	it('should set selected range start and end date', () => {
		renderDatePicker({
			defaultVisibleMonth: new Date(2021, 4, 3),
			isRange: true,
			dateRange: { start: new Date(2021, 4, 10), end: new Date(2021, 4, 20) }
		});

		expect(screen.getByText('10')).toHaveClass('DayPicker-Day--start');
		expect(screen.getByText('20')).toHaveClass('DayPicker-Day--end');
	});

	it('should not set any day as selected by default in range', () => {
		const { container } = renderDatePicker({ isRange: true });

		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--start')).toBeNull();
		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--end')).toBeNull();
	});

	it('should change selected date in uncontrolled mode', () => {
		renderDatePicker({
			defaultDate: new Date(2021, 4, 15),
			defaultVisibleMonth: new Date(2021, 4, 3)
		});

		expect(screen.getByText('15')).toHaveClass('DayPicker-Day--selected');

		userEvent.click(screen.getByText('10'));

		expect(screen.getByText('15')).not.toHaveClass('DayPicker-Day--selected');
		expect(screen.getByText('10')).toHaveClass('DayPicker-Day--selected');
	});

	it('should change selected range start and end date in uncontrolled mode', () => {
		renderDatePicker({
			defaultVisibleMonth: new Date(2021, 4, 3),
			defaultDateRange: {
				start: new Date(2021, 4, 10),
				end: new Date(2021, 4, 20)
			},
			isRange: true
		});

		expect(screen.getByText('10')).toHaveClass('DayPicker-Day--start');
		expect(screen.getByText('20')).toHaveClass('DayPicker-Day--end');

		userEvent.click(screen.getByText('5'));
		userEvent.click(screen.getByText('25'));

		expect(screen.getByText('10')).not.toHaveClass('DayPicker-Day--start');
		expect(screen.getByText('20')).not.toHaveClass('DayPicker-Day--end');
		expect(screen.getByText('5')).toHaveClass('DayPicker-Day--start');
		expect(screen.getByText('25')).toHaveClass('DayPicker-Day--end');
	});

	it('should change selected date in uncontrolled mode without default value', () => {
		renderDatePicker();

		userEvent.click(screen.getByText('10'));

		expect(screen.getByText('10')).toHaveClass('DayPicker-Day--selected');
	});

	it('should change selected range start and end date in uncontrolled mode without default value', () => {
		renderDatePicker({
			isRange: true
		});

		userEvent.click(screen.getByText('5'));
		userEvent.click(screen.getByText('25'));

		expect(screen.getByText('5')).toHaveClass('DayPicker-Day--start');
		expect(screen.getByText('25')).toHaveClass('DayPicker-Day--end');
	});

	it('should call onDateChange handler', () => {
		renderDatePicker({
			defaultDate: new Date(2021, 4, 15),
			defaultVisibleMonth: new Date(2021, 4, 3)
		});

		userEvent.click(screen.getByText('10'));

		expect(mockOnDateChanged).toHaveBeenCalledWith(new Date('2021-05-10T12:00:00.000Z'));
	});

	it('should call onDateRangeChange handler in uncontrolled mode', () => {
		renderDatePicker({
			defaultVisibleMonth: new Date(2021, 4, 3),
			defaultDateRange: {
				start: new Date(2021, 4, 10),
				end: new Date(2021, 4, 20)
			},
			isRange: true
		});

		userEvent.click(screen.getByText('5'));
		userEvent.click(screen.getByText('25'));

		expect(mockOnDateRangeChanged).toHaveBeenCalledTimes(2);
		expect(mockOnDateRangeChanged).toHaveBeenCalledWith({
			start: new Date('2021-05-05T12:00:00.000Z'),
			end: new Date('2021-05-25T12:00:00.000Z')
		});
	});

	it('should not call onDateChange handler if not provided', () => {
		renderDatePicker({
			defaultDate: new Date(2021, 4, 15),
			defaultVisibleMonth: new Date(2021, 4, 3),
			onDateChange: undefined
		});

		userEvent.click(screen.getByText('10'));

		expect(mockOnDateChanged).not.toHaveBeenCalled();
	});

	it('should not call onDateRangeChange handler in uncontrolled mode if not provided', () => {
		renderDatePicker({
			defaultVisibleMonth: new Date(2021, 4, 3),
			defaultDateRange: {
				start: new Date(2021, 4, 10),
				end: new Date(2021, 4, 20)
			},
			isRange: true,
			onDateRangeChange: undefined
		});

		userEvent.click(screen.getByText('5'));

		expect(mockOnDateRangeChanged).not.toHaveBeenCalled();
	});

	it('should show selected month as selected', () => {
		renderDatePicker({
			date: new Date(2021, 4, 15),
			defaultVisibleMonth: new Date(2021, 4, 3),
			view: 'month'
		});

		expect(screen.getByText('May')).toHaveStyle(`
      background-color: ${theme.colors.primary['700']};
    `);
	});

	it('should not show any month as selected by default', () => {
		const { container } = renderDatePicker({
			view: 'month'
		});

		expect(container.querySelector('.month-selected')).toBeNull();
	});

	it('should show selected months', () => {
		renderDatePicker({
			defaultVisibleMonth: new Date(2021, 4, 3),
			isRange: true,
			dateRange: { start: new Date(2021, 1, 10), end: new Date(2021, 5, 20) },
			view: 'month'
		});

		expect(screen.getByText('Feb')).toHaveStyle(`
      background-color: ${theme.colors.primary['700']};
    `);
		expect(screen.getByText('May')).toHaveStyle(`
      background-color: ${theme.colors.primary['100']};
    `);
		expect(screen.getByText('Jun')).toHaveStyle(`
      background-color: ${theme.colors.primary['700']};
    `);
	});

	it('should change selected month without previous month selected', () => {
		const { container } = renderDatePicker({
			view: 'month'
		});

		expect(container.querySelector('.month-selected')).toBeNull();

		userEvent.click(screen.getByText('Oct'));

		expect(container.querySelector('.month-selected')).toBeInTheDocument();
	});

	it('should change selected month without previous month selected and range', () => {
		const { container } = renderDatePicker({
			isRange: true,
			view: 'month'
		});

		expect(container.querySelector('.month-selected')).toBeNull();

		userEvent.click(screen.getByText('Oct'));

		expect(container.querySelector('.month-selected')).toBeInTheDocument();
	});

	it('should call onDateChange handler in month view', () => {
		renderDatePicker({
			defaultDate: new Date(2021, 4, 15),
			defaultVisibleMonth: new Date(2021, 4, 3),
			view: 'month'
		});

		userEvent.click(screen.getByText('Oct'));

		expect(mockOnDateChanged).toHaveBeenCalledWith(new Date('2021-10-01T00:00:00.000Z'));
	});

	it('should call onDateRangeChange handler in uncontrolled mode in month view', () => {
		renderDatePicker({
			defaultVisibleMonth: new Date(2021, 4, 3),
			defaultDateRange: {
				start: new Date(2021, 4, 10),
				end: new Date(2021, 4, 20)
			},
			isRange: true,
			view: 'month'
		});

		userEvent.click(screen.getByText('Jan'));
		userEvent.click(screen.getByText('Dec'));

		expect(mockOnDateRangeChanged).toHaveBeenCalledTimes(2);
		expect(mockOnDateRangeChanged).toHaveBeenCalledWith({
			start: new Date('2021-01-01T00:00:00.000Z'),
			end: new Date('2021-12-01T00:00:00.000Z')
		});
	});

	it('should not call onDateChange handler if not provided in month view', () => {
		renderDatePicker({
			defaultDate: new Date(2021, 4, 15),
			defaultVisibleMonth: new Date(2021, 4, 3),
			onDateChange: undefined,
			view: 'month'
		});

		userEvent.click(screen.getByText('Oct'));

		expect(mockOnDateChanged).not.toHaveBeenCalled();
	});

	it('should not call onDateRangeChange handler in uncontrolled mode if not provided in month view', () => {
		renderDatePicker({
			defaultVisibleMonth: new Date(2021, 4, 3),
			defaultDateRange: {
				start: new Date(2021, 4, 10),
				end: new Date(2021, 4, 20)
			},
			isRange: true,
			onDateRangeChange: undefined,
			view: 'month'
		});

		userEvent.click(screen.getByText('Jul'));

		expect(mockOnDateRangeChanged).not.toHaveBeenCalled();
	});
});
