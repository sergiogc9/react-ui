import React from 'react';
import { useTheme } from 'styled-components';

import {
	changeYear,
	getLocaleMonths,
	endOfMonth,
	isDateInsideRange,
	isSameDay,
	startOfMonth,
	startOfYear
} from 'components/private/utils/date';
import Box from 'components/Box';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';
import Title from 'components/Title';
import StyledDatePickerMonth, { StyledMonthBox } from './styled';
import { DatePickerMonthProps } from './types';

const isMonthSelected = (
	month: Date,
	isRange: DatePickerMonthProps['isRange'],
	date: DatePickerMonthProps['date'],
	dateRange: DatePickerMonthProps['dateRange']
) => {
	if (isRange) {
		if (!dateRange) return false;
		return isDateInsideRange(
			month,
			{
				start: startOfMonth(dateRange.start),
				end: endOfMonth(dateRange.end)
			}!
		);
	}

	if (!date) return false;
	return isSameDay(startOfMonth(month), startOfMonth(date));
};

const isMonthDisabled = (
	month: Date,
	minDate: DatePickerMonthProps['minDate'],
	maxDate: DatePickerMonthProps['maxDate']
) => {
	if (minDate && startOfMonth(minDate) > month) return true;
	if (maxDate && startOfMonth(maxDate) < month) return true;
	return false;
};

const DatePickerMonth: React.FC<DatePickerMonthProps> = ({
	date,
	dateRange,
	defaultVisibleYear,
	isRange,
	locale,
	maxDate,
	minDate,
	onMonthClick,
	...rest
}) => {
	const [visibleYear, setVisibleYear] = React.useState(startOfYear(defaultVisibleYear ?? new Date()));

	const theme = useTheme();

	const yearContent = React.useMemo(() => {
		return (
			<Box alignItems="center" justifyContent="space-between" marginBottom={1}>
				<IconButton
					aspectSize="s"
					data-testid="datePickerMonthPreviousYearIcon"
					isDisabled={minDate && new Date(minDate).getFullYear() >= visibleYear.getFullYear()}
					onClick={() => setVisibleYear(year => changeYear(year, -1))}
				>
					<Icon icon="arrow-left" styling="outlined" />
				</IconButton>
				<Title aspectSize="subtle" textTransform="capitalize">
					{`${visibleYear.getFullYear()}`}
				</Title>
				<IconButton
					aspectSize="s"
					data-testid="datePickerMonthNextYearIcon"
					isDisabled={maxDate && new Date(maxDate).getFullYear() <= visibleYear.getFullYear()}
					onClick={() => setVisibleYear(year => changeYear(year, 1))}
				>
					<Icon icon="arrow-right" styling="outlined" />
				</IconButton>
			</Box>
		);
	}, [maxDate, minDate, visibleYear]);

	const monthsContent = React.useMemo(() => {
		const monthsTexts = getLocaleMonths(locale, 'short');
		const today = startOfMonth(new Date());
		return (
			<Box justifyContent="center" flexWrap="wrap">
				{monthsTexts.map((month, index) => {
					const monthDate = new Date(visibleYear);
					monthDate.setMonth(index);
					const isSelected = isMonthSelected(monthDate, isRange, date, dateRange);
					const isDisabled = isMonthDisabled(monthDate, minDate, maxDate);
					const isToday = isSameDay(startOfMonth(monthDate), today);
					const isRangeStart =
						!!isRange && !!dateRange && isSameDay(startOfMonth(monthDate), startOfMonth(dateRange.start));
					const isRangeEnd =
						!!isRange && !!dateRange && isSameDay(startOfMonth(monthDate), startOfMonth(dateRange.end));

					return (
						<StyledMonthBox
							className={isSelected ? 'month-selected' : ''}
							isDisabled={isDisabled}
							isRange={isRange}
							isRangeEnd={isRangeEnd}
							isRangeStart={isRangeStart}
							isSelected={isSelected}
							isToday={isToday}
							key={month}
							onClick={() => {
								if (!isDisabled && onMonthClick) onMonthClick(monthDate);
							}}
						>
							{month}
						</StyledMonthBox>
					);
				})}
			</Box>
		);
	}, [date, dateRange, isRange, locale, maxDate, minDate, onMonthClick, visibleYear]);

	return (
		<StyledDatePickerMonth width={theme.components.datePicker.day.size * 7} {...rest}>
			{yearContent}
			{monthsContent}
		</StyledDatePickerMonth>
	);
};

export default React.memo(DatePickerMonth);
