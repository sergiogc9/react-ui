import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Button';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		...getExcludedArgTypes(),
		onClick: { table: { disable: true }, action: 'clicked' }
	},
	args: {
		aspectSize: 'm',
		children: 'Click me',
		variant: 'default'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Button {...args} />;
	}
};

export const xs: Story = {
	name: 'xs',
	args: { aspectSize: 'xs', children: 'Extra small button' },
	render: args => {
		return <Button {...args} />;
	}
};

export const s: Story = {
	name: 's',
	args: { aspectSize: 's', children: 'Small button' },
	render: args => {
		return <Button {...args} />;
	}
};

export const m: Story = {
	name: 'm',
	args: { aspectSize: 'm', children: 'Medium button' },
	render: args => {
		return <Button {...args} />;
	}
};

export const l: Story = {
	name: 'l',
	args: { aspectSize: 'l', children: 'Large button' },
	render: args => {
		return <Button {...args} />;
	}
};

export const LeftIcon: Story = {
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const RightIcon: Story = {
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const FontAwesomeIcon: Story = {
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon.FontAwesome icon={faLocationCrosshairs} />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const Default: Story = {
	args: { variant: 'default' },
	render: args => {
		return <Button {...args} />;
	}
};

export const DefaultLoading: Story = {
	args: { variant: 'default', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const DefaultDisabled: Story = {
	args: { variant: 'default', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const DefaultLeftIcon: Story = {
	args: { variant: 'default' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const DefaultRightIcon: Story = {
	args: { variant: 'default' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const Primary: Story = {
	args: { variant: 'primary' },
	render: args => {
		return <Button {...args} />;
	}
};

export const PrimaryLoading: Story = {
	args: { variant: 'primary', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const PrimaryDisabled: Story = {
	args: { variant: 'primary', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const PrimaryLeftIcon: Story = {
	args: { variant: 'primary' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const PrimaryRightIcon: Story = {
	args: { variant: 'primary' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const Secondary: Story = {
	args: { variant: 'secondary' },
	render: args => {
		return <Button {...args} />;
	}
};

export const SecondaryLoading: Story = {
	args: { variant: 'secondary', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const SecondaryDisabled: Story = {
	args: { variant: 'secondary', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const SecondaryLeftIcon: Story = {
	args: { variant: 'secondary' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const SecondaryRightIcon: Story = {
	args: { variant: 'secondary' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const Link: Story = {
	args: { variant: 'link' },
	render: args => {
		return <Button {...args} />;
	}
};

export const LinkLoading: Story = {
	args: { variant: 'link', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const LinkDisabled: Story = {
	args: { variant: 'link', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const LinkLeftIcon: Story = {
	args: { variant: 'link' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const LinkRightIcon: Story = {
	args: { variant: 'link' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const Warning: Story = {
	args: { variant: 'warning' },
	render: args => {
		return <Button {...args} />;
	}
};

export const WarningLoading: Story = {
	args: { variant: 'warning', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const WarningDisabled: Story = {
	args: { variant: 'warning', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const WarningLeftIcon: Story = {
	args: { variant: 'warning' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const WarningRightIcon: Story = {
	args: { variant: 'warning' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const Success: Story = {
	args: { variant: 'success' },
	render: args => {
		return <Button {...args} />;
	}
};

export const SuccessLoading: Story = {
	args: { variant: 'success', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const SuccessDisabled: Story = {
	args: { variant: 'success', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const SuccessLeftIcon: Story = {
	args: { variant: 'success' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const SuccessRightIcon: Story = {
	args: { variant: 'success' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const Danger: Story = {
	args: { variant: 'danger' },
	render: args => {
		return <Button {...args} />;
	}
};

export const DangerLoading: Story = {
	args: { variant: 'danger', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const DangerDisabled: Story = {
	args: { variant: 'danger', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const DangerLeftIcon: Story = {
	args: { variant: 'danger' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const DangerRightIcon: Story = {
	args: { variant: 'danger' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};

export const Subtle: Story = {
	args: { variant: 'subtle' },
	render: args => {
		return <Button {...args} />;
	}
};

export const SubtleLoading: Story = {
	args: { variant: 'subtle', isLoading: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const SubtleDisabled: Story = {
	args: { variant: 'subtle', isDisabled: true },
	render: args => {
		return <Button {...args} />;
	}
};

export const SubtleLeftIcon: Story = {
	args: { variant: 'subtle' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Icon styling="outlined" icon="help" />
				<Button.Text>{args.children}</Button.Text>
			</Button>
		);
	}
};

export const SubtleRightIcon: Story = {
	args: { variant: 'subtle' },
	render: args => {
		return (
			<Button {...args}>
				<Button.Text>{args.children}</Button.Text>
				<Button.Icon styling="outlined" icon="help" />
			</Button>
		);
	}
};
