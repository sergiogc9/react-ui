import React from 'react';

import Animation from 'components/Animation';
import { StepperStepContext } from '../Context';
import StyledStepperIcon from './styled';
import { StepperIconProps } from './types';

const StepperIcon: React.FC<StepperIconProps> = React.forwardRef<
  SVGSVGElement,
  any
>((props, ref) => {
  const contextData = React.useContext(StepperStepContext);

  return <StyledStepperIcon {...props} {...contextData} ref={ref} />;
});

const AnimatedStepperIcon = Animation.withBaseAnimation(
  StepperIcon,
  Animation.FadeInAnimation
);

AnimatedStepperIcon.defaultProps = {
  ...AnimatedStepperIcon.defaultProps,
  delay: undefined,
  duration: '0.5s'
};

export default React.memo(AnimatedStepperIcon);
