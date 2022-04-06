import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Text } from '@sergiogc9/react-ui';

import { DropdownMenuItemTextProps } from './types';

const DropdownMenuItemText: React.FC<DropdownMenuItemTextProps> = styled(Text)<DropdownMenuItemTextProps>`
	${props => css({ color: props.theme.collections.dropdownMenu.colors.optionText })}
`;

DropdownMenuItemText.defaultProps = {
	aspectSize: 's'
};

export default DropdownMenuItemText;
