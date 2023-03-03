import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import range from 'lodash/range';

import { withTheme } from 'components/private/utils/tests';

import Table, { TableColumnDef, TablePaginationProps, TableProps } from '..';
import TablePagination from '.';

type TestData = {
	id: number;
	name: string;
};

const defaultColumns: TableColumnDef<TestData>[] = [
	{ accessorKey: 'id', id: 'id', header: 'Id' },
	{ accessorKey: 'name', id: 'name', header: 'Name' }
];

const defaultData: TestData[] = range(0, 100).map(num => ({
	id: num,
	name: faker.name.firstName()
}));

const previousBtnTestId = 'table-pagination-previous-page-btn';
const nextBtnTestId = 'table-pagination-next-page-btn';
const mockOnGoToPage = jest.fn();

const getComponent = (
	tablePaginationProps: Partial<TablePaginationProps> = {},
	tableProps: Partial<TableProps<TestData>> = {}
) => {
	return render(
		withTheme(
			<Table data={defaultData} columns={defaultColumns} {...tableProps}>
				<TablePagination onGoToPage={mockOnGoToPage} {...tablePaginationProps} />
			</Table>
		)
	);
};

describe('TablePagination', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render default pagination info', () => {
		getComponent();

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
	});

	it('should render pagination info with custom pageSize', () => {
		getComponent({}, { tableOptions: { initialState: { pagination: { pageSize: 20 } } } });

		expect(screen.getByText('1-20 of 100')).toBeInTheDocument();
	});

	it('should render pagination info with custom page index', () => {
		getComponent({}, { tableOptions: { initialState: { pagination: { pageIndex: 5 } } } });

		expect(screen.getByText('51-60 of 100')).toBeInTheDocument();
	});

	it('should render pagination info with custom page count without providing exact rows length', () => {
		getComponent({}, { tableOptions: { manualPagination: true, pageCount: 100 } });

		expect(screen.getByText('1-10 of ~1000')).toBeInTheDocument();
	});

	it('should render pagination info with custom page count with providing exact rows length', () => {
		getComponent(
			{},
			{
				tableOptions: { manualPagination: true, pageCount: 100 },
				rowsCount: 950
			}
		);

		expect(screen.getByText('1-10 of 950')).toBeInTheDocument();
	});

	it('should not go to previous page if first page', () => {
		getComponent({}, {});

		userEvent.click(screen.getByTestId(previousBtnTestId));

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
		expect(mockOnGoToPage).not.toHaveBeenCalled();
	});

	it('should go to previous page', () => {
		getComponent({}, { tableOptions: { initialState: { pagination: { pageIndex: 2 } } } });

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
		userEvent.click(screen.getByTestId(previousBtnTestId));

		expect(mockOnGoToPage).toHaveBeenCalledTimes(1);
		expect(screen.getByText('11-20 of 100')).toBeInTheDocument();
	});

	it('should not go to next page if last page', () => {
		getComponent({}, { tableOptions: { initialState: { pagination: { pageIndex: 9 } } } });

		userEvent.click(screen.getByTestId(nextBtnTestId));

		expect(screen.getByText('91-100 of 100')).toBeInTheDocument();
		expect(mockOnGoToPage).not.toHaveBeenCalled();
	});

	it('should go to next page', () => {
		getComponent({}, { tableOptions: { initialState: { pagination: { pageIndex: 2 } } } });

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
		userEvent.click(screen.getByTestId(nextBtnTestId));

		expect(mockOnGoToPage).toHaveBeenCalledTimes(1);
		expect(screen.getByText('31-40 of 100')).toBeInTheDocument();
	});

	it('should not call go to page handler if not provided on previous btn click', () => {
		getComponent({ onGoToPage: undefined }, { tableOptions: { initialState: { pagination: { pageIndex: 2 } } } });

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
		userEvent.click(screen.getByTestId(previousBtnTestId));

		expect(mockOnGoToPage).toHaveBeenCalledTimes(0);
	});

	it('should not call go to page handler if not provided on next btn click', () => {
		getComponent({ onGoToPage: undefined }, { tableOptions: { initialState: { pagination: { pageIndex: 2 } } } });

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
		userEvent.click(screen.getByTestId(nextBtnTestId));

		expect(mockOnGoToPage).toHaveBeenCalledTimes(0);
	});
});
