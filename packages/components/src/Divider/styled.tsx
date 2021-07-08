import styled from 'styled-components';

import Box from 'components/Box';
import { DividerProps } from './types';

export const Divider: React.FC<DividerProps> = styled(Box)<DividerProps>``;

Divider.defaultProps = {
  backgroundClip: 'content-box',
  backgroundColor: 'neutral.100',
  flexShrink: 0,
  maxWidth: '100%',
  height: '1px',
  width: '100%'
};
