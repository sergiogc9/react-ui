import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import StepperCircle from './Circle';
import { StepperCircleProps } from './Circle/types';
import StepperIcon from './Icon';
import { StepperIconProps } from './Icon/types';
import StepperStep from './Step';
import { StepperStepProps } from './Step/types';
import StepperText, { StepperTextOptional } from './Text';
import { StepperTextProps } from './Text/types';
import Stepper from './Stepper';
import { StepperProps } from './types';

const NamespacedStepper = createNameSpacedComponent(Stepper, {
	Circle: StepperCircle,
	Icon: StepperIcon,
	Step: StepperStep,
	Text: StepperText,
	TextOptional: StepperTextOptional
});

NamespacedStepper.displayName = 'Stepper';
StepperCircle.displayName = 'Stepper.Circle';
StepperIcon.displayName = 'Stepper.Icon';
StepperStep.displayName = 'Stepper.Step';
StepperText.displayName = 'Stepper.Text';
StepperTextOptional.displayName = 'Stepper.TextOptional';

export type { StepperProps, StepperCircleProps, StepperIconProps, StepperStepProps, StepperTextProps };
export default NamespacedStepper;
