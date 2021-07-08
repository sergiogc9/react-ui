import { PopoverContentProps } from 'components/Popover';
import { DatePickerProps } from '../types';

type Props = {
	/**
	 * All props passed to DatePicker
	 */
	datePickerProps: DatePickerProps;
};

export type DatePickerPopoverProps = Props & PopoverContentProps;
export type StyledDatePickerPopoverProps = PopoverContentProps;
