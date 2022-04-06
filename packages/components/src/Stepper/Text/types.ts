import { StepperProps } from 'components/Stepper';
import { TextProps } from 'components/Text';

export type StyledStepperTextProps = {
	isCurrent: boolean;
	isEnabled: boolean;
	variant: StepperProps['variant'];
} & TextProps;

export type StepperTextProps = TextProps;
