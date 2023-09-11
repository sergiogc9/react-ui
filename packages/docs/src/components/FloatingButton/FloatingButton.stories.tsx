import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Flex from 'components/Flex';
import FloatingButton from 'components/FloatingButton';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof FloatingButton>;

const meta: Meta<typeof FloatingButton> = {
	title: 'Components/FloatingButton',
	component: FloatingButton,
	argTypes: {
		...getExcludedArgTypes(),
		onClick: { action: 'clicked' }
	},
	args: {
		aspectSize: 'm'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<FloatingButton {...args}>
				<FloatingButton.Icon icon="add" styling="outlined" />
			</FloatingButton>
		);
	}
};

export const Sizes: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	render: args => {
		return (
			<Flex alignItems="center" gap={3}>
				<FloatingButton {...args} aspectSize="s">
					<FloatingButton.Icon icon="add" styling="outlined" />
				</FloatingButton>
				<FloatingButton {...args} aspectSize="m">
					<FloatingButton.Icon icon="add" styling="outlined" />
				</FloatingButton>
				<FloatingButton {...args} aspectSize="l">
					<FloatingButton.Icon icon="add" styling="outlined" />
				</FloatingButton>
			</Flex>
		);
	}
};

export const SizesWithFontAwesome: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	render: args => {
		return (
			<Flex alignItems="center" gap={3}>
				<FloatingButton {...args} aspectSize="s">
					<FloatingButton.Icon.FontAwesome icon={faPlus} />
				</FloatingButton>
				<FloatingButton {...args} aspectSize="m">
					<FloatingButton.Icon.FontAwesome icon={faPlus} />
				</FloatingButton>
				<FloatingButton {...args} aspectSize="l">
					<FloatingButton.Icon.FontAwesome icon={faPlus} />
				</FloatingButton>
			</Flex>
		);
	}
};

export const WithoutText: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	render: args => {
		return (
			<FloatingButton {...args}>
				<FloatingButton.Icon styling="outlined" icon="add" />
			</FloatingButton>
		);
	}
};

export const WithText: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	render: args => {
		return (
			<FloatingButton {...args}>
				<FloatingButton.Icon styling="outlined" icon="add" />
				<FloatingButton.Text>Click me</FloatingButton.Text>
			</FloatingButton>
		);
	}
};
