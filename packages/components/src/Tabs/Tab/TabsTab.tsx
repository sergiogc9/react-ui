import React from 'react';

import Content from 'components/Content';
import TabsContext from '../Context';
import StyledTabsTab from './styled';
import { TabsTabProps } from './types';

const TabsTab: React.FC<TabsTabProps> = ({
  children,
  id,
  isError,
  isDisabled,
  ...props
}) => {
  const { activeID, onTabClicked } = React.useContext(TabsContext);

  return (
    <StyledTabsTab
      as="li"
      activeID={activeID}
      id={id}
      isDisabled={isDisabled}
      isError={isError}
      onClick={() => {
        if (!isDisabled && onTabClicked) onTabClicked(id);
      }}
      {...props}
    >
      <Content fontWeight={3} fontSize={0}>
        {children}
      </Content>
    </StyledTabsTab>
  );
};

export default React.memo(TabsTab);
