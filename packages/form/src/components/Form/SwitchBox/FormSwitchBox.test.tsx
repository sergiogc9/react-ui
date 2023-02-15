import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';

import Form from 'form/components/Form';
import { withTheme } from 'form/private/utils/tests';

import FormSwitchBox from '.';

const mockOnFormSubmit = jest.fn();

const switchBoxTestId = 'switchBoxTestId';

const getComponent = (defaultValues = { isCheckedTest: false }) => {
	return render(
		withTheme(
			<Form
				defaultValues={defaultValues}
				onSubmit={mockOnFormSubmit}
				validationSchema={Yup.object({
					isCheckedTest: Yup.boolean().required()
				})}
			>
				<FormSwitchBox data-testid={switchBoxTestId} name="isCheckedTest" />
				<Form.ButtonSubmit>Submit</Form.ButtonSubmit>
			</Form>
		)
	);
};

describe('FormSwitchBox', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render switchbox', () => {
		getComponent();

		const switchTest = screen.getByTestId(switchBoxTestId);

		expect(switchTest.querySelector(`div`)).toBeInTheDocument();
	});

	it('should submit after switch pressed', async () => {
		getComponent();

		userEvent.click(screen.getByTestId('switchBox-switch'));

		await waitFor(() => expect(screen.getByText('Submit').closest('button')).toBeEnabled());

		userEvent.click(screen.getByText('Submit'));

		await waitFor(() =>
			expect(mockOnFormSubmit).toHaveBeenCalledWith({ isCheckedTest: true }, expect.anything(), expect.anything())
		);
	});

	it('should show submit disabled without switch pressed', () => {
		getComponent();

		expect(screen.getByText('Submit').closest('button')).toBeDisabled();
	});
});
