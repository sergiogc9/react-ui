import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Title } from '@sergiogc9/react-ui';

import { UserMenuTitleProps } from './types';

const StyledUserMenuTitle: React.FC<UserMenuTitleProps> = styled(Title)<UserMenuTitleProps>`
	${props => css({ color: props.theme.collections.userMenu.colors.text })}
`;

StyledUserMenuTitle.defaultProps = {
	aspectSize: 'subtle',
	py: 2,
	px: 3
};

export default StyledUserMenuTitle;
