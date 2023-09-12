import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Status from 'components/Status';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Status>;

const meta: Meta<typeof Status> = {
	title: 'Components/Status',
	component: Status,
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	args: { variant: 'green' },
	render: args => {
		return <Status {...args} />;
	}
};

export const Grey: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'grey' },
	render: args => {
		return <Status {...args} />;
	}
};

export const Red: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'red' },
	render: args => {
		return <Status {...args} />;
	}
};

export const Blue: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'blue' },
	render: args => {
		return <Status {...args} />;
	}
};

export const Green: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'green' },
	render: args => {
		return <Status {...args} />;
	}
};

export const Yellow: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'yellow' },
	render: args => {
		return <Status {...args} />;
	}
};

export const CustomColor: Story = {
	args: { bg: '#F0B27A' },
	render: args => {
		return <Status {...args} />;
	}
};
