import React from 'react';

import Icon, { IconProps } from 'components/Icon';

import StyledTableHeaderCell from './styled';
import { TableHeaderCellProps } from './types';

const TableHeaderCell: React.FC<TableHeaderCellProps> = props => {
	const {
		children,
		data,
		column: { canSort, isSorted, isSortedDesc, toggleSortBy },
		headers,
		...rest
	} = props;

	const onHeaderClicked = React.useCallback(() => {
		if (canSort) toggleSortBy();
	}, [canSort, toggleSortBy]);

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
			{children}
			{rightContent}
		</StyledTableHeaderCell>
	);
};

export default TableHeaderCell;
