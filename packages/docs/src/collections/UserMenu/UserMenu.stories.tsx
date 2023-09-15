import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import UserMenu from 'collections/UserMenu';
import { getExcludedArgTypes } from 'storybook/parameters';
import UserMenuDecorator from 'storybook/decorators/UserMenu/UserMenu';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

type Story = StoryObj<typeof UserMenu>;

const meta: Meta<typeof UserMenu> = {
	title: 'Collections/UserMenu',
	component: UserMenu,
	decorators: [UserMenuDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		isInteractive: true,
		isMobileFullScreenEnabled: true,
		minWidth: 200,
		placement: 'bottom'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
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
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
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
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
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
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
		);
	}
};

export const Interactive: Story = {
	args: {
		isInteractive: true,
		placement: 'bottom',
		title: 'non interactive'
	},
	render: args => {
		return (
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
		);
	}
};

export const NonInteractive: Story = {
	args: {
		isInteractive: false,
		placement: 'bottom',
		title: 'non interactive'
	},
	render: args => {
		return (
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
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
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
		);
	}
};

export const Click: Story = {
	args: {
		placement: 'bottom',
		title: 'show when click',
		trigger: 'click'
	},
	render: args => {
		return (
			<UserMenu {...args}>
				<UserMenu.Title>Hello, Sergio Gómez</UserMenu.Title>
				<UserMenu.Item onClick={() => alert('User settings!')}>
					<UserMenu.Item.Icon icon="user-circle" styling="outlined" />
					<UserMenu.Item.Text>User settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Company settings!')}>
					<UserMenu.Item.Icon icon="business" styling="outlined" />
					<UserMenu.Item.Text>Company settings</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Item onClick={() => alert('Chat support!')}>
					<UserMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<UserMenu.Item.Text>Chat support</UserMenu.Item.Text>
				</UserMenu.Item>
				<UserMenu.Footer>
					<UserMenu.Item onClick={() => alert('Logout')}>
						<UserMenu.Item.Icon icon="logout" styling="outlined" />
						<UserMenu.Item.Text>Logout</UserMenu.Item.Text>
					</UserMenu.Item>
				</UserMenu.Footer>
			</UserMenu>
		);
	}
};
