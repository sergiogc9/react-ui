import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Grid from 'components/Grid';
import Select from 'components/Select';
import TextField from 'components/TextField';
import Toasts, { ToastOptions, useToasts } from 'components/Toasts';

import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Toasts>;

const meta: Meta<typeof Toasts> = {
	title: 'Components/Toasts',
	component: Toasts,
	argTypes: getExcludedArgTypes()
};

export default meta;

const ToastsLauncher = () => {
	const { addToast } = useToasts();

	const [newToast, dispatch] = React.useReducer(
		(currentToast: ToastOptions, action: any) => ({
			...currentToast,
			actionContent: action.type === 'changeActionContent' ? action.payload : currentToast.actionContent,
			aspectSize: action.type === 'changeAspectSize' ? action.payload : currentToast.aspectSize,
			duration: action.type === 'changeTimeout' ? action.payload : currentToast.duration,
			hasCloseBtn: action.type === 'changeCloseBtn' ? action.payload : currentToast.hasCloseBtn,
			hasIcon: action.type === 'changeIcon' ? action.payload : currentToast.hasIcon,
			message: action.type === 'changeMessage' ? action.payload : currentToast.message,
			status: action.type === 'changeStatus' ? action.payload : currentToast.status
		}),
		{
			actionContent: undefined,
			aspectSize: 'm',
			duration: 3000,
			key: 'fake',
			hasCloseBtn: false,
			hasIcon: true,
			message: 'Awesome toast!',
			status: 'info'
		}
	);

	const onAddBtnClicked = React.useCallback(() => {
		addToast({
			...newToast,
			key: new Date().getTime().toString()
		});
	}, [addToast, newToast]);

	return (
		<Grid rowGap={2}>
			<Grid.Row>
				<Select
					defaultValue={newToast.aspectSize}
					label="aspectSize"
					onOptionChange={aspectSize => {
						dispatch({ type: 'changeAspectSize', payload: aspectSize });
					}}
				>
					<Select.Option id="s">small (s)</Select.Option>
					<Select.Option id="m">medium (m)</Select.Option>
				</Select>
			</Grid.Row>
			<Grid.Row>
				<Select
					defaultValue={newToast.status}
					label="Status"
					onOptionChange={status => {
						dispatch({ type: 'changeStatus', payload: status });
					}}
				>
					<Select.Option id="error">error</Select.Option>
					<Select.Option id="info">info</Select.Option>
					<Select.Option id="success">success</Select.Option>
					<Select.Option id="warning">warning</Select.Option>
				</Select>
			</Grid.Row>
			<Grid.Row>
				<TextField
					defaultValue={newToast.message}
					label="Message"
					onChange={ev => {
						dispatch({
							type: 'changeMessage',
							payload: ev.currentTarget.value
						});
					}}
				/>
			</Grid.Row>
			<Grid.Row>
				<TextField
					label="Timeout"
					isDisabled={newToast.duration === 'always'}
					onChange={ev => {
						dispatch({
							type: 'changeTimeout',
							payload: ev.currentTarget.value
						});
					}}
					type="number"
					value={newToast.duration}
				/>
			</Grid.Row>
			<Grid.Row>
				<CheckBox
					label="Persisted toast"
					onChange={ev => {
						dispatch({
							type: 'changeTimeout',
							payload: ev.currentTarget.checked ? 'always' : 3000
						});
					}}
				/>
			</Grid.Row>
			<Grid.Row>
				<CheckBox
					isDefaultSelected
					label="With icon"
					onChange={ev => {
						dispatch({
							type: 'changeIcon',
							payload: ev.currentTarget.checked
						});
					}}
				/>
			</Grid.Row>
			<Grid.Row>
				<CheckBox
					label="With close button"
					onChange={ev => {
						dispatch({
							type: 'changeCloseBtn',
							payload: ev.currentTarget.checked
						});
					}}
				/>
			</Grid.Row>
			<Grid.Row>
				<CheckBox
					label="With action content"
					onChange={ev => {
						dispatch({
							type: 'changeActionContent',
							payload: ev.currentTarget.checked ? (
								<Button aspectSize="s" bg="transparent" color="currentColor" variant="subtle">
									Reload
								</Button>
							) : undefined
						});
					}}
				/>
			</Grid.Row>
			<Grid.Row>
				<Button onClick={onAddBtnClicked} variant="primary" width="100%">
					Add toast
				</Button>
			</Grid.Row>
		</Grid>
	);
};

export const Playground: Story = {
	render: args => {
		return (
			<Toasts {...args}>
				<ToastsLauncher />
			</Toasts>
		);
	}
};
