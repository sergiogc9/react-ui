import { DayPickerProps } from 'react-day-picker';

import { FlexProps } from 'components/Flex';
import { DatePickerProps } from '../types';

export type DatePickerDayProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	readonly date?: DatePickerProps['date'];
	readonly dateRange?: DatePickerProps['dateRange'];
	readonly defaultVisibleMonth?: DatePickerProps['defaultVisibleMonth'];
	readonly disabledDays?: DayPickerProps['disabledDays'];
	readonly firstDayOfWeek?: DayPickerProps['firstDayOfWeek'];
	readonly isRange?: DatePickerProps['isRange'];
	readonly locale?: DatePickerProps['locale'];
	readonly minDate?: DatePickerProps['minDate'];
	readonly maxDate?: DatePickerProps['maxDate'];
	readonly modifiers?: DatePickerProps['modifiers'];
	readonly onDayClick?: DayPickerProps['onDayClick'];
};
