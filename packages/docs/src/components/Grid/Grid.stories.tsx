import React from 'react';
import { StoryObj } from '@storybook/react';

import Grid from 'components/Grid';

import { Grid as StoryGrid, storyArgs } from './GridStorybook';

export default {
	title: 'Components/Grid',
	// Simplify props API for a better DX
	component: StoryGrid,
	argTypes: {
		columns: { control: 'number' },
		rows: { control: 'number' }
	},
	args: storyArgs
};

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
	render: props => {
		return (
			<Grid {...props}>
				<Grid.Row bg="lightgreen">Grid.Row</Grid.Row>
				<Grid.Box bg="lightblue" columns={8} rows={2}>
					Grid.Box
				</Grid.Box>
				<Grid.Box bg="yellow" columns={4}>
					Grid.Box
				</Grid.Box>
				<Grid.Box bg="orange" columns={4} height={150} initialColumn={9}>
					Grid.Box
				</Grid.Box>
				<Grid.Box bg="orangered" columns={8}>
					Grid.Box
				</Grid.Box>
				<Grid.Box bg="mediumpurple" columns={4}>
					Grid.Box
				</Grid.Box>
			</Grid>
		);
	}
};

export const DefaultGrid: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props}>
				<Grid.Box bg="lightblue">Box 1</Grid.Box>
				<Grid.Box bg="lightblue">Box 2</Grid.Box>
				<Grid.Box bg="lightblue">Box 3</Grid.Box>
				<Grid.Box bg="lightblue">Box 4</Grid.Box>
				<Grid.Box bg="lightblue">Box 5</Grid.Box>
				<Grid.Box bg="lightblue">Box 6</Grid.Box>
				<Grid.Box bg="lightblue">Box 7</Grid.Box>
				<Grid.Box bg="lightblue">Box 8</Grid.Box>
				<Grid.Box bg="lightblue">Box 9</Grid.Box>
				<Grid.Box bg="lightblue">Box 10</Grid.Box>
				<Grid.Box bg="lightblue">Box 11</Grid.Box>
				<Grid.Box bg="lightblue">Box 12</Grid.Box>
			</Grid>
		);
	}
};

export const EqualColumns: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props} columns={8} hasEqualColumns>
				<Grid.Box bg="lightblue">Box 1</Grid.Box>
				<Grid.Box bg="lightblue">Box 2</Grid.Box>
				<Grid.Box bg="lightblue">Box 3</Grid.Box>
				<Grid.Box bg="lightblue">Box 4. I am bigger</Grid.Box>
				<Grid.Box bg="lightblue">Box 5</Grid.Box>
				<Grid.Box bg="lightblue">Box 6</Grid.Box>
				<Grid.Box bg="lightblue">Box 7</Grid.Box>
				<Grid.Box bg="lightblue">Box 8</Grid.Box>
				<Grid.Box bg="lightblue">Box 9</Grid.Box>
				<Grid.Box bg="lightblue">Box 10</Grid.Box>
				<Grid.Box bg="lightblue">Box 11</Grid.Box>
				<Grid.Box bg="lightblue">Box 12</Grid.Box>
			</Grid>
		);
	}
};

export const NotEqualColumns: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props} columns={8} hasEqualColumns={false}>
				<Grid.Box bg="lightblue">Box 1</Grid.Box>
				<Grid.Box bg="lightblue">Box 2</Grid.Box>
				<Grid.Box bg="lightblue">Box 3</Grid.Box>
				<Grid.Box bg="lightblue">Box 4. I am bigger</Grid.Box>
				<Grid.Box bg="lightblue">Box 5</Grid.Box>
				<Grid.Box bg="lightblue">Box 6</Grid.Box>
				<Grid.Box bg="lightblue">Box 7</Grid.Box>
				<Grid.Box bg="lightblue">Box 8</Grid.Box>
				<Grid.Box bg="lightblue">Box 9</Grid.Box>
				<Grid.Box bg="lightblue">Box 10</Grid.Box>
				<Grid.Box bg="lightblue">Box 11</Grid.Box>
				<Grid.Box bg="lightblue">Box 12</Grid.Box>
			</Grid>
		);
	}
};

export const CustomGaps: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props} columns={8} columnGap={50} rowGap={70}>
				<Grid.Box bg="lightblue">Box 1</Grid.Box>
				<Grid.Box bg="lightblue">Box 2</Grid.Box>
				<Grid.Box bg="lightblue">Box 3</Grid.Box>
				<Grid.Box bg="lightblue">Box 4</Grid.Box>
				<Grid.Box bg="lightblue">Box 5</Grid.Box>
				<Grid.Box bg="lightblue">Box 6</Grid.Box>
				<Grid.Box bg="lightblue">Box 7</Grid.Box>
				<Grid.Box bg="lightblue">Box 8</Grid.Box>
				<Grid.Box bg="lightblue">Box 9</Grid.Box>
				<Grid.Box bg="lightblue">Box 10</Grid.Box>
				<Grid.Box bg="lightblue">Box 11</Grid.Box>
				<Grid.Box bg="lightblue">Box 12</Grid.Box>
			</Grid>
		);
	}
};

export const WithCssProperties: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid gridTemplateColumns="100px 200px 100px 200px" {...props}>
				<Grid.Box bg="lightblue">Box 1</Grid.Box>
				<Grid.Box bg="lightblue">Box 2</Grid.Box>
				<Grid.Box bg="lightblue">Box 3</Grid.Box>
				<Grid.Box bg="lightblue">Box 4</Grid.Box>
				<Grid.Box bg="lightblue">Box 5</Grid.Box>
				<Grid.Box bg="lightblue">Box 6</Grid.Box>
				<Grid.Box bg="lightblue">Box 7</Grid.Box>
				<Grid.Box bg="lightblue">Box 8</Grid.Box>
				<Grid.Box bg="lightblue">Box 9</Grid.Box>
				<Grid.Box bg="lightblue">Box 10</Grid.Box>
				<Grid.Box bg="lightblue">Box 11</Grid.Box>
				<Grid.Box bg="lightblue">Box 12</Grid.Box>
			</Grid>
		);
	}
};

export const BoxColumns: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props}>
				<Grid.Box bg="lightblue" columns={8}>
					Box 1 with 8 columns
				</Grid.Box>
				<Grid.Box bg="lightgreen" columns={4}>
					Box 2 with 4 columns
				</Grid.Box>
			</Grid>
		);
	}
};

export const BoxInitialColumn: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props}>
				<Grid.Box bg="lightblue" columns={8} initialColumn={5}>
					Box 1 with 8 columns at top right
				</Grid.Box>
				<Grid.Box bg="lightgreen" columns={4}>
					Box 2 with 4 columns at bottom left
				</Grid.Box>
				<Grid.Box bg="lightgreen" columns={4} initialColumn={9}>
					Box 3 with 4 columns at bottom right
				</Grid.Box>
			</Grid>
		);
	}
};

export const BoxInitialRow: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props}>
				<Grid.Box bg="lightblue" columns={8} initialRow={1} rows={8}>
					Box 1 with 8 rows
				</Grid.Box>
				<Grid.Box bg="lightgreen" columns={4} initialRow={3} rows={4}>
					Box 2 with 4 rows starting from row 3
				</Grid.Box>
				<Grid.Box bg="lightgreen" columns={12}>
					I do not care in which row I am
				</Grid.Box>
			</Grid>
		);
	}
};

export const BoxColumnsResponsive: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props}>
				<Grid.Box bg="lightblue" columns={{ xs: 12, md: 8 }}>
					Box 1 with 8 columns in desktop and full width in mobile
				</Grid.Box>
				<Grid.Box bg="lightgreen" columns={{ xs: 12, md: 4 }}>
					Box 2 with 4 columns in desktop and full width in mobile
				</Grid.Box>
			</Grid>
		);
	}
};

export const Row: Story = {
	parameters: {
		controls: { disable: true }
	},
	render: props => {
		return (
			<Grid {...props}>
				<Grid.Row bg="lightblue">Row 1</Grid.Row>
				<Grid.Row bg="mediumpurple">Row 2</Grid.Row>
				<Grid.Row bg="lightgreen">Row 3</Grid.Row>
			</Grid>
		);
	}
};
