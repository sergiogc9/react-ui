import React from 'react';
import { StoryObj } from '@storybook/react';

import Box from 'components/Box';
import Flex from 'components/Flex';

import { Flex as StoryFlex, storyArgs } from './FlexStorybook';

export default {
	title: 'Components/Flex',
	// Simplify props API for a better DX
	component: StoryFlex,
	args: storyArgs
};

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
	render: props => {
		return (
			<Flex
				{...props}
				bg="green.300"
				borderStyle="solid"
				borderRadius="md"
				borderWidth="default"
				color="neutral.700"
				px="sm"
				py="md"
				width={400}
			>
				<Box>First component</Box>
				<Box>Second component</Box>
			</Flex>
		);
	}
};
