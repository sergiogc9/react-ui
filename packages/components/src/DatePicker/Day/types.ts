import { DayPickerProps } from 'react-day-picker';

import { BoxProps } from 'components/Box';
import { DatePickerProps } from '../types';

type Props = {
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

export type DatePickerDayProps = Props & BoxProps;
