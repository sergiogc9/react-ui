import React from 'react';

import { StepperContextData } from './types';

const defaultContext: StepperContextData = {
  current: 1,
  steps: [],
  totalSteps: 0,
  showCheckIcon: false,
  variant: 'vertical'
};

const StepperContext = React.createContext<StepperContextData>(defaultContext);

export default StepperContext;
