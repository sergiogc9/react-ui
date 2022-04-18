import React from 'react';

import Flex from 'components/Flex';

import ChipContext from '../Context';
import ActionWrapper from './ActionWrapper';
import { StyledChipIcon, StyledChipIconFontAwesome } from './styled';

import { ChipIconProps, ChipIconFontAwesomeProps } from './types';

const ChipIconFontAwesome: React.FC<ChipIconFontAwesomeProps> = ({ className, onClick, ...rest }) => {
	const { aspectSize, variant } = React.useContext(ChipContext);

	return (
		<Flex alignItems="center" className={`${className || ''}${onClick ? ' clickable' : ''}`} height="100%">
			{onClick ? (
				<ActionWrapper
					aspectSize={aspectSize}
					onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
						ev.stopPropagation();
						onClick(ev as any);
					}}
					variant={variant}
				>
					<StyledChipIconFontAwesome {...rest} aspectSize={aspectSize} variant={variant} />
				</ActionWrapper>
			) : (
				<StyledChipIconFontAwesome {...rest} aspectSize={aspectSize} variant={variant} />
			)}
		</Flex>
	);
};

const ChipIcon: React.FC<ChipIconProps> = ({ className, onClick, ...props }) => {
	const { aspectSize, variant } = React.useContext(ChipContext);
	return (
		<Flex alignItems="center" className={`${className || ''}${onClick ? ' clickable' : ''}`} height="100%">
			{onClick ? (
				<ActionWrapper
					aspectSize={aspectSize}
					onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
						ev.stopPropagation();
						onClick(ev);
					}}
					variant={variant}
				>
					<StyledChipIcon variant={variant} {...props} />
				</ActionWrapper>
			) : (
				<StyledChipIcon variant={variant} {...props} />
			)}
		</Flex>
	);
};

const MemoChipIcon = React.memo(ChipIcon);
MemoChipIcon.displayName = 'ChipIcon';

export { MemoChipIcon as ChipIcon, ChipIconFontAwesome };
