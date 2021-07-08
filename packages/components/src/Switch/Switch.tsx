import React, { useState, useCallback } from 'react';

import StyledSwitch, { SwitchBackground, SwitchToggle } from './styled';
import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = ({
  aspectSize = 'm',
  isChecked,
  isDefaultChecked,
  isDisabled,
  onChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(!!isDefaultChecked);

  const onSwitchClicked = useCallback(() => {
    if (!isDisabled) {
      setChecked(!checked);
      if (onChange) onChange(!checked);
    }
  }, [isDisabled, onChange, checked]);

  return (
    <StyledSwitch
      aspectSize={aspectSize}
      isDisabled={isDisabled}
      onClick={onSwitchClicked}
      {...rest}
    >
      <SwitchBackground
        isChecked={isChecked ?? checked}
        isDisabled={isDisabled}
      />
      <SwitchToggle isChecked={isChecked ?? checked} isDisabled={isDisabled} />
    </StyledSwitch>
  );
};

export default React.memo(Switch);
