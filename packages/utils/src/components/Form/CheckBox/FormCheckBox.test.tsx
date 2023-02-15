import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';

import Form from 'utils/components/Form';
import { withTheme } from 'utils/private/utils/tests';

import FormCheckBox from '.';

const mockOnSubmit = jest.fn();

const getComponent = (defaultValues = { enabled: false }) => {
	return render(
		withTheme(
			<Form
				onSubmit={mockOnSubmit}
				defaultValues={defaultValues}
				validationSchema={Yup.object({
					enabled: Yup.boolean().required()
				})}
			>
				<FormCheckBox label="Toggle it" name="enabled" />
				<button type="submit">Submit</button>
			</Form>
		)
	);
};

describe('FormCheckBox', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render checkbox', () => {
		const { baseElement } = getComponent();

		expect(baseElement.querySelector('input[name="enabled"]')).toBeInTheDocument();
	});

	it('should submit with toggled value', async () => {
		const { baseElement } = getComponent();

		userEvent.click(baseElement.querySelector('input[name="enabled"]')!);
		userEvent.click(screen.getByText('Submit'));

		await waitFor(() =>
			expect(mockOnSubmit).toHaveBeenCalledWith({ enabled: true }, expect.anything(), expect.anything())
		);
	});

	it('should submit with toggled value and default true value', async () => {
		const { baseElement } = getComponent({ enabled: true });

		userEvent.click(baseElement.querySelector('input[name="enabled"]')!);
		userEvent.click(screen.getByText('Submit'));

		await waitFor(() =>
			expect(mockOnSubmit).toHaveBeenCalledWith({ enabled: false }, expect.anything(), expect.anything())
		);
	});
});
