import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box, Icon } from '@sergiogc9/react-ui';

import { SwitchBoxIconProps } from './types';

const StyledSwitchBoxIconWrapper = styled(Box)`
	${props => css({ bg: props.theme.collections.switchBox.colors.icon.bg })}
`;

StyledSwitchBoxIconWrapper.defaultProps = {
	alignSelf: 'flex-start',
	borderRadius: 1,
	padding: 2,
	marginRight: 3
};

const StyledSwitchBoxIcon: React.FC<SwitchBoxIconProps> = styled(Icon)<SwitchBoxIconProps>`
	${props => css({ fill: props.theme.collections.switchBox.colors.icon.color })}
`;

export { StyledSwitchBoxIcon };

export default StyledSwitchBoxIconWrapper;
