import React from 'react';

import Box from 'components/Box';
import Grid from 'components/Grid';

import { SkeletonCircleProps } from './types';

const SkeletonCircle: React.FC<SkeletonCircleProps> = ({ type = 'box', ...rest }) => {
	const BoxComponent = type === 'box' ? Box : Grid.Box;

	return <BoxComponent bg="currentColor" borderRadius="100%" data-testid="skeleton-circle" isReallyABox {...rest} />;
};

export default React.memo(SkeletonCircle);
