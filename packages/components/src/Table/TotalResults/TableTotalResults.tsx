import React from 'react';

import Box from 'components/Box';

import TableContext from '../Context';
import { TableTotalResultsProps } from './types';

const TableToolbar: React.FC<TableTotalResultsProps> = (props: TableTotalResultsProps) => {
	const { render, ...rest } = props;

	const {
		rowsCount,
		tableInstance: { rows }
	} = React.useContext(TableContext);

	return <Box {...rest}>{render({ totalResults: rowsCount ?? rows.length })}</Box>;
};

export default React.memo(TableToolbar);
