import React from 'react';

import ChipOverlay from './Overlay';
import ChipContext from './Context';
import { StyledChip } from './styled';
import { ChipProps } from './types';

const Chip: React.FC<ChipProps> = ({
	as,
	aspectSize = 's',
	children,
	href,
	isOverlayAlwaysVisible = false,
	onOverlayClick,
	overlayContent,
	variant = 'transparent',
	...props
}) => {
	const childrenWithLastClass = React.useMemo(() => {
		const childrenArray = React.Children.toArray(children);
		return childrenArray
			.filter(child => React.isValidElement(child))
			.map((child, index, filteredChildren) =>
				index === filteredChildren.length - 1
					? React.cloneElement(child as React.ReactElement<any>, {
							className: 'last-child'
					  })
					: child
			);
	}, [children]);

	return (
		<ChipContext.Provider
			value={{
				aspectSize,
				variant
			}}
		>
			<StyledChip
				as={href ? (as as any) || 'a' : 'div'}
				aspectSize={aspectSize}
				variant={variant}
				isOverlayAlwaysVisible={isOverlayAlwaysVisible}
				{...(href ? { href } : {})}
				{...props}
			>
				{childrenWithLastClass}
				{overlayContent && (
					<ChipOverlay data-testid="chip-overlay" isAlwaysVisible={isOverlayAlwaysVisible} onClick={onOverlayClick}>
						{overlayContent}
					</ChipOverlay>
				)}
			</StyledChip>
		</ChipContext.Provider>
	);
};

export default React.memo(Chip);
