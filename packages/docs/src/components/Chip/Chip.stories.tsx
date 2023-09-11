import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import Grid from 'components/Grid';
import Chip, { ChipProps } from 'components/Chip';
import { getExcludedArgTypes } from 'storybook/parameters';
import ChipDecorator from 'storybook/decorators/Chip/Chip';

type Story = StoryObj<typeof Chip>;

const meta: Meta<typeof Chip> = {
	title: 'Components/Chip',
	component: Chip,
	decorators: [ChipDecorator],
	argTypes: {
		...getExcludedArgTypes(),
		onOverlayClick: { action: 'onOverlayClick' }
	},
	args: {
		aspectSize: 's',
		children: 'Click me',
		overlayContent: 'Edit me',
		variant: 'blue'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Chip {...args} {...args}>
				<Chip.Icon icon="location" styling="filled" />
				<Chip.Label>{args.children}</Chip.Label>
				<Chip.Icon icon="close" styling="outlined" />
			</Chip>
		);
	}
};

const sizes: Array<NonNullable<ChipProps['aspectSize']>> = ['s', 'm'];
const variants: Array<NonNullable<ChipProps['variant']>> = ['transparent', 'blue', 'grey', 'yellow', 'red', 'green'];

export const Label: Story = {
	args: { children: 'Chip as label' },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip {...args} aspectSize={size} variant={variant}>
								<Chip.Label>{args.children}</Chip.Label>
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};

export const LabelWithIcon: Story = {
	args: { children: 'Bookmarked' },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip {...args} aspectSize={size} variant={variant}>
								<Chip.Icon styling="filled" icon="bookmark" />
								<Chip.Label>{args.children}</Chip.Label>
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};

export const LabelWithFontAwesomeIcon: Story = {
	args: { children: 'Bookmarked' },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip {...args} aspectSize={size} variant={variant}>
								<Chip.Icon.FontAwesome icon={faBookmark} />
								<Chip.Label>{args.children}</Chip.Label>
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};

export const Link: Story = {
	args: { children: 'Chip as link' },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6} columnGap={0} rowGap={0}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip href="#" {...args} aspectSize={size} variant={variant}>
								<Chip.Label>{args.children}</Chip.Label>
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};

export const WithHandler: Story = {
	args: { children: 'Bookmarked' },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip {...args} aspectSize={size} variant={variant}>
								<Chip.Label>{args.children}</Chip.Label>
								<Chip.Icon icon="close" styling="outlined" />
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};

export const WithHandlerAndIcons: Story = {
	args: { children: 'Bookmarked' },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip {...args} aspectSize={size} variant={variant}>
								<Chip.Icon icon="bookmark" styling="filled" />
								<Chip.Label>{args.children}</Chip.Label>
								<Chip.Icon icon="close" styling="outlined" />
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};

export const Custom: Story = {
	args: {
		aspectSize: 'm',
		background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 16%, rgba(0,212,255,1) 50%)',
		children: 'Buy on sight',
		overlayContent: undefined,
		variant: 'blue'
	},
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Chip {...args}>
				<Chip.Icon fill="yellow.200" icon="star" styling="outlined" />
				<Chip.Icon fill="yellow.300" icon="star" styling="outlined" />
				<Chip.Icon fill="yellow.400" icon="star" styling="outlined" />
				<Chip.Icon fill="yellow.500" icon="star" styling="outlined" />
				<Chip.Icon fill="yellow.600" icon="star" styling="outlined" />
				<Chip.Label>{args.children}</Chip.Label>
				<Chip.Icon icon="alert-error" fill="red.600" styling="filled" />
			</Chip>
		);
	}
};

export const WithOverlay: Story = {
	args: { children: 'Bookmarked', onOverlayClick: () => alert('OVERLAY CLICKED') },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip {...args} aspectSize={size} variant={variant}>
								<Chip.Icon icon="bookmark" styling="filled" />
								<Chip.Label>{args.children}</Chip.Label>
								<Chip.Icon icon="close" styling="outlined" />
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};

export const WithFixedOverlay: Story = {
	args: { children: 'Bookmarked', isOverlayAlwaysVisible: true, onOverlayClick: () => alert('OVERLAY CLICKED') },
	argTypes: {
		aspectSize: { table: { disable: true } },
		variant: { table: { disable: true } }
	},
	render: args => {
		return (
			<Grid columns={6}>
				{sizes.map(size =>
					variants.map(variant => (
						<Grid.Box key={size + variant}>
							<Chip {...args} aspectSize={size} variant={variant}>
								<Chip.Icon icon="bookmark" styling="filled" />
								<Chip.Label>{args.children}</Chip.Label>
								<Chip.Icon icon="close" styling="outlined" />
							</Chip>
						</Grid.Box>
					))
				)}
			</Grid>
		);
	}
};
