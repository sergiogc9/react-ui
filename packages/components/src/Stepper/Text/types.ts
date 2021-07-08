import { ContentProps } from 'components/Content';
import { StepperProps } from 'components/Stepper';

export type StyledStepperTextProps = {
	isCurrent: boolean;
	isEnabled: boolean;
	variant: StepperProps['variant'];
} & ContentProps;

export type StepperTextProps = ContentProps;
