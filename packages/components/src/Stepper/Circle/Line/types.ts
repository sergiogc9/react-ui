import { FlexProps } from 'components/Flex';
import { StepperStepContextData } from 'components/Stepper/Context/types';

export interface StepperCircleLineProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}

export interface StyledStepperCircleLineProps
	extends StepperStepContextData,
		FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	length: number;
}
