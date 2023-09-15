import css from '@styled-system/css';
import styled from 'styled-components';
import { Title } from '@sergiogc9/react-ui';

import { DropdownMenuTitleProps } from './types';

const DropdownMenuTitle = styled(Title)<DropdownMenuTitleProps>`
	${props => css({ color: props.theme.collections.dropdownMenu.colors.text })}
`;

DropdownMenuTitle.defaultProps = {
	aspectSize: 'subtle',
	padding: 3
};

export default DropdownMenuTitle;
