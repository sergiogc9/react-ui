import React from 'react';

import TextField, { TextFieldProps } from 'components/TextField';

import { TableFilterCellDefaultProps } from './types';

const TableFilterCell = (props: TableFilterCellDefaultProps) => {
	const { column } = props;

	const canFilter = column.getCanFilter();

	const onFilterChanged = React.useCallback<NonNullable<TextFieldProps['onChange']>>(
		e => column.setFilterValue(e.target.value),
		[column]
	);

	if (!canFilter) return null;

	return (
		<TextField aspectSize="xs" hasRemoveButton onChange={onFilterChanged} value={column.getFilterValue() as string} />
	);
};

export default TableFilterCell;
