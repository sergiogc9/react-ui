import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';
import { TextFieldProps } from '@sergiogc9/react-ui';

import Form from 'utils/components/Form';
import { withTheme } from 'utils/private/utils/tests';

import FormTextField from '.';
import { FormTextFieldProps } from './types';

let onSubmitMock = jest.fn();

const getTextFieldComponent = (type: FormTextFieldProps['type'], props: Partial<TextFieldProps>) => {
	if (type === 'date') return <FormTextField label="Datepicker" name="datepicker" type="date" {...props} />;
	if (type === 'number') return <FormTextField label="Age" name="age" type="number" {...props} />;

	return <FormTextField label="Email" name="email" {...props} />;
};

const getComponent = (
	defaultValues = { age: 20, email: '', date: new Date() },
	type: FormTextFieldProps['type'] = 'email',
	props: Partial<TextFieldProps> = {}
) => {
	return render(
		withTheme(
			<Form
				defaultValues={defaultValues}
				onSubmit={onSubmitMock}
				validationSchema={Yup.object({
					age: Yup.number().required(),
					email: Yup.string().email('Should be an email').required(),
					date: Yup.date().required()
				})}
			>
				{getTextFieldComponent(type, props)}
				<button type="submit">Submit</button>
			</Form>
		)
	);
};

describe('FormTextField', () => {
	afterEach(cleanup);

	beforeEach(() => {
		onSubmitMock = jest.fn();
		jest.resetAllMocks();
	});

	it('should render inputs', () => {
		const { baseElement } = getComponent();

		expect(baseElement.querySelector('input[name="email"]')).toBeInTheDocument();
	});

	it('should render error if wrong email and touched', async () => {
		const { container } = getComponent();

		const email = container.querySelector('input[name="email"]')!;
		userEvent.type(email, 'wrong');
		fireEvent.blur(email);

		await waitFor(() => expect(screen.getByText('Should be an email')).toBeInTheDocument());
	});

	it('should not render error if not touched', () => {
		const { queryByText } = getComponent({ age: 20, email: 'wrong-mail', date: new Date() });

		expect(queryByText('Should be an email')).toBe(null);
	});

	it('should remove value when clicking on the datepicker remove button', async () => {
		const { container } = getComponent({ age: 20, email: 'fake@email.com', date: new Date(2021, 4, 3) }, 'date', {
			hasRemoveButton: true
		});

		userEvent.click(screen.getByTestId('textfield__remove-button'));

		await waitFor(() => expect(container.querySelector('input[value=""]')).toBeInTheDocument());
	});

	it('should render error if wrong email after submit', async () => {
		getComponent({ age: 20, email: 'wrong-email', date: new Date() });

		fireEvent.click(screen.getByText('Submit'));

		await waitFor(() => expect(screen.getByText('Should be an email')).toBeInTheDocument());
	});

	it('should render numeric textfield', async () => {
		const { container } = getComponent(undefined, 'number');

		const input = container.querySelector('input')!;

		expect(input).toHaveValue('20');

		userEvent.type(input, '0');

		expect(input).toHaveValue('200');

		userEvent.clear(input);

		expect(input).toHaveAttribute('value', '');
	});

	it('should render the textfield as disabled when submitting', async () => {
		const { container } = getComponent({ age: 20, email: 'valid@email.com', date: new Date() });

		const input = container.querySelector('input')!;

		fireEvent.click(screen.getByText('Submit'));

		expect(input).toBeDisabled();
	});
});
