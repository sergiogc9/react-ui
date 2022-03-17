import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Icon } from '@sergiogc9/react-ui';

import { UserMenuItemIconProps } from './types';

const UserMenuItemIcon: React.FC<UserMenuItemIconProps> = styled(Icon)<UserMenuItemIconProps>`
	${props => css({ fill: props.theme.collections.userMenu.colors.optionText })}
`;

UserMenuItemIcon.defaultProps = {
	aspectSize: 'm',
	flexShrink: 0,
	marginRight: 2
};

export default UserMenuItemIcon;
