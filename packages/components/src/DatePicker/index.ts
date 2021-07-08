import { createNameSpacedComponent } from 'components/private/utils/components';
import DatePickerPopover, { DatePickerPopoverProps } from './Popover';
import DatePicker from './DatePicker';
import { DatePickerProps } from './types';

export { DatePickerProps, DatePickerPopoverProps };
export default createNameSpacedComponent(DatePicker, {
  Popover: DatePickerPopover
});
