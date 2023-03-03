import React from 'react';

import Flex from 'components/Flex';

import TableContext from '../Context';
import { TableTotalResultsProps } from './types';

const TableToolbar: React.FC<TableTotalResultsProps> = (props: TableTotalResultsProps) => {
	const { render, ...rest } = props;

	const { rowsCount, table } = React.useContext(TableContext);

	const { rows: filteredRows } = table.getFilteredRowModel();

	return <Flex {...rest}>{render({ totalResults: rowsCount ?? filteredRows.length })}</Flex>;
};

export default React.memo(TableToolbar);
