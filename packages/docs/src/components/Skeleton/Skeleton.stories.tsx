import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from 'components/Flex';
import Grid from 'components/Grid';
import Skeleton from 'components/Skeleton';
import { getExcludedArgTypes } from 'storybook/parameters';
import SkeletonDecorator from 'storybook/decorators/Skeleton/Skeleton';

type Story = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
	title: 'Components/Skeleton',
	component: Skeleton,
	decorators: [SkeletonDecorator],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: getExcludedArgTypes(['color']),
	args: {
		height: 120
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Skeleton {...args}>
				<Skeleton.Circle left="0" top="0" size={50} />
				<Skeleton.Rect height={10} left="12.5%" position="absolute" top="12px" width="75%" />
				<Skeleton.Rect height={6} left="12.5%" position="absolute" top="32px" width="12.5%" />
				<Skeleton.Rect left="0" height={8} position="absolute" top="59px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="77px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="94px" width="40%" />
			</Skeleton>
		);
	}
};

export const CustomColors: Story = {
	args: {
		color: 'primary.100'
	},
	render: args => {
		return (
			<Skeleton {...args}>
				<Skeleton.Circle left="0" top="0" size={50} />
				<Skeleton.Rect height={10} left="12.5%" position="absolute" top="12px" width="75%" />
				<Skeleton.Rect height={6} left="12.5%" position="absolute" top="32px" width="12.5%" />
				<Skeleton.Rect bg="green.100" left="0" height={8} position="absolute" top="59px" width="70%" />
				<Skeleton.Rect bg="green.100" height={8} left="0" position="absolute" top="77px" width="70%" />
				<Skeleton.Rect bg="green.100" height={8} left="0" position="absolute" top="94px" width="40%" />
			</Skeleton>
		);
	}
};

export const WithoutAnimation: Story = {
	args: {
		animate: false
	},
	render: args => {
		return (
			<Skeleton {...args}>
				<Skeleton.Circle left="0" top="0" size={50} />
				<Skeleton.Rect height={10} left="12.5%" position="absolute" top="12px" width="75%" />
				<Skeleton.Rect height={6} left="12.5%" position="absolute" top="32px" width="12.5%" />
				<Skeleton.Rect left="0" height={8} position="absolute" top="59px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="77px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="94px" width="40%" />
			</Skeleton>
		);
	}
};

export const WithCustomAnimation: Story = {
	args: {
		duration: 2.5
	},
	render: args => {
		return (
			<Skeleton {...args}>
				<Skeleton.Circle left="0" top="0" size={50} />
				<Skeleton.Rect height={10} left="12.5%" position="absolute" top="12px" width="75%" />
				<Skeleton.Rect height={6} left="12.5%" position="absolute" top="32px" width="12.5%" />
				<Skeleton.Rect left="0" height={8} position="absolute" top="59px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="77px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="94px" width="40%" />
			</Skeleton>
		);
	}
};

export const AbsoluteLayout: Story = {
	render: args => {
		return (
			<Skeleton {...args}>
				<Skeleton.Circle left="0" top="0" size={50} />
				<Skeleton.Rect height={10} left="12.5%" position="absolute" top="12px" width="75%" />
				<Skeleton.Rect height={6} left="12.5%" position="absolute" top="32px" width="12.5%" />
				<Skeleton.Rect left="0" height={8} position="absolute" top="59px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="77px" width="70%" />
				<Skeleton.Rect height={8} left="0" position="absolute" top="94px" width="40%" />
			</Skeleton>
		);
	}
};

export const WithFlexLayout: Story = {
	args: { flexDirection: 'column' },
	render: args => {
		return (
			<Skeleton {...args}>
				<Flex>
					<Skeleton.Rect height={30} width="20%" />
					<Skeleton.Rect height={30} flexGrow={1} ml="5%" />
				</Flex>
				<Flex my={3}>
					<Skeleton.Rect height={30} width="20%" />
					<Skeleton.Rect height={30} flexGrow={1} ml="5%" />
				</Flex>
				<Skeleton.Rect bg="blue.100" height={30} />
			</Skeleton>
		);
	}
};

export const WithGridLayout: Story = {
	args: { flexDirection: 'column', height: 220 },
	render: args => {
		return (
			<Skeleton {...args}>
				<Grid rowGap={3}>
					<Skeleton.Rect color="green.100" columns={12} height={50} type="grid" />
					<Skeleton.Rect columns={6} height={30} type="grid" />
					<Skeleton.Rect columns={6} height={30} type="grid" />
					<Skeleton.Rect columns={6} height={30} type="grid" />
					<Skeleton.Rect columns={6} height={30} type="grid" />
					<Skeleton.Rect color="primary.100" columns={12} height={50} type="grid" />
				</Grid>
			</Skeleton>
		);
	}
};
