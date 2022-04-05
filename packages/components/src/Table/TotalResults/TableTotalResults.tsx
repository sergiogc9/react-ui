import React from 'react';

import Flex from 'components/Flex';

import TableContext from '../Context';
import { TableTotalResultsProps } from './types';

const TableToolbar: React.FC<TableTotalResultsProps> = (props: TableTotalResultsProps) => {
	const { render, ...rest } = props;

	const {
		rowsCount,
		tableInstance: { rows }
	} = React.useContext(TableContext);

	return <Flex {...rest}>{render({ totalResults: rowsCount ?? rows.length })}</Flex>;
};

export default React.memo(TableToolbar);
