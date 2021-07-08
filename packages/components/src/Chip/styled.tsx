import styled from 'styled-components';

import Box from 'components/Box';
import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { ChipGroupProps } from './types';

export const StyledChip: React.FC<ChipGroupProps> = styled(Box)`
  ${aspectSize}
  ${variant}
  text-decoration: none;
`;

StyledChip.defaultProps = {
  alignItems: 'center',
  border: '1px solid',
  boxSizing: 'border-box',
  overflow: 'hidden',
  transition: 'background 0.3s ease-in, border-color 0.3s ease-in'
};
