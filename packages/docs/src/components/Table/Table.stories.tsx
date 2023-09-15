import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@sergiogc9/react-ui';

import Text from 'components/Text';
import Title from 'components/Title';
import { getExcludedArgTypes } from 'storybook/parameters';
import TableDecorator from 'storybook/decorators/Table/Table';

type Story = StoryObj<typeof Table>;

const meta: Meta<typeof Table> = {
	title: 'Components/Table',
	component: Table,
	decorators: [TableDecorator],
	argTypes: {
		...getExcludedArgTypes(),
		forceEmpty: { control: 'boolean' },
		showAllBorders: { control: 'boolean' }
	} as any
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Table {...args} width="90vw">
				<Table.Toolbar>
					<Table.TotalResults
						render={({ totalResults }) => <Text aspectSize="xs">{`Total instagramers: ${totalResults}`}</Text>}
					/>
					<Table.GlobalFilter textFieldProps={{ placeholder: 'Filter all the table' }} mx="auto" width={400} />
					<Table.Pagination />
				</Table.Toolbar>
				<Table.Content minWidth={1280} showAllBorders={(args as any).showAllBorders} />
				<Table.Empty>
					<Title aspectSize="subtle" color="primary.600">
						No elements found
					</Title>
				</Table.Empty>
				<Table.Toolbar>
					<Table.Pagination ml="auto" />
				</Table.Toolbar>
			</Table>
		);
	}
};
