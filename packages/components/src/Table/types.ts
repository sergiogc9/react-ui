import { ColumnDef, FilterFns, Row, SortingFns, TableOptions } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';

type TableColumnDef<D extends Record<string, unknown>> = ColumnDef<D> & {
	getCellWidthText?: (row: D) => string;
};

interface Props<D extends Record<string, unknown>> {
	/**
	 * The table column definitions
	 */
	readonly columns: TableColumnDef<D>[];

	/**
	 * The table data array
	 */
	readonly data: D[];

	/**
	 * Event called when a row is clicked.
	 * @param row: The row data.
	 */
	readonly onRowClick?: (row: Row<D>) => void;

	/**
	 * Number of total rows that are available in the table. This prop should only be used when using manualPagination as true.
	 * Without it, the table will show an approximated total results value based on pageCount and pageSize.
	 */
	readonly rowsCount?: number;

	/**
	 * The table options.
	 */
	readonly tableOptions?: Omit<TableOptions<D>, 'data' | 'columns' | 'getCoreRowModel' | 'filterFns' | 'sortingFns'> & {
		getCoreRowModel?: TableOptions<D>['getCoreRowModel']; // Making getCoreRowModel optional
		filterFns?: TableOptions<D>['filterFns']; // Making filterFns optional
		sortingFns?: TableOptions<D>['sortingFns']; // Making sortingFns optional
	};
}

type TableFilterFns = FilterFns;
type TableSortingFns = SortingFns;

export interface TableProps<D extends Record<string, unknown>>
	extends Props<D>,
		FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}
export interface StyledTableWrapperProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {}
export { TableColumnDef, TableFilterFns, TableSortingFns, Row };
