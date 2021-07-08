import React from 'react';

import StepperContext from './Context';
import StyledStepper from './styled';
import { StepperProps } from './types';

const Stepper: React.FC<StepperProps> = ({
  children,
  current,
  onChangeStep,
  showCheckIcon = false,
  variant = 'vertical',
  ...rest
}) => {
  const contextValues = React.useMemo(
    () => ({
      current,
      onChangeStep,
      showCheckIcon,
      steps: (React.Children.toArray(children) as React.ReactElement[]).map(
        (child) => child.props.children
      ),
      totalSteps: React.Children.count(children),
      variant
    }),
    [children, current, onChangeStep, showCheckIcon, variant]
  );

  return (
    <StepperContext.Provider value={contextValues}>
      <StyledStepper {...rest} current={current} variant={variant}>
        {children}
      </StyledStepper>
    </StepperContext.Provider>
  );
};

export default React.memo(Stepper);
