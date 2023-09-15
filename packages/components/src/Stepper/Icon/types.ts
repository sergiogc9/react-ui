import { BaseAnimationProps } from 'components/Animation';
import { IconFontAwesomeProps, IconProps } from 'components/Icon';

import { StepperStepContextData } from '../Context/types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type StepperIconProps = IconProps & BaseAnimationProps<{}, 'svg'>;
export type StyledStepperIconProps = StepperIconProps & StepperStepContextData;

// eslint-disable-next-line @typescript-eslint/ban-types
export type StepperIconFontAwesomeProps = IconFontAwesomeProps & BaseAnimationProps<{}, 'svg'>;
export type StyledStepperIconFontAwesomeProps = StepperIconFontAwesomeProps & StepperStepContextData;
