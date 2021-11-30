import React from 'react';
import styled from 'styled-components';
import { Icon } from '@sergiogc9/react-ui';

import { UserMenuItemIconProps } from './types';

const UserMenuItemIcon: React.FC<UserMenuItemIconProps> = styled(Icon)<UserMenuItemIconProps>``;

UserMenuItemIcon.defaultProps = {
	aspectSize: 'm',
	fill: 'neutral.700',
	flexShrink: 0,
	marginRight: 2
};

export default UserMenuItemIcon;
