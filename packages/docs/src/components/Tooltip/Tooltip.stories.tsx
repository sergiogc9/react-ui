import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Icon from 'components/Icon';
import Flex from 'components/Flex';
import Tooltip, { TooltipContentProps } from 'components/Tooltip';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger>
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args}>This is awesome</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const Dark: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger>
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args} variant="dark">
					This is awesome
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const Light: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger>
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args} variant="light">
					This is awesome
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const Custom: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger ml="150px">
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args} bg="green.300" color="neutral.900">
					This is awesome
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const Timing: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger>
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args} enterDelay={1000}>
					I took a second to be here!
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const ExitTiming: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger ml="150px">
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args} exitDelay={3000}>
					I will be gone in 3 seconds 😄
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const NotInteractive: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger>
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args} isInteractive={false}>
					I am hiding when you mouse out the icon
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const Interactive: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger>
					<Icon styling="filled" icon="info" fill="primary.500" />
				</Tooltip.Trigger>
				<Tooltip.Content {...args} isInteractive>
					I am hiding when you mouse out the icon
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const OnHover: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger width="fit-content">Hover me</Tooltip.Trigger>
				<Tooltip.Content {...args} trigger="mouseenter focus">
					You hovered it!
				</Tooltip.Content>
			</Tooltip>
		);
	}
};

export const OnClick: Story = {
	render: args => {
		return (
			<Tooltip>
				<Tooltip.Trigger width="fit-content">Hover me</Tooltip.Trigger>
				<Tooltip.Content {...args} trigger="click">
					You hovered it!
				</Tooltip.Content>
			</Tooltip>
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
					<Tooltip.Content reference={ref}>
					I am not using the provider!
					</Tooltip.Content>
					);`
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
				<Tooltip.Content reference={ref} {...args}>
					I am not using the provider!
				</Tooltip.Content>
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
							<Tooltip key={`${position}${alignment}`}>
								<Tooltip.Trigger mx="140px" my="60px">
									<Icon styling="filled" icon="info" fill="primary.500" />
								</Tooltip.Trigger>
								<Tooltip.Content
									{...args}
									isVisible={true}
									placement={`${position}${alignment}` as TooltipContentProps['placement']}
									width="180px"
								>
									{`This is the tooltip content with position: ${position}${alignment}`}
								</Tooltip.Content>
							</Tooltip>
						))}
					</Flex>
				))}
			</>
		);
	}
};
