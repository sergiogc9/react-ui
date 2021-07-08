import styled from 'styled-components';

import Counter, { CounterProps } from 'components/Counter';
import location from './variants/location';
import { BadgeCounterProps } from './types';

const BadgeCounter: React.FC<CounterProps & BadgeCounterProps> = styled(
  Counter
)`
  ${location}
`;

BadgeCounter.defaultProps = {
  aspectSize: 's',
  position: 'absolute'
};

export { BadgeCounter };
