import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from 'components/Flex';
import Ripple from 'components/Ripple';
import { getExcludedArgTypes } from 'storybook/parameters';
import RippleDecorator from 'storybook/decorators/Ripple/Ripple';

type Story = StoryObj<typeof Ripple>;

const meta: Meta<typeof Ripple> = {
	title: 'Components/Ripple',
	component: Ripple,
	decorators: [RippleDecorator],
	argTypes: getExcludedArgTypes(['color']),
	args: {
		color: 'primary.500'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Flex
				bg="currentColor"
				border="thin solid lightgray"
				borderRadius="50%"
				height="300px"
				overflow="hidden"
				position="relative"
				width="300px"
			>
				<Ripple {...args} />
			</Flex>
		);
	}
};
