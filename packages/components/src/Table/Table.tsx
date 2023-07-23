import React from 'react';
import { useTheme } from 'styled-components';
import {
	FilterFn,
	FilterFns,
	SortingFn,
	SortingFns,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';

import TableContext from './Context';
import StyledTableWrapper from './styled';
import { TableProps } from './types';
import { generateFinalColumnsData, normalizeText, getDateCellText } from './utils';

const Table = <Data extends Record<string, unknown>>(props: TableProps<Data>) => {
	const { children, columns, data, onRowClick, rowsCount, tableOptions, ...rest } = props;

	const theme = useTheme();

	const finalColumns = React.useMemo(() => generateFinalColumnsData(columns, data), [columns, data]);

	const defaultFilterFns = React.useMemo<FilterFns>(() => {
		const defaultFilterFn: FilterFn<Data> = (row, columnId, filterValue) => {
			const value = row.getValue(columnId);

			const locale = tableOptions?.meta?.locale ?? theme.locale ?? 'en';

			if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean')
				return normalizeText(value).includes(normalizeText(filterValue));
			if (value instanceof Date)
				return normalizeText(getDateCellText(value, locale)).includes(normalizeText(filterValue));
			return true;
		};

		return { default: defaultFilterFn };
	}, [tableOptions?.meta?.locale, theme.locale]);

	const defaultSortingFns = React.useMemo<SortingFns>(() => {
		const localeStringStringFn: SortingFn<Data> = (rowA, rowB, columnId) => {
			const valueA = rowA.getValue(columnId);
			const valueB = rowB.getValue(columnId);

			const locale = tableOptions?.meta?.locale ?? theme.locale ?? 'en';

			if (typeof valueA === 'string' && typeof valueB === 'string')
				return normalizeText(valueA).localeCompare(normalizeText(valueB), locale);
			if (
				(typeof valueA === 'number' || typeof valueA === 'boolean') &&
				(typeof valueB === 'number' || typeof valueB === 'boolean')
			)
				return normalizeText(valueA).localeCompare(normalizeText(valueB), locale);
			if (valueA instanceof Date && valueB instanceof Date) {
				const valueALocale = normalizeText(getDateCellText(valueA, locale));

				const valueBLocale = normalizeText(getDateCellText(valueB, locale));

				return valueALocale.localeCompare(valueBLocale, locale);
			}

			return (valueA as any) - (valueB as any);
		};

		return { locale: localeStringStringFn };
	}, [tableOptions?.meta?.locale, theme.locale]);

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
		filterFns: { ...defaultFilterFns, ...tableOptions?.filterFns },
		sortingFns: { ...defaultSortingFns, ...tableOptions?.sortingFns },
		meta: { locale: theme.locale, ...tableOptions?.meta }
	});

	return (
		<TableContext.Provider value={{ onRowClick, rowsCount, table }}>
			<StyledTableWrapper {...rest}>{children}</StyledTableWrapper>
		</TableContext.Provider>
	);
};

export default React.memo(Table) as typeof Table;
