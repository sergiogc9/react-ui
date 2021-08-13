import styled from 'styled-components';
import Box from 'components/Box';

import { TabsContentProps } from './types';

const StyledTabsContent: React.FC<TabsContentProps> = styled(Box)<TabsContentProps>``;

StyledTabsContent.defaultProps = {
	flexGrow: 1,
	flexDirection: 'column',
	flexWrap: 'nowrap',
	px: { xs: 4, lg: 0 },
	py: { xs: 4, md: 6 },
	width: '100%'
};

export default StyledTabsContent;
