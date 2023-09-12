import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Counter from 'components/Counter';
import Icon from 'components/Icon';
import Status from 'components/Status';
import Tabs from 'components/Tabs';
import Text from 'components/Text';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
	argTypes: {
		...getExcludedArgTypes(),
		onTabChange: { action: 'onTabChange' }
	},
	args: {
		defaultTab: 'tab_1',
		width: 500
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						{['tab_1', 'tab_2', 'tab_3', 'tab_4'].map(tabId => (
							<Tabs.Tab key={`${tabId}`} id={`${tabId}`}>
								{`Tab ${tabId.replace('tab_', '')}`}
							</Tabs.Tab>
						))}
					</Tabs.Menu>
				</Tabs.Header>
				{['tab_1', 'tab_2', 'tab_3', 'tab_4'].map(tabId => (
					<Tabs.Content key={`${tabId}`} id={`${tabId}`} px={3} height={200}>
						This is the content of {tabId.replace('tab_', '')}
					</Tabs.Content>
				))}
			</Tabs>
		);
	}
};

export const BigEvenly: Story = {
	argTypes: { tabsLayout: { table: { disable: true } } },
	args: { tabsLayout: 'big-evenly' },
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						<Tabs.Tab id="tab_1">Tab 1</Tabs.Tab>
						<Tabs.Tab id="tab_2">Tab 2</Tabs.Tab>
					</Tabs.Menu>
				</Tabs.Header>
				<Tabs.Content id="tab_1" px={3} height={200}>
					This is the content of Tab 1
				</Tabs.Content>
				<Tabs.Content id="tab_2" px={3} height={200}>
					This is the content of Tab 2
				</Tabs.Content>
			</Tabs>
		);
	}
};

export const SmallLeft: Story = {
	argTypes: { tabsLayout: { table: { disable: true } } },
	args: { tabsLayout: 'small-left' },
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						<Tabs.Tab id="tab_1">Tab 1</Tabs.Tab>
						<Tabs.Tab id="tab_2">Tab 2</Tabs.Tab>
					</Tabs.Menu>
				</Tabs.Header>
				<Tabs.Content id="tab_1" px={3} height={200}>
					This is the content of Tab 1
				</Tabs.Content>
				<Tabs.Content id="tab_2" px={3} height={200}>
					This is the content of Tab 2
				</Tabs.Content>
			</Tabs>
		);
	}
};

export const SmallEvenly: Story = {
	argTypes: { tabsLayout: { table: { disable: true } } },
	args: { tabsLayout: 'small-evenly' },
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						<Tabs.Tab id="tab_1">Tab 1</Tabs.Tab>
						<Tabs.Tab id="tab_2">Tab 2</Tabs.Tab>
					</Tabs.Menu>
				</Tabs.Header>
				<Tabs.Content id="tab_1" px={3} height={200}>
					This is the content of Tab 1
				</Tabs.Content>
				<Tabs.Content id="tab_2" px={3} height={200}>
					This is the content of Tab 2
				</Tabs.Content>
			</Tabs>
		);
	}
};

export const Default: Story = {
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						<Tabs.Tab id="tab_1">Tab 1</Tabs.Tab>
						<Tabs.Tab id="tab_2">Tab 2</Tabs.Tab>
					</Tabs.Menu>
				</Tabs.Header>
				<Tabs.Content id="tab_1" px={3} height={200}>
					This is the content of Tab 1
				</Tabs.Content>
				<Tabs.Content id="tab_2" px={3} height={200}>
					This is the content of Tab 2
				</Tabs.Content>
			</Tabs>
		);
	}
};

export const Error: Story = {
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						<Tabs.Tab id="tab_1">Tab 1</Tabs.Tab>
						<Tabs.Tab isError id="tab_2">
							Tab 2
						</Tabs.Tab>
					</Tabs.Menu>
				</Tabs.Header>
				<Tabs.Content id="tab_1" px={3} height={200}>
					This is the content of Tab 1
				</Tabs.Content>
				<Tabs.Content id="tab_2" px={3} height={200}>
					This is the content of Tab 2
				</Tabs.Content>
			</Tabs>
		);
	}
};

export const Disabled: Story = {
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						<Tabs.Tab id="tab_1">Tab 1</Tabs.Tab>
						<Tabs.Tab isDisabled id="tab_2">
							Tab 2
						</Tabs.Tab>
					</Tabs.Menu>
				</Tabs.Header>
				<Tabs.Content id="tab_1" px={3} height={200}>
					This is the content of Tab 1
				</Tabs.Content>
				<Tabs.Content id="tab_2" px={3} height={200}>
					This is the content of Tab 2
				</Tabs.Content>
			</Tabs>
		);
	}
};

export const TabsWithCounter: Story = {
	args: { defaultTab: 'description' },
	render: args => {
		return (
			<Tabs {...args}>
				<Tabs.Header>
					<Tabs.Menu>
						<Tabs.Tab id="description">Description</Tabs.Tab>
						<Tabs.Tab id="settings">
							Settings
							<Counter aspectSize="s" ml={2} numberOfItems={5} />
						</Tabs.Tab>
					</Tabs.Menu>
				</Tabs.Header>
				<Tabs.Content id="description" px={3} height={200}>
					This is the content of description tab.
				</Tabs.Content>
				<Tabs.Content id="settings" px={3} height={200}>
					This is the content of settings tab with errors inside.
				</Tabs.Content>
			</Tabs>
		);
	}
};

export const WithIcon: Story = {
	args: { defaultTab: 'description', width: { xs: '90vw', md: 500 } },
	render: args => {
		return (
			<>
				<Text aspectSize="s">Tip*: See this story in mobile view.</Text>
				<Tabs {...args}>
					<Tabs.Header>
						<Tabs.Menu>
							<Tabs.Tab id="description">
								<Icon icon="info" styling="outlined" />
							</Tabs.Tab>
							<Tabs.Tab id="settings" isError>
								<Icon fill="red.500" icon="info" styling="outlined" />
								<Status ml={1} variant="red" />
							</Tabs.Tab>
						</Tabs.Menu>
					</Tabs.Header>
					<Tabs.Content id="description" px={3} height={200}>
						This is the content of description tab.
					</Tabs.Content>
					<Tabs.Content id="settings" px={3} height={200}>
						This is the content of settings tab with errors inside.
					</Tabs.Content>
				</Tabs>
			</>
		);
	}
};
