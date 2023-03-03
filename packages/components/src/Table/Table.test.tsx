import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import range from 'lodash/range';

import { withTheme } from 'components/private/utils/tests';

import Table, { TableColumnDef, TableProps } from '.';

type TestData = {
	id: number;
	name: string;
	enabled: boolean;
};

const defaultColumns: TableColumnDef<TestData>[] = [
	{ accessorKey: 'id', id: 'id', header: 'Id' },
	{ accessorKey: 'name', id: 'name', header: 'Name' },
	{
		accessorKey: 'enabled',
		id: 'enabled',
		cell: props => (props.getValue() ? 'Enabled' : 'Not enabled'),
		header: 'Is enabled'
	}
];

const defaultData: TestData[] = range(0, 100).map(num => ({
	id: num,
	name: faker.name.firstName(),
	enabled: num % 2 === 0
}));

const mockOnSortingChange = jest.fn();

const getComponent = (props: Partial<TableProps<TestData>> = {}) =>
	withTheme(
		<Table
			data={defaultData}
			columns={defaultColumns}
			tableOptions={{ onSortingChange: mockOnSortingChange }}
			{...props}
		>
			<Table.Toolbar>
				<Table.TotalResults render={({ totalResults }) => <div>{`TOTAL: ${totalResults} test results`}</div>} />
				<Table.Pagination />
			</Table.Toolbar>
			<Table.Content />
		</Table>
	);

const renderComponent = (props: Partial<TableProps<TestData>> = {}) => {
	return render(getComponent(props));
};

describe('Table', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
		jest.useFakeTimers();
	});

	it('should render header', () => {
		renderComponent();

		expect(screen.getByText(defaultColumns[0].header as string)).toBeInTheDocument();
		expect(screen.getByText(defaultColumns[1].header as string)).toBeInTheDocument();
	});

	it('should render header with custom JSX', () => {
		renderComponent({
			columns: [
				defaultColumns[0],
				{
					accessorKey: 'name',
					id: 'name',
					header: props => <Table.HeaderCell.Default {...props}>Awesome name</Table.HeaderCell.Default>
				}
			]
		});

		expect(screen.getByText(defaultColumns[0].header as string)).toBeInTheDocument();
		expect(screen.getByText('Awesome name')).toBeInTheDocument();
	});

	it('should render multiple header levels', () => {
		renderComponent({
			columns: [
				{ id: 'common-info', header: 'Common info', columns: defaultColumns },
				{
					id: 'extra-info',
					columns: [
						{ accessorKey: 'email', id: 'email', header: 'Email' },
						{ accessorKey: 'country', id: 'country', header: 'Country' }
					],
					header: 'Extra info'
				}
			],
			data: range(0, 100).map(num => ({
				id: num,
				name: faker.name.firstName(),
				email: faker.internet.email(),
				country: faker.address.country(),
				enabled: true
			}))
		});

		expect(screen.getByText(defaultColumns[0].header as string)).toBeInTheDocument();
		expect(screen.getByText('Common info')).toBeInTheDocument();
		expect(screen.getByText('Extra info')).toBeInTheDocument();
		expect(screen.getByText('Email')).toBeInTheDocument();
		expect(screen.getByText('Country')).toBeInTheDocument();
	});

	it('should render rows', () => {
		renderComponent();

		expect(screen.getByText(defaultData[0].id)).toBeInTheDocument();
		expect(screen.getByText(defaultData[1].id)).toBeInTheDocument();
	});

	it('should render total results', () => {
		renderComponent();

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();
	});

	it('should render pagination info', () => {
		renderComponent();

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
	});

	it('should filter rows with filters provided from outside', () => {
		renderComponent({
			tableOptions: {
				initialState: {
					columnFilters: [{ id: 'name', value: defaultData[0].name }]
				}
			}
		});

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should filter rows with filters provided by prop', () => {
		renderComponent({ tableOptions: { state: { columnFilters: [{ id: 'name', value: defaultData[0].name }] } } });

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should filter rows after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();

		rerender(
			getComponent({ tableOptions: { state: { columnFilters: [{ id: 'name', value: defaultData[0].name }] } } })
		);

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should disable filter rows after updating prop', () => {
		const { rerender } = render(
			getComponent({ tableOptions: { state: { columnFilters: [{ id: 'name', value: defaultData[0].name }] } } })
		);

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();

		rerender(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();
	});

	it('should not filter rows if manualFilters is set', () => {
		renderComponent({
			tableOptions: {
				state: { columnFilters: [{ id: 'name', value: defaultData[0].name }] },
				manualFiltering: true
			}
		});

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();
	});

	it('should global filter rows with filters provided in initialState', () => {
		renderComponent({
			tableOptions: { state: { globalFilter: defaultData[0].name } }
		});

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should global filter rows with filters provided by prop', () => {
		renderComponent({ tableOptions: { state: { globalFilter: defaultData[0].name } } });

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should global filter rows after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();

		rerender(getComponent({ tableOptions: { state: { globalFilter: defaultData[0].name } } }));

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should disable global filter rows after updating prop', () => {
		const { rerender } = render(getComponent({ tableOptions: { state: { globalFilter: defaultData[0].name } } }));

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();

		rerender(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();
	});

	it('should call onSort change with asc sorting', () => {
		renderComponent();

		userEvent.click(screen.getByText(defaultColumns[1].header as string));

		expect(mockOnSortingChange).toHaveBeenCalledTimes(1);
	});

	it('should paginate to page index provided in initialState', () => {
		renderComponent({ tableOptions: { initialState: { pagination: { pageIndex: 2 } } } });

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
	});

	it('should paginate with page size provided in initialState', () => {
		renderComponent({ tableOptions: { initialState: { pagination: { pageSize: 20 } } } });

		expect(screen.getByText('1-20 of 100')).toBeInTheDocument();
	});

	it('should paginate to page index provided after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();

		rerender(getComponent({ tableOptions: { state: { pagination: { pageSize: 10, pageIndex: 2 } } } }));

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
	});

	it('should paginate with page size provided after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();

		rerender(getComponent({ tableOptions: { state: { pagination: { pageSize: 20, pageIndex: 0 } } } }));

		expect(screen.getByText('1-20 of 100')).toBeInTheDocument();
	});

	it('should paginate to default index after removing prop', () => {
		const { rerender } = render(
			getComponent({ tableOptions: { state: { pagination: { pageSize: 10, pageIndex: 2 } } } })
		);

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();

		rerender(getComponent());

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
	});

	it('should paginate with page size after removing prop', () => {
		const { rerender } = render(
			getComponent({ tableOptions: { state: { pagination: { pageSize: 20, pageIndex: 0 } } } })
		);

		expect(screen.getByText('1-20 of 100')).toBeInTheDocument();

		rerender(getComponent());

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
	});

	it('should not paginate if manualPagination is set', () => {
		renderComponent({ tableOptions: { manualPagination: true } });

		expect(screen.getByText(defaultData.length - 1)).toBeInTheDocument();
	});

	it('should render column width based on getCellWidthText column option', () => {
		renderComponent({
			columns: [{ ...defaultColumns[0], getCellWidthText: () => 'test example' }, defaultColumns[1]]
		});

		const firstCell = screen.queryAllByRole('cell')[0];
		expect(firstCell).toHaveStyle(`
			flex: 120 0 auto;
		`);
	});

	it('should render column width based on width column option', () => {
		renderComponent({
			columns: [{ ...defaultColumns[0], size: 110 }, defaultColumns[1]]
		});

		const firstCell = screen.queryAllByRole('cell')[0];
		expect(firstCell).toHaveStyle(`
			flex: 110 0 auto;
		`);
	});

	it('should render column width based on a function accessor', () => {
		renderComponent({
			columns: [
				{
					...defaultColumns[0],
					accessorFn: ((row: TestData) => row.id) as any,
					id: 'id'
				},
				defaultColumns[1]
			]
		});

		const firstCell = screen.queryAllByRole('cell')[0];
		expect(firstCell).toHaveStyle(`
			flex: 60 0 auto;
		`);
	});

	it('should hide columns provided by state', () => {
		renderComponent({ tableOptions: { state: { columnVisibility: { name: false } } } });

		expect(screen.queryByText(defaultData[0].name)).toBeNull();
	});

	it('should hide columns provided by initialState prop', () => {
		renderComponent({ tableOptions: { initialState: { columnVisibility: { name: false } } } });

		expect(screen.queryByText(defaultData[0].name)).toBeNull();
	});

	it('should hide columns after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText(defaultData[0].name)).toBeInTheDocument();

		rerender(getComponent({ tableOptions: { state: { columnVisibility: { name: false } } } }));

		expect(screen.queryByText(defaultData[0].name)).toBeNull();
	});

	it('should revert hide columns after updating prop', () => {
		const { rerender } = render(getComponent({ tableOptions: { state: { columnVisibility: { name: false } } } }));

		expect(screen.queryByText(defaultData[0].name)).toBeNull();

		rerender(getComponent());

		expect(screen.getByText(defaultData[0].name)).toBeInTheDocument();
	});
});
