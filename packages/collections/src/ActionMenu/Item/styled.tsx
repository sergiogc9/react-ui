import React from 'react';
import styled from 'styled-components';
import { Content } from '@sergiogc9/react-ui';

import { ActionMenuItemProps } from './types';
import variant from './variants/variant';

const StyledActionMenuItem: React.FC<ActionMenuItemProps> = styled(Content)<ActionMenuItemProps>`
	${variant}
`;

StyledActionMenuItem.defaultProps = {
	alignItems: 'center',
	aspectSize: 'm',
	cursor: 'pointer',
	minHeight: '40px',
	paddingX: 3,
	paddingY: 2,
	transition: 'color 0.3s ease-in, background 0.3s ease-in',
	variant: 'default'
};

export default React.memo(StyledActionMenuItem);
