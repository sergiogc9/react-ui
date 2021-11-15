import React from 'react';

import Box from 'components/Box';
import Grid from 'components/Grid';
import Skeleton from 'components/Skeleton';

import { TableSkeletonContentProps } from './types';

const SKELETON_TABLE_ROWS = 10;

const TableSkeletonContent: React.FC<TableSkeletonContentProps> = props => {
	return (
		<Box flexShrink={0} overflowX="auto" width="100%">
			<Box flexDirection="column" flexShrink={0} width="100%" {...props}>
				<Grid>
					<Grid.Box columns={3}>
						<Skeleton.Rect bg="neutral.200" height={40} width="100%" />
					</Grid.Box>
					<Grid.Box columns={7}>
						<Skeleton.Rect bg="neutral.200" height={40} width="100%" />
					</Grid.Box>
					<Grid.Box columns={2}>
						<Skeleton.Rect bg="neutral.200" height={40} width="100%" />
					</Grid.Box>
				</Grid>
				{Array.from(Array(SKELETON_TABLE_ROWS).keys()).map((_, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<Grid key={index} mt={3}>
						<Grid.Box columns={3}>
							<Skeleton.Rect height={40} width="100%" />
						</Grid.Box>
						<Grid.Box columns={7}>
							<Skeleton.Rect height={40} width="100%" />
						</Grid.Box>
						<Grid.Box columns={2}>
							<Skeleton.Rect height={40} width="100%" />
						</Grid.Box>
					</Grid>
				))}
			</Box>
		</Box>
	);
};

export default React.memo(TableSkeletonContent);
