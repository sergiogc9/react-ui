import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockGoogleMapsAPI, withTheme } from 'components/private/utils/tests';

import GoogleMapsAutocomplete from './GoogleMapsAutocomplete';
import { GoogleMapsAutocompleteProps, GoogleMapsPlace } from './types';

const googleMapsAutocompleteTestId = 'GoogleMapsAutocomplete';

const place: GoogleMapsPlace = {
	longitude: 10,
	latitude: 20,
	name: 'Awesome place',
	placeComponents: {},
	placeId: 'fake-id'
};

const mockOnGetPlacePredictions = jest.fn();
const mockOnGeoCode = jest.fn();
const mockOnPlaceChange = jest.fn();

const renderComponent = (props: Partial<GoogleMapsAutocompleteProps> = {}) => {
	return render(
		withTheme(
			<GoogleMapsAutocomplete
				data-testid={googleMapsAutocompleteTestId}
				defaultPlace={place}
				onPlaceChange={mockOnPlaceChange}
				{...props}
			/>
		)
	);
};

jest.useFakeTimers('modern');

describe('GoogleMapsAutocomplete component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.clearAllMocks();
		mockGoogleMapsAPI(mockOnGetPlacePredictions, mockOnGeoCode);
	});

	it('should render default value', () => {
		renderComponent();

		expect(screen.getByDisplayValue(place.name)).toBeInTheDocument();
	});

	it('should not show "no results" text when clearing input', async () => {
		renderComponent();

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);

		jest.runAllTimers();

		expect(screen.queryByText('No results')).toBeNull();
	});

	it('should fetch options from google maps and show the results', async () => {
		renderComponent();

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() => expect(screen.getByText('Girona')).toBeInTheDocument());
		expect(mockOnGetPlacePredictions).toHaveBeenCalledWith({ input: 'Girona' });
	});

	it('should fetch options only with regions', async () => {
		renderComponent({ onlyRegions: true });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() =>
			expect(mockOnGetPlacePredictions).toHaveBeenCalledWith({
				input: 'Girona',
				types: ['(regions)']
			})
		);
	});

	it('should fetch options only with countries', async () => {
		renderComponent({ countries: ['es', 'pt'] });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() =>
			expect(mockOnGetPlacePredictions).toHaveBeenCalledWith({
				input: 'Girona',
				componentRestrictions: { country: ['es', 'pt'] }
			})
		);
	});

	it('should fetch options from google maps and show the results more than once', async () => {
		mockOnGetPlacePredictions.mockResolvedValue({
			predictions: [{ description: 'Girona, Montilivi', place_id: '987654' }]
		});
		renderComponent();

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() =>
			expect(mockOnGetPlacePredictions).toHaveBeenCalledWith({
				input: 'Girona'
			})
		);
		await waitFor(() => expect(screen.getByText(', Montilivi')).toBeInTheDocument());

		mockOnGetPlacePredictions.mockResolvedValue({
			predictions: [{ description: 'Girona, Montjuic', place_id: '3242234' }]
		});

		userEvent.clear(input);
		userEvent.type(input, 'Montjuic');

		jest.runAllTimers();

		await waitFor(() =>
			expect(mockOnGetPlacePredictions).toHaveBeenCalledWith({
				input: 'Montjuic'
			})
		);
	}, 20000);

	it('should call onPlaceChange with fetched data without some placeComponents', async () => {
		mockOnGeoCode.mockResolvedValue({
			results: [
				{
					address_components: [
						{
							long_name: 'Awesome place',
							short_name: 'AWS',
							types: ['locality', 'political']
						},
						{
							long_name: 'Awesome Country',
							short_name: 'AW',
							types: ['country', 'political']
						}
					],
					geometry: { location: { lat: () => 10, lng: () => 20 } }
				}
			]
		});
		renderComponent();

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() => expect(screen.getByText(', Montilivi')).toBeInTheDocument());
		fireEvent.click(screen.getByText(', Montilivi'));

		await waitFor(() =>
			expect(mockOnPlaceChange).toHaveBeenCalledWith({
				latitude: 10,
				longitude: 20,
				name: 'Girona, Montilivi',
				placeComponents: {
					country: 'Awesome Country',
					locality: 'Awesome place'
				},
				placeId: '123456'
			})
		);
	});

	it('should call onPlaceChange with null if input is cleared', async () => {
		renderComponent({ hasRemoveButton: true });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() => expect(screen.getByText(', Montilivi')).toBeInTheDocument());
		userEvent.click(screen.getByText(', Montilivi'));

		userEvent.click(screen.getByTestId('textfield__remove-button'));

		await waitFor(() => expect(mockOnPlaceChange).toHaveBeenCalledWith(null));
	});

	it('should not call onPlaceChange if not passed', async () => {
		renderComponent({ onPlaceChange: undefined });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() => expect(screen.getByText(', Montilivi')).toBeInTheDocument());
		userEvent.click(screen.getByText(', Montilivi'));

		expect(mockOnPlaceChange).toHaveBeenCalledTimes(0);
	});

	it('should call onBlur when blurred', async () => {
		const mockOnBlur = jest.fn();
		renderComponent({ onBlur: mockOnBlur });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		await waitFor(() => {
			userEvent.click(document.body);
			jest.runAllTimers();
		});

		expect(mockOnBlur).toHaveBeenCalled();
	});

	it('should set options equal to empty after blurred if no default value', async () => {
		renderComponent({ defaultPlace: undefined });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		await waitFor(() => {
			jest.runAllTimers();
			userEvent.click(document.body);
		});

		await waitFor(() => {
			jest.runAllTimers();
			userEvent.click(input);
		});

		expect(screen.queryByRole('option')).not.toBeInTheDocument();
	});

	it('should call on api error if prediction google api fails', async () => {
		mockOnGetPlacePredictions.mockRejectedValueOnce({});
		const mockOnApiError = jest.fn();
		renderComponent({ onApiError: mockOnApiError });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() => expect(mockOnApiError).toHaveBeenCalled());
	});

	it('should call on api error if geocoder google api fails', async () => {
		mockOnGeoCode.mockRejectedValueOnce({});
		const mockOnApiError = jest.fn();
		renderComponent({ onApiError: mockOnApiError });

		const input = screen.getByTestId('select-field').querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'Girona');

		jest.runAllTimers();

		await waitFor(() => expect(screen.getByText(', Montilivi')).toBeInTheDocument());
		fireEvent.click(screen.getByText(', Montilivi'));

		await waitFor(() => expect(mockOnApiError).toHaveBeenCalled());
	});
});
