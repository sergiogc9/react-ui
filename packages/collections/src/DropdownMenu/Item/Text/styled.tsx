import styled from 'styled-components';
import css from '@styled-system/css';
import { Text } from '@sergiogc9/react-ui';

import { DropdownMenuItemTextComponent, DropdownMenuItemTextProps } from './types';

const DropdownMenuItemText: DropdownMenuItemTextComponent = styled(Text)<DropdownMenuItemTextProps>`
	${props => css({ color: props.theme.collections.dropdownMenu.colors.optionText })}
`;

DropdownMenuItemText.defaultProps = {
	aspectSize: 's'
};

export default DropdownMenuItemText;
