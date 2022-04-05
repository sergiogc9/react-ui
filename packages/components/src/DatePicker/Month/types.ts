import { FlexProps } from 'components/Flex';
import { DatePickerProps } from '../types';

type Props = {
	readonly date?: DatePickerProps['date'];
	readonly dateRange?: DatePickerProps['dateRange'];
	readonly defaultVisibleYear?: Date;
	readonly isRange?: DatePickerProps['isRange'];
	readonly locale?: DatePickerProps['locale'];
	readonly minDate?: DatePickerProps['minDate'];
	readonly maxDate?: DatePickerProps['maxDate'];
	readonly onMonthClick?: (month: Date) => void;
};

export type DatePickerMonthProps = Props & FlexProps;
export type StyledMonthBoxProps = DatePickerMonthProps & {
	isDisabled: boolean;
	isRangeEnd: boolean;
	isRangeStart: boolean;
	isSelected: boolean;
	isToday: boolean;
};
