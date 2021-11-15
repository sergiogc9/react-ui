import React from 'react';
import { Column } from 'react-table';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';

import { withTheme } from 'components/private/utils/tests';

import Table, { TableProps } from '..';
import TableContent from '.';
import { TableContentProps } from './types';

const tableContentTestId = 'TableContent';

type TestData = {
	id: number;
	name: string;
};

const defaultColumns: Column<TestData>[] = [
	{ accessor: 'id', Header: 'Id' },
	{ accessor: 'name', Header: 'Name' }
];

const defaultData: TestData[] = [
	{ id: 1, name: 'Sergio' },
	{ id: 2, name: 'Carla' },
	{ id: 3, name: 'Pablo' }
];

const defaultTableOptions: TableProps<TestData>['tableOptions'] = {};

const mockOnRowClick = jest.fn();

const Component: React.FC<{
	contentProps: TableContentProps;
	columns: TableProps<TestData>['columns'];
	data: TableProps<TestData>['data'];
	tableOptions: TableProps<TestData>['tableOptions'];
	onRowClick?: TableProps<TestData>['onRowClick'];
}> = props => {
	const { contentProps, onRowClick, tableOptions } = props;

	return (
		<Table
			columns={defaultColumns}
			data={defaultData}
			onRowClick={onRowClick}
			tableOptions={merge(defaultTableOptions, tableOptions)}
		>
			<TableContent data-testid={tableContentTestId} {...contentProps} />
		</Table>
	);
};

const getComponent = (
	contentProps: Partial<TableContentProps> = {},
	columns: TableProps<TestData>['columns'] = [],
	data: TableProps<TestData>['data'] = [],
	tableOptions: TableProps<TestData>['tableOptions'] = {},
	onRowClick?: TableProps<TestData>['onRowClick']
) => {
	return render(
		withTheme(
			<Component
				contentProps={contentProps}
				columns={merge(defaultColumns, columns)}
				data={merge(defaultData, data)}
				onRowClick={onRowClick}
				tableOptions={merge(defaultTableOptions, tableOptions)}
			/>
		)
	);
};

const mockElementWidths = () => {
	Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
		configurable: true,
		value: 100
	});
	Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
		configurable: true,
		value: 300
	});
};

describe('TableContent', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render headers', () => {
		getComponent();

		expect(screen.getByText(defaultColumns[0].Header as string)).toBeInTheDocument();
		expect(screen.getByText(defaultColumns[1].Header as string)).toBeInTheDocument();
	});

	it('should render rows', () => {
		getComponent();

		expect(screen.getByText(defaultData[0].name as string)).toBeInTheDocument();
		expect(screen.getByText(defaultData[1].name as string)).toBeInTheDocument();
	});

	it('should render gradients to illustrate scroll to the right', () => {
		mockElementWidths();

		getComponent();

		expect(screen.queryByTestId('gradient-left')).toBeNull();
		expect(screen.getByTestId('gradient-right')).toBeInTheDocument();
	});

	it('should render gradients to illustrate scroll', () => {
		mockElementWidths();

		getComponent();

		fireEvent.scroll(screen.getByTestId(tableContentTestId), {
			target: { scrollLeft: 50 }
		});

		expect(screen.getByTestId('gradient-left')).toBeInTheDocument();
		expect(screen.getByTestId('gradient-right')).toBeInTheDocument();
	});

	it('should call on row click handler', () => {
		getComponent({}, [], [], {}, mockOnRowClick);

		const row = screen.getAllByRole('row')[1];
		userEvent.click(row);

		expect(row).toHaveStyle('cursor: pointer;');
		expect(mockOnRowClick).toHaveBeenCalled();
	});

	it('should not call on row click if not provided', () => {
		getComponent();

		const row = screen.getAllByRole('row')[1];
		userEvent.click(row);

		expect(row).toHaveStyle('cursor: unset;');
		expect(mockOnRowClick).not.toHaveBeenCalled();
	});
});
