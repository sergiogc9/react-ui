import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as Yup from 'yup';

import Form from 'utils/components/Form';
import { withTheme } from 'utils/private/utils/tests';

import FormTextArea from '.';

const textAreaTestId = 'AwesomeTextArea';

let onSubmitMock = jest.fn();
describe('FormTextArea', () => {
	const getComponent = (defaultValues = { textarea: '' }) => {
		return render(
			withTheme(
				<Form
					onSubmit={onSubmitMock}
					defaultValues={defaultValues}
					validationSchema={Yup.object({
						textarea: Yup.string().required('Awesome textarea error')
					})}
				>
					<FormTextArea data-testid={textAreaTestId} label="TextArea" name="textarea" />
					<button type="submit">Submit</button>
				</Form>
			)
		);
	};

	beforeEach(() => {
		onSubmitMock = jest.fn();
	});

	it('should render textarea', () => {
		getComponent();

		const textAreaTest = screen.getByTestId(textAreaTestId);
		const textarea = textAreaTest.querySelector('textarea[label="TextArea"]')!;

		expect(textarea).toBeInTheDocument();
	});

	it('should not render error if not touched', () => {
		getComponent({ textarea: 'wrong-textarea' });

		expect(screen.queryByText('Awesome textarea error')).toBe(null);
	});

	it('should render error if empty textarea', async () => {
		getComponent({ textarea: '' });

		fireEvent.click(screen.getByText('Submit'));

		await waitFor(() => expect(screen.getByText('Awesome textarea error')).toBeInTheDocument());
	});

	it('should render the textarea as disabled when submitting', async () => {
		getComponent({ textarea: 'Awesome' });

		const textAreaWrapper = screen.getByTestId(textAreaTestId);
		const textarea = textAreaWrapper.querySelector('textarea[label="TextArea"]')!;

		fireEvent.click(screen.getByText('Submit'));

		expect(textarea).toBeDisabled();
	});
});
