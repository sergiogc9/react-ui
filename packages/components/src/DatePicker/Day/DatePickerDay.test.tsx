import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import DatePickerDay from '.';
import { DatePickerDayProps } from './types';

const datePickerDayTestId = 'AwesomeDatePicker';

const mockOnDayClicked = jest.fn();
const renderDatePickerDay = (props?: Partial<DatePickerDayProps>) =>
	render(withTheme(<DatePickerDay data-testid={datePickerDayTestId} onDayClick={mockOnDayClicked} {...props} />));

describe('DatePickerDay component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render calendar by default', () => {
		renderDatePickerDay();

		expect(screen.getByText('Mon')).toBeInTheDocument();
	});

	it('should render calendar in custom locale', () => {
		renderDatePickerDay({ locale: 'ca-ES' });

		expect(screen.getByText('dl.')).toBeInTheDocument();
	});

	it('should render calendar with custom week order', () => {
		renderDatePickerDay({ firstDayOfWeek: 2 });

		expect(screen.getByText('Mon').parentElement!.nextSibling).toBeNull();
	});

	it('should render calendar with default visible month', () => {
		renderDatePickerDay({ defaultVisibleMonth: new Date(2021, 4, 3) });

		expect(screen.getByText('May 2021')).toBeInTheDocument();
	});

	it('should not render any day as selected', () => {
		const { container } = renderDatePickerDay();

		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--selected')).toBeNull();
	});

	it('should render day as selected', () => {
		const { container } = renderDatePickerDay({
			date: new Date(2021, 4, 5),
			defaultVisibleMonth: new Date(2021, 4, 3)
		});

		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--selected')).toBeInTheDocument();
	});

	it('should not render any day as selected in range', () => {
		const { container } = renderDatePickerDay({ isRange: true });

		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--start')).toBeNull();
		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--end')).toBeNull();
	});

	it('should render day as selected in range', () => {
		const { container } = renderDatePickerDay({
			dateRange: { start: new Date(2021, 4, 5), end: new Date(2021, 4, 20) },
			defaultVisibleMonth: new Date(2021, 4, 3),
			isRange: true
		});

		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--start')).toBeInTheDocument();
		expect(container.querySelector('.DayPicker-Day.DayPicker-Day--end')).toBeInTheDocument();
	});

	it('should change to previous month', () => {
		renderDatePickerDay({ defaultVisibleMonth: new Date(2021, 4, 3) });

		userEvent.click(screen.getByTestId('datePickerDayPreviousMonthIcon'));

		expect(screen.getByText('April 2021')).toBeInTheDocument();
	});

	it('should change to next month', () => {
		renderDatePickerDay({ defaultVisibleMonth: new Date(2021, 4, 3) });

		userEvent.click(screen.getByTestId('datePickerDayNextMonthIcon'));

		expect(screen.getByText('June 2021')).toBeInTheDocument();
	});

	it('should not change to previous month if previous than minDate', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2021, 4, 3),
			minDate: new Date(2021, 4, 1)
		});

		userEvent.click(screen.getByTestId('datePickerDayPreviousMonthIcon'));

		expect(screen.getByText('May 2021')).toBeInTheDocument();
	});

	it('should not change to next month if after than maxDate', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2021, 4, 3),
			maxDate: new Date(2021, 4, 20)
		});

		userEvent.click(screen.getByTestId('datePickerDayNextMonthIcon'));

		expect(screen.getByText('May 2021')).toBeInTheDocument();
	});

	it('should show range start and end elements', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2021, 4, 3),
			isRange: true,
			dateRange: { start: new Date(2021, 4, 10), end: new Date(2021, 4, 20) }
		});

		expect(screen.getByText('10')).toHaveClass('DayPicker-Day--start');
		expect(screen.getByText('20')).toHaveClass('DayPicker-Day--end');
	});

	it('should call onDayClicked handler', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2020, 4, 3)
		});

		userEvent.click(screen.getByText('20'));

		expect(mockOnDayClicked).toHaveBeenCalledWith(new Date('2020-05-20T12:00:00.000Z'), {}, expect.anything());
	});

	it('should not call onDayClicked handler if day is disabled', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2021, 4, 3),
			disabledDays: new Date(2021, 4, 20)
		});

		userEvent.click(screen.getByText('20'));

		expect(mockOnDayClicked).not.toHaveBeenCalled();
	});

	it('should not call onDayClicked handler if not provided', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2021, 4, 3),
			onDayClick: undefined
		});

		userEvent.click(screen.getByText('20'));

		expect(mockOnDayClicked).not.toHaveBeenCalled();
	});

	it('should show month view if clicking in caption', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2021, 4, 3)
		});

		userEvent.click(screen.getByText('May 2021'));

		expect(screen.getByText('Apr')).toBeInTheDocument();
	});

	it('should change current month using month view', () => {
		renderDatePickerDay({
			defaultVisibleMonth: new Date(2021, 4, 3)
		});

		userEvent.click(screen.getByText('May 2021'));
		userEvent.click(screen.getByTestId('datePickerMonthNextYearIcon'));
		userEvent.click(screen.getByText('Oct'));

		expect(screen.getByText('October 2022')).toBeInTheDocument();
	});
});
