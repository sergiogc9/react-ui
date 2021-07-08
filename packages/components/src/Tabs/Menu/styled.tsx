import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';

import { TabsMenuProps } from './types';

const StyledTabsMenu: React.FC<TabsMenuProps> = styled(Box)`
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

StyledTabsMenu.defaultProps = {
  flexShrink: 0,
  flexWrap: 'nowrap',
  margin: 0,
  overflowX: 'auto',
  padding: 0,
  width: '100%'
};

export default StyledTabsMenu;
