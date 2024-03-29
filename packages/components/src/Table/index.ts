import { createNameSpacedComponent } from '@sergiogc9/react-utils';
import { createColumnHelper } from '@tanstack/react-table';

import TableHeaderCell, { TableHeaderCellDefaultProps } from './Header/Cell';
import TableCell, { TableCellProps, TableCellDefaultProps, TableCellDateProps, TableCellTextProps } from './Cell';
import TableContent, { TableContentProps } from './Content';
import TableEmpty, { TableEmptyProps } from './Empty';
import TableGlobalFilter from './Filter/GlobalFilter';
import TablePagination, { TablePaginationProps } from './Pagination';
import TableSkeleton, { TableSkeletonProps, TableSkeletonContentProps } from './Skeleton';
import TableToolbar, { TableToolbarProps } from './Toolbar';
import TableTotalResults, { TableTotalResultsProps } from './TotalResults';
import Table from './Table';
import { Row, TableColumnDef, TableFilterFns, TableSortingFns, TableProps } from './types';

export type {
	Row,
	TableCellDateProps,
	TableCellDefaultProps,
	TableCellProps,
	TableCellTextProps,
	TableColumnDef,
	TableContentProps,
	TableEmptyProps,
	TableFilterFns,
	TableSortingFns,
	TableHeaderCellDefaultProps,
	TablePaginationProps,
	TableProps,
	TableSkeletonProps,
	TableSkeletonContentProps,
	TableToolbarProps,
	TableTotalResultsProps
};
export { createColumnHelper };
export default createNameSpacedComponent(Table, {
	Cell: TableCell,
	Content: TableContent,
	Empty: TableEmpty,
	GlobalFilter: TableGlobalFilter,
	HeaderCell: TableHeaderCell,
	Pagination: TablePagination,
	Skeleton: TableSkeleton,
	Toolbar: TableToolbar,
	TotalResults: TableTotalResults
});
