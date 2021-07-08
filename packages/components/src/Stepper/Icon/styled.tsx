import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';
import { StyledStepperIconProps } from './types';

const StyledStepperIcon: React.FC<StyledStepperIconProps> = styled(
  Icon
)<StyledStepperIconProps>`
  animation-delay: ${(props) =>
    props.delay ?? (props.current > props.index ? '0.25s' : '0.5s')};
`;

StyledStepperIcon.defaultProps = {
  aspectSize: 's',
  fill: 'currentColor'
};

export default React.memo(StyledStepperIcon);
