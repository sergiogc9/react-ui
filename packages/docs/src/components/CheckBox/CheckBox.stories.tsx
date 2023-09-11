import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from 'components/CheckBox';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof CheckBox>;

const meta: Meta<typeof CheckBox> = {
	title: 'Components/CheckBox',
	component: CheckBox,
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const DefaultSelected: Story = {
	args: { isDefaultSelected: true, title: 'Selected' },
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const NotDefaultSelected: Story = {
	args: { title: 'Not selected' },
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const Disabled: Story = {
	args: { isDisabled: true, title: 'Disabled' },
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const WithLabel: Story = {
	args: { label: "Don't show this message again", title: 'With label' },
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const WithLabelDisabled: Story = {
	args: { label: "Don't show this message again", isDisabled: true, title: 'With label disabled' },
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const WithLabelAndDescription: Story = {
	args: {
		description: 'Remember that description prop should be always used together with label',
		label: "Don't show this message again",
		title: 'With label and description'
	},
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const WithLabelAndDescriptionDisabled: Story = {
	args: {
		description: 'Remember that description prop should be always used together with label',
		label: "Don't show this message again",
		isDisabled: true,
		title: 'With label and description disabled'
	},
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const SizeMedium: Story = {
	args: {
		aspectSize: 'm',
		label: "Don't show this message again"
	},
	render: args => {
		return <CheckBox {...args} />;
	}
};

export const SizeLarge: Story = {
	args: {
		aspectSize: 'l',
		label: "Don't show this message again"
	},
	render: args => {
		return <CheckBox {...args} />;
	}
};
