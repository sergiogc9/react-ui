import { FlexProps } from 'components/Flex';
import { StepperStepContextData } from '../Context/types';

export interface StepperCircleProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}

export interface StyledStepperCircleProps extends StepperStepContextData, StepperCircleProps {}
