import React from 'react';

import { StyledSwitchBoxIcon, StyledSwitchBoxIconFontAwesome, StyledSwitchBoxIconWrapper } from './styled';
import { SwitchBoxIconProps, SwitchBoxIconFontAwesomeProps } from './types';

const SwitchBoxIcon = React.memo((props: SwitchBoxIconProps) => {
	return (
		<StyledSwitchBoxIconWrapper>
			<StyledSwitchBoxIcon {...props} />
		</StyledSwitchBoxIconWrapper>
	);
});

const SwitchBoxIconFontAwesome = (props: SwitchBoxIconFontAwesomeProps) => {
	return (
		<StyledSwitchBoxIconWrapper>
			<StyledSwitchBoxIconFontAwesome {...props} />
		</StyledSwitchBoxIconWrapper>
	);
};

export { SwitchBoxIcon, SwitchBoxIconFontAwesome };
