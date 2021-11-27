import React from 'react';

import StyledActionMenu from './styled';
import { ActionMenuProps } from './types';

const ActionMenu: React.FC<ActionMenuProps> = ({ children, ...rest }) => (
	<StyledActionMenu isInteractive {...rest}>
		{children}
	</StyledActionMenu>
);

export default React.memo(ActionMenu);
