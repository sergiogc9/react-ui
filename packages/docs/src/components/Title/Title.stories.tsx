import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Title from 'components/Title';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Title>;

const meta: Meta<typeof Title> = {
	title: 'Components/Title',
	component: Title,
	argTypes: getExcludedArgTypes(),
	args: {
		children: 'Play with me',
		fontFamily: 'main',
		textAlign: 'center'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Title {...args} />;
	}
};

export const Upper: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'uppercase', children: 'I am a uppercase title' },
	name: 'uppercase',
	render: args => {
		return <Title {...args} />;
	}
};

export const Subtle: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'subtle', children: 'I am a subtle title' },
	name: 'subtle',
	render: args => {
		return <Title {...args} />;
	}
};

export const ExtraSmall: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'xs', children: 'I am a xs title' },
	name: 'xs',
	render: args => {
		return <Title {...args} />;
	}
};

export const Small: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 's', children: 'I am a s title' },
	name: 's',
	render: args => {
		return <Title {...args} />;
	}
};

export const Medium: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'm', children: 'I am a m title' },
	name: 'm',
	render: args => {
		return <Title {...args} />;
	}
};

export const Large: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'l', children: 'I am a l title' },
	name: 'l',
	render: args => {
		return <Title {...args} />;
	}
};

export const ExtraLarge: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'xl', children: 'I am a xl title' },
	name: 'xl',
	render: args => {
		return <Title {...args} />;
	}
};
