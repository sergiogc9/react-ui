import React from 'react';

import InputCheck from 'components/private/components/InputCheck';
import { RadioButtonProps } from './types';

const RadioButton: React.FC<RadioButtonProps> = ({ ...props }) => {
  return <InputCheck type="radio" {...props} />;
};

export default React.memo(RadioButton);
