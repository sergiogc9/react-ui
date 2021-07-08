import React from 'react';
import styled from 'styled-components';

import Popover from 'components/Popover';
import { StyledDatePickerPopoverProps } from './types';

const StyledDatePickerPopover: React.FC<StyledDatePickerPopoverProps> = styled(
  Popover.Content
)``;

StyledDatePickerPopover.defaultProps = {
  flexDirection: 'column',
  isInteractive: true,
  paddingX: 0,
  paddingY: 0,
  placement: 'bottom-start',
  height: 'auto',
  width: 'auto'
};

export default React.memo(StyledDatePickerPopover);
