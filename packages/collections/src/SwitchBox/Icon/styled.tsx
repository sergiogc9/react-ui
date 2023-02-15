import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Flex, Icon } from '@sergiogc9/react-ui';

import { SwitchBoxIconProps, SwitchBoxIconFontAwesomeProps } from './types';

const StyledSwitchBoxIconWrapper = styled(Flex)`
	${props => css({ bg: props.theme.collections.switchBox.colors.icon.bg })}
`;

StyledSwitchBoxIconWrapper.defaultProps = {
	alignSelf: 'flex-start',
	borderRadius: 1,
	padding: 2,
	marginRight: 3
};

const StyledSwitchBoxIcon = styled(Icon)<SwitchBoxIconProps>`
	${props => css({ fill: props.fill ?? props.theme.collections.switchBox.colors.icon.color })}
` as React.FC<SwitchBoxIconProps>;

const StyledSwitchBoxIconFontAwesome: React.FC<SwitchBoxIconFontAwesomeProps> = styled(
	Icon.FontAwesome
)<SwitchBoxIconFontAwesomeProps>`
	${props =>
		css({
			color: props.fill ?? props.color ?? props.theme.collections.switchBox.colors.icon.color
		})}
`;

export { StyledSwitchBoxIconWrapper, StyledSwitchBoxIcon, StyledSwitchBoxIconFontAwesome };
