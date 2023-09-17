import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import DatePickerPopover, { DatePickerPopoverProps } from './Popover';
import DatePicker from './DatePicker';
import { DatePickerProps } from './types';

export type { DatePickerProps, DatePickerPopoverProps };
export default createNameSpacedComponent(DatePicker, {
	Popover: DatePickerPopover
});
