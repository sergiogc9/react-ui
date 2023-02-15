import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';
import { Select, SelectProps } from '@sergiogc9/react-ui';

import Form from 'utils/components/Form';
import { withTheme } from 'utils/private/utils/tests';

import FormSelect from '.';

const mockOnSubmit = jest.fn();
const mockOnBlur = jest.fn();

type FormValues = {
	language: 'en' | 'es';
};

const getComponent = (
	defaultValues: Partial<FormValues> = { language: 'en' },
	validationSchema: any = Yup.object({
		language: Yup.string().oneOf(['en', 'es'], 'Incorrect language').required('Required')
	}),
	selectProps: Partial<SelectProps> = {}
) => {
	return render(
		withTheme(
			<Form onSubmit={mockOnSubmit} defaultValues={defaultValues as any} validationSchema={validationSchema}>
				<FormSelect id="testId" label="Language" name="language" onBlur={mockOnBlur} {...selectProps}>
					<Select.Option id="es">Spanish</Select.Option>
					<Select.Option id="en">English</Select.Option>
					<Select.Option id="fake">Incorrect</Select.Option>
				</FormSelect>
				<button type="submit">Submit</button>
			</Form>
		)
	);
};

describe('FormSelect', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render input', () => {
		getComponent();

		expect(screen.getByDisplayValue('English')).toBeInTheDocument();
	});

	it('should render change selected to value', async () => {
		getComponent();

		expect(screen.queryByText('Spanish')).toBeNull();
		userEvent.click(screen.getByDisplayValue('English'));

		await waitFor(() => expect(screen.getByText('Incorrect')).toBeInTheDocument());
		userEvent.click(screen.getByText('Incorrect'));

		expect(screen.queryByText('Incorrect language')).toBe(null);
	});

	it('should render error if wrong value set to dropdown', async () => {
		getComponent();

		userEvent.click(screen.getByDisplayValue('English'));

		await waitFor(() => expect(screen.getByText('English')).toBeInTheDocument());

		await waitFor(() => expect(screen.getByText('Incorrect')).toBeInTheDocument());
		userEvent.click(screen.getByText('Incorrect'));

		fireEvent.click(screen.getByText('Submit'));
		await waitFor(() => expect(screen.getByText('Incorrect language')).toBeInTheDocument());
	});

	it('should render error if form is submitted', async () => {
		getComponent({ language: undefined });

		userEvent.click(screen.getByText('Submit'));

		await waitFor(() => expect(screen.getByText('Required')).toBeInTheDocument());
	});

	it('should handle a unique value with single select', async () => {
		getComponent();

		userEvent.click(screen.getByDisplayValue('English'));
		await waitFor(() => expect(screen.getByText('Spanish')).toBeInTheDocument());
		userEvent.click(screen.getByText('Spanish'));
		fireEvent.click(screen.getByText('Submit'));

		await waitFor(() =>
			expect(mockOnSubmit).toHaveBeenCalledWith({ language: 'es' }, expect.anything(), expect.anything())
		);
	});

	it('should handle a multiple value with multi select', async () => {
		getComponent(
			{ language: ['en'] as any },
			Yup.object({
				language: Yup.array().required()
			}),
			{ isMultiSelect: true }
		);

		userEvent.click(screen.getByDisplayValue('English'));
		await waitFor(() => expect(screen.getByText('English')).toBeInTheDocument());
		userEvent.click(screen.getByText('English'));
		userEvent.click(screen.getByText('Spanish'));
		userEvent.click(screen.getByText('English'));
		fireEvent.click(screen.getByText('Submit'));

		await waitFor(() =>
			expect(mockOnSubmit).toHaveBeenCalledWith({ language: ['es', 'en'] }, expect.anything(), expect.anything())
		);
	});

	it('should render the select as disabled when submitting', async () => {
		const { container } = getComponent();

		const input = container.querySelector('input')!;

		fireEvent.click(screen.getByText('Submit'));

		expect(input).toBeDisabled();
	});
});
