import React from 'react';
import css from '@styled-system/css';
import styled from 'styled-components';
import { Flex } from '@sergiogc9/react-ui';

import { DropdownMenuItemComponent, DropdownMenuItemProps } from './types';

const DropdownMenuItem: DropdownMenuItemComponent = styled(Flex)<DropdownMenuItemProps>`
	&:hover {
		${props => css({ bg: props.theme.collections.dropdownMenu.colors.bgHover })}
	}
`;

DropdownMenuItem.defaultProps = {
	alignItems: 'center',
	cursor: 'pointer',
	minHeight: '40px',
	paddingX: 3,
	paddingY: 2,
	transition: 'color 0.2s ease-in, background 0.2s ease-in'
};

export default React.memo(DropdownMenuItem);
