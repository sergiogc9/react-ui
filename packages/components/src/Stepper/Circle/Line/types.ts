import { FlexProps } from 'components/Flex';
import { StepperStepContextData } from 'components/Stepper/Context/types';

export type StepperCircleLineProps<T extends React.ElementType = 'div'> = FlexProps<T>;

export type StyledStepperCircleLineProps<T extends React.ElementType = 'div'> = FlexProps<T> &
	StepperStepContextData & {
		length: number;
	};
