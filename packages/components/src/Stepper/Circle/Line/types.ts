import { BoxProps } from 'components/Box';
import { StepperStepContextData } from 'components/Stepper/Context/types';

export type StyledStepperCircleLineProps = StepperStepContextData &
  BoxProps & { length: number };

export type StepperCircleLineProps = BoxProps;
