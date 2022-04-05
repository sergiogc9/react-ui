import React from 'react';

import Box from 'components/Box';
import Grid from 'components/Grid';

import { SkeletonRectProps } from './types';

const SkeletonRect: React.FC<SkeletonRectProps> = ({ borderRadius, height = 20, type = 'box', ...rest }) => {
	const finalBorderRadius = borderRadius ?? (typeof height === 'number' && height < 16 ? `${height / 2}px` : 1);

	const BoxComponent = type === 'box' ? Box : Grid.Box;

	return (
		<BoxComponent
			borderRadius={finalBorderRadius}
			bg="currentColor"
			data-testid="skeleton-rect"
			height={height}
			isReallyABox
			{...rest}
		/>
	);
};

export default React.memo(SkeletonRect);
