import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Divider from 'components/Divider';
import Flex from 'components/Flex';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Divider>;

const meta: Meta<typeof Divider> = {
	title: 'Components/Divider',
	component: Divider,
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Flex alignItems="center" height="50px" justifyContent="center" width="800px">
				<Divider {...args} />
			</Flex>
		);
	}
};

export const Default: Story = {
	render: args => {
		return (
			<Flex width="800px">
				<Divider {...args} />
			</Flex>
		);
	}
};

export const Vertical: Story = {
	args: { isVertical: true },
	render: args => {
		return (
			<Flex height={50} width={20}>
				<Divider {...args} />
			</Flex>
		);
	}
};

export const CustomColor: Story = {
	args: {
		backgroundColor: 'red.500',
		height: '2px'
	},
	render: args => {
		return (
			<Flex width="800px">
				<Divider {...args} />
			</Flex>
		);
	}
};

export const CreativeColor: Story = {
	args: {
		background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 16%, rgba(0,212,255,1) 50%)'
	},
	render: args => {
		return (
			<Flex width="800px">
				<Divider {...args} />
			</Flex>
		);
	}
};
