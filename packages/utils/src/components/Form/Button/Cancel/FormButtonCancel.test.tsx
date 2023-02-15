import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as Yup from 'yup';

import Form from 'utils/components/Form';
import { withTheme } from 'utils/private/utils/tests';

import FormButtonCancel from '.';

const defaultValues = { email: 'test@fake.com' };

const mockOnClick = jest.fn();

const renderComponent = () => {
	return render(
		withTheme(
			<Form
				defaultValues={defaultValues}
				validationSchema={Yup.object({
					email: Yup.string().email('Should be an email').required()
				})}
			>
				<Form.TextField label="Email" name="email" />
				<FormButtonCancel onClick={mockOnClick}>Cancel</FormButtonCancel>
			</Form>
		)
	);
};

describe('FormButtonCancel', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should handle click', () => {
		renderComponent();

		fireEvent.click(screen.getByText('Cancel'));

		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
