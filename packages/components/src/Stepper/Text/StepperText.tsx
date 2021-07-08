import React from 'react';

import { StepperStepContext } from '../Context';
import StyledStepText from './styled';
import { StepperTextProps } from './types';

const StepperText: React.FC<StepperTextProps> = (props) => {
  const { current, index, variant } = React.useContext(StepperStepContext);

  return (
    <StyledStepText
      {...props}
      isCurrent={current === index}
      isEnabled={current >= index}
      variant={variant}
    />
  );
};

const StepperTextOptional: React.FC<StepperTextProps> = ({
  color = 'neutral.500',
  fontSize = 0,
  fontWeight = 'regular',
  marginTop = 0,
  ...rest
}) => {
  return (
    <StepperText
      {...rest}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginTop={marginTop}
    />
  );
};

export { StepperTextOptional };
export default React.memo(StepperText);
