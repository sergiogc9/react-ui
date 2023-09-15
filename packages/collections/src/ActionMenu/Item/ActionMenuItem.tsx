import React from 'react';
import { Text } from '@sergiogc9/react-ui';

import StyledActionMenuItem from './styled';
import { ActionMenuItemComponent } from './types';

const ActionMenuItem: ActionMenuItemComponent = ({ aspectSize, children, ...rest }) => (
	<StyledActionMenuItem {...rest}>
		<Text aspectSize={aspectSize}>{children}</Text>
	</StyledActionMenuItem>
);

export default ActionMenuItem;
