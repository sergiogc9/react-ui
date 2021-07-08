import React, { useState } from 'react';

import TabsContext from 'components/Tabs/Context';
import StyledTabs from './styled';
import { TabsProps } from './types';

const Tabs: React.FC<TabsProps> = ({ children, defaultTab, ...props }) => {
	const [activeID, setActive] = useState(defaultTab);

	const contextValues = React.useMemo(
		() => ({
			activeID,
			onTabClicked: (id: string) => setActive(id)
		}),
		[activeID]
	);

	return (
		<TabsContext.Provider value={contextValues}>
			<StyledTabs {...props} defaultTab={defaultTab}>
				{children}
			</StyledTabs>
		</TabsContext.Provider>
	);
};

export default React.memo(Tabs);
