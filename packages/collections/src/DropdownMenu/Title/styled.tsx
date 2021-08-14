import React from 'react';
import styled from 'styled-components';
import { Title } from '@sergiogc9/react-ui';

import { DropdownMenuTitleProps } from './types';

const DropdownMenuTitle: React.FC<DropdownMenuTitleProps> = styled(Title)<DropdownMenuTitleProps>``;

DropdownMenuTitle.defaultProps = {
	aspectSize: 'subtle',
	color: 'neutral.900',
	padding: 3
};

export default DropdownMenuTitle;
