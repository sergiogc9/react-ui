import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Text from 'components/Text';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
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
		return <Text {...args} />;
	}
};

export const ExtraSmall: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'xs', children: 'I am a xs text' },
	name: 'xs',
	render: args => {
		return <Text {...args} />;
	}
};

export const Small: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 's', children: 'I am a s text' },
	name: 's',
	render: args => {
		return <Text {...args} />;
	}
};

export const Medium: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'm', children: 'I am a m text' },
	name: 'm',
	render: args => {
		return <Text {...args} />;
	}
};

export const Large: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'l', children: 'I am a l text' },
	name: 'l',
	render: args => {
		return <Text {...args} />;
	}
};

export const ExtraLarge: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: { aspectSize: 'xl', children: 'I am a xl text' },
	name: 'xl',
	render: args => {
		return <Text {...args} />;
	}
};
