import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Switch from 'components/Switch';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
	title: 'Components/Switch',
	component: Switch,
	argTypes: getExcludedArgTypes(),
	args: {
		aspectSize: 'm'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Switch {...args} />;
	}
};

export const Small: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 's' },
	render: args => {
		return <Switch {...args} />;
	}
};

export const Medium: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'm' },
	render: args => {
		return <Switch {...args} />;
	}
};

export const Checked: Story = {
	args: {
		aspectSize: 'm',
		isDefaultChecked: true
	},
	render: args => {
		return <Switch {...args} />;
	}
};

export const Disabled: Story = {
	args: {
		aspectSize: 'm',
		isDisabled: true
	},
	render: args => {
		return <Switch {...args} />;
	}
};
