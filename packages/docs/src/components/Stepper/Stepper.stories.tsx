import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faClipboardQuestion, faFileLines, faInfo } from '@fortawesome/free-solid-svg-icons';

import Flex from 'components/Flex';
import Stepper from 'components/Stepper';
import Text from 'components/Text';
import { getExcludedArgTypes } from 'storybook/parameters';
import StepperDecorator from 'storybook/decorators/Stepper/Stepper';

type Story = StoryObj<typeof Stepper>;

const meta: Meta<typeof Stepper> = {
	title: 'Components/Stepper',
	component: Stepper,
	argTypes: {
		...getExcludedArgTypes(),
		onChangeStep: { action: 'onChangeStep' }
	},
	args: {
		variant: 'vertical',
		width: 500
	}
};

export default meta;

const renderComponent: Story['render'] = args => {
	return (
		<Stepper {...args}>
			<Stepper.Step>
				<Stepper.Circle>
					<Stepper.Icon icon="work" styling="outlined" />
				</Stepper.Circle>
				<Stepper.Text>Job Description</Stepper.Text>
			</Stepper.Step>
			<Stepper.Step>
				<Stepper.Circle>
					<Stepper.Icon icon="detail" styling="outlined" />
				</Stepper.Circle>
				<Stepper.Text>Contract</Stepper.Text>
			</Stepper.Step>
			<Stepper.Step>
				<Stepper.Circle>
					<Stepper.Icon icon="flash" styling="outlined" />
				</Stepper.Circle>
				<Stepper.Text>Flash Questions</Stepper.Text>
			</Stepper.Step>
		</Stepper>
	);
};

export const Playground: Story = {
	args: { current: 2 },
	render: renderComponent
};

export const Vertical: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'vertical' },
	decorators: [StepperDecorator],
	render: renderComponent
};

export const Horizontal: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'horizontal' },
	decorators: [StepperDecorator],
	render: renderComponent
};

export const Compacted: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'compacted' },
	decorators: [StepperDecorator],
	render: renderComponent
};

export const CompactedWithoutLine: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'compacted-no-line' },
	decorators: [StepperDecorator],
	render: renderComponent
};

export const WithIcons: Story = {
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="work" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="detail" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="flash" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Flash Questions</Stepper.Text>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithFontAwesomeIcons: Story = {
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon.FontAwesome icon={faInfo} />
					</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon.FontAwesome icon={faFileLines} />
					</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon.FontAwesome icon={faClipboardQuestion} />
					</Stepper.Circle>
					<Stepper.Text>Flash Questions</Stepper.Text>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithNumbers: Story = {
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>1</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>2</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>3</Stepper.Circle>
					<Stepper.Text>Flash Questions</Stepper.Text>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithCustomContent: Story = {
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Text aspectSize="s">😄</Text>
					</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Text aspectSize="xs">SG</Text>
					</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="flash" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Flash Questions</Stepper.Text>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithOnlyIcons: Story = {
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="work" styling="outlined" />
					</Stepper.Circle>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="detail" styling="outlined" />
					</Stepper.Circle>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="flash" styling="outlined" />
					</Stepper.Circle>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithOptionalTextVertical: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'vertical' },
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="work" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="detail" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="flash" styling="outlined" />
					</Stepper.Circle>
					<Flex flexDirection="column">
						<Stepper.Text>Flash Questions</Stepper.Text>
						<Stepper.TextOptional>Optional</Stepper.TextOptional>
					</Flex>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithOptionalTextHorizontal: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'horizontal' },
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="work" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="detail" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="flash" styling="outlined" />
					</Stepper.Circle>
					<Flex flexDirection="column">
						<Stepper.Text>Flash Questions</Stepper.Text>
						<Stepper.TextOptional>Optional</Stepper.TextOptional>
					</Flex>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithCheckIconVertical: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'vertical' },
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="work" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="detail" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="flash" styling="outlined" />
					</Stepper.Circle>
					<Flex flexDirection="column">
						<Stepper.Text>Flash Questions</Stepper.Text>
						<Stepper.TextOptional>Optional</Stepper.TextOptional>
					</Flex>
				</Stepper.Step>
			</Stepper>
		);
	}
};

export const WithCheckIconHorizontal: Story = {
	argTypes: { variant: { table: { disable: true } } },
	args: { variant: 'horizontal' },
	decorators: [StepperDecorator],
	render: args => {
		return (
			<Stepper {...args}>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="work" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Job Description</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="detail" styling="outlined" />
					</Stepper.Circle>
					<Stepper.Text>Contract</Stepper.Text>
				</Stepper.Step>
				<Stepper.Step>
					<Stepper.Circle>
						<Stepper.Icon icon="flash" styling="outlined" />
					</Stepper.Circle>
					<Flex flexDirection="column">
						<Stepper.Text>Flash Questions</Stepper.Text>
						<Stepper.TextOptional>Optional</Stepper.TextOptional>
					</Flex>
				</Stepper.Step>
			</Stepper>
		);
	}
};
