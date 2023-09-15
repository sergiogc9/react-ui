import { FlexProps } from 'components/Flex';
import { DatePickerProps } from '../types';

export type DatePickerMonthProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	readonly date?: DatePickerProps['date'];
	readonly dateRange?: DatePickerProps['dateRange'];
	readonly defaultVisibleYear?: Date;
	readonly isRange?: DatePickerProps['isRange'];
	readonly locale?: DatePickerProps['locale'];
	readonly minDate?: DatePickerProps['minDate'];
	readonly maxDate?: DatePickerProps['maxDate'];
	readonly onMonthClick?: (month: Date) => void;
};
export interface StyledMonthBoxProps extends DatePickerMonthProps {
	isDisabled: boolean;
	isRangeEnd: boolean;
	isRangeStart: boolean;
	isSelected: boolean;
	isToday: boolean;
}
