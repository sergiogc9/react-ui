import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import UserFeedback from 'collections/UserFeedback';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof UserFeedback>;

const meta: Meta<typeof UserFeedback> = {
	title: 'Collections/UserFeedback',
	component: UserFeedback,
	argTypes: {
		...getExcludedArgTypes(),
		onButtonClick: { action: 'click' }
	},
	args: {
		buttonText: 'Click me',
		imageSrc: 'https://www.conector.com/wp-content/uploads/18403419-1454830741242403-2752884136058597031-n-1.png',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		titleText: 'Lorem ipsum dolor sit amet'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <UserFeedback {...args} />;
	}
};
