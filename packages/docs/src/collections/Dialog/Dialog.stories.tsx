import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Dialog from 'collections/Dialog';
import { getExcludedArgTypes } from 'storybook/parameters';
import DialogDecorator from 'storybook/decorators/Dialog/Dialog';

type Story = StoryObj<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
	title: 'Collections/Dialog',
	component: Dialog,
	decorators: [DialogDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		cancelText: 'Cancel',
		confirmText: 'Confirm',
		content: 'If you continue you will save the changes. Do you really want to continue?',
		titleText: 'Saving changes'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Dialog {...args} />;
	}
};
