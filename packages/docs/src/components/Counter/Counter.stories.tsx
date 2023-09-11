import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from 'components/Flex';
import Counter, { CounterProps } from 'components/Counter';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Counter>;

const meta: Meta<typeof Counter> = {
	title: 'Components/Counter',
	component: Counter,
	argTypes: getExcludedArgTypes(),
	args: { numberOfItems: 100 }
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Counter {...args} />;
	}
};

const numbers: Array<NonNullable<CounterProps['numberOfItems']>> = [2, 36, 1234];
const sizes: Array<NonNullable<CounterProps['aspectSize']>> = ['s', 'm'];
const variants: Array<NonNullable<CounterProps['variant']>> = ['grey', 'red', 'blue', 'green', 'yellow'];

export const Sizes: Story = {
	argTypes: {
		aspectSize: { table: { disable: true } },
		numberOfItems: { table: { disable: true } }
	},
	render: args => {
		return (
			<Flex alignItems="center" gap={3}>
				{sizes.map(size =>
					numbers.map(number => <Counter key={size + number} {...args} aspectSize={size} numberOfItems={number} />)
				)}
			</Flex>
		);
	}
};

export const Variants: Story = {
	argTypes: {
		variant: { table: { disable: true } }
	},
	args: {
		numberOfItems: 50
	},
	render: args => {
		return (
			<Flex alignItems="center" gap={3}>
				{variants.map(variant => (
					<Counter key={variant} {...args} variant={variant} />
				))}
			</Flex>
		);
	}
};
