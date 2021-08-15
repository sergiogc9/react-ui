import React from 'react';
import { DecoratorFn } from '@storybook/react';
import faker from 'faker';
import { Button, Chip, ChipProps, Table, TableCellProps, TableColumn } from '@sergiogc9/react-ui';

type Data = {
	age: number;
	date: Date;
	id: number;
	followers: number;
	lastName: string;
	name: string;
	progress: number;
	status: 'not_verified' | 'verified';
};

const getVariantFromProgress = (progress: number): ChipProps['variant'] => {
	if (progress < 35) return 'red';
	if (progress < 70) return 'yellow';
	if (progress < 90) return 'green';
	return 'blue';
};

const TableDecorator: DecoratorFn = (story, context) => {
	const columns = React.useMemo<TableColumn<Data>[]>(
		() => [
			{
				accessor: 'id',
				Cell: props => <Table.Cell.Default {...props} aspectSize="xs" color="neutral.600" />,
				Header: 'ID'
			},
			{
				accessor: 'name',
				Cell: props => <Table.Cell.Default {...props} fontWeight="bold" />,
				Header: 'Name'
			},
			{
				accessor: 'lastName',
				Header: 'Last Name'
			},
			{
				accessor: 'age',
				Header: 'Age'
			},
			{
				accessor: 'date',
				Cell: Table.Cell.Date,
				Header: 'Register date',
				getCellWidthText: () => 'May 20, 2013'
			},
			{
				accessor: 'followers',
				Header: 'Followers',
				Cell: props => (
					<Table.Cell.Default {...props} color="primary.500" fontWeight="bold">
						{props.value >= 1000 ? Math.round(props.value / 1000) + 'K' : props.value}
					</Table.Cell.Default>
				)
			},
			{
				accessor: 'status',
				Header: 'Verified',
				Cell: props => (
					<Table.Cell.Default {...props} color="primary.500" fontWeight="bold">
						{props.value === 'not_verified' && (
							<Chip title="Not verified" variant="red">
								<Chip.Icon icon="close" styling="outlined" />
							</Chip>
						)}
						{props.value === 'verified' && (
							<Chip title="Verified" variant="green">
								<Chip.Icon icon="check" styling="outlined" />
							</Chip>
						)}
					</Table.Cell.Default>
				),
				getCellWidthText: () => ''
			},
			{
				accessor: 'progress',
				Header: 'Progress',
				Cell: props => (
					<Table.Cell.Default {...props} color="primary.500" fontWeight="bold">
						<Chip variant={getVariantFromProgress(props.value)}>{props.value}%</Chip>
					</Table.Cell.Default>
				)
			},
			{
				id: 'buttons',
				Header: '',
				Cell: (props: TableCellProps<Data>) => (
					<Table.Cell.Default {...props}>
						<Button
							aspectSize="s"
							onClick={() => alert(`Opened instagram profile with ID ${props.row.values.id}`)}
							variant="secondary"
						>
							See profile
						</Button>
					</Table.Cell.Default>
				),
				getCellWidthText: () => 'buttons'
			}
		],
		[]
	);

	const data = React.useMemo<Data[]>(() => {
		return Array.from(Array(100).keys()).map<Data>((_, index) => ({
			age: faker.datatype.number({ min: 16, max: 85 }),
			id: index + 1,
			date: faker.date.recent(10 * 365),
			followers: faker.datatype.number(10000),
			lastName: faker.name.lastName(),
			name: faker.name.firstName(),
			progress: faker.datatype.number(100),
			status: faker.datatype.boolean() ? 'verified' : 'not_verified'
		}));
	}, []);

	const newContext = { ...context, args: { ...context.args, columns, data } };

	return story(newContext);
};

export default TableDecorator;
