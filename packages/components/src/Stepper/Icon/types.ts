import { BaseAnimationProps } from 'components/Animation';
import { IconProps } from 'components/Icon';
import { StepperStepContextData } from '../Context/types';

export type StepperIconProps = IconProps & BaseAnimationProps;
export type StyledStepperIconProps = StepperIconProps & StepperStepContextData;
