import React from 'react';

import Box from 'components/Box';
import { IconProps } from 'components/Icon';

import ChipContext from '../Context';
import ActionWrapper from './ActionWrapper';
import StyledIcon from './styled';

const ChipIcon: React.FC<IconProps> = ({ className, onClick, ...props }) => {
	const { aspectSize, variant } = React.useContext(ChipContext);
	return (
		<Box alignItems="center" className={`${className || ''}${onClick ? ' clickable' : ''}`} height="100%">
			{onClick ? (
				<ActionWrapper
					aspectSize={aspectSize}
					onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
						ev.stopPropagation();
						onClick(ev);
					}}
					variant={variant}
				>
					<StyledIcon variant={variant} {...props} />
				</ActionWrapper>
			) : (
				<StyledIcon variant={variant} {...props} />
			)}
		</Box>
	);
};

export default React.memo(ChipIcon);
