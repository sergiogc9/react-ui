import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Icon } from '@sergiogc9/react-ui';

import { DropdownMenuItemIconFontAwesomeProps, DropdownMenuItemIconProps } from './types';

const DropdownMenuItemIcon = styled(Icon)`
	${props => css({ fill: props.fill ?? props.theme.collections.dropdownMenu.colors.optionText })}
` as React.FC<DropdownMenuItemIconProps>;

DropdownMenuItemIcon.defaultProps = {
	aspectSize: 's',
	flexShrink: 0,
	marginRight: 2
};

const MemoDropdownMenuItemIcon = React.memo(DropdownMenuItemIcon);
MemoDropdownMenuItemIcon.displayName = 'DropdownMenuItemIcon';

const DropdownMenuItemIconFontAwesome: React.FC<DropdownMenuItemIconFontAwesomeProps> = styled(
	Icon.FontAwesome
)<DropdownMenuItemIconFontAwesomeProps>`
	${props =>
		css({
			color: props.fill ?? props.color ?? props.theme.collections.dropdownMenu.colors.optionText,
			mr: 2
		})}
`;

DropdownMenuItemIconFontAwesome.defaultProps = {
	aspectSize: 's'
};

export { MemoDropdownMenuItemIcon as DropdownMenuItemIcon, DropdownMenuItemIconFontAwesome };
