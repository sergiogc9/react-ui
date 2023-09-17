import React from 'react';
import { StoryObj } from '@storybook/react';

import Box from 'components/Box';
import Flex from 'components/Flex';

import { Box as StoryBox, storyArgs } from './BoxStorybook';

export default {
	title: 'Components/Box',
	// Simplify props API for a better DX
	component: StoryBox,
	args: storyArgs
};

type Story = StoryObj<typeof Box>;

export const Default: Story = {
	render: props => {
		return <Box {...props}>Box component</Box>;
	}
};

export const Responsive: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Box
				{...props}
				bg={{
					sm: 'green.500',
					md: 'red.500',
					lg: 'yellow.500'
				}}
			>
				Resize the screen :)
			</Box>
		);
	}
};

export const Background: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Box
				backgroundImage="url('https://images.unsplash.com/photo-1626444344029-5c680f7513c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80');"
				backgroundSize="cover"
				height={250}
				width={250}
			/>
		);
	}
};

export const Border: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Flex gap={24} alignItems="center">
				<Box border="thin solid black" px="sm" py="xs">
					Simple border
				</Box>
				<Box borderColor="blue.500" borderStyle="solid" borderWidth="default" px="sm" py="xs">
					Coloured border
				</Box>
				<Box borderRadius="lg" borderStyle="dashed" px="sm" py="xs">
					Border with radius
				</Box>
			</Flex>
		);
	}
};

export const Color: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Flex gap={24} alignItems="center">
				<Box color="red.500" px="sm" py="xs">
					Text color changed
				</Box>
				<Box bg="lightblue" color="neutral.700" px="sm" py="xs">
					Background color changed
				</Box>
				<Box backgroundColor="green.300" color="neutral.700" px="sm" py="xs">
					Color from theme
				</Box>
			</Flex>
		);
	}
};

export const Flexbox: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Flex gap={4} justifyContent="space-between" height={100} width="100%">
				<Box border="thin solid black" alignSelf="flex-end" px="sm" py="xs">
					I like to be down
				</Box>
				<Box border="thin solid black" flexGrow={1} px="sm" py="xs">
					I take all the available space
				</Box>
				<Box border="thin solid black" alignSelf="flex-start" px="sm" py="xs">
					Always on top!
				</Box>
			</Flex>
		);
	}
};

export const Layout: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Flex alignItems="flex-start" gap={4} height={100} width="100%">
				<Box border="thin solid black" height={100} px="sm" py="xs">
					I am high
				</Box>
				<Box border="thin solid black" width={200} px="sm" py="xs">
					I am wide
				</Box>
				<Box border="thin solid black" overflowX="hidden" width={200} px="sm" py="xs">
					<Box bg="lightblue" border="thin dashed lightblue" width={300} px="sm" py="xs">
						I am too wide for my container
					</Box>
				</Box>
			</Flex>
		);
	}
};

export const Position: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Box border="thin solid black" height={200} position="relative" px="sm" py="xs" width={300}>
				I am relatively positioned
				<Box border="thin solid black" px="sm" py="xs">
					I am following the normal flow
				</Box>
				<Box border="thin solid black" bottom={10} left={50} position="absolute" px="sm" py="xs">
					I am absolutely positioned 😎
				</Box>
			</Box>
		);
	}
};

export const Shadow: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Flex alignItems="flex-start" gap={4} height={100} width="100%">
				<Box border="thin solid black" textShadow="#FC0 1px 0 5px" px="sm" py="xs">
					Text shadow
				</Box>
				<Box border="thin solid black" boxShadow="#FC0 1px 0 5px" px="sm" py="xs">
					Box shadow
				</Box>
			</Flex>
		);
	}
};

export const Space: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Flex alignItems="flex-start" gap={4} height={100} width="100%">
				<Box border="thin solid black" px="sm">
					Padding in the X axis
				</Box>
				<Box border="thin solid black" py="sm">
					Padding in the Y axis
				</Box>
				<Box border="thin solid black" p="sm">
					Same padding in all axis
				</Box>
				<Box border="thin solid black" ml="xxl">
					Margin left
				</Box>
			</Flex>
		);
	}
};

export const Typography: Story = {
	parameters: {
		controls: { disable: true }
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Flex alignItems="flex-start" gap={4} height={100} width="100%">
				<Box border="thin solid black" lineHeight="48px" fontSize="40px" px="sm" py="xs">
					Bigger font
				</Box>
				<Box border="thin solid black" fontFamily="cursive" px="sm" py="xs">
					Custom font family
				</Box>
				<Box border="thin solid black" textAlign="right" px="sm" py="xs" width={200}>
					Right aligned
				</Box>
				<Box border="thin solid black" letterSpacing={5} px="sm" py="xs">
					Big letter spacing
				</Box>
			</Flex>
		);
	}
};
