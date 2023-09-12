import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TextArea from 'components/TextArea';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof TextArea>;

const meta: Meta<typeof TextArea> = {
	title: 'Components/TextArea',
	component: TextArea,
	argTypes: {
		...getExcludedArgTypes(),
		onBlur: { action: 'blurred' },
		onChange: { action: 'changed' }
	},
	args: {
		label: 'Enter some text',
		maxLength: 50
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <TextArea {...args} />;
	}
};

export const CharacterCounter: Story = {
	args: {
		maxLength: 40,
		placeholder: 'Enter some text',
		title: 'custom size'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const Default: Story = {
	args: {
		placeholder: 'Enter some text',
		title: 'default'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
		placeholder: 'Enter some text',
		title: 'disabled'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const Error: Story = {
	args: {
		isError: true,
		placeholder: 'Enter some text',
		title: 'error'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const Success: Story = {
	args: {
		isSuccess: true,
		placeholder: 'Enter some text',
		title: 'success'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const CustomSize: Story = {
	args: {
		size: '250px',
		placeholder: 'Enter some text',
		title: 'custom size'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const LabelInside: Story = {
	args: {
		label: 'Description',
		labelPosition: 'inside'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const LabelOutside: Story = {
	args: {
		label: 'Description',
		labelPosition: 'outside'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const WithPlaceholder: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter text'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const WithHelperText: Story = {
	args: {
		helperText: 'You can type unlimited characters',
		label: 'Description'
	},
	render: args => {
		return <TextArea {...args} />;
	}
};

export const WithCounter: Story = {
	args: {
		helperText: 'Type up to 20 characters',
		label: 'Description',
		maxLength: 20
	},
	render: args => {
		return <TextArea {...args} />;
	}
};
