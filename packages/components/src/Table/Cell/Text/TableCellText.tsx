import React from 'react';

import StyledTableCellText from './styled';
import { TableCellTextProps } from './types';

const TableCellText: React.FC<TableCellTextProps> = props => {
	const { children, cell, ...rest } = props;

	return <StyledTableCellText {...rest}>{children ?? cell.getValue()}</StyledTableCellText>;
};

export default React.memo(TableCellText);
