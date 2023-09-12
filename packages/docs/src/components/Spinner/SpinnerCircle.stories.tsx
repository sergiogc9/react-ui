import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Spinner from 'components/Spinner';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Spinner.Circle>;

const meta: Meta<typeof Spinner.Circle> = {
	title: 'Components/Spinner/Circle',
	component: Spinner.Circle,
	argTypes: getExcludedArgTypes(['color']),
	args: {
		size: 100
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const OneCircle: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 1 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const TwoCircles: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 2 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const ThreeCircles: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 3 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const OneCircleCustomColors: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 1, color: 'green.400' },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const TwoCirclesCustomColors: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 2, color: 'yellow.700', color2: 'yellow.400' },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const ThreeCirclesCustomColors: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 3, color: 'red.500', color2: 'yellow.700', color3: 'yellow.400' },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const OneSmall: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 1, circleSize: 1, size: 24 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const TwoSmall: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 2, circleSize: 1, size: 24 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const ThreeSmall: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 3, circleSize: 1, size: 24 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const OneBig: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 1, circleSize: 10, size: 250 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const TwoBig: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 2, circleSize: 10, size: 250 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};

export const ThreeBig: Story = {
	argTypes: { circles: { table: { disable: true } } },
	args: { circles: 3, circleSize: 10, size: 250 },
	render: args => {
		return (
			<Spinner>
				<Spinner.Circle {...args} />
			</Spinner>
		);
	}
};
