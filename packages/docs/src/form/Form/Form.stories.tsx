import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from 'components/Flex';
import Form from 'form/components/Form';
import { getExcludedArgTypes } from 'storybook/parameters';
import FormDecorator from 'storybook/decorators/Form/Form';

type Story = StoryObj<typeof Form>;

const meta: Meta<typeof Form> = {
	title: 'Form/Form',
	component: Form,
	decorators: [FormDecorator],
	argTypes: getExcludedArgTypes()
};

export default meta;

export const Playground: Story = {
	render: args => {
		return (
			<Form {...args}>
				<Flex flexDirection="column" my={4} rowGap={3} width="100%">
					<Form.TextField aspectSize="s" label="Name" name="name" />
					<Form.TextField aspectSize="s" label="Age" name="age" type="number" />
					<Flex columnGap={2}>
						<Form.TextField aspectSize="s" label="Email" name="email" type="email" />
						<Form.TextField aspectSize="s" label="Phone number" name="phone" type="tel" />
					</Flex>
					<Form.TextArea height={150} label="Description" name="comments" />
					<Form.ButtonSubmit variant="primary">SUBMIT</Form.ButtonSubmit>
				</Flex>
			</Form>
		);
	}
};
