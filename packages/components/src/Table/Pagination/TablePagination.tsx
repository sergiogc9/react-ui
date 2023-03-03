import React from 'react';

import Flex from 'components/Flex';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';
import Text from 'components/Text';

import TableContext from '../Context';
import { TablePaginationProps } from './types';

const TablePaginator: React.FC<TablePaginationProps> = (props: TablePaginationProps) => {
	const { onGoToPage, ...rest } = props;

	const { rowsCount, table } = React.useContext(TableContext);

	const { pageIndex, pageSize } = table.getState().pagination;
	const { rows: filteredRows } = table.getFilteredRowModel();
	const { manualPagination } = table.options;
	const pageCount = table.getPageCount();

	const onPreviousPageBtnClicked = React.useCallback(() => {
		if (onGoToPage) onGoToPage(pageIndex - 1);
		if (table.getCanPreviousPage()) table.previousPage();
	}, [onGoToPage, pageIndex, table]);

	const onNextPageBtnClicked = React.useCallback(() => {
		if (onGoToPage) onGoToPage(pageIndex + 1);
		if (table.getCanNextPage()) table.nextPage();
	}, [onGoToPage, pageIndex, table]);

	const resultValues = React.useMemo(() => {
		const from = pageIndex * pageSize + 1;
		const to = Math.min(filteredRows.length, (pageIndex + 1) * pageSize);
		const total = manualPagination ? rowsCount ?? `~${pageSize * pageCount}` : rowsCount ?? filteredRows.length;

		return { from, to, total };
	}, [manualPagination, pageCount, pageIndex, pageSize, filteredRows.length, rowsCount]);

	return (
		<Flex alignItems="center" {...rest}>
			<IconButton
				data-testid="table-pagination-previous-page-btn"
				isDisabled={!table.getCanPreviousPage()}
				onClick={onPreviousPageBtnClicked}
			>
				<Icon icon="arrow-left" styling="outlined" />
			</IconButton>
			<Text aspectSize="xs" marginX={3}>
				{`${resultValues.from}-${resultValues.to} of ${resultValues.total}`}
			</Text>
			<IconButton
				data-testid="table-pagination-next-page-btn"
				isDisabled={!table.getCanNextPage()}
				onClick={onNextPageBtnClicked}
			>
				<Icon icon="arrow-right" styling="outlined" />
			</IconButton>
		</Flex>
	);
};

export default React.memo(TablePaginator);
