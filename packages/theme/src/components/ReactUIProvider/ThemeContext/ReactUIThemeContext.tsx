import React from 'react';

import { ReactUIThemeContextData } from './types';

const ReactUIThemeContext = React.createContext<ReactUIThemeContextData>({} as any);

export default ReactUIThemeContext;
