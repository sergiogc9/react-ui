import React from 'react';

import Flex from 'components/Flex';
import Skeleton from 'components/Skeleton';

import { TableSkeletonToolbarProps } from './types';

const TableSkeletonToolbar: React.FC<TableSkeletonToolbarProps> = () => {
	return (
		<Flex justifyContent="space-between" marginY={3}>
			<Skeleton.Rect height={24} width={150} mr={3} />
			<Skeleton.Rect flexShrink={1} height={24} width={200} />
		</Flex>
	);
};

export default React.memo(TableSkeletonToolbar);
