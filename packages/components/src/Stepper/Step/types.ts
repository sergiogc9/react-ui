import { FlexProps } from 'components/Flex';
import { StepperProps } from 'components/Stepper';

export type StepperStepProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	/**
	 *  Boolean to enable clicking the step or not
	 */
	readonly isAccessible?: boolean;
};
export interface StyledStepperStepProps extends StepperStepProps {
	variant: StepperProps['variant'];
}
