import React from 'react';

import { TabsContextData } from './types';

const defaultContext: TabsContextData = {
	activeID: '',
	onTabClicked: () => {},
	tabsLayout: 'big-evenly'
};

const TabsContext = React.createContext<TabsContextData>(defaultContext);

export default TabsContext;
