import React, { useContext } from 'react';

import ChipContext from '../Context';
import ActionWrapper from './ActionWrapper';
import StyledIcon from './styled';
import { ChipIconProps } from './types';

const ChipIcon: React.FC<ChipIconProps> = ({ onClick, location, ...props }) => {
	const { aspectSize, variant } = useContext(ChipContext);
	if (typeof onClick === 'function')
		return (
			<ActionWrapper aspectSize={aspectSize} variant={variant} location={location} onClick={onClick}>
				<StyledIcon variant={variant} {...props} />
			</ActionWrapper>
		);

	return <StyledIcon variant={variant} location={location} {...props} />;
};

export default React.memo(ChipIcon);
