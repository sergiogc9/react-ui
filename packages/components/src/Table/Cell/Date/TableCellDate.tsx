import React from 'react';
import { useTheme } from 'styled-components';

import TableCellText from '../Text';
import { TableCellDateProps } from './types';

/**
 * The value must be in ISO format. e.g: 2021-06-15T12:34:18.547Z
 */
const TableCellDate: React.FC<TableCellDateProps> = props => {
	const { value } = props;

	const theme = useTheme();

	const date = value instanceof Date ? value : new Date(value);

	return (
		<TableCellText aspectSize="s" {...props}>
			{date.toLocaleDateString(theme.locale, {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			})}
		</TableCellText>
	);
};

export default React.memo(TableCellDate);
