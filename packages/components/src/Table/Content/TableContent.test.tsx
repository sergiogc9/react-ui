import React from 'react';
import { Column } from 'react-table';
import { fireEvent, render, screen } from '@testing-library/react';
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

const Component: React.FC<{
	contentProps: TableContentProps;
	columns: TableProps<TestData>['columns'];
	data: TableProps<TestData>['data'];
	tableOptions: TableProps<TestData>['tableOptions'];
}> = props => {
	const { contentProps, tableOptions } = props;

	return (
		<Table columns={defaultColumns} data={defaultData} tableOptions={merge(defaultTableOptions, tableOptions)}>
			<TableContent data-testid={tableContentTestId} {...contentProps} />
		</Table>
	);
};

const getComponent = (
	contentProps: Partial<TableContentProps> = {},
	columns: TableProps<TestData>['columns'] = [],
	data: TableProps<TestData>['data'] = [],
	tableOptions: TableProps<TestData>['tableOptions'] = {}
) => {
	return render(
		withTheme(
			<Component
				contentProps={contentProps}
				columns={merge(defaultColumns, columns)}
				data={merge(defaultData, data)}
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

	it('should render gradients to ilustrate scroll to the right', () => {
		mockElementWidths();

		getComponent();

		expect(screen.queryByTestId('gradient-left')).toBeNull();
		expect(screen.getByTestId('gradient-right')).toBeInTheDocument();
	});

	it('should render gradients to ilustrate scroll', () => {
		mockElementWidths();

		getComponent();

		fireEvent.scroll(screen.getByTestId(tableContentTestId), {
			target: { scrollLeft: 50 }
		});

		expect(screen.getByTestId('gradient-left')).toBeInTheDocument();
		expect(screen.getByTestId('gradient-right')).toBeInTheDocument();
	});
});
