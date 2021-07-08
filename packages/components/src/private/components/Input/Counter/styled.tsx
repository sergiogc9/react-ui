import styled from 'styled-components';
import css from '@styled-system/css';

import Content from 'components/Content';
import { InputCounterProps } from './types';

export const StyledInputCounter: React.FC<InputCounterProps> = styled(
  Content
)<InputCounterProps>`
  flex-shrink: 0;

  ${({ isDisabled, color }) =>
    css({
      color: isDisabled ? 'neutral.500' : color
    })}
`;

StyledInputCounter.defaultProps = {
  fontSize: 0,
  marginLeft: 'auto',
  paddingLeft: 1
};
