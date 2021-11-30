import React from 'react';
import styled from 'styled-components';
import { Box } from '@sergiogc9/react-ui';

import { UserMenuFooterProps } from './types';

const StyledUserMenuFooter: React.FC<UserMenuFooterProps> = styled(Box)<UserMenuFooterProps>``;

StyledUserMenuFooter.defaultProps = {
	marginTop: 'auto'
};

export default StyledUserMenuFooter;
