import styled from 'styled-components';
import Box from 'components/Box';

import { TabsContentProps } from './types';

const StyledTabsContent: React.FC<TabsContentProps> = styled(
  Box
)<TabsContentProps>``;

StyledTabsContent.defaultProps = {
  flexGrow: 1,
  flexWrap: 'nowrap',
  py: { xs: 5, md: 8 },
  px: 1
};

export default StyledTabsContent;
