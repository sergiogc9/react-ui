import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Chip from 'components/Chip';
import SwitchBox from 'collections/SwitchBox';
import { getExcludedArgTypes } from 'storybook/parameters';
import SwitchBoxDecorator from 'storybook/decorators/SwitchBox/SwitchBox';

type Story = StoryObj<typeof SwitchBox>;

const meta: Meta<typeof SwitchBox> = {
	title: 'Collections/SwitchBox',
	component: SwitchBox,
	decorators: [SwitchBoxDecorator],
	argTypes: {
		...getExcludedArgTypes(),
		onChange: { action: 'changed' }
	}
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<SwitchBox {...args}>
				<SwitchBox.Icon icon="help" styling="outlined" />
				<SwitchBox.Content display="block">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
					<SwitchBox.Chip ml={1} variant="green">
						<Chip.Label>lorem</Chip.Label>
					</SwitchBox.Chip>
					<SwitchBox.Chip ml={1} variant="blue">
						<Chip.Label>ipsum</Chip.Label>
					</SwitchBox.Chip>
				</SwitchBox.Content>
			</SwitchBox>
		);
	}
};
