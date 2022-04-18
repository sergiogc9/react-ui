import { BaseAnimationProps } from 'components/Animation';
import { IconFontAwesomeProps, IconProps } from 'components/Icon';

import { StepperStepContextData } from '../Context/types';

export type StepperIconProps = IconProps & BaseAnimationProps;
export type StyledStepperIconProps = StepperIconProps & StepperStepContextData;

export type StepperIconFontAwesomeProps = IconFontAwesomeProps & BaseAnimationProps;
export type StyledStepperIconFontAwesomeProps = StepperIconFontAwesomeProps & StepperStepContextData;
