import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';
import Popover from 'components/Popover';

import { SelectPopoverProps } from './types';

const StyledSelectPopover: React.FC<SelectPopoverProps> = styled(
  Popover.Content
)<SelectPopoverProps>`
  &[data-placement='top'] {
    margin-top: 10px;
  }
  &[data-placement='bottom'] {
    margin-bottom: 10px;
  }
`;

StyledSelectPopover.defaultProps = {
  flexDirection: 'column',
  height: 'auto',
  paddingX: 0,
  paddingY: 0
};

const StyledSelectPopoverFooter: React.FC<SelectPopoverProps> = styled(
  Box
)<SelectPopoverProps>``;

StyledSelectPopoverFooter.defaultProps = {
  alignItems: 'center',
  padding: 3,
  justifyContent: 'space-between',
  height: 64
};

const StyledSelectPopoverEmptyBox: React.FC<SelectPopoverProps> = styled(
  Box
)<SelectPopoverProps>``;

StyledSelectPopoverEmptyBox.defaultProps = {
  alignItems: 'center',
  bg: 'neutral.50',
  color: 'neutral.900',
  fontSize: 2,
  justifyContent: 'center',
  height: 64
};

const StyledPopoverListBox: React.FC<SelectPopoverProps> = styled(
  Box
)<SelectPopoverProps>``;

StyledPopoverListBox.defaultProps = {
  as: 'ul',
  flexDirection: 'column',
  maxHeight: 200,
  overflowY: 'auto'
};

export {
  StyledSelectPopover,
  StyledSelectPopoverEmptyBox,
  StyledSelectPopoverFooter,
  StyledPopoverListBox
};
