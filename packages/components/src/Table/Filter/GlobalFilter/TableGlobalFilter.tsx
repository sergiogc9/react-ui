import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Flex from 'components/Flex';
import Icon from 'components/Icon';
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
					aspectSize="xs"
					onChange={onFilterChanged}
					hasRemoveButton
					leftContent={<Icon.FontAwesome icon={faMagnifyingGlass} aspectSize="s" />}
					value={table.getState().globalFilter}
					{...textFieldProps}
				/>
			)}
		</Flex>
	);
};

export default React.memo(TableGlobalFilter);
