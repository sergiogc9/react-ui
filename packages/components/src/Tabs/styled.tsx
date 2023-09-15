import styled from 'styled-components';

import Flex from 'components/Flex';
import { TabsProps } from './types';

const StyledTabs = styled(Flex)<TabsProps>``;

StyledTabs.defaultProps = {
	flexDirection: 'column',
	width: '100%'
};

export default StyledTabs;
