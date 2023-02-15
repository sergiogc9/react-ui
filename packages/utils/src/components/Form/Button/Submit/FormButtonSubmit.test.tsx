import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';

import Form from 'utils/components/Form';
import { withTheme } from 'utils/private/utils/tests';

import FormButtonSubmit from '.';
import { FormButtonSubmitProps } from './types';

const defaultValues = { email: 'test@fake.com' };

const onSubmitMock = jest.fn();

const renderComponent = (props: Partial<FormButtonSubmitProps> = { isDefaultEnabled: false }) => {
	const { isDefaultEnabled } = props;
	return render(
		withTheme(
			<Form
				onSubmit={onSubmitMock}
				defaultValues={defaultValues}
				validationSchema={Yup.object({
					email: Yup.string().email('Should be an email').required()
				})}
			>
				<Form.TextField label="Email" name="email" />
				<FormButtonSubmit isDefaultEnabled={isDefaultEnabled}>Submit</FormButtonSubmit>
			</Form>
		)
	);
};

describe('FormButtonSubmit', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should be disabled at mount time', () => {
		renderComponent();

		fireEvent.click(screen.getByText('Submit'));
		expect(screen.queryAllByText('button[disabled]')).toBeTruthy();

		expect(onSubmitMock).toHaveBeenCalledTimes(0);
	});

	it('should be enabled at mount time when the isDefaultSelect prop is true', () => {
		renderComponent({ isDefaultEnabled: true });

		expect(screen.getByText('Submit')).toBeEnabled();
	});

	it('should be enabled after touching an input', async () => {
		renderComponent();

		const email = screen.getByText('Email');
		fireEvent.click(email);

		expect(screen.getByText('Submit')).toBeEnabled();
	});

	it('should be disabled if some input is wrong', async () => {
		renderComponent();

		const email = screen.getByText('Email');
		userEvent.type(email, 'wrong');
		fireEvent.blur(email);
		fireEvent.click(screen.getByText('Submit'));

		await waitFor(() => expect(screen.queryAllByText('button[disabled]')).toBeTruthy());
		expect(onSubmitMock).toHaveBeenCalledTimes(0);
	});
});
