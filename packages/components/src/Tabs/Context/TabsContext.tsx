import React from 'react';

import { TabsContextData } from './types';

const defaultContext = {
	activeID: '',
	onTabClicked: () => {}
};

const TabsContext = React.createContext<TabsContextData>(defaultContext);

export default TabsContext;
