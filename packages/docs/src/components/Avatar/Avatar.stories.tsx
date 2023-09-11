import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Avatar from 'components/Avatar';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Avatar {...args} />;
	}
};

export const WithImage: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
		title: 'showing profile picture'
	},
	render: args => {
		return <Avatar {...args} />;
	}
};

export const WithStringInitials: Story = {
	args: { children: 'John Doe', title: 'showing name initials' },
	render: args => {
		return <Avatar {...args} />;
	}
};

export const WithIcon: Story = {
	args: { title: 'Showing icon' },
	render: args => {
		return <Avatar {...args} />;
	}
};

export const s: Story = {
	name: 's',
	args: {
		src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
		aspectSize: 's'
	},
	render: args => {
		return <Avatar {...args} />;
	}
};

export const m: Story = {
	name: 'm',
	args: {
		src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
		aspectSize: 'm'
	},
	render: args => {
		return <Avatar {...args} />;
	}
};

export const l: Story = {
	name: 'l',
	args: {
		src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
		aspectSize: 'l'
	},
	render: args => {
		return <Avatar {...args} />;
	}
};

export const CustomSize: Story = {
	name: 'custom size',
	args: {
		src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
		size: '200px'
	},
	render: args => {
		return <Avatar {...args} />;
	}
};

export const Circle: Story = {
	name: 'custom size',
	args: {
		src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
		variant: 'circle'
	},
	render: args => {
		return <Avatar {...args} />;
	}
};

export const Rounded: Story = {
	name: 'custom size',
	args: {
		src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
		variant: 'rounded'
	},
	render: args => {
		return <Avatar {...args} />;
	}
};
