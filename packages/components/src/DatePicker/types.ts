import React from 'react';
import { DayPickerProps } from 'react-day-picker';

import { FlexProps } from 'components/Flex';
import { DateRange } from 'components/private/utils/date/types';

export interface DatePickerProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * The date to be shown as selected. Use it to control the component from outside. Only used without range.
	 */
	readonly date?: Date;
	/**
	 * The date ranged selected. Use it when controlling the date picker from outside.
	 */
	readonly dateRange?: DateRange;
	/**
	 * The default date to set as selected. By default is set to today. Used in uncontrolled mode and without range.
	 */
	readonly defaultDate?: Date;
	/**
	 * The default dates range to set as selected when using ranges. By default is set to today and today plus 10 days. Used it when using the date picker in uncontrolled mode.
	 */
	readonly defaultDateRange?: DateRange;
	/**
	 * The month to be visible at first
	 */
	readonly defaultVisibleMonth?: Date;
	/**
	 * The days to set as disabled.
	 * More info at: http://react-day-picker.js.org/api/DayPicker#disabledDays
	 */
	readonly disabledDays?: DayPickerProps['disabledDays'];
	/**
	 * Boolean to specify if the date picker is a range date picker or not
	 */
	readonly isRange?: boolean;
	/**
	 * The maximum date where an user can select. All days after it will be shown as disabled.
	 */
	readonly maxDate?: Date;
	/**
	 * The modifiers to use in the date picker.
	 * More info at: http://react-day-picker.js.org/docs/matching-days
	 */
	readonly modifiers?: DayPickerProps['modifiers'];
	/**
	 * The number of months to be shown
	 */
	readonly numberOfMonths?: number;
	/**
	 * Handler called when user selects a day. Only fired if not using range.
	 */
	readonly onDateChange?: (date: Date) => void;
	/**
	 * Handler called when user selects a day. Only fired if not using range.
	 */
	readonly onDateRangeChange?: (range: DateRange) => void;
	/**
	 * The language locale to use
	 */
	readonly locale?: string;
	/**
	 * The minimum date where an user can select. All days before it will be shown as disabled.
	 */
	readonly minDate?: Date;
	/**
	 * Toggle between day or month view. If month view is used, no day can be selected.
	 */
	readonly view?: 'day' | 'month';
}
