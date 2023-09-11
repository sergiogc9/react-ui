import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import LoadingBar from 'components/LoadingBar';
import { getExcludedArgTypes } from 'storybook/parameters';
import LoadingBarDecorator from 'storybook/decorators/LoadingBar/LoadingBar';

type Story = StoryObj<typeof LoadingBar>;

const meta: Meta<typeof LoadingBar> = {
	title: 'Components/LoadingBar',
	component: LoadingBar,
	decorators: [LoadingBarDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		isVisible: true
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <LoadingBar {...args} />;
	}
};
