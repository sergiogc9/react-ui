import React from 'react';

import Skeleton from 'components/Skeleton';

import { TableSkeletonProps } from './types';

const TableSkeleton: React.FC<TableSkeletonProps> = ({ children, ...rest }) => {
	return (
		<Skeleton flexDirection="column" width="100%" {...rest}>
			{children}
		</Skeleton>
	);
};

export default React.memo(TableSkeleton);
