import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import Table, { TableColumnDef } from '..';
import TableTotalResults from '.';

type TestData = {
	id: number;
	name: string;
};

const defaultColumns: TableColumnDef<TestData>[] = [
	{ accessorKey: 'id', id: 'id', header: 'Id' },
	{ accessorKey: 'name', id: 'name', header: 'Name' }
];

const defaultData: TestData[] = [
	{ id: 1, name: 'Sergio' },
	{ id: 2, name: 'Ruben' },
	{ id: 3, name: 'Valentin' }
];

const Component: React.FC = () => {
	return (
		<Table data={defaultData} columns={defaultColumns}>
			<TableTotalResults render={({ totalResults }) => <div>{`TOTAL: ${totalResults}`}</div>} />
		</Table>
	);
};

const getComponent = () => {
	return render(withTheme(<Component />));
};

describe('TableTotalResults', () => {
	it('should render the total results', () => {
		getComponent();

		expect(screen.getByText('TOTAL: 3')).toBeInTheDocument();
	});
});
