import React from 'react';

import StyledSkeleton from './styled';
import { SkeletonProps } from './types';

const Skeleton: React.FC<SkeletonProps> = ({ animate = true, children, duration = 1.2, ...rest }) => {
	return (
		<StyledSkeleton animate={animate} data-testid="skeleton" duration={duration} {...rest}>
			{children}
		</StyledSkeleton>
	);
};

export default React.memo(Skeleton);
