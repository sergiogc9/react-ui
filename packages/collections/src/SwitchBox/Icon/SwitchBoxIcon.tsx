import React from 'react';

import StyledSwitchBoxIconWrapper, { StyledSwitchBoxIcon } from './styled';
import { SwitchBoxIconProps } from './types';

const SwitchBoxIcon: React.FC<SwitchBoxIconProps> = ({ children, ...rest }) => {
	return (
		<StyledSwitchBoxIconWrapper>
			<StyledSwitchBoxIcon {...rest} />
		</StyledSwitchBoxIconWrapper>
	);
};

export default React.memo(SwitchBoxIcon);
