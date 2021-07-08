import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';
import { TabsHeaderProps } from './types';

const StyledTabsHeader: React.FC<TabsHeaderProps> = styled(Box)`
  &::after {
    content: '';
    height: 2px;
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: ${(props) => props.theme.colors.neutral['200']};
  }
`;

StyledTabsHeader.defaultProps = {};

export default StyledTabsHeader;
