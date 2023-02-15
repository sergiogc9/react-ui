import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';
import { GoogleMapsPlace } from '@sergiogc9/react-ui';

import Form from 'utils/components/Form';
import { mockGoogleMapsAPI, withTheme } from 'utils/private/utils/tests';

import FormGoogleMapsAutocomplete from '.';
import { FormGoogleMapsAutocompleteProps } from './types';

const onSubmitMock = jest.fn();
const mockOnGetPlacePredictions = jest.fn();
const mockOnGeoCode = jest.fn();

jest.useFakeTimers('modern');

const getComponent = (
	defaultValues?: { location: GoogleMapsPlace },
	props: Partial<FormGoogleMapsAutocompleteProps> = {}
) => {
	const defaultLocation: GoogleMapsPlace = {
		placeId: 'fake-id',
		longitude: 10,
		latitude: 20,
		name: 'Awesome place',
		placeComponents: { country: 'testCountry' }
	};

	return render(
		withTheme(
			<Form
				onSubmit={onSubmitMock}
				defaultValues={defaultValues ?? { location: defaultLocation }}
				validationSchema={Yup.object({
					location: Yup.object<GoogleMapsPlace>().required('Required')
				})}
			>
				<FormGoogleMapsAutocomplete label="Location" name="location" {...props} />
				<button type="submit">Submit</button>
			</Form>
		)
	);
};

describe('FormGoogleMapsAutocomplete', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		mockGoogleMapsAPI(mockOnGetPlacePredictions, mockOnGeoCode);
	});

	it('should render input', () => {
		getComponent();

		expect(screen.getByDisplayValue('Awesome place')).toBeInTheDocument();
	});

	it('should render error if form is submitted', async () => {
		getComponent({ location: undefined } as any);

		userEvent.click(screen.getByText('Submit'));

		await waitFor(() => expect(screen.getByText('Required')).toBeInTheDocument());
	});
});
