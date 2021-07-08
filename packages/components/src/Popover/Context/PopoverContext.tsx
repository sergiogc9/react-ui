import React from 'react';

import { PopoverContextData } from './types';

const defaultContextData: PopoverContextData = {
  popoverRef: React.createRef() as React.MutableRefObject<HTMLElement>
};

const PopoverContext =
  React.createContext<PopoverContextData>(defaultContextData);

export default PopoverContext;
