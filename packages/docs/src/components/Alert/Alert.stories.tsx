import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Alert from 'components/Alert';
import AlertDecorator from 'storybook/decorators/Alert';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
	title: 'Components/Alert',
	component: Alert,
	decorators: [AlertDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		aspectSize: 'm',
		status: 'info'
	}
};

export default meta;

const renderComponent: Story['render'] = props => {
	return (
		<Alert {...props}>
			<Alert.Icon />
			<Alert.Text>Some awesome text</Alert.Text>
		</Alert>
	);
};

export const Playground: Story = {
	render: renderComponent
};

export const Error: Story = {
	args: { status: 'error' },
	render: renderComponent
};

export const Info: Story = {
	args: { status: 'info' },
	render: renderComponent
};

export const Success: Story = {
	args: { status: 'success' },
	render: renderComponent
};

export const Warning: Story = {
	args: { status: 'warning' },
	render: renderComponent
};

export const Small: Story = {
	args: { aspectSize: 's' },
	render: renderComponent
};

export const Medium: Story = {
	args: { aspectSize: 'm' },
	render: renderComponent
};

export const DefaultLayout: Story = {
	render: renderComponent
};

export const CustomLayout: Story = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render: props => {
		return (
			<Alert flexDirection="column">
				<Alert.Icon my={1} />
				<Alert.Text fontWeight="bold" aspectSize="l">
					This is an important message
				</Alert.Text>
				<Alert.Text>Some awesome text</Alert.Text>
			</Alert>
		);
	}
};
