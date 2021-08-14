import styled from 'styled-components';
import { Box, BoxProps } from '@sergiogc9/react-ui';

const StyledSwitchBoxWrapper = styled(Box)<BoxProps>``;

StyledSwitchBoxWrapper.defaultProps = {
	alignItems: 'center',
	bg: 'neutral.50',
	borderRadius: { xs: '0px', md: 1 },
	flexDirection: 'row',
	justifyContent: 'flex-start',
	padding: 3,
	width: '100%'
};

export default StyledSwitchBoxWrapper;
