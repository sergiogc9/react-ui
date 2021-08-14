import React from 'react';
import styled from 'styled-components';
import { Box } from '@sergiogc9/react-ui';

import { DropdownMenuFooterProps } from './types';

const DropdownMenuFooter: React.FC<DropdownMenuFooterProps> = styled(Box)<DropdownMenuFooterProps>``;

DropdownMenuFooter.defaultProps = {
	marginTop: 'auto',
	padding: 3
};

export default DropdownMenuFooter;
