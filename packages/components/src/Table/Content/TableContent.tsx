import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { useIsHorizontalScrolled } from '@sergiogc9/react-hooks';

import Divider from 'components/Divider';
import Flex from 'components/Flex';

import TableContext from '../Context';
import TableBodyCell from '../Body/Cell';
import TableBodyRow from '../Body/Row';
import { TableHeaderCellWrapper } from '../Header/Cell';
import StyledTableFilterGroup from '../Filter/Group';
import TableFilterCellWrapper from '../Filter/Cell/Wrapper';
import StyledTableFilterCellDefault from '../Filter/Cell/Default';
import TableHeaderGroup from '../Header/Group';
import TableContentGradient from './Gradient';
import StyledContentTable from './styled';
import { TableContentProps } from './types';

const TableContent: React.FC<TableContentProps> = (props: TableContentProps) => {
	const { minWidth, ...rest } = props;

	const { onRowClick, table } = React.useContext(TableContext);

	const scrollContentRef = React.useRef(null);
	const { hasScroll, percentage } = useIsHorizontalScrolled(scrollContentRef);

	const roundedPercentage = Math.round(percentage);

	return (
		<Flex position="relative">
			<StyledContentTable {...rest} minWidth="0 !important" ref={scrollContentRef}>
				<Flex alignItems="center" flexDirection="column" minWidth={minWidth}>
					{table.getHeaderGroups().map(headerGroup => (
						<TableHeaderGroup key={headerGroup.id} role="row">
							{headerGroup.headers.map(header => (
								<TableHeaderCellWrapper key={header.id} flex={`${header.getSize()} 0 auto`} width={header.getSize()}>
									{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
								</TableHeaderCellWrapper>
							))}
						</TableHeaderGroup>
					))}
					{table.options.enableFilters &&
						table.getHeaderGroups().map(headerGroup => (
							<StyledTableFilterGroup key={headerGroup.id} role="row">
								{headerGroup.headers.map(header => (
									<TableFilterCellWrapper key={header.id} flex={`${header.getSize()} 0 auto`} width={header.getSize()}>
										{<StyledTableFilterCellDefault column={header.column} />}
									</TableFilterCellWrapper>
								))}
							</StyledTableFilterGroup>
						))}
				</Flex>
				<Flex alignItems="center" flexDirection="column" minWidth={minWidth} mt={2}>
					{table.getRowModel().rows.map(row => (
						<React.Fragment key={row.id}>
							<TableBodyRow
								cursor={onRowClick ? 'pointer' : 'unset'}
								onClick={() => {
									if (onRowClick) onRowClick(row);
								}}
							>
								{row.getVisibleCells().map(cell => (
									<TableBodyCell key={cell.id} flex={`${cell.column.getSize()} 0 auto`} width={cell.column.getSize()}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableBodyCell>
								))}
							</TableBodyRow>
							<Divider paddingX={2} />
						</React.Fragment>
					))}
				</Flex>
			</StyledContentTable>
			{hasScroll && (
				<TableContentGradient
					data-testid="gradient-left"
					duration="0.25s"
					isVisible={roundedPercentage !== 0}
					location="left"
					timingFunction={roundedPercentage !== 0 ? 'ease-in' : 'ease-out'}
				/>
			)}
			{hasScroll && (
				<TableContentGradient
					data-testid="gradient-right"
					duration="0.25s"
					isVisible={roundedPercentage !== 100}
					location="right"
					timingFunction={roundedPercentage !== 100 ? 'ease-in' : 'ease-out'}
				/>
			)}
		</Flex>
	);
};

export default React.memo(TableContent);
