import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Column } from 'react-table';
import faker from 'faker';
import range from 'lodash/range';

import { withTheme } from 'components/private/utils/tests';

import Table, { TableProps } from '.';

type TestData = {
	id: number;
	name: string;
	enabled: boolean;
};

const defaultColumns: Column<TestData>[] = [
	{ accessor: 'id', Header: 'Id' },
	{ accessor: 'name', Header: 'Name' },
	{
		accessor: 'enabled',
		Cell: props => (props.value ? ('Enabled' as any) : ('Not enabled' as any)),
		Header: 'Is enabled',
		sortType: 'boolean'
	}
];

const defaultData: TestData[] = range(0, 100).map(num => ({
	id: num,
	name: faker.name.firstName(),
	enabled: num % 2 === 0
}));

const mockOnSettingsChange = jest.fn();
const mockOnSortChange = jest.fn();

const getComponent = (props: Partial<TableProps<TestData>> = {}) =>
	withTheme(
		<Table
			data={defaultData}
			columns={defaultColumns}
			onSettingsChange={mockOnSettingsChange}
			onSortChange={mockOnSortChange}
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

		expect(screen.getByText(defaultColumns[0].Header as string)).toBeInTheDocument();
		expect(screen.getByText(defaultColumns[1].Header as string)).toBeInTheDocument();
	});

	it('should render header with custom JSX', () => {
		renderComponent({
			columns: [
				defaultColumns[0],
				{
					accessor: 'name',
					Header: props => <Table.HeaderCell {...props}>Awesome name</Table.HeaderCell>
				}
			]
		});

		expect(screen.getByText(defaultColumns[0].Header as string)).toBeInTheDocument();
		expect(screen.getByText('Awesome name')).toBeInTheDocument();
	});

	it('should render multiple header levels', () => {
		renderComponent({
			columns: [
				{ id: 'common-info', Header: 'Common info', columns: defaultColumns },
				{
					id: 'extra-info',
					columns: [
						{ accessor: 'email', Header: 'Email' },
						{ accessor: 'country', Header: 'Country' }
					],
					Header: 'Extra info'
				}
			],
			data: range(0, 100).map(num => ({
				id: num,
				name: faker.name.firstName(),
				email: faker.internet.email(),
				country: faker.address.country()
			}))
		} as any);

		expect(screen.getByText(defaultColumns[0].Header as string)).toBeInTheDocument();
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

	it('should filter rows with filters provided in initialState', () => {
		renderComponent({
			tableOptions: {
				initialState: { filters: [{ id: 'name', value: defaultData[0].name }] }
			}
		});

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should filter rows with filters provided by prop', () => {
		renderComponent({ filters: [{ id: 'name', value: defaultData[0].name }] });

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should filter rows after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();

		rerender(getComponent({ filters: [{ id: 'name', value: defaultData[0].name }] }));

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should disable filter rows after updating prop', () => {
		const { rerender } = render(getComponent({ filters: [{ id: 'name', value: defaultData[0].name }] }));

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();

		rerender(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();
	});

	it('should not filter rows if manualFilters is set', () => {
		renderComponent({
			tableOptions: {
				initialState: { filters: [{ id: 'name', value: defaultData[0].name }] },
				manualFilters: true
			}
		});

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();
	});

	it('should global filter rows with filters provided in initialState', () => {
		renderComponent({
			tableOptions: { initialState: { globalFilter: defaultData[0].name } }
		});

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should global filter rows with filters provided by prop', () => {
		renderComponent({ globalFilter: defaultData[0].name });

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should global filter rows after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();

		rerender(getComponent({ globalFilter: defaultData[0].name }));

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();
	});

	it('should disable global filter rows after updating prop', () => {
		const { rerender } = render(getComponent({ globalFilter: defaultData[0].name }));

		expect(screen.queryByText('TOTAL: 100 test results')).toBeNull();

		rerender(getComponent());

		expect(screen.getByText('TOTAL: 100 test results')).toBeInTheDocument();
	});

	it('should toggle boolean order between all states when clicking column header', () => {
		renderComponent({
			tableOptions: { initialState: { sortBy: [{ id: 'id' }] } }
		});

		let [, , firstRowCell] = screen.queryAllByRole('cell');

		userEvent.click(screen.getByText(defaultColumns[2].Header as string));
		[, , firstRowCell] = screen.queryAllByRole('cell');

		expect(firstRowCell.innerHTML).toBe('Not enabled');

		userEvent.click(screen.getByText(defaultColumns[2].Header as string));
		[, , firstRowCell] = screen.queryAllByRole('cell');

		expect(firstRowCell.innerHTML).toBe('Enabled');
	});

	it('should call onSort change with asc sorting', () => {
		renderComponent();

		userEvent.click(screen.getByText(defaultColumns[1].Header as string));

		expect(mockOnSortChange).toHaveBeenCalledTimes(1);
		expect(mockOnSortChange).toHaveBeenCalledWith('name', false);
	});

	it('should call onSort change with desc sorting', () => {
		renderComponent({
			tableOptions: { initialState: { sortBy: [{ id: 'name' }] } }
		});

		userEvent.click(screen.getByText(defaultColumns[1].Header as string));

		expect(mockOnSortChange).toHaveBeenCalledTimes(1);
		expect(mockOnSortChange).toHaveBeenCalledWith('name', true);
	});

	it('should call onSort change when disabling sorting', () => {
		renderComponent({
			tableOptions: { initialState: { sortBy: [{ id: 'name', desc: true }] } }
		});

		userEvent.click(screen.getByText(defaultColumns[1].Header as string));

		expect(mockOnSortChange).toHaveBeenCalledTimes(1);
		expect(mockOnSortChange).toHaveBeenCalledWith('name', false);
	});

	it('should not call onSort change if not provided', () => {
		renderComponent({ onSortChange: undefined });

		userEvent.click(screen.getByText(defaultColumns[1].Header as string));

		expect(mockOnSortChange).toHaveBeenCalledTimes(0);
	});

	it('should call on settings change handler when sorting changes', async () => {
		jest.useRealTimers();
		renderComponent();

		userEvent.click(screen.getByText(defaultColumns[1].Header as string));

		await waitFor(() => expect(mockOnSettingsChange).toHaveBeenCalledTimes(1));
		expect(mockOnSettingsChange).toHaveBeenCalledWith(
			expect.objectContaining({
				sortBy: [
					{
						desc: false,
						id: 'name'
					}
				]
			})
		);
	});

	it('should not call on settings change handler when sorting changes if not provided', async () => {
		jest.useRealTimers();
		renderComponent({ onSettingsChange: undefined });

		userEvent.click(screen.getByText(defaultColumns[1].Header as string));

		// Waiting for debounced callback to be called
		await new Promise(resolve => setTimeout(resolve, 200));

		expect(mockOnSettingsChange).toHaveBeenCalledTimes(0);
	});

	it('should paginate to page index provided in initialState', () => {
		renderComponent({ tableOptions: { initialState: { pageIndex: 2 } } });

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
	});

	it('should paginate with page size provided in initialState', () => {
		renderComponent({ tableOptions: { initialState: { pageSize: 20 } } });

		expect(screen.getByText('1-20 of 100')).toBeInTheDocument();
	});

	it('should paginate to page index provided by prop', () => {
		renderComponent({ pageIndex: 2 });

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
	});

	it('should paginate with page size provided by prop', () => {
		renderComponent({ pageSize: 20 });

		expect(screen.getByText('1-20 of 100')).toBeInTheDocument();
	});

	it('should paginate to page index provided after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();

		rerender(getComponent({ pageIndex: 2 }));

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();
	});

	it('should paginate with page size provided after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();

		rerender(getComponent({ pageSize: 20 }));

		expect(screen.getByText('1-20 of 100')).toBeInTheDocument();
	});

	it('should paginate to default index after removing prop', () => {
		const { rerender } = render(getComponent({ pageIndex: 2 }));

		expect(screen.getByText('21-30 of 100')).toBeInTheDocument();

		rerender(getComponent());

		expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
	});

	it('should paginate with page size after removing prop', () => {
		const { rerender } = render(getComponent({ pageSize: 20 }));

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
			columns: [{ ...defaultColumns[0], getCellWidthText: () => 'test' }, defaultColumns[1]]
		});

		const firstCell = screen.queryAllByRole('cell')[0];
		expect(firstCell).toHaveStyle(`
			flex: 40 0 auto;
		`);
	});

	it('should render column width based on width column option', () => {
		renderComponent({
			columns: [{ ...defaultColumns[0], width: 110 }, defaultColumns[1]]
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
					accessor: ((row: TestData) => row.id) as any,
					id: 'id'
				},
				defaultColumns[1]
			]
		});

		const firstCell = screen.queryAllByRole('cell')[0];
		expect(firstCell).toHaveStyle(`
			flex: 20 0 auto;
		`);
	});

	it('should hide columns provided by prop', () => {
		renderComponent({ hiddenColumns: ['name'] });

		expect(screen.queryByText(defaultData[0].name)).toBeNull();
	});

	it('should hide columns provided by initialState prop', () => {
		renderComponent({
			tableOptions: { initialState: { hiddenColumns: ['name'] } }
		});

		expect(screen.queryByText(defaultData[0].name)).toBeNull();
	});

	it('should hide columns after updating prop', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByText(defaultData[0].name)).toBeInTheDocument();

		rerender(getComponent({ hiddenColumns: ['name'] }));

		expect(screen.queryByText(defaultData[0].name)).toBeNull();
	});

	it('should revert hide columns after updating prop', () => {
		const { rerender } = render(getComponent({ hiddenColumns: ['name'] }));

		expect(screen.queryByText(defaultData[0].name)).toBeNull();

		rerender(getComponent());

		expect(screen.getByText(defaultData[0].name)).toBeInTheDocument();
	});
});
