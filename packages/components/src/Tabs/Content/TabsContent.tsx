import React from 'react';

import TabsContext from '../Context';
import StyledTabsContent from './styled';
import { TabsContentProps } from './types';

const TabsContent: React.FC<TabsContentProps> = ({ children, id, ...props }) => {
	const { activeID } = React.useContext(TabsContext);

	if (activeID !== id) return null;

	return (
		<StyledTabsContent id={id} {...props}>
			{children}
		</StyledTabsContent>
	);
};

export default React.memo(TabsContent);
