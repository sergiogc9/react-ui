import styled from 'styled-components';
import css from '@styled-system/css';
import { Flex } from '@sergiogc9/react-ui';

import { SwitchBoxWrapperProps } from './types';

const StyledSwitchBoxWrapper = styled(Flex)<SwitchBoxWrapperProps>`
	${props =>
		css({
			bg: props.theme.collections.switchBox.colors.bg,
			color: props.theme.collections.switchBox.colors.text
		})}

	${props => props.isDisabled && css({ opacity: 0.4 })}
`;

StyledSwitchBoxWrapper.defaultProps = {
	alignItems: 'center',
	borderRadius: { xs: '0px', md: 1 },
	flexDirection: 'row',
	justifyContent: 'flex-start',
	minWidth: { xs: '100vw', md: 'unset' },
	ml: { xs: -3, md: 0 },
	padding: 3,
	transition: 'opacity cubic-bezier(0.4, 0, 0.2, 1) 200ms',
	width: { xs: '100vw', md: '100%' }
};

export default StyledSwitchBoxWrapper;
