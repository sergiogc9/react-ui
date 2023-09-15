import styled from 'styled-components';

import Flex from 'components/Flex';

import { TabsContentProps } from './types';

const StyledTabsContent = styled(Flex)<TabsContentProps>``;

StyledTabsContent.defaultProps = {
	flexGrow: 1,
	flexDirection: 'column',
	flexWrap: 'nowrap',
	px: { xs: 3, lg: 0 },
	py: { xs: 4, md: 5 },
	width: '100%'
};

export default StyledTabsContent;
