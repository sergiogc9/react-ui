import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';
import { TabsHeaderProps } from './types';

const StyledTabsHeader = styled(Flex)<TabsHeaderProps>`
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
