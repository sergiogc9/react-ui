import { ColumnDef, FilterFns, Row, SortingFns, TableOptions } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

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

type TableProps<D extends Record<string, unknown>, T extends React.ElementType = 'div'> = ExtendedFlexProps<
	Props<D>,
	T
>;

type TableComponent<D extends Record<string, unknown>> = ExtendedFlexComponent<Props<D>>;

type StyledTableWrapperProps<T extends React.ElementType = 'div'> = FlexProps<T>;

export { TableComponent, TableProps, TableColumnDef, TableFilterFns, TableSortingFns, Row, StyledTableWrapperProps };
