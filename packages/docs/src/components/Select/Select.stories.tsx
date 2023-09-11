import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from 'components/Flex';
import Icon from 'components/Icon';
import Select, { SelectProps } from 'components/Select';
import Text from 'components/Text';
import { getExcludedArgTypes } from 'storybook/parameters';
import SelectDecorator from 'storybook/decorators/Select/Select';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
	title: 'Components/Select',
	component: Select,
	decorators: [SelectDecorator],
	argTypes: getExcludedArgTypes(),
	args: {
		minHeight: 150, // Only needed for storybook rendering
		placeholder: 'Select option'
	}
};

export default meta;

const renderComponent: Story['render'] = args => {
	return (
		<Select {...args}>
			<Select.Option id="option-1">Option 1</Select.Option>
			<Select.Option id="option-2">Option 2</Select.Option>
		</Select>
	);
};

const renderCitiesComponent: Story['render'] = args => {
	return (
		<Select {...args}>
			<Select.Option id="option-1">Girona</Select.Option>
			<Select.Option id="option-2">Barcelona</Select.Option>
		</Select>
	);
};

const sizes: Array<NonNullable<SelectProps['aspectSize']>> = ['s', 'm', 'l'];
const variants: Array<NonNullable<SelectProps['variant']>> = ['neutral', 'primary'];

export const Playground: Story = {
	render: renderComponent
};

export const Sizes: Story = {
	argTypes: { aspectSize: { table: { disable: true } } },
	render: (args, context) => {
		return (
			<Flex alignItems="center" gap={3}>
				{sizes.map(size => renderComponent({ ...args, aspectSize: size }, context))}
			</Flex>
		);
	}
};

export const Variants: Story = {
	argTypes: { variant: { table: { disable: true } } },
	render: (args, context) => {
		return (
			<Flex alignItems="center" gap={3}>
				{variants.map(variant => renderComponent({ ...args, variant: variant }, context))}
			</Flex>
		);
	}
};

export const Default: Story = {
	args: { minHeight: undefined },
	render: renderComponent
};

export const Disabled: Story = {
	argTypes: { isDisabled: { table: { disable: true } } },
	args: { isDisabled: true, minHeight: undefined },
	render: renderComponent
};

export const Error: Story = {
	argTypes: { isError: { table: { disable: true } } },
	args: { isError: true, minHeight: undefined },
	render: renderComponent
};

export const Success: Story = {
	argTypes: { isSuccess: { table: { disable: true } } },
	args: { isSuccess: true },
	render: renderComponent
};

export const SingleSelect: Story = {
	args: {
		isMultiSelect: false,
		label: 'Select only one',
		minHeight: 275,
		placeholder: undefined
	},
	render: args => (
		<Select {...args}>
			<Select.Option id="option-1">Option 1</Select.Option>
			<Select.Option id="option-2">Option 2</Select.Option>
			<Select.Option id="option-3">Option 3</Select.Option>
			<Select.Option id="option-4">Option 4</Select.Option>
		</Select>
	)
};

export const MultiSelect: Story = {
	args: {
		isMultiSelect: true,
		label: 'Select many options',
		minHeight: 275,
		placeholder: undefined
	},
	render: args => (
		<Select {...args}>
			<Select.Option id="option-1">Option 1</Select.Option>
			<Select.Option id="option-2">Option 2</Select.Option>
			<Select.Option id="option-3">Option 3</Select.Option>
			<Select.Option id="option-4">Option 4</Select.Option>
		</Select>
	)
};

export const WithoutAutocomplete: Story = {
	args: {
		isAutocomplete: false,
		label: 'Select an option',
		minHeight: 230,
		placeholder: undefined
	},
	render: args => (
		<Select {...args}>
			<Select.Option id="option-1">Option 1</Select.Option>
			<Select.Option id="option-2">Option 2</Select.Option>
			<Select.Option id="option-3">Option 3</Select.Option>
			<Select.Option id="option-4">Option 4</Select.Option>
		</Select>
	)
};

export const WithAutocomplete: Story = {
	args: {
		isAutocomplete: true,
		label: 'Filter options',
		minHeight: 230,
		placeholder: undefined
	},
	render: args => (
		<Select {...args}>
			<Select.Option id="option-1">Option 1</Select.Option>
			<Select.Option id="option-2">Option 2</Select.Option>
			<Select.Option id="option-3">Option 3</Select.Option>
			<Select.Option id="option-4">Option 4</Select.Option>
		</Select>
	)
};

export const WithCustomIcon: Story = {
	argTypes: { leftContent: { table: { disable: true } } },
	args: {
		minHeight: 215,
		placeholder: 'Select a favourite'
	},
	render: args => (
		<Select leftContent={<Icon icon="star" styling="outlined" />} {...args}>
			<Select.Option id="option-1">Favourite option 1</Select.Option>
			<Select.Option id="option-2">Favourite option 2</Select.Option>
			<Select.Option id="option-3">Favourite option 3</Select.Option>
			<Select.Option id="option-4">Favourite option 4</Select.Option>
		</Select>
	)
};

export const WithoutLabelAndPlaceholder: Story = {
	args: {
		label: undefined,
		placeholder: undefined
	},
	render: renderComponent
};

export const InsideLabel: Story = {
	args: {
		label: 'City',
		labelPosition: 'inside',
		placeholder: undefined
	},
	render: renderCitiesComponent
};

export const OutsideLabel: Story = {
	args: {
		label: 'City',
		labelPosition: 'outside',
		placeholder: undefined
	},
	render: renderCitiesComponent
};

export const WithPlaceholder: Story = {
	args: {
		placeholder: 'Select a city'
	},
	render: renderCitiesComponent
};

export const WithLabelAndPlaceholder: Story = {
	args: {
		placeholder: 'Select a city',
		label: 'City'
	},
	render: renderCitiesComponent
};

export const WithHelperText: Story = {
	args: {
		helperText: 'Required',
		placeholder: 'Select a city',
		label: 'City'
	},
	render: renderCitiesComponent
};

export const WithHelperTextError: Story = {
	args: {
		helperText: 'Required',
		isError: true,
		placeholder: 'Select a city',
		label: 'City'
	},
	render: renderCitiesComponent
};

export const WithHelperTextSuccess: Story = {
	args: {
		helperText: 'Required',
		isSuccess: true,
		placeholder: 'Select a city',
		label: 'City'
	},
	render: renderCitiesComponent
};

export const WithHelperTextDisabled: Story = {
	args: {
		helperText: 'Required',
		isDisabled: true,
		placeholder: 'Select a city',
		label: 'City'
	},
	render: renderCitiesComponent
};

export const WithCustomOptions: Story = {
	args: { minHeight: 215 },
	render: args => {
		return (
			<Select {...args}>
				<Select.Option id="option-1">
					🤟 <Text>Option</Text> 👌 1
				</Select.Option>
				<Select.Option id="option-2">Option 2</Select.Option>
				<Select.Option id="option-3">Option 3</Select.Option>
				<Select.Option id="option-4">Option 4</Select.Option>
			</Select>
		);
	}
};

export const DefaultEmptyResults: Story = {
	render: args => {
		return <Select {...args}></Select>;
	}
};

export const CustomEmptyResults: Story = {
	args: {
		emptyResultsContent: (
			<Flex p={4}>
				<Text color="primary.400">That is weird... no results have been found!</Text>
			</Flex>
		)
	},
	render: args => {
		return <Select {...args}></Select>;
	}
};
