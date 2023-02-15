import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';
import { Button } from '@sergiogc9/react-ui';

import { withTheme } from 'utils/private/utils/tests';

import Form from '.';
import { FormProps } from './types';

const defaultValues = {
	name: ''
};

const validationSchema = Yup.object({
	name: Yup.string().required('Required')
});

const onChangeMock = jest.fn();
const onValidChangeMock = jest.fn();
const onSubmitMock = jest.fn();
const onSubmitErrorMock = jest.fn();
const onDirtyChangeMock = jest.fn();

const getComponent = (props: Partial<FormProps> = {}) => {
	return render(
		withTheme(
			<Form
				defaultValues={defaultValues}
				onChange={onChangeMock}
				onDirtyChange={onDirtyChangeMock}
				onSubmit={onSubmitMock}
				onSubmitError={onSubmitErrorMock}
				onValidChange={onValidChangeMock}
				validationSchema={validationSchema}
				{...props}
			>
				<Form.TextField name="name" placeholder="name" />
				<Form.ButtonSubmit>Submit</Form.ButtonSubmit>
				<Button type="submit">Submit always enabled</Button>
			</Form>
		)
	);
};

describe('Form', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render form', () => {
		getComponent();

		expect(screen.getByText('Submit')).toBeInTheDocument();
	});

	it('should not call on change handlers at mount', () => {
		getComponent();

		expect(onChangeMock).toHaveBeenCalledTimes(0);
		expect(onValidChangeMock).toHaveBeenCalledTimes(0);
	});

	it('should not call on dirty change handlers at mount', () => {
		getComponent();

		expect(onDirtyChangeMock).toHaveBeenCalledTimes(0);
	});

	it('should call change and valid handlers', async () => {
		const { container } = getComponent();

		const input = container.querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'nice');
		fireEvent.blur(input);

		await waitFor(() => expect(onChangeMock).toHaveBeenCalledWith({ name: 'nice' }));
		expect(onValidChangeMock).toHaveBeenCalledWith(true, {});

		userEvent.clear(input);
		fireEvent.blur(input);

		await waitFor(() =>
			expect(
				expect(onValidChangeMock).toHaveBeenCalledWith(
					false,
					expect.objectContaining({ name: expect.objectContaining({ message: 'Required' }) })
				)
			)
		);
	});

	it('should call onDirtyChange handlers when form is edited', async () => {
		const { container } = getComponent();

		const input = container.querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'nice');
		fireEvent.blur(input);

		await waitFor(() => expect(onChangeMock).toHaveBeenCalledWith({ name: 'nice' }));
		expect(onDirtyChangeMock).toHaveBeenCalledWith(true);
	});

	it('should call onDirtyChange handlers when form have the initial state', async () => {
		const { container } = getComponent();

		const input = container.querySelector('input')!;
		userEvent.type(input, 'nice');
		userEvent.clear(input);

		fireEvent.blur(input);

		await waitFor(() => expect(onChangeMock).toHaveBeenCalledWith({ name: 'nice' }));
		expect(onDirtyChangeMock).toHaveBeenCalledWith(false);
	});

	it('should call on submit function when form is submitted', async () => {
		const { container } = getComponent();

		const input = container.querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'go@name.com');
		fireEvent.blur(input);

		await waitFor(() => expect(screen.getByText('Submit').closest('button')).toBeEnabled());

		fireEvent.click(screen.getByText('Submit'));

		await waitFor(() => expect(onSubmitMock).toHaveBeenCalledTimes(1));
	});

	it('should call on submit error function when form is submitted with errors', async () => {
		getComponent();

		fireEvent.click(screen.getByText('Submit always enabled'));

		await waitFor(() => expect(onSubmitErrorMock).toHaveBeenCalledTimes(1));
		expect(onSubmitErrorMock).toHaveBeenCalledWith(
			{ name: expect.objectContaining({ message: 'Required' }) },
			expect.anything(),
			expect.anything()
		);
	});

	it('should not call on submit error function when form is submitted with errors if not provided', () => {
		getComponent({ onSubmitError: undefined });

		fireEvent.click(screen.getByText('Submit always enabled'));

		expect(onSubmitErrorMock).toHaveBeenCalledTimes(0);
	});

	it('should set errors from outside in on submit', async () => {
		const { container } = getComponent();

		onSubmitMock.mockImplementationOnce((values: any, helpers: any) => {
			helpers.setErrors({ name: 'Wrong name' });
		});

		const input = container.querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'go@name.com');
		fireEvent.blur(input);

		await waitFor(() => expect(screen.getByText('Submit').closest('button')).toBeEnabled());

		fireEvent.click(screen.getByText('Submit'));

		await waitFor(() => expect(screen.getByText('Wrong name')).toBeInTheDocument());
	});

	it('should not call handlers function when form is submitted if prop not passed', async () => {
		const { container } = getComponent({ onChange: undefined, onValidChange: undefined, onSubmit: undefined });

		const input = container.querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'go@name.com');
		fireEvent.blur(input);

		await waitFor(() => expect(screen.getByText('Submit').closest('button')).toBeEnabled());

		fireEvent.click(screen.getByText('Submit'));
		userEvent.clear(input);

		expect(onChangeMock).toHaveBeenCalledTimes(0);
		expect(onValidChangeMock).toHaveBeenCalledTimes(0);
		expect(onSubmitMock).toHaveBeenCalledTimes(0);
	});
});
