import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import Animation from 'components/Animation';
import Counter from 'components/Counter';
import TextField from 'components/TextField';

import { StyledSelectFieldProps } from './types';

const StyledSelectField: React.FC<StyledSelectFieldProps> = styled(
  TextField
)<StyledSelectFieldProps>`
  ${(props) =>
    !props.isAutocomplete &&
    Object.keys(props.selectedOptions).length > 1 &&
    css`
      label, input::placeholder {
        ${systemCSS({ color: 'neutral.900' })}}
      }
    `}
`;

const SelectFieldCounter = Animation.withBaseAnimation(
  Counter,
  Animation.FadeInAnimation
);

SelectFieldCounter.defaultProps = {
  duration: '0.15s'
};

export { SelectFieldCounter, StyledSelectField };
