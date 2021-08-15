import React from 'react';

import Content from 'components/Content';

import { TableCellDefaultProps } from './types';

const TableCellDefault: React.FC<TableCellDefaultProps> = props => {
	const { children, data, headers, value, ...rest } = props;

	return (
		<Content aspectSize="s" color="neutral.900" {...rest}>
			{children ?? value}
		</Content>
	);
};

export default React.memo(TableCellDefault);
