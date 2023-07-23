import React from 'react';

import { AccessorFnColumnDef, AccessorKeyColumnDef, GroupColumnDef } from '@tanstack/react-table';
import get from 'lodash/get';

import TableCellDefault from './Cell/Default';
import TableHeaderCell from './Header/Cell';
import { TableColumnDef } from './types';
import { Theme } from '@sergiogc9/react-ui-theme';

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
			filterFn: column.filterFn ?? 'default'
		};
	});
};

const getDateCellText = (date: Date, locale: Theme['locale']) => {
	return date.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
};

type ConvertibleToString = {
	toString: () => string;
};

const normalizeText: <T extends ConvertibleToString>(data: T) => string = data => {
	return data
		.toString()
		.trim()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
};

export { getColumnWidth, getDateCellText, generateFinalColumnsData, normalizeText };
