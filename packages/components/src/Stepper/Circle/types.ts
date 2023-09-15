import { FlexProps } from 'components/Flex';
import { StepperStepContextData } from '../Context/types';

export type StepperCircleProps<T extends React.ElementType = 'div'> = FlexProps<T>;

export interface StyledStepperCircleProps extends StepperStepContextData, StepperCircleProps {}
