import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Flex } from '@sergiogc9/react-ui';

import { UserMenuItemProps } from './types';

const UserMenuItem = styled(Flex)<UserMenuItemProps>`
	&:hover {
		${props => css({ bg: props.theme.collections.userMenu.colors.bgHover })}
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
