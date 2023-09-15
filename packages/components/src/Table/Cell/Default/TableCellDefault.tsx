import React from 'react';

import Flex from 'components/Flex';

import { TableCellDefaultProps } from './types';
import TableCellText from '../Text';

const TableCellDefault: React.FC<TableCellDefaultProps> = props => {
	const { children, ...rest } = props;

	return children ? (
		<Flex height="100%" width="100%" {...(rest as any)}>
			{children}
		</Flex>
	) : (
		<TableCellText {...rest} as={rest.as as any} />
	);
};

export default React.memo(TableCellDefault);
