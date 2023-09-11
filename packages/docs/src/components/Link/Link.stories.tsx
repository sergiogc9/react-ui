import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Link from 'components/Link';
import Text from 'components/Text';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Link>;

const meta: Meta<typeof Link> = {
	title: 'Components/Link',
	component: Link,
	argTypes: getExcludedArgTypes(),
	args: {
		children: 'Awesome link'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Link {...args} />;
	}
};

export const Default: Story = {
	args: {
		children: 'I am a default link'
	},
	render: args => {
		return <Link {...args} />;
	}
};

export const Opposite: Story = {
	args: {
		behavior: 'opposite',
		children: 'I am an opposite link'
	},
	render: args => {
		return <Link {...args} />;
	}
};

export const AsButton: Story = {
	args: {
		as: 'button',
		children: 'I am a button link'
	},
	render: args => {
		return <Link {...args} />;
	}
};

export const InsideText: Story = {
	render: args => {
		return (
			<Text aspectSize={args.aspectSize}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				<Link aspectSize="s" {...args}>
					I am a link inside a lorem ipsum
				</Link>
				Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
				the leap into electronic typesetting, remaining essentially unchanged.
			</Text>
		);
	}
};
