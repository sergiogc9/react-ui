import React from 'react';

import Text from 'components/Text';

import TabsContext from '../Context';
import StyledTabsTab from './styled';
import { TabsTabProps } from './types';

const TabsTab: React.FC<TabsTabProps> = ({ children, id, isError, isDisabled, ...props }) => {
	const { activeID, onTabClicked, tabsLayout } = React.useContext(TabsContext);

	return (
		<StyledTabsTab
			as="li"
			activeID={activeID}
			id={id}
			isDisabled={isDisabled}
			isError={isError}
			onClick={() => {
				if (!isDisabled && onTabClicked) onTabClicked(id);
			}}
			tabsLayout={tabsLayout}
			{...props}
		>
			<Text fontWeight={3} fontSize={0}>
				{children}
			</Text>
		</StyledTabsTab>
	);
};

export default React.memo(TabsTab);
