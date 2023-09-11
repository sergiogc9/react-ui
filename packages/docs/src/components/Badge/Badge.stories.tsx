import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Avatar from 'components/Avatar';
import Badge from 'components/Badge';
import Icon from 'components/Icon';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Badge.Status>;

const meta: Meta<typeof Badge.Status> = {
	title: 'Components/Badge',
	component: Badge.Status,
	argTypes: getExcludedArgTypes(),
	args: {
		location: 'top-right',
		variant: 'green'
	}
};

export default meta;

const renderAvatarComponent: Story['render'] = args => {
	return (
		<Badge>
			<Avatar aspectSize="s">John Doe</Avatar>
			<Badge.Status {...args} />
		</Badge>
	);
};

const renderIconComponent: Story['render'] = args => {
	return (
		<Badge>
			<Icon icon="mail" styling="outlined" />
			<Badge.Status {...args} />
		</Badge>
	);
};

const renderCounterComponent: Story['render'] = args => {
	return (
		<Badge>
			<Icon icon="mail" styling="outlined" />
			<Badge.Counter numberOfItems={10} {...(args as any)} />
		</Badge>
	);
};

export const Playground: Story = {
	render: renderAvatarComponent
};

export const AvatarTopLeft: Story = {
	args: { location: 'top-left' },
	render: renderAvatarComponent
};

export const AvatarTopRight: Story = {
	args: { location: 'top-right', variant: 'red' },
	render: renderAvatarComponent
};

export const AvatarBottomLeft: Story = {
	args: { location: 'bottom-left', variant: 'yellow' },
	render: renderAvatarComponent
};

export const AvatarBottomRight: Story = {
	args: { location: 'bottom-right', variant: 'blue' },
	render: renderAvatarComponent
};

export const IconTopLeft: Story = {
	args: { location: 'top-left' },
	render: renderIconComponent
};

export const IconTopRight: Story = {
	args: { location: 'top-right', variant: 'red' },
	render: renderIconComponent
};

export const IconBottomLeft: Story = {
	args: { location: 'bottom-left', variant: 'yellow' },
	render: renderIconComponent
};

export const IconBottomRight: Story = {
	args: { location: 'bottom-right', variant: 'blue' },
	render: renderIconComponent
};

export const CounterTopLeft: Story = {
	args: { location: 'top-left', numberOfItems: 30 } as any,
	render: renderCounterComponent
};

export const CounterTopRight: Story = {
	args: { location: 'top-right', variant: 'red', numberOfItems: 2 } as any,
	render: renderCounterComponent
};

export const CounterBottomLeft: Story = {
	args: { location: 'bottom-left', variant: 'yellow', numberOfItems: 1024 } as any,
	render: renderCounterComponent
};

export const CounterBottomRight: Story = {
	args: { location: 'bottom-right', variant: 'blue', numberOfItems: 33 } as any,
	render: renderCounterComponent
};

export const CounterCustomColor: Story = {
	args: { location: 'bottom-right', variant: 'blue', numberOfItems: 33, bg: '#C6E8FF' } as any,
	render: renderCounterComponent
};
