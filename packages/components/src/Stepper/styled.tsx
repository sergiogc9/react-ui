import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';
import { StepperProps } from './types';

const StyledStepper: React.FC<StepperProps> = styled(Box)<StepperProps>`
	flex-direction: ${props => (props.variant === 'vertical' ? 'column' : 'row')};
`;

export default StyledStepper;
