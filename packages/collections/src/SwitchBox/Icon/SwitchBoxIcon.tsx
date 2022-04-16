import React from 'react';

import { StyledSwitchBoxIcon, StyledSwitchBoxIconFontAwesome, StyledSwitchBoxIconWrapper } from './styled';
import { SwitchBoxIconProps, SwitchBoxIconFontAwesomeProps } from './types';

const SwitchBoxIcon: React.FC<SwitchBoxIconProps> = React.memo(({ children, ...rest }) => {
	return (
		<StyledSwitchBoxIconWrapper>
			<StyledSwitchBoxIcon {...rest} />
		</StyledSwitchBoxIconWrapper>
	);
});

const SwitchBoxIconFontAwesome: React.FC<SwitchBoxIconFontAwesomeProps> = ({ children, ...rest }) => {
	return (
		<StyledSwitchBoxIconWrapper>
			<StyledSwitchBoxIconFontAwesome {...rest} />
		</StyledSwitchBoxIconWrapper>
	);
};

export { SwitchBoxIcon, SwitchBoxIconFontAwesome };
