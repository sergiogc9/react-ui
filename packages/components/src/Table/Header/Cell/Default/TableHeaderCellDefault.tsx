import React from 'react';
import { SortDirection } from '@tanstack/react-table';

import Icon, { IconProps } from 'components/Icon';

import StyledTableHeaderCell, { StyledTableHeaderCellDefaultContent } from './styled';
import { TableHeaderCellDefaultProps } from './types';

const TableHeaderCell: React.FC<TableHeaderCellDefaultProps> = props => {
	const { children, column, header, ...rest } = props;

	const canSort = column.getCanSort();
	const canMultiSort = column.getCanMultiSort();
	const isSorted = !!column.getIsSorted();
	const isSortedDesc = isSorted && (column.getIsSorted() as SortDirection) === 'desc';

	const onHeaderClicked = React.useCallback(() => {
		if (canSort) column.toggleSorting(undefined, canMultiSort);
	}, [canMultiSort, canSort, column]);

	const rightContent = React.useMemo(() => {
		if (!canSort) return null;

		const commonProps: Partial<IconProps> = {
			aspectSize: 's',
			marginLeft: 1,
			styling: 'outlined'
		};

		if (isSorted) {
			if (isSortedDesc) return <Icon icon="arrow-downward" {...commonProps} />;
			return <Icon icon="arrow-upward" {...commonProps} />;
		}

		return <Icon className="column-unsorted" icon="unfold-more" {...commonProps} />;
	}, [canSort, isSorted, isSortedDesc]);

	return (
		<StyledTableHeaderCell {...rest} canSort={canSort} onClick={onHeaderClicked}>
			<StyledTableHeaderCellDefaultContent>{children}</StyledTableHeaderCellDefaultContent>
			{rightContent}
		</StyledTableHeaderCell>
	);
};

export default TableHeaderCell;
