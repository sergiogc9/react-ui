import React from 'react';

import StyledTableCellText from './styled';
import { TableCellTextProps } from './types';

const TableCellText: React.FC<TableCellTextProps> = props => {
	const { children, data, headers, value, ...rest } = props;

	return <StyledTableCellText {...rest}>{children ?? value}</StyledTableCellText>;
};

export default React.memo(TableCellText);
