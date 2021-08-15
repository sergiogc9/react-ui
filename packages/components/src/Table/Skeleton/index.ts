import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import TableSkeletonContent, { TableSkeletonContentProps } from './Content';
import TableSkeletonToolbar, { TableSkeletonToolbarProps } from './Toolbar';
import TableSkeleton from './TableSkeleton';
import { TableSkeletonProps } from './types';

export type { TableSkeletonProps, TableSkeletonContentProps, TableSkeletonToolbarProps };
export default createNameSpacedComponent(TableSkeleton, {
	Content: TableSkeletonContent,
	Toolbar: TableSkeletonToolbar
});
