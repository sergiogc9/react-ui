import React from 'react';

import ChipContext from '../Context';

import StyledChipLabel from './styled';

const ChipLabel: React.FC<React.HTMLAttributes<any>> = ({ children, className, ...rest }) => {
	const { aspectSize } = React.useContext(ChipContext);
	return (
		<StyledChipLabel aspectSize={aspectSize} className={className} {...rest}>
			{children}
		</StyledChipLabel>
	);
};

export default ChipLabel;
