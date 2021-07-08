import styled from 'styled-components';

import Box from 'components/Box';
import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { CounterProps } from './types';

export const StyledCounter: React.FC<CounterProps> = styled(Box)`
  ${aspectSize}
  ${variant}
`;

StyledCounter.defaultProps = {
  alignItems: 'center',
  aspectSize: 'm',
  fontWeight: 'semibold',
  justifyContent: 'center'
};
