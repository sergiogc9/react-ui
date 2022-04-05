import {
	CellProps,
	Column,
	Filters,
	SortingRule,
	TableOptions as ReactTableOptions,
	TableState as ReactTableState,
	UseSortByColumnOptions,
	UseFiltersColumnOptions,
	UseFiltersState,
	UseGlobalFiltersColumnOptions,
	UseGlobalFiltersState,
	UseFiltersOptions,
	UseGlobalFiltersOptions,
	UsePaginationOptions,
	UsePaginationState,
	UseSortByOptions,
	UseSortByState,
	Row
} from 'react-table';

import { FlexProps } from 'components/Flex';

type Props<D extends Record<string, unknown>> = {
	/**
	 * The table column definitions
	 */
	readonly columns: TableColumn<D>[];

	/**
	 * The table data array
	 */
	readonly data: D[];

	/**
	 * An array containing the filters to be used. Only used if filtering data is intended. To external filtering, filter data outside and don't use this prop.
	 */
	readonly filters?: Filters<D>;

	/**
	 * The global filter to filter with.
	 */
	readonly globalFilter?: any;

	/**
	 * An array containing the ids of the columns to be hidden.
	 */
	readonly hiddenColumns?: TableState<D>['hiddenColumns'];

	/**
	 * Event called when a row is clicked.
	 * @param row: The row data.
	 */
	readonly onRowClick?: (row: Row<D>) => void;

	/**
	 * Event to handle sort change. Useful when controlling from outside the order.
	 * @param id: The column id.
	 * @param desc: Boolean if sorting is desc or not
	 */
	readonly onSortChange?: (id: string, desc: boolean) => void;

	/**
	 * Event to handle some table settings changes. This handler should be used to update (refetch) the data when the user changes some settings, when controlling the table from outside.
	 * IMPORTANT: Remember to disable automatic pagination and sorting if controlling from outside.
	 * IMPORTANT: This handler can be triggered more than once
	 */
	readonly onSettingsChange?: (settings: { pageIndex: number; pageSize: number; sortBy: SortingRule<D>[] }) => void;

	/**
	 * Number of pages available. Only use it when controlling the pagination from outside.
	 */
	readonly pageCount?: number;

	/**
	 * The number of current page. Only use it when controlling the pagination from outside.
	 */
	readonly pageIndex?: number;

	/**
	 * Number of rows that are shown in a page. Only use it when controlling the pagination from outside.
	 */
	readonly pageSize?: number;

	/**
	 * Number of total rows that are available in the table. This prop should only be used when using manualPagination as true.
	 * Without it, the table will show an approximated total results value based on pageCount and pageSize.
	 */
	readonly rowsCount?: number;

	/**
	 * The table options.
	 */
	readonly tableOptions?: Omit<TableOptions<D>, 'data' | 'columns'>;
};

export type TableProps<D extends Record<string, unknown>> = Props<D> & FlexProps;
export type StyledTableWrapperProps = FlexProps;

export type TableColumn<D extends Record<string, unknown>> = Column<D> &
	UseFiltersColumnOptions<D> &
	UseGlobalFiltersColumnOptions<D> &
	UseSortByColumnOptions<D> & {
		getCellWidthText?: (row: D) => string;
	};

export type TableOptions<D extends Record<string, unknown>> = Omit<ReactTableOptions<D>, 'initialState'> &
	UseFiltersOptions<D> &
	UseGlobalFiltersOptions<D> &
	UsePaginationOptions<D> &
	UseSortByOptions<D> & {
		initialState?: TableState<D>;
	};

export type TableState<D extends Record<string, unknown>> = Partial<
	ReactTableState<D> & UseFiltersState<D> & UseGlobalFiltersState<D> & UsePaginationState<D> & UseSortByState<D>
>;

export type TableCellProps<D extends Record<string, unknown>> = CellProps<D>;
