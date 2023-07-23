/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from '@sergiogc9/react-ui-theme';
import {
	UseFiltersColumnOptions,
	UseFiltersColumnProps,
	UseFiltersInstanceProps,
	UseFiltersOptions,
	UseFiltersState,
	UseGlobalFiltersColumnOptions,
	UseGlobalFiltersInstanceProps,
	UseGlobalFiltersOptions,
	UseGlobalFiltersState,
	UsePaginationInstanceProps,
	UsePaginationOptions,
	UsePaginationState,
	UseSortByColumnOptions,
	UseSortByColumnProps,
	UseSortByHooks,
	UseSortByInstanceProps,
	UseSortByOptions,
	UseSortByState
} from 'react-table';

/**
 * Comment out the types depending on the plugins used.
 * Sample updated types at:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
 */

declare module 'react-table' {
	// take this file as-is, or comment out the sections that don't apply to your plugin configuration

	export interface TableOptions<D extends Record<string, unknown>>
		extends UseFiltersOptions<D>,
			UseGlobalFiltersOptions<D>,
			UsePaginationOptions<D>,
			UseSortByOptions<D> {}
	// UseExpandedOptions<D>,
	// UseGroupByOptions<D>,
	// UseResizeColumnsOptions<D>,
	// UseRowSelectOptions<D>,
	// UseRowStateOptions<D>,
	// // note that having Record here allows you to add anything to the options, this matches the spirit of the
	// // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
	// // feature set, this is a safe default.
	// Record<string, any> {}

	export interface Hooks<D extends Record<string, unknown> = Record<string, unknown>> extends UseSortByHooks<D> {}
	// UseExpandedHooks<D>,
	// UseGroupByHooks<D>,
	// UseRowSelectHooks<D>,

	export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>>
		extends UseFiltersInstanceProps<D>,
			UseGlobalFiltersInstanceProps<D>,
			UsePaginationInstanceProps<D>,
			UseSortByInstanceProps<D> {}
	// UseColumnOrderInstanceProps<D>,
	// UseExpandedInstanceProps<D>,
	// UseGroupByInstanceProps<D>,
	// UseRowSelectInstanceProps<D>,
	// UseRowStateInstanceProps<D>,

	export interface TableState<D extends Record<string, unknown> = Record<string, unknown>>
		extends UseFiltersState<D>,
			UseGlobalFiltersState<D>,
			UsePaginationState<D>,
			UseSortByState<D> {}
	// UseColumnOrderState<D>,
	// UseExpandedState<D>,
	// UseGroupByState<D>,
	// UseResizeColumnsState<D>,
	// UseRowSelectState<D>,
	// UseRowStateState<D>,

	export interface ColumnInterface<D extends Record<string, unknown> = Record<string, unknown>>
		extends UseFiltersColumnOptions<D>,
			UseGlobalFiltersColumnOptions<D>,
			UseSortByColumnOptions<D> {
		getCellWidthText?: (row: D) => string;
	}
	// UseGroupByColumnOptions<D>,
	// UseResizeColumnsColumnOptions<D>,

	export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
		extends UseFiltersColumnProps<D>,
			UseSortByColumnProps<D> {}
	// UseGroupByColumnProps<D>,
	// UseResizeColumnsColumnProps<D>,

	// export interface Cell<D extends Record<string, unknown> = Record<string, unknown>, V = any> {}
	// UseGroupByCellProps<D>,
	// 	UseRowStateCellProps<D>

	// export interface Row<D extends Record<string, unknown> = Record<string, unknown>> {}
	// UseExpandedRowProps<D>,
	// 	UseGroupByRowProps<D>,
	// 	UseRowSelectRowProps<D>,
	// 	UseRowStateRowProps<D> {}
}

declare module '@tanstack/table-core' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface TableMeta<TData extends RowData> {
		locale: Theme['locale'];
	}

	interface FilterFns {
		default: FilterFn<unknown>;
	}

	interface SortingFns {
		locale: SortingFn<unknown>;
	}
}
