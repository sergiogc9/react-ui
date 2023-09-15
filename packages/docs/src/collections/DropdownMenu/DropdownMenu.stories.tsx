import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Button';
import DropdownMenu from 'collections/DropdownMenu';
import { getExcludedArgTypes } from 'storybook/parameters';
import DropdownMenuDecorator from 'storybook/decorators/DropdownMenu/DropdownMenu';

type Story = StoryObj<typeof DropdownMenu>;

const meta: Meta<typeof DropdownMenu> = {
	title: 'Collections/DropdownMenu',
	component: DropdownMenu,
	decorators: [DropdownMenuDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		isInteractive: true,
		minWidth: 200,
		placement: 'left-start'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
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
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
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
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
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
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
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
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
		);
	}
};

export const Interactive: Story = {
	args: {
		placement: 'bottom',
		title: 'interactive'
	},
	render: args => {
		return (
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
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
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
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
			<DropdownMenu {...args}>
				<DropdownMenu.Title>Sergio Gómez</DropdownMenu.Title>
				<DropdownMenu.Item onClick={() => alert('User settings!')}>
					<DropdownMenu.Item.Icon icon="user-circle" styling="outlined" />
					<DropdownMenu.Item.Text>User settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Company settings!')}>
					<DropdownMenu.Item.Icon icon="business" styling="outlined" />
					<DropdownMenu.Item.Text>Company settings</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert('Chat support!')}>
					<DropdownMenu.Item.Icon.FontAwesome icon={faHeadset} />
					<DropdownMenu.Item.Text>Chat support</DropdownMenu.Item.Text>
				</DropdownMenu.Item>
				<DropdownMenu.Footer justifyContent="flex-end">
					<Button
						aspectSize="s"
						variant="link"
						onClick={() => {
							alert('Logout!');
						}}
					>
						Logout
					</Button>
				</DropdownMenu.Footer>
			</DropdownMenu>
		);
	}
};
