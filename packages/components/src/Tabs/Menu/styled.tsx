import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';

import { TabsMenuProps } from './types';

const StyledTabsMenu: React.FC<TabsMenuProps> = styled(Flex)`
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
`;

StyledTabsMenu.defaultProps = {
	flexShrink: 0,
	flexWrap: 'nowrap',
	justifyContent: { xs: 'space-between', md: 'flex-start' },
	margin: 0,
	overflowX: 'auto',
	width: '100%'
};

export default StyledTabsMenu;
