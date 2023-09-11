import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from 'components/Button';
import Flex from 'components/Flex';
import Popover, { PopoverContentProps } from 'components/Popover';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Popover>;

const meta: Meta<typeof Popover> = {
	title: 'Components/Popover',
	component: Popover,
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Popover {...args}>
				<Popover.Trigger>
					<Button>Hover me</Button>
				</Popover.Trigger>
				<Popover.Content {...args}>This is awesome</Popover.Content>
			</Popover>
		);
	}
};

export const EnterTiming: Story = {
	render: args => {
		return (
			<Popover {...args}>
				<Popover.Trigger>
					<Button>Hover me</Button>
				</Popover.Trigger>
				<Popover.Content enterDelay={1000}>I took a second to be here!</Popover.Content>
			</Popover>
		);
	}
};

export const ExitTiming: Story = {
	render: args => {
		return (
			<Popover {...args}>
				<Popover.Trigger ml="150px">
					<Button>Hover me</Button>
				</Popover.Trigger>
				<Popover.Content exitDelay={3000}>I will be gone in 3 seconds 😄</Popover.Content>
			</Popover>
		);
	}
};

export const NotInteractive: Story = {
	render: args => {
		return (
			<Popover {...args}>
				<Popover.Trigger>
					<Button>Hover me</Button>
				</Popover.Trigger>
				<Popover.Content isInteractive={false}>I am hiding when you mouse out the icon</Popover.Content>
			</Popover>
		);
	}
};

export const Interactive: Story = {
	render: args => {
		return (
			<Popover {...args}>
				<Popover.Trigger ml="150px">
					<Button>Hover me</Button>
				</Popover.Trigger>
				<Popover.Content isInteractive={true}>I keep opened if you hover me</Popover.Content>
			</Popover>
		);
	}
};

export const OnHover: Story = {
	render: args => {
		return (
			<Popover {...args}>
				<Popover.Trigger width="fit-content">
					<Button>Hover me</Button>
				</Popover.Trigger>
				<Popover.Content trigger="mouseenter focus">You hovered it!</Popover.Content>
			</Popover>
		);
	}
};

export const OnClick: Story = {
	render: args => {
		return (
			<Popover {...args}>
				<Popover.Trigger ml="150px" width="fit-content">
					<Button>Click me</Button>
				</Popover.Trigger>
				<Popover.Content trigger="click">You clicked it!</Popover.Content>
			</Popover>
		);
	}
};

export const WithoutProvider: Story = {
	parameters: {
		docs: {
			source: {
				code: `
				const ref = React.useRef(null);

				return (
					<Flex ref={ref}>Hover me</Flex>
					<Popover.Content reference={ref}>
					I am not using the provider!
					</Popover.Content>
					);
					`
			}
		}
	},
	render: args => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const ref = React.useRef(null);

		return (
			<Flex>
				<Flex
					ref={ref}
					alignItems="center"
					bg="primary.500"
					color="neutral.0"
					justifyContent="center"
					width="100px"
					height="50px"
				>
					Hover me
				</Flex>
				<Popover.Content reference={ref} {...args}>
					I am not using the provider!
				</Popover.Content>
			</Flex>
		);
	}
};

export const Positioning: Story = {
	render: args => {
		return (
			<>
				{['top', 'left', 'right', 'bottom'].map(position => (
					<Flex key={`${position}-div`} py={5} flexWrap="wrap">
						{['', '-end', '-start'].map(alignment => (
							<Popover key={`${position}${alignment}`} {...args}>
								<Popover.Trigger mx="100px" my="150px">
									<Button>Hover me</Button>
								</Popover.Trigger>
								<Popover.Content
									isVisible={true}
									placement={`${position}${alignment}` as PopoverContentProps['placement']}
									height="150px"
									width="150px"
								>
									{`This is the popover content with position: ${position}${alignment}`}
								</Popover.Content>
							</Popover>
						))}
					</Flex>
				))}
			</>
		);
	}
};
