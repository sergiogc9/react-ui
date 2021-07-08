import { createNameSpacedComponent } from 'components/private/utils/components';
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

export { StepperProps, StepperCircleProps, StepperIconProps, StepperStepProps, StepperTextProps };
export default createNameSpacedComponent(Stepper, {
	Circle: StepperCircle,
	Icon: StepperIcon,
	Step: StepperStep,
	Text: StepperText,
	TextOptional: StepperTextOptional
});
