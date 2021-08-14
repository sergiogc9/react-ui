import React from 'react';
import styled from 'styled-components';
import { Icon } from '@sergiogc9/react-ui';

import { DropdownMenuItemIconProps } from './types';

const DropdownMenuItemIcon: React.FC<DropdownMenuItemIconProps> = styled(Icon)<DropdownMenuItemIconProps>``;

DropdownMenuItemIcon.defaultProps = {
	aspectSize: 's',
	fill: 'neutral.700',
	flexShrink: 0,
	marginRight: 2
};

export default DropdownMenuItemIcon;
