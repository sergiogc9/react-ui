import React from 'react';

import ChipContext from '../Context';
import ChipOverlayContent from './Content';
import StyledChipOverlay from './styled';
import { ChipOverlayProps } from './types';

const ChipOverlay: React.FC<ChipOverlayProps> = ({ children, ...rest }) => {
	const { aspectSize, variant } = React.useContext(ChipContext);
	return (
		<StyledChipOverlay aspectSize={aspectSize} className="overlay" variant={variant} {...rest}>
			{typeof children === 'string' ? (
				<ChipOverlayContent aspectSize={aspectSize}>{children}</ChipOverlayContent>
			) : (
				children
			)}
		</StyledChipOverlay>
	);
};

export default ChipOverlay;
