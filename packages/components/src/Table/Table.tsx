import React from 'react';

import {
	AccessorFnColumnDef,
	AccessorKeyColumnDef,
	GroupColumnDef,
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	getFilteredRowModel,
	FilterFn,
	FilterFns
} from '@tanstack/react-table';
import get from 'lodash/get';

import TableCellDefault from './Cell/Default';
import TableContext from './Context';
import TableHeaderCell from './Header/Cell';
import StyledTableWrapper from './styled';
import { TableProps, TableColumnDef } from './types';

const getColumnWidth = <Data extends Record<string, unknown>>(rows: Data[], column: TableColumnDef<Data>) => {
	const accessor =
		(column as AccessorFnColumnDef<Data>).accessorFn ??
		(column as AccessorKeyColumnDef<Data>).accessorKey ??
		column.id!;
	const headerText = typeof column.header === 'string' ? column.header : '';

	const maxWidth = 400;
	const minWidth = 60;
	const magicSpacing = 10;
	const cellLength = Math.max(
		...rows.map((row, index) => {
			let value: number | string = '';

			if (column.getCellWidthText) value = column.getCellWidthText(row);
			else if (!accessor) return 0;
			else if (typeof accessor === 'string') {
				value = get(row, accessor) as string | number;
			} else {
				value = accessor(row, index) as string | number;
			}

			return (value || '').toString().length;
		}),
		headerText.length
	);

	return Math.min(column.maxSize ?? maxWidth, Math.max(cellLength * magicSpacing, column.maxSize ?? minWidth));
};

const generateFinalColumnsData = <Data extends Record<string, unknown>>(
	columns: TableColumnDef<Data>[],
	data: Data[]
): TableColumnDef<Data>[] => {
	return columns.map(column => {
		if (!column.id) throw new Error('All columns must have an id');

		return {
			...column,
			id: column.id ?? '',
			columns: (column as GroupColumnDef<Data>).columns
				? generateFinalColumnsData((column as GroupColumnDef<Data>).columns!, data)
				: undefined,
			cell: column.cell ?? TableCellDefault,
			header:
				typeof column.header === 'string'
					? props => <TableHeaderCell.Default {...props}>{column.header?.toString()}</TableHeaderCell.Default>
					: column.header,
			size: column.size ?? getColumnWidth(data, column),
			filterFn: column.filterFn ?? ('default' as keyof FilterFns)
		};
	});
};

const defaultFilterFn: FilterFn<unknown> = (row, columnId, filterValue) => {
	const value = row.getValue(columnId);
	if (typeof value === 'string') return value.toLowerCase().includes(filterValue.toLowerCase());
	if (typeof value === 'number' || typeof value === 'boolean')
		return value.toString().toLowerCase().includes(filterValue.toLowerCase());
	// TODO! use theme.locale if possble
	if (value instanceof Date)
		return value
			.toLocaleDateString('es', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			})
			.toLowerCase()
			.includes(filterValue.toLowerCase());
	return true;
};

const defaultFilterFns: FilterFns = {
	default: defaultFilterFn
};

const Table = <Data extends Record<string, unknown>>(props: TableProps<Data>) => {
	const { children, columns, data, onRowClick, rowsCount, tableOptions, ...rest } = props;

	const finalColumns = React.useMemo(() => generateFinalColumnsData(columns, data), [columns, data]);

	const table = useReactTable<Data>({
		columns: finalColumns,
		data,
		enableMultiSort: false,
		enableSortingRemoval: true,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		globalFilterFn: 'default' as keyof FilterFns,
		...(tableOptions ?? {}),
		filterFns: { ...defaultFilterFns, ...tableOptions?.filterFns }
	});

	return (
		<TableContext.Provider value={{ onRowClick, rowsCount, table }}>
			<StyledTableWrapper {...rest}>{children}</StyledTableWrapper>
		</TableContext.Provider>
	);
};

export default React.memo(Table) as typeof Table;
