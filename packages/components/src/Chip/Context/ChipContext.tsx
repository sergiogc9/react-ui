import React from 'react';

import { ChipContextData } from './types';

const ChipContext = React.createContext<ChipContextData>({
	aspectSize: 's',
	variant: 'blue'
});

export default ChipContext;
