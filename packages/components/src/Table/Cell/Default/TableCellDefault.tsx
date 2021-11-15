import React from 'react';

import Box from 'components/Box';

import { TableCellDefaultProps } from './types';
import TableCellText from '../Text';

const TableCellDefault: React.FC<TableCellDefaultProps> = props => {
	const { children, data, headers, value, ...rest } = props;

	return children ? (
		<Box height="100%" width="100%" {...rest}>
			{children}
		</Box>
	) : (
		<TableCellText data={data} headers={headers} value={value} {...rest} />
	);
};

export default React.memo(TableCellDefault);
