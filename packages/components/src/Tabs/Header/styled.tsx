import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';
import { TabsHeaderProps } from './types';

const StyledTabsHeader: React.FC<TabsHeaderProps> = styled(Flex)`
	&::after {
		content: '';
		height: 1px;
		width: 100%;
		position: absolute;
		left: 0px;
		bottom: 0px;
		${props => css({ bg: props.theme.components.tab.colors.divider })}
	}
`;

StyledTabsHeader.defaultProps = {};

export default StyledTabsHeader;
