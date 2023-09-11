import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Image from 'components/Image';
import { getExcludedArgTypes } from 'storybook/parameters';
import ImageDecorator from 'storybook/decorators/Image/Image';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
	title: 'Components/Image',
	component: Image,
	decorators: [ImageDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		src: 'https://www.conector.com/wp-content/uploads/18403419-1454830741242403-2752884136058597031-n-1.png'
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return <Image {...args} />;
	}
};

export const Small: Story = {
	args: { size: 100 },
	render: args => {
		return <Image {...args} />;
	}
};
export const Medium: Story = {
	args: { size: 250 },
	render: args => {
		return <Image {...args} />;
	}
};
export const Large: Story = {
	args: { size: 500 },
	render: args => {
		return <Image {...args} />;
	}
};
