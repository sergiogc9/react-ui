import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Icon } from '@sergiogc9/react-ui';

import { DropdownMenuItemIconProps } from './types';

const DropdownMenuItemIcon: React.FC<DropdownMenuItemIconProps> = styled(Icon)<DropdownMenuItemIconProps>`
	${props => css({ fill: props.theme.collections.dropdownMenu.colors.optionText })}
`;

DropdownMenuItemIcon.defaultProps = {
	aspectSize: 's',
	flexShrink: 0,
	marginRight: 2
};

export default DropdownMenuItemIcon;
