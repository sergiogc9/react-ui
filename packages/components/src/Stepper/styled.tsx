import styled from 'styled-components';

import Flex from 'components/Flex';
import { StepperProps } from './types';

const StyledStepper = styled(Flex)<StepperProps>`
	flex-direction: ${props => (props.variant === 'vertical' ? 'column' : 'row')};
`;

export default StyledStepper;
