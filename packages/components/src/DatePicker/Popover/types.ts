import { PopoverContentProps } from 'components/Popover';
import { DatePickerProps } from '../types';

export interface DatePickerPopoverProps extends PopoverContentProps {
	/**
	 * All props passed to DatePicker
	 */
	datePickerProps: DatePickerProps;
}
export interface StyledDatePickerPopoverProps extends PopoverContentProps {}
