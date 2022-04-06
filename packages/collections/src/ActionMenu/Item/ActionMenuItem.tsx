import React from 'react';
import { Text } from '@sergiogc9/react-ui';

import StyledActionMenuItem from './styled';
import { ActionMenuItemProps } from './types';

const ActionMenuItem: React.FC<ActionMenuItemProps> = ({ aspectSize, children, ...rest }) => (
	<StyledActionMenuItem {...rest}>
		<Text aspectSize={aspectSize}>{children}</Text>
	</StyledActionMenuItem>
);

export default ActionMenuItem;
