import { BoxProps } from 'components/Box';
import { StepperProps } from 'components/Stepper';

export type StepperStepProps = BoxProps & {
  /**
   *  Boolean to enable clicking the step or not
   */
  readonly isAccessible?: boolean;
};
export type StyledStepperStepProps = StepperStepProps & {
  variant: StepperProps['variant'];
};
