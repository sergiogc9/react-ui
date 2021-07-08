import { DatePickerProps } from 'components/DatePicker';
import { TextFieldBaseProps } from '../Base';

type Props = {
  /**
   * The date to show in the input when used as controlled
   */
  readonly date?: Date;
  /**
   * The default date to show in the input when used as uncontrolled
   */
  readonly defaultDate?: Date;
  /**
   * All props passed to DatePicker without date and date range related props
   */
  readonly datePickerProps?: Omit<
    DatePickerProps,
    | 'date'
    | 'dateRange'
    | 'defaultDate'
    | 'defaultDateRange'
    | 'onDateChange'
    | 'onDateRangeChange'
    | 'isRange'
  >;
  /**
   * Handler with the new selected date
   */
  readonly onDateChange?: (date?: Date) => void;
};

export type TextFieldDateProps = Props & TextFieldBaseProps;
