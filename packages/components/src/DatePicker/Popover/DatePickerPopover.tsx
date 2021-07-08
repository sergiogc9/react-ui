import React from 'react';

import Box from 'components/Box';
import Divider from 'components/Divider';
import DatePicker from 'components/DatePicker';
import StyledDatePickerPopover from './styled';
import { DatePickerPopoverProps } from './types';

const DatePickerPopover: React.FC<DatePickerPopoverProps> = ({
  children,
  datePickerProps,
  ...rest
}) => {
  return (
    <StyledDatePickerPopover {...rest}>
      <Box>
        <DatePicker {...datePickerProps} />
      </Box>
      <Divider marginTop={-2} />
      {children}
    </StyledDatePickerPopover>
  );
};

export default React.memo(DatePickerPopover);
