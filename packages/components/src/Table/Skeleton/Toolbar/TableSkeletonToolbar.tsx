import React from 'react';

import Box from 'components/Box';
import Skeleton from 'components/Skeleton';

import { TableSkeletonToolbarProps } from './types';

const TableSkeletonToolbar: React.FC<TableSkeletonToolbarProps> = () => {
	return (
		<Box justifyContent="space-between" marginY={3}>
			<Skeleton.Rect height={24} width={150} mr={3} />
			<Skeleton.Rect flexShrink={1} height={24} width={200} />
		</Box>
	);
};

export default React.memo(TableSkeletonToolbar);
