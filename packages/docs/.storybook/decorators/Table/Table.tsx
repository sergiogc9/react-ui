import React from 'react';
import { DecoratorFn } from '@storybook/react';
import faker from 'faker';
import { Button, Chip, ChipProps, createColumnHelper, Table } from '@sergiogc9/react-ui';

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

const columnHelper = createColumnHelper<Data>();

const TableDecorator: DecoratorFn = (story, context) => {
	const columns = React.useMemo(
		() => [
			columnHelper.accessor('id', {
				id: 'id',
				cell: props => <Table.Cell.Text {...props} aspectSize="xs" color="neutral.600" />,
				header: 'ID',
				size: 40
			}),
			columnHelper.accessor('name', {
				id: 'name',
				cell: props => <Table.Cell.Text {...props} fontWeight="bold" />,
				header: 'Name'
			}),
			columnHelper.accessor('lastName', {
				id: 'lastName',
				header: 'Last Name'
			}),
			columnHelper.accessor('age', {
				id: 'age',
				header: 'Age'
			}),
			{
				...columnHelper.accessor('date', {
					id: 'date',
					cell: Table.Cell.Date,
					header: 'Register date'
				}),
				getCellWidthText: () => 'May 20, 2013'
			},
			columnHelper.accessor('followers', {
				id: 'followers',
				header: 'Followers',
				cell: props => (
					<Table.Cell.Default {...props} color="primary.500" fontWeight="bold">
						{props.getValue() >= 1000 ? Math.round(props.getValue() / 1000) + 'K' : props.getValue()}
					</Table.Cell.Default>
				)
			}),
			{
				...columnHelper.accessor('status', {
					id: 'status',
					header: 'Verified',
					cell: props => (
						<Table.Cell.Default {...props} color="primary.500" fontWeight="bold">
							{props.getValue() === 'not_verified' && (
								<Chip title="Not verified" variant="red">
									<Chip.Icon icon="close" styling="outlined" />
								</Chip>
							)}
							{props.getValue() === 'verified' && (
								<Chip title="Verified" variant="green">
									<Chip.Icon icon="check" styling="outlined" />
								</Chip>
							)}
						</Table.Cell.Default>
					)
				}),
				getCellWidthText: () => ''
			},
			columnHelper.accessor('progress', {
				id: 'progress',
				header: 'Progress',
				cell: props => (
					<Table.Cell.Default {...props} color="primary.500" fontWeight="bold">
						<Chip variant={getVariantFromProgress(props.getValue())}>
							<Chip.Label>{props.getValue()}%</Chip.Label>
						</Chip>
					</Table.Cell.Default>
				)
			}),
			{
				...columnHelper.display({
					id: 'buttons',
					header: '',
					cell: props => (
						<Table.Cell.Default {...props}>
							<Button
								aspectSize="s"
								onClick={() => alert(`Opened instagram profile with ID ${props.row.getValue('id')}`)}
								variant="secondary"
							>
								See profile
							</Button>
						</Table.Cell.Default>
					)
				}),
				getCellWidthText: () => 'buttons'
			}
		],
		[]
	);

	const data = React.useMemo<Data[]>(() => {
		return Array.from(Array(1000).keys()).map<Data>((_, index) => ({
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

	const newContext = { ...context, args: { ...context.args, columns, data, tableOptions: { enableFilters: true } } };

	return story(newContext);
};

export default TableDecorator;
