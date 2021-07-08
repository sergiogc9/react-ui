import React from 'react';

import { StepperStepContextData } from './types';

const defaultContext: StepperStepContextData = {
  current: 0,
  index: 0,
  isLast: false,
  showCheckIcon: false,
  variant: 'vertical'
};

const StepperStepContext =
  React.createContext<StepperStepContextData>(defaultContext);

export default StepperStepContext;
