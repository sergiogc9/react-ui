import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Icon from 'components/Icon';
import TextField from 'components/TextField';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof TextField>;

const meta: Meta<typeof TextField> = {
	title: 'Components/TextField',
	component: TextField,
	argTypes: {
		...getExcludedArgTypes(),
		onBlur: { action: 'blurred' },
		onChange: { action: 'changed' }
	},
	args: {
		label: 'Enter some text'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <TextField {...args} />;
	}
};

export const Default: Story = {
	args: {
		placeholder: 'Enter some text',
		title: 'default'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
		placeholder: 'Enter some text',
		title: 'disabled'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const Error: Story = {
	args: {
		isError: true,
		placeholder: 'Enter some text',
		title: 'error'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const Success: Story = {
	args: {
		isSuccess: true,
		placeholder: 'Enter some text',
		title: 'success'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const ExtraSmall: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: {
		aspectSize: 'xs',
		title: 'extra small'
	},
	name: 'xs',
	render: args => {
		return <TextField {...args} />;
	}
};

export const Small: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: {
		aspectSize: 's',
		title: 'small'
	},
	name: 's',
	render: args => {
		return <TextField {...args} />;
	}
};

export const Medium: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: {
		aspectSize: 'm',
		title: 'medium'
	},
	name: 'm',
	render: args => {
		return <TextField {...args} />;
	}
};

export const Large: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	args: {
		aspectSize: 'l',
		title: 'large'
	},
	name: 'l',
	render: args => {
		return <TextField {...args} />;
	}
};

export const OnlyInput: Story = {
	render: args => {
		return <TextField {...args} />;
	}
};

export const LeftIcon: Story = {
	args: {
		leftContent: <Icon styling="outlined" icon="help" />
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const RightIcon: Story = {
	args: {
		rightContent: <Icon styling="outlined" icon="cloud-upload" />
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const BothIcons: Story = {
	args: {
		leftContent: <Icon styling="outlined" icon="help" />,
		rightContent: <Icon styling="outlined" icon="cloud-upload" />
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const OnlyIconLabelOutside: Story = {
	args: {
		labelPosition: 'outside'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const LeftIconLabelOutside: Story = {
	args: {
		leftContent: <Icon styling="outlined" icon="help" />,
		labelPosition: 'outside'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const RightIconLabelOutside: Story = {
	args: {
		labelPosition: 'outside',
		rightContent: <Icon styling="outlined" icon="cloud-upload" />
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const BothIconsLabelOutside: Story = {
	args: {
		labelPosition: 'outside',
		leftContent: <Icon styling="outlined" icon="help" />,
		rightContent: <Icon styling="outlined" icon="cloud-upload" />
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const OnlyInputAndPlaceholder: Story = {
	args: {
		label: 'Enter your email',
		placeholder: 'email@gironafc.cat',
		type: 'email'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const LeftIconAndPlaceholder: Story = {
	args: {
		leftContent: <Icon styling="outlined" icon="help" />,
		labelPosition: 'outside',
		label: 'Enter your email',
		placeholder: 'email@gironafc.cat',
		type: 'email'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const RightIconAndPlaceholder: Story = {
	args: {
		labelPosition: 'outside',
		rightContent: <Icon styling="outlined" icon="cloud-upload" />,
		label: 'Enter your email',
		placeholder: 'email@gironafc.cat',
		type: 'email'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const BothIconsAndPlaceholder: Story = {
	args: {
		labelPosition: 'outside',
		leftContent: <Icon styling="outlined" icon="help" />,
		rightContent: <Icon styling="outlined" icon="cloud-upload" />,
		label: 'Enter your email',
		placeholder: 'email@gironafc.cat',
		type: 'email'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const WithHelperText: Story = {
	args: {
		helperText: 'You can type unlimited characters'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const WithCounter: Story = {
	args: {
		helperText: 'Type up to 10 characters',
		label: 'Enter some text',
		maxLength: 10
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const Date: Story = {
	args: {
		type: 'date',
		label: 'Select a day'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const Numeric: Story = {
	args: {
		type: 'number',
		defaultValue: 25,
		label: 'Enter your age'
	},
	render: args => {
		return <TextField {...args} />;
	}
};

export const Password: Story = {
	args: {
		type: 'password',
		label: 'Enter your password'
	},
	render: args => {
		return <TextField {...args} />;
	}
};
