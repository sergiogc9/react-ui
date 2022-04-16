import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Icon } from '@sergiogc9/react-ui';

import { UserMenuItemIconProps, UserMenuItemIconFontAwesomeProps } from './types';

const UserMenuItemIcon: React.FC<UserMenuItemIconProps> = styled(Icon)<UserMenuItemIconProps>`
	${props => css({ fill: props.fill ?? props.theme.collections.userMenu.colors.optionText })}
`;

UserMenuItemIcon.defaultProps = {
	aspectSize: 'm',
	flexShrink: 0,
	marginRight: 2
};

const MemoUserMenuItemIcon = React.memo(UserMenuItemIcon);
MemoUserMenuItemIcon.displayName = 'UserMenuItemIcon';

const UserMenuItemIconFontAwesome: React.FC<UserMenuItemIconFontAwesomeProps> = styled(
	Icon.FontAwesome
)<UserMenuItemIconFontAwesomeProps>`
	${props =>
		css({
			color: props.fill ?? props.color ?? props.theme.collections.userMenu.colors.optionText,
			mr: 2
		})}
`;

UserMenuItemIconFontAwesome.defaultProps = {
	aspectSize: 'm'
};

export { MemoUserMenuItemIcon as UserMenuItemIcon, UserMenuItemIconFontAwesome };
