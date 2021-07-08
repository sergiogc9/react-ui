import styled from 'styled-components';

import Box from 'components/Box';
import { PopoverContentProps } from './types';

export const StyledPopover: React.FC<PopoverContentProps> = styled(
  Box
)<PopoverContentProps>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition-duration: ${(props) => props.duration}ms;
`;

StyledPopover.defaultProps = {
  bg: 'neutral.0',
  borderColor: 'neutral.100',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: '1px',
  boxShadow: 'center2',
  height: '150px',
  paddingX: 3,
  paddingY: 2,
  transition: 'opacity 0.25s ease-in',
  width: '150px'
};
