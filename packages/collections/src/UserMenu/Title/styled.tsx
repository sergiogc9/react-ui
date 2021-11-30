import React from 'react';
import styled from 'styled-components';
import { Title } from '@sergiogc9/react-ui';

import { UserMenuTitleProps } from './types';

const StyledUserMenuTitle: React.FC<UserMenuTitleProps> = styled(Title)<UserMenuTitleProps>``;

StyledUserMenuTitle.defaultProps = {
	aspectSize: 'subtle',
	color: 'neutral.900',
	py: 2,
	px: 3
};

export default StyledUserMenuTitle;
