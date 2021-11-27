import React from 'react';
import systemCSS from '@styled-system/css';
import styled from 'styled-components';
import { Popover } from '@sergiogc9/react-ui';

import { StyledActionMenuProps } from './types';

const StyledActionMenu: React.FC<StyledActionMenuProps> = React.memo(
	styled(Popover.Content)`
		${systemCSS({ borderRadius: 2 })}
	`
);

StyledActionMenu.defaultProps = {
	boxShadow: 'center3',
	flexDirection: 'column',
	height: 'auto',
	overflow: 'hidden',
	paddingX: 0,
	paddingY: 0
};

export default StyledActionMenu;
