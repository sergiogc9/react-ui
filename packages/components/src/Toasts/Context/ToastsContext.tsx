import React from 'react';

import { ToastsContextData } from './types';

const ToastsContext = React.createContext<ToastsContextData>({} as any);

export default ToastsContext;
