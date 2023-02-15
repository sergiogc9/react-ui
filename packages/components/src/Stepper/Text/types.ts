import { StepperProps } from 'components/Stepper';
import { TextProps } from 'components/Text';

export interface StyledStepperTextProps extends TextProps<React.HTMLAttributes<HTMLSpanElement>, undefined> {
	isCurrent: boolean;
	isEnabled: boolean;
	variant: StepperProps['variant'];
}

export interface StepperTextProps extends TextProps<React.HTMLAttributes<HTMLSpanElement>, undefined> {}
