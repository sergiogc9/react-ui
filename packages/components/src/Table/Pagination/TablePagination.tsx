import React from 'react';

import Box from 'components/Box';
import Content from 'components/Content';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';

import TableContext from '../Context';
import { TablePaginationProps } from './types';

const TablePaginator: React.FC<TablePaginationProps> = (props: TablePaginationProps) => {
	const { onGoToPage, ...rest } = props;

	const {
		rowsCount,
		tableInstance: {
			canPreviousPage,
			canNextPage,
			manualPagination,
			nextPage,
			pageCount,
			previousPage,
			rows,
			state: { pageIndex, pageSize }
		}
	} = React.useContext(TableContext);

	const onPreviousPageBtnClicked = React.useCallback(() => {
		if (onGoToPage) onGoToPage(pageIndex - 1);
		previousPage();
	}, [onGoToPage, pageIndex, previousPage]);

	const onNextPageBtnClicked = React.useCallback(() => {
		if (onGoToPage) onGoToPage(pageIndex + 1);
		nextPage();
	}, [onGoToPage, pageIndex, nextPage]);

	const resultValues = React.useMemo(() => {
		const from = pageIndex * pageSize + 1;
		const to = Math.min(rows.length, (pageIndex + 1) * pageSize);
		const total = manualPagination ? rowsCount ?? `~${pageSize * pageCount}` : rowsCount ?? rows.length;

		return { from, to, total };
	}, [manualPagination, pageCount, pageIndex, pageSize, rows.length, rowsCount]);

	return (
		<Box alignItems="center" {...rest}>
			<IconButton
				data-testid="table-pagination-previous-page-btn"
				isDisabled={!canPreviousPage}
				onClick={onPreviousPageBtnClicked}
			>
				<Icon icon="arrow-left" styling="outlined" />
			</IconButton>
			<Content aspectSize="xs" marginX={3}>
				{`${resultValues.from}-${resultValues.to} of ${resultValues.total}`}
			</Content>
			<IconButton data-testid="table-pagination-next-page-btn" isDisabled={!canNextPage} onClick={onNextPageBtnClicked}>
				<Icon icon="arrow-right" styling="outlined" />
			</IconButton>
		</Box>
	);
};

export default React.memo(TablePaginator);
