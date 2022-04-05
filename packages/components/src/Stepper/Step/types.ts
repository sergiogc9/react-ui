import { FlexProps } from 'components/Flex';
import { StepperProps } from 'components/Stepper';

export type StepperStepProps = FlexProps & {
	/**
	 *  Boolean to enable clicking the step or not
	 */
	readonly isAccessible?: boolean;
};
export type StyledStepperStepProps = StepperStepProps & {
	variant: StepperProps['variant'];
};
