import { StepperProps } from 'components/Stepper';
import { ExtendedTextComponent, ExtendedTextProps } from 'components/types';

type StyledProps = {
	isCurrent: boolean;
	isEnabled: boolean;
	variant: StepperProps['variant'];
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type StepperTextProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T>;

type StepperTextComponent = ExtendedTextComponent<Props>;

type StyledStepperTextProps<T extends React.ElementType = 'span'> = ExtendedTextProps<StyledProps, T>;

export { StepperTextProps, StepperTextComponent, StyledStepperTextProps };
