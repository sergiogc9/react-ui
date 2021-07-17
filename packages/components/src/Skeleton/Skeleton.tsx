import React from 'react';

import StyledSkeleton from './styled';
import { SkeletonProps } from './types';

const Skeleton: React.FC<SkeletonProps> = ({
	animate = true,
	children,
	color = 'neutral.100',
	duration = 1.2,
	...rest
}) => {
	return (
		<StyledSkeleton animate={animate} color={color} data-testid="skeleton" duration={duration} {...rest}>
			{children}
		</StyledSkeleton>
	);
};

export default React.memo(Skeleton);
