import React from 'react';
import styled from 'styled-components';
import { Box } from '@sergiogc9/react-ui';

import { DropdownMenuItemProps } from './types';

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = styled(Box)<DropdownMenuItemProps>`
	&:hover {
		background-color: ${props => props.theme.colors.neutral['50']};
	}
`;

DropdownMenuItem.defaultProps = {
	alignItems: 'center',
	cursor: 'pointer',
	minHeight: '40px',
	paddingX: 3,
	paddingY: 2
};

export default React.memo(DropdownMenuItem);
