import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';

import Button from 'components/Button';
import DatePicker from 'components/DatePicker';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof DatePicker>;

const meta: Meta<typeof DatePicker> = {
	title: 'Components/DatePicker',
	component: DatePicker,
	argTypes: {
		...getExcludedArgTypes(),
		date: { control: 'date' },
		defaultDate: { control: 'date' },
		defaultVisibleMonth: { control: 'date' },
		maxDate: { control: 'date' },
		minDate: { control: 'date' },
		onDateChange: { table: { disable: true }, action: 'onDateChange' },
		onDateRangeChange: { table: { disable: true }, action: 'onDateRangeChange' }
	}
};

export default meta;

const renderComponent: Story['render'] = args => {
	return <DatePicker {...args} />;
};

export const Playground: Story = {
	render: renderComponent
};

export const SingleDate: Story = {
	args: {
		isRange: false
	},
	render: renderComponent
};

export const Range: Story = {
	args: {
		isRange: true
	},
	render: renderComponent
};

export const MonthsView: Story = {
	args: {
		view: 'month'
	},
	render: renderComponent
};

export const MonthsViewRange: Story = {
	args: {
		isRange: true,
		view: 'month'
	},
	render: renderComponent
};

export const MultipleMonths: Story = {
	args: {
		numberOfMonths: 2
	},
	render: renderComponent
};

export const LimitDates: Story = {
	args: {
		defaultDate: new Date(2021, 4, 15),
		defaultVisibleMonth: new Date(2021, 4, 15),
		maxDate: new Date(2021, 4, 25),
		minDate: new Date(2021, 4, 5)
	},
	render: renderComponent
};

export const CustomLocale: Story = {
	args: {
		locale: 'ca-ES'
	},
	render: renderComponent
};

export const DaysDisabled: Story = {
	args: {
		defaultDate: new Date(2021, 3, 15),
		defaultVisibleMonth: new Date(2021, 3, 15),
		disabledDays: [new Date(2021, 3, 10), { from: new Date(2021, 3, 20), to: new Date(2021, 3, 25) }]
	},
	render: renderComponent
};

export const WeekendsDisabled: Story = {
	args: {
		disabledDays: { daysOfWeek: [0, 6] }
	},
	render: renderComponent
};

export const CustomModifiers: Story = {
	args: {
		defaultDate: new Date(2021, 7, 5),
		defaultVisibleMonth: new Date(2021, 7, 15),
		modifiers: {
			holidays: { from: new Date(2021, 7, 10), to: new Date(2021, 7, 27) }
		}
	},
	render: args => {
		const HolidaysModifierWrapper = styled(Flex)`
			.DayPicker-Day--holidays:not(.DayPicker-Day--selected) {
				color: green;
				font-weight: bold;

				&:hover {
					background: rgba(60, 179, 113, 0.4);
				}
			}
		`;

		return (
			<HolidaysModifierWrapper>
				<DatePicker {...args} />
			</HolidaysModifierWrapper>
		);
	}
};

export const WithInput: Story = {
	args: {
		locale: 'ca-ES'
	},
	render: args => {
		return (
			<TextField
				datePickerProps={args}
				label="Selecciona un dia"
				name="date-picker"
				onDateChange={console.log}
				type="date"
			/>
		);
	}
};

export const WithPopover: Story = {
	args: {
		locale: 'ca-ES'
	},
	parameters: {
		docs: {
			source: {
				code: `const DatePickerWithPopoverStory = (props: Partial<DatePickerPopoverProps>) => {
const [isVisible, setIsVisible] = React.useState(false);
const btnRef = React.useRef<HTMLButtonElement>(null);

return (
	<>
		<Button ref={btnRef} onClick={() => setIsVisible(true)}>
			Select a date
		</Button>
		<DatePicker.Popover
			datePickerProps={props}
			isVisible={isVisible}
			reference={btnRef}
		>
			<Flex justifyContent="flex-end" padding={3}>
			<Button
				aspectSize="s"
				variant="secondary"
				onClick={() => setIsVisible(false)}
			>
				Cancel
			</Button>
			<Button
				aspectSize="s"
				variant="default"
				ml={3}
				onClick={() => setIsVisible(false)}
			>
				Done
			</Button>
			</Flex>
		</DatePicker.Popover>
	</>
	);
};`
			}
		}
	},
	render: args => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isVisible, setIsVisible] = React.useState(false);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const btnRef = React.useRef<HTMLButtonElement>(null);
		return (
			<>
				<Button ref={btnRef} onClick={() => setIsVisible(true)}>
					Select a date
				</Button>
				<DatePicker.Popover datePickerProps={args} isVisible={isVisible} reference={btnRef}>
					<Flex justifyContent="flex-end" padding={3}>
						<Button aspectSize="s" variant="secondary" onClick={() => setIsVisible(false)}>
							Cancel
						</Button>
						<Button aspectSize="s" variant="default" ml={3} onClick={() => setIsVisible(false)}>
							Done
						</Button>
					</Flex>
				</DatePicker.Popover>
			</>
		);
	}
};
