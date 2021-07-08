import React from 'react';

import StyledTabsHeader from './styled';
import { TabsHeaderProps } from './types';

const TabsHeader: React.FC<TabsHeaderProps> = ({ children, ...props }) => {
  return <StyledTabsHeader {...props}>{children}</StyledTabsHeader>;
};

export default React.memo(TabsHeader);
