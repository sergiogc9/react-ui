import React from 'react';

import { SelectContextData } from './types';

const SelectContext = React.createContext<SelectContextData>({} as any);

export default SelectContext;
