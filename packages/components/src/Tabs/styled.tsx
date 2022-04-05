import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import { TabsProps } from './types';

const StyledTabs: React.FC<TabsProps> = styled(Flex)``;

StyledTabs.defaultProps = {
	flexDirection: 'column',
	width: '100%'
};

export default StyledTabs;
