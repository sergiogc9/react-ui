import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';
import { TabsProps } from './types';

const StyledTabs: React.FC<TabsProps> = styled(Box)``;

StyledTabs.defaultProps = {
	flexDirection: 'column',
	width: '100%'
};

export default StyledTabs;
