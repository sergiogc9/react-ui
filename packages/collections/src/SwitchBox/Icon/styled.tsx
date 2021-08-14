import React from 'react';
import styled from 'styled-components';
import { Box, Icon } from '@sergiogc9/react-ui';

import { SwitchBoxIconProps } from './types';

const StyledSwitchBoxIconWrapper = styled(Box)``;

StyledSwitchBoxIconWrapper.defaultProps = {
	bg: 'neutral.100',
	borderRadius: 1,
	padding: 2,
	marginRight: 3
};

const StyledSwitchBoxIcon: React.FC<SwitchBoxIconProps> = styled(Icon)<SwitchBoxIconProps>``;

StyledSwitchBoxIcon.defaultProps = {
	fill: 'neutral.500'
};

export { StyledSwitchBoxIcon };

export default StyledSwitchBoxIconWrapper;
