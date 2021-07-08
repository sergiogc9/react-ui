import React from 'react';

import Box from 'components/Box';
import { changeMonth, changeYear, DateRange, updateDateRange } from 'components/private/utils/date';
import DatePickerDay, { DatePickerDayProps } from './Day';
import DatePickerMonth, { DatePickerMonthProps } from './Month';
import { DatePickerProps } from './types';

const DatePicker: React.FC<DatePickerProps> = ({
	date,
	dateRange,
	defaultDate,
	defaultDateRange,
	defaultVisibleMonth = new Date(),
	disabledDays,
	isRange = false,
	locale = 'en-US',
	maxDate,
	minDate,
	modifiers,
	numberOfMonths = 1,
	onDateChange,
	onDateRangeChange,
	view = 'day',
	...rest
}) => {
	const [selectedDate, setSelectedDate] = React.useState(defaultDate);
	const [selectedDateRange, setSelectedDateRange] = React.useState(defaultDateRange);

	const onDayClicked = React.useCallback<NonNullable<DatePickerDayProps['onDayClick']>>(
		day => {
			if (isRange) {
				let newRange: DateRange;
				if (selectedDateRange) {
					newRange = updateDateRange(day, selectedDateRange);
				} else newRange = { start: day, end: day };
				setSelectedDateRange(newRange);
				if (onDateRangeChange) onDateRangeChange(newRange);
			} else {
				setSelectedDate(day);
				if (onDateChange) onDateChange(day);
			}
		},
		[isRange, onDateChange, onDateRangeChange, selectedDateRange]
	);

	const onMonthClicked = React.useCallback<NonNullable<DatePickerMonthProps['onMonthClick']>>(
		month => {
			if (isRange) {
				let newRange: DateRange;
				if (selectedDateRange) {
					newRange = updateDateRange(month, selectedDateRange);
				} else newRange = { start: month, end: month };
				setSelectedDateRange(newRange);
				if (onDateRangeChange) onDateRangeChange(newRange);
			} else {
				setSelectedDate(month);
				if (onDateChange) onDateChange(month);
			}
		},
		[isRange, onDateChange, onDateRangeChange, selectedDateRange]
	);

	if (view === 'day')
		return (
			<Box {...rest}>
				{[...Array(numberOfMonths).keys()].map(index => (
					<DatePickerDay
						date={date ?? selectedDate}
						dateRange={dateRange ?? selectedDateRange}
						defaultVisibleMonth={changeMonth(defaultVisibleMonth, index)}
						disabledDays={disabledDays}
						isRange={isRange}
						key={index}
						locale={locale}
						maxDate={maxDate}
						minDate={minDate}
						modifiers={modifiers}
						onDayClick={onDayClicked}
					/>
				))}
			</Box>
		);

	return (
		<Box {...rest}>
			{[...Array(numberOfMonths).keys()].map(index => (
				<DatePickerMonth
					date={date ?? selectedDate}
					dateRange={dateRange ?? selectedDateRange}
					defaultVisibleYear={changeYear(defaultVisibleMonth, index)}
					isRange={isRange}
					key={index}
					locale={locale}
					maxDate={maxDate}
					minDate={minDate}
					onMonthClick={onMonthClicked}
				/>
			))}
		</Box>
	);
};

export default React.memo(DatePicker);
