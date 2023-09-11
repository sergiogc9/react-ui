import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from 'components/Flex';
import Icon from 'components/Icon';
import IconButton, { IconButtonProps } from 'components/IconButton';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof IconButton>;

const meta: Meta<typeof IconButton> = {
	title: 'Components/IconButton',
	component: IconButton,
	argTypes: getExcludedArgTypes(),
	args: {
		aspectSize: 'm'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<IconButton {...args}>
				<Icon aspectSize={args.aspectSize} icon="delete" styling="filled" />
			</IconButton>
		);
	}
};

const sizes: Array<NonNullable<IconButtonProps['aspectSize']>> = ['s', 'm', 'l'];

export const Sizes: Story = {
	argTypes: {
		aspectSize: { table: { disable: true } }
	},
	render: args => {
		return (
			<Flex alignItems="center" gap={3}>
				{sizes.map(size => (
					<IconButton {...args} key={size} aspectSize={size}>
						<Icon aspectSize={size} icon="delete" styling="filled" />
					</IconButton>
				))}
			</Flex>
		);
	}
};
