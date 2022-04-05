import React from 'react';

import Flex from 'components/Flex';

import { TableCellDefaultProps } from './types';
import TableCellText from '../Text';

const TableCellDefault: React.FC<TableCellDefaultProps> = props => {
	const { children, data, headers, value, ...rest } = props;

	return children ? (
		<Flex height="100%" width="100%" {...rest}>
			{children}
		</Flex>
	) : (
		<TableCellText data={data} headers={headers} value={value} {...rest} />
	);
};

export default React.memo(TableCellDefault);
