import React from 'react';

import StyledTabsMenu from './styled';
import { TabsMenuProps } from './types';

const TabsMenu: React.FC<TabsMenuProps> = ({ children, ...props }) => {
  return (
    <StyledTabsMenu as="ul" {...props}>
      {children}
    </StyledTabsMenu>
  );
};

export default React.memo(TabsMenu);
