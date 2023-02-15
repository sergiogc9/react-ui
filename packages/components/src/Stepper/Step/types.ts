import { FlexProps } from 'components/Flex';
import { StepperProps } from 'components/Stepper';

export interface StepperStepProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 *  Boolean to enable clicking the step or not
	 */
	readonly isAccessible?: boolean;
}
export interface StyledStepperStepProps extends StepperStepProps {
	variant: StepperProps['variant'];
}
