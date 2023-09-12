import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Spinner from 'components/Spinner';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Spinner.Pulse>;

const meta: Meta<typeof Spinner.Pulse> = {
	title: 'Components/Spinner/Pulse',
	component: Spinner.Pulse,
	argTypes: getExcludedArgTypes(['color']),
	args: {
		size: 100
	}
};

export default meta;

export const Playground: Story = {
	argTypes: { index: { table: { disable: true } } },
	args: {
		color: 'primary.500',
		size: '10px',
		margin: '2.5px'
	},
	render: args => {
		return (
			<Spinner>
				<Spinner.Pulse {...args} index={1} />
				<Spinner.Pulse {...args} index={1} />
				<Spinner.Pulse {...args} index={1} />
			</Spinner>
		);
	}
};

export const One: Story = {
	argTypes: { index: { table: { disable: true } } },
	args: { index: 1, size: 10, color: 'primary.500', margin: '2.5px' },
	render: args => {
		return (
			<Spinner>
				<Spinner.Pulse {...args} />
			</Spinner>
		);
	}
};

export const ManySameTime: Story = {
	argTypes: { index: { table: { disable: true } } },
	args: { index: 1, size: 10, color: 'primary.500', margin: '2.5px' },
	render: args => {
		return (
			<Spinner>
				<Spinner.Pulse {...args} index={1} />
				<Spinner.Pulse {...args} index={1} />
				<Spinner.Pulse {...args} index={1} />
			</Spinner>
		);
	}
};

export const ManyDifferentTime: Story = {
	argTypes: { index: { table: { disable: true } } },
	args: { index: 1, size: 10, color: 'yellow.500', margin: '2.5px' },
	render: args => {
		return (
			<Spinner>
				<Spinner.Pulse {...args} index={1} />
				<Spinner.Pulse {...args} index={2} />
				<Spinner.Pulse {...args} index={3} />
			</Spinner>
		);
	}
};
