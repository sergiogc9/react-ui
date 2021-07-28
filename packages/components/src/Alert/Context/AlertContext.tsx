import React from 'react';

import { AlertContextData } from './types';

const AlertContext = React.createContext<AlertContextData>({} as any);

export default AlertContext;
