import React from 'react';

import Animation from 'components/Animation';

import { StepperStepContext } from '../Context';
import { StyledStepperIcon, StyledStepperFontAwesomeIcon } from './styled';
import { StepperIconFontAwesomeProps, StepperIconProps } from './types';

const StepperIcon: React.FC<StepperIconProps> = React.forwardRef<SVGSVGElement, any>((props, ref) => {
	const contextData = React.useContext(StepperStepContext);

	return <StyledStepperIcon {...props} {...contextData} ref={ref} />;
});

const AnimatedStepperIcon = Animation.withBaseAnimation(StepperIcon, Animation.FadeInAnimation);

AnimatedStepperIcon.defaultProps = {
	...AnimatedStepperIcon.defaultProps,
	delay: undefined,
	duration: '0.5s'
};

const StepperIconFontAwesome: React.FC<StepperIconFontAwesomeProps> = React.forwardRef<SVGSVGElement, any>(
	(props, ref) => {
		const contextData = React.useContext(StepperStepContext);

		return <StyledStepperFontAwesomeIcon {...props} {...contextData} ref={ref} />;
	}
);

const AnimatedStepperFontAwesomeIcon = Animation.withBaseAnimation(StepperIconFontAwesome, Animation.FadeInAnimation);

AnimatedStepperFontAwesomeIcon.defaultProps = {
	...AnimatedStepperFontAwesomeIcon.defaultProps,
	delay: undefined,
	duration: '0.5s'
};

const MemoStepperIcon = React.memo(AnimatedStepperIcon);
MemoStepperIcon.displayName = 'StepperIcon';

const MemoStepperIconFontAwesome = React.memo(AnimatedStepperFontAwesomeIcon);
MemoStepperIconFontAwesome.displayName = 'StepperIconFontAwesome';

export { MemoStepperIcon as StepperIcon, MemoStepperIconFontAwesome as StepperIconFontAwesome };
