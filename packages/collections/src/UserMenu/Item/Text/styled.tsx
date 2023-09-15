import styled from 'styled-components';
import css from '@styled-system/css';
import { Text } from '@sergiogc9/react-ui';

import { UserMenuItemTextProps } from './types';

const UserMenuItemText = styled(Text)<UserMenuItemTextProps>`
	${props => css({ color: props.theme.collections.userMenu.colors.optionText })}
`;

UserMenuItemText.defaultProps = {
	aspectSize: 'm'
};

export default UserMenuItemText;
