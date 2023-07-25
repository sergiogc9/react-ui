import React from 'react';

import TabsContext from '../Context/TabsContext';

import StyledTabsMenu from './styled';
import { TabsMenuProps } from './types';

const TabsMenu: React.FC<TabsMenuProps> = ({ children, ...props }) => {
	const { tabsLayout } = React.useContext(TabsContext);

	return (
		<StyledTabsMenu as="ul" tabsLayout={tabsLayout} {...props}>
			{children}
		</StyledTabsMenu>
	);
};

export default React.memo(TabsMenu);
