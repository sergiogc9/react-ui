import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ActionMenu from 'collections/ActionMenu';
import { getExcludedArgTypes } from 'storybook/parameters';
import ActionMenuDecorator from 'storybook/decorators/ActionMenu/ActionMenu';

type Story = StoryObj<typeof ActionMenu>;

const meta: Meta<typeof ActionMenu> = {
	title: 'Collections/ActionMenu',
	component: ActionMenu,
	decorators: [ActionMenuDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		minWidth: 200,
		placement: 'bottom'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<ActionMenu {...args}>
				<ActionMenu.Item onClick={() => console.log('Edit')}>Edit</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Clone')}>Clone</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Archive')}>Archive</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Delete')} variant="danger">
					Delete
				</ActionMenu.Item>
			</ActionMenu>
		);
	}
};

export const LeftStart: Story = {
	args: {
		placement: 'left-start',
		title: 'left-start'
	},
	render: args => {
		return (
			<ActionMenu {...args}>
				<ActionMenu.Item onClick={() => console.log('Edit')}>Edit</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Clone')}>Clone</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Archive')}>Archive</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Delete')} variant="danger">
					Delete
				</ActionMenu.Item>
			</ActionMenu>
		);
	}
};

export const Bottom: Story = {
	args: {
		placement: 'bottom',
		title: 'bottom'
	},
	render: args => {
		return (
			<ActionMenu {...args}>
				<ActionMenu.Item onClick={() => console.log('Edit')}>Edit</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Clone')}>Clone</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Archive')}>Archive</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Delete')} variant="danger">
					Delete
				</ActionMenu.Item>
			</ActionMenu>
		);
	}
};

export const Right: Story = {
	args: {
		placement: 'right',
		title: 'right'
	},
	render: args => {
		return (
			<ActionMenu {...args}>
				<ActionMenu.Item onClick={() => console.log('Edit')}>Edit</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Clone')}>Clone</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Archive')}>Archive</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Delete')} variant="danger">
					Delete
				</ActionMenu.Item>
			</ActionMenu>
		);
	}
};

export const Hover: Story = {
	args: {
		placement: 'bottom',
		title: 'show when hover',
		trigger: 'mouseenter'
	},
	render: args => {
		return (
			<ActionMenu {...args}>
				<ActionMenu.Item onClick={() => console.log('Edit')}>Edit</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Clone')}>Clone</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Archive')}>Archive</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Delete')} variant="danger">
					Delete
				</ActionMenu.Item>
			</ActionMenu>
		);
	}
};

export const Click: Story = {
	args: { placement: 'bottom', title: 'show when click', trigger: 'click' },
	render: args => {
		return (
			<ActionMenu {...args}>
				<ActionMenu.Item onClick={() => console.log('Edit')}>Edit</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Clone')}>Clone</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Archive')}>Archive</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Delete')} variant="danger">
					Delete
				</ActionMenu.Item>
			</ActionMenu>
		);
	}
};

export const Items: Story = {
	args: { placement: 'bottom', title: 'items', trigger: 'click' },
	render: args => {
		return (
			<ActionMenu {...args}>
				<ActionMenu.Item onClick={() => console.log('Default')}>Default</ActionMenu.Item>
				<ActionMenu.Item onClick={() => console.log('Danger')} variant="danger">
					Danger
				</ActionMenu.Item>
			</ActionMenu>
		);
	}
};
