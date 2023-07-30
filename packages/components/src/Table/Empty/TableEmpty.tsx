import React from 'react';

import Flex from 'components/Flex';

import TableContext from '../Context';
import { TableEmptyProps } from './types';

const TableEmpty: React.FC<TableEmptyProps> = (props: TableEmptyProps) => {
	const { rowsCount, table } = React.useContext(TableContext);

	const { rows: filteredRows } = table.getFilteredRowModel();
	const { pageSize } = table.getState().pagination;
	const pageCount = table.getPageCount();
	const { manualPagination } = table.options;

	const numberOfRows = React.useMemo(() => {
		return manualPagination ? rowsCount ?? pageSize * pageCount : rowsCount ?? filteredRows.length;
	}, [manualPagination, rowsCount, pageSize, pageCount, filteredRows.length]);

	if (numberOfRows > 0) return null;
	return <Flex alignItems="center" justifyContent="center" px={3} py={5} {...props} />;
};

export default React.memo(TableEmpty);
