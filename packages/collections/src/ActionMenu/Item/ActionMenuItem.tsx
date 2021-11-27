import React from 'react';
import { Content } from '@sergiogc9/react-ui';

import StyledActionMenuItem from './styled';
import { ActionMenuItemProps } from './types';

const ActionMenuItem: React.FC<ActionMenuItemProps> = ({ aspectSize, children, ...rest }) => (
	<StyledActionMenuItem {...rest}>
		<Content aspectSize={aspectSize}>{children}</Content>
	</StyledActionMenuItem>
);

export default ActionMenuItem;
