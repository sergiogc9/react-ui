import React from 'react';
import DayPicker, { Modifiers } from 'react-day-picker';

import { changeMonth, getLocaleMonths, getLocaleWeekdays, startOfMonth } from 'components/private/utils/date';
import Box from 'components/Box';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';
import Title from 'components/Title';
import StyledDatePickerMonth from '../Month';
import { getDisabledModifiers, getRangeModifiers } from './modifiers';
import StyledDatePickerDay from './styled';
import { DatePickerDayProps } from './types';

const Empty = () => null;

const DatePickerDay: React.FC<DatePickerDayProps> = ({
	date,
	dateRange,
	defaultVisibleMonth,
	disabledDays,
	isRange = false,
	locale = 'en-US',
	firstDayOfWeek = 1,
	minDate,
	maxDate,
	modifiers,
	onDayClick,
	...rest
}) => {
	const [showMonthView, setShowMonthView] = React.useState(false);
	const [visibleMonth, setVisibleMonth] = React.useState(startOfMonth(defaultVisibleMonth ?? new Date()));

	const onDayClicked = React.useCallback<NonNullable<DatePickerDayProps['onDayClick']>>(
		(day, dayModifiers, ev) => {
			if (!dayModifiers.disabled) {
				if (onDayClick) onDayClick(day, dayModifiers, ev);
			}
		},
		[onDayClick]
	);

	const localeTexts = React.useMemo(() => {
		const daysShort = getLocaleWeekdays(locale, 'short');

		return {
			daysShort: [daysShort.slice().pop(), ...daysShort.slice(0, daysShort.length - 1)] as string[],
			months: getLocaleMonths(locale, 'long')
		};
	}, [locale]);

	const selectedDays = React.useMemo(() => {
		if (isRange) {
			if (!dateRange) return undefined;
			return {
				from: new Date(dateRange.start),
				to: new Date(dateRange.end)
			};
		}

		if (!date) return undefined;
		return new Date(date);
	}, [isRange, date, dateRange]);

	const finalModifiers = React.useMemo(() => {
		return {
			...modifiers,
			...getRangeModifiers(isRange, selectedDays)
		} as Modifiers;
	}, [isRange, modifiers, selectedDays]);

	const finalDisabledDays = React.useMemo(() => {
		return getDisabledModifiers(disabledDays, minDate, maxDate);
	}, [disabledDays, maxDate, minDate]);

	const captionContent = React.useMemo(() => {
		const monthText = localeTexts.months[visibleMonth.getMonth()];
		return (
			<Box alignItems="center" justifyContent="space-between" marginBottom={1}>
				<IconButton
					aspectSize="s"
					data-testid="datePickerDayPreviousMonthIcon"
					isDisabled={minDate && minDate >= visibleMonth}
					onClick={() => setVisibleMonth(month => changeMonth(month, -1))}
				>
					<Icon icon="arrow-left" styling="outlined" />
				</IconButton>
				<Title
					aspectSize="subtle"
					cursor="pointer"
					onClick={() => setShowMonthView(isVisible => !isVisible)}
					textTransform="capitalize"
				>
					{`${monthText} ${visibleMonth.getFullYear()}`}
				</Title>
				<IconButton
					aspectSize="s"
					data-testid="datePickerDayNextMonthIcon"
					isDisabled={maxDate && maxDate <= changeMonth(visibleMonth, 1)}
					onClick={() => setVisibleMonth(month => changeMonth(month, 1))}
				>
					<Icon icon="arrow-right" styling="outlined" />
				</IconButton>
			</Box>
		);
	}, [localeTexts.months, maxDate, minDate, visibleMonth]);

	if (showMonthView) {
		return (
			<StyledDatePickerMonth
				date={date}
				dateRange={dateRange}
				defaultVisibleYear={visibleMonth}
				isRange={isRange}
				locale={locale}
				maxDate={maxDate}
				minDate={minDate}
				onMonthClick={month => {
					setVisibleMonth(month);
					setShowMonthView(false);
				}}
			/>
		);
	}

	return (
		<StyledDatePickerDay isRange={isRange} {...rest}>
			{captionContent}
			<DayPicker
				captionElement={Empty}
				navbarElement={Empty}
				disabledDays={finalDisabledDays}
				firstDayOfWeek={firstDayOfWeek}
				modifiers={finalModifiers}
				month={visibleMonth}
				onDayClick={onDayClicked}
				selectedDays={selectedDays}
				weekdaysShort={localeTexts.daysShort}
			/>
		</StyledDatePickerDay>
	);
};

export default React.memo(DatePickerDay);
