import React from 'react';

import { TableContextData } from './types';

const TableContext = React.createContext<TableContextData<any>>({} as any);

export default TableContext;
