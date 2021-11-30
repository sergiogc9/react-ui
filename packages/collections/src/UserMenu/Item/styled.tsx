import React from 'react';
import styled from 'styled-components';
import { Box } from '@sergiogc9/react-ui';

import { UserMenuItemProps } from './types';

const UserMenuItem: React.FC<UserMenuItemProps> = styled(Box)<UserMenuItemProps>`
	&:hover {
		background-color: ${props => props.theme.colors.neutral['50']};
	}
`;

UserMenuItem.defaultProps = {
	alignItems: 'center',
	cursor: 'pointer',
	minHeight: '40px',
	paddingX: 3,
	paddingY: 2,
	transition: 'background ease-out 0.3s',
	width: '100%'
};

export default React.memo(UserMenuItem);
