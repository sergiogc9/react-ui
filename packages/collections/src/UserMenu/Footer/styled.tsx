import React from 'react';
import styled from 'styled-components';
import { Flex } from '@sergiogc9/react-ui';

import { UserMenuFooterProps } from './types';

const StyledUserMenuFooter: React.FC<UserMenuFooterProps> = styled(Flex)<UserMenuFooterProps>``;

StyledUserMenuFooter.defaultProps = {
	marginTop: 'auto'
};

export default StyledUserMenuFooter;
