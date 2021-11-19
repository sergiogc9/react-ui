import React from 'react';
import {
	SortingRule,
	TableState,
	useTable,
	useAsyncDebounce,
	useFilters,
	useFlexLayout,
	useGlobalFilter,
	usePagination,
	useSortBy
} from 'react-table';
import get from 'lodash/get';
import { useUpdateEffect } from '@sergiogc9/react-hooks';

import TableCellDefault from './Cell/Default';
import TableHeaderCell from './Header/Cell';
import StyledTableWrapper from './styled';
import { TableColumn, TableOptions, TableProps } from './types';
import TableContext from './Context';

const getColumnWidth = <Data extends Record<string, unknown>>(
	rows: Data[],
	accessor: TableColumn<Data>['accessor'],
	headerText: string,
	getCellWidthText: (row: Data) => string
) => {
	const maxWidth = 400;
	const minWidth = 20;
	const magicSpacing = 10;
	const cellLength = Math.max(
		...rows.map((row: any, index) => {
			let value: number | string = '';

			if (getCellWidthText) value = getCellWidthText(row);
			else if (!accessor) return 0;
			else if (typeof accessor === 'string') {
				value = get(row, accessor);
			} else {
				value = (accessor as any)(row, index);
			}

			return (value || '').toString().length;
		}),
		headerText.length
	);

	return Math.min(maxWidth, Math.max(cellLength * magicSpacing, minWidth));
};

const generateFinalColumnsData = <Data extends Record<string, unknown>>(
	columns: TableColumn<Data>[],
	data: Data[]
): TableColumn<Data>[] => {
	return columns.map((column: any) => ({
		...column,
		columns: column.columns ? generateFinalColumnsData(column.columns, data) : undefined,
		Cell: column.Cell ?? TableCellDefault,
		Header:
			typeof column.Header === 'string'
				? (props: any) => (
						// eslint-disable-next-line react/jsx-indent
						<TableHeaderCell {...props}>{column.Header}</TableHeaderCell>
				  )
				: column.Header,
		width:
			column.width ??
			(typeof column.Header === 'string'
				? getColumnWidth(data, column.accessor, column.Header, column.getCellWidthText)
				: undefined)
	}));
};

const generateFinalInitialState = <Data extends Record<string, unknown>>(
	tableOptions: TableProps<Data>['tableOptions'],
	filters: TableProps<Data>['filters'],
	globalFilter: TableProps<Data>['globalFilter'],
	hiddenColumns: TableProps<Data>['hiddenColumns'],
	pageIndex: TableProps<Data>['pageIndex'],
	pageSize: TableProps<Data>['pageSize']
): Partial<TableState<Data>> => ({
	...tableOptions?.initialState,
	filters: tableOptions?.initialState?.filters ?? filters ?? [],
	globalFilter: tableOptions?.initialState?.globalFilter ?? globalFilter,
	hiddenColumns: tableOptions?.initialState?.hiddenColumns ?? hiddenColumns ?? [],
	pageIndex: tableOptions?.initialState?.pageIndex ?? pageIndex ?? 0,
	pageSize: tableOptions?.initialState?.pageSize ?? pageSize ?? 10
});

const generateFinalSortTypes = <Data extends Record<string, unknown>>(
	sortTypes: TableOptions<Data>['sortTypes'] = {}
): TableOptions<Data>['sortTypes'] => ({
	boolean: (rowA, rowB, columnId) => {
		const a = rowA.values[columnId];
		const b = rowB.values[columnId];
		return a || !b ? 1 : -1;
	},
	...sortTypes
});

const Table = <Data extends Record<string, unknown>>(props: TableProps<Data>) => {
	const {
		children,
		columns,
		data,
		filters,
		globalFilter,
		hiddenColumns,
		onRowClick,
		onSettingsChange,
		onSortChange,
		pageCount,
		pageIndex,
		pageSize,
		rowsCount,
		tableOptions = {},
		...rest
	} = props;

	const finalColumns = React.useMemo(() => generateFinalColumnsData(columns, data), [columns, data]);

	const finalInitialState = React.useMemo(
		() => generateFinalInitialState(tableOptions, filters, globalFilter, hiddenColumns, pageIndex, pageSize),
		[filters, globalFilter, hiddenColumns, pageIndex, pageSize, tableOptions]
	);

	const finalSortTypes = React.useMemo(() => generateFinalSortTypes(tableOptions.sortTypes), [tableOptions.sortTypes]);

	const tableInstance = useTable(
		{
			columns: finalColumns,
			data,
			disableMultiSort: true,
			pageCount,
			...tableOptions,
			initialState: finalInitialState,
			sortTypes: finalSortTypes
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination,
		useFlexLayout
	);

	const { gotoPage, setAllFilters, setGlobalFilter, setHiddenColumns, setPageSize, state } = tableInstance;

	useUpdateEffect(() => {
		if (onSortChange) {
			if (state.sortBy.length) onSortChange(state.sortBy[0].id, state.sortBy[0].desc);
			else onSortChange();
		}
	}, [state.sortBy]);

	useUpdateEffect(() => {
		setAllFilters(filters || []);
	}, [filters]);

	useUpdateEffect(() => {
		setGlobalFilter(globalFilter);
	}, [globalFilter]);

	useUpdateEffect(() => {
		setHiddenColumns(hiddenColumns || []);
	}, [hiddenColumns]);

	useUpdateEffect(() => {
		setPageSize(pageSize || 10);
	}, [pageSize]);

	useUpdateEffect(() => {
		gotoPage(pageIndex || 0);
	}, [pageIndex]);

	const onSettingsChanged = React.useCallback(
		(settings: { pageIndex: number; pageSize: number; sortBy: SortingRule<Data>[] }) => {
			if (onSettingsChange)
				onSettingsChange({
					pageIndex: settings.pageIndex,
					pageSize: settings.pageSize,
					sortBy: settings.sortBy
				});
		},
		[onSettingsChange]
	);

	const debouncedOnSettingsChanged = useAsyncDebounce(onSettingsChanged, 100);

	useUpdateEffect(() => {
		debouncedOnSettingsChanged({
			pageIndex: state.pageIndex,
			pageSize: state.pageSize,
			sortBy: state.sortBy
		});
	}, [onSettingsChange, state.pageIndex, state.pageSize, state.sortBy]);

	return (
		<TableContext.Provider value={{ onRowClick, rowsCount, tableInstance }}>
			<StyledTableWrapper {...rest}>{children}</StyledTableWrapper>
		</TableContext.Provider>
	);
};

export default React.memo(Table) as typeof Table;
