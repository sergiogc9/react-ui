import React from 'react';
import styled from 'styled-components';
import { Content } from '@sergiogc9/react-ui';

import { DropdownMenuItemTextProps } from './types';

const DropdownMenuItemText: React.FC<DropdownMenuItemTextProps> = styled(Content)<DropdownMenuItemTextProps>``;

DropdownMenuItemText.defaultProps = {
	aspectSize: 's',
	color: 'neutral.700'
};

export default DropdownMenuItemText;
