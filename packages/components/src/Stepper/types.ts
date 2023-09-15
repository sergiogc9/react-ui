import { FlexProps } from 'components/Flex';

export type StepperProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	/**
	 * The current step starting from 1.
	 */
	readonly current: number;
	/**
	 *  Handler called when a step is clicked
	 */
	readonly onChangeStep?: (step: number) => void;
	/**
	 *  Boolean to show a check icon for previous steps
	 */
	readonly showCheckIcon?: boolean;
	/**
	 * The variant of the stepper.
	 */
	readonly variant?: 'compacted' | 'compacted-no-line' | 'horizontal' | 'vertical';
};
