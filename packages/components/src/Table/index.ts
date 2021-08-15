import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import TableHeaderCell, { TableHeaderCellProps } from './Header/Cell';
import TableCell, { TableCellDefaultProps, TableCellDateProps } from './Cell';
import TableContent, { TableContentProps } from './Content';
import TablePagination, { TablePaginationProps } from './Pagination';
import TableSkeleton, { TableSkeletonProps, TableSkeletonContentProps } from './Skeleton';
import TableToolbar, { TableToolbarProps } from './Toolbar';
import TableTotalResults, { TableTotalResultsProps } from './TotalResults';
import Table from './Table';
import { TableProps, TableCellProps, TableColumn, TableOptions } from './types';

export type {
	TableCellProps,
	TableColumn,
	TableCellDateProps,
	TableCellDefaultProps,
	TableContentProps,
	TableHeaderCellProps,
	TableOptions,
	TablePaginationProps,
	TableProps,
	TableSkeletonProps,
	TableSkeletonContentProps,
	TableToolbarProps,
	TableTotalResultsProps
};
export default createNameSpacedComponent(Table, {
	Cell: TableCell,
	Content: TableContent,
	HeaderCell: TableHeaderCell,
	Pagination: TablePagination,
	Skeleton: TableSkeleton,
	Toolbar: TableToolbar,
	TotalResults: TableTotalResults
});
