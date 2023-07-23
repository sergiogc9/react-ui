import React from 'react';

import Flex from 'components/Flex';
import TextField, { TextFieldProps } from 'components/TextField';

import TableContext from '../../Context';

import { TableGlobalFilterProps } from './types';

const TableGlobalFilter = (props: TableGlobalFilterProps) => {
	const { textFieldProps, ...rest } = props;

	const { table } = React.useContext(TableContext);

	const onFilterChanged = React.useCallback<NonNullable<TextFieldProps['onChange']>>(
		e => table.setGlobalFilter(e.target.value),
		[table]
	);

	const isGlobalFilterEnabled = table.getAllColumns()[0].getCanGlobalFilter();

	return (
		<Flex {...rest}>
			{isGlobalFilterEnabled && (
				<TextField
					aspectSize="s"
					onChange={onFilterChanged}
					value={table.getState().globalFilter}
					{...textFieldProps}
				/>
			)}
		</Flex>
	);
};

export default React.memo(TableGlobalFilter);
