import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';

import { StyledTabsMenuProps } from './types';

const StyledTabsMenu = styled(Flex)<StyledTabsMenuProps>`
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}

	${props =>
		css({
			justifyContent: props.tabsLayout === 'small-left' ? 'flex-start' : 'space-evenly'
		})}
`;

StyledTabsMenu.defaultProps = {
	flexShrink: 0,
	flexWrap: 'nowrap',
	margin: 0,
	overflowX: 'auto',
	width: '100%'
};

export default StyledTabsMenu;
