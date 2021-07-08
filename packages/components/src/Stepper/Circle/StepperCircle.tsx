import React from 'react';

import { StepperStepContext } from '../Context';
import StepperIcon from '../Icon';
import StyledStepperCircleLine from './Line';
import StyledStepCircle from './styled';
import { StepperCircleProps } from './types';

const StepperCircle: React.FC<StepperCircleProps> = ({ children, ...rest }) => {
  const contextData = React.useContext(StepperStepContext);

  const circleContent = React.useMemo(() => {
    if (contextData.showCheckIcon && contextData.current > contextData.index) {
      const iconAspectSize =
        contextData.variant === 'compacted' ||
        contextData.variant === 'compacted-no-line'
          ? 's'
          : 'm';
      return (
        <StepperIcon
          aspectSize={iconAspectSize}
          data-testid="stepper-circle-check-icon"
          icon="check"
          key="stepper-circle-check-icon"
          styling="outlined"
        />
      );
    }

    return children;
  }, [children, contextData]);

  return (
    <StyledStepCircle {...rest} {...contextData} className="stepper-circle">
      {circleContent}
      {!contextData.isLast && (
        <StyledStepperCircleLine
          data-testid="stepper-circle-line"
          {...contextData}
        />
      )}
    </StyledStepCircle>
  );
};

export default React.memo(StepperCircle);
