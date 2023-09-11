import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from 'components/RadioButton';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof RadioButton>;

const meta: Meta<typeof RadioButton> = {
	title: 'Components/RadioButton',
	component: RadioButton,
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const DefaultSelected: Story = {
	args: { isDefaultSelected: true },
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const NotDefaultSelected: Story = {
	args: { isDefaultSelected: false },
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const Disabled: Story = {
	args: { isDisabled: true },
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const WithLabel: Story = {
	args: { label: "Don't show this message again" },
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const WithLabelDisabled: Story = {
	args: { isDisabled: true, label: "Don't show this message again" },
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const WithDescription: Story = {
	args: {
		description: 'Remember that description prop should be always used together with label',
		label: "Don't show this message again"
	},
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const WithDescriptionDisabled: Story = {
	args: {
		description: 'Remember that description prop should be always used together with label',
		isDisabled: true,
		label: "Don't show this message again"
	},
	render: args => {
		return <RadioButton {...args} />;
	}
};

export const SizeMedium: Story = {
	args: {
		aspectSize: 'm',
		label: "Don't show this message again"
	},
	render: args => {
		return <RadioButton {...args} />;
	}
};
export const SizeLarge: Story = {
	args: {
		aspectSize: 'l',
		label: "Don't show this message again"
	},
	render: args => {
		return <RadioButton {...args} />;
	}
};
