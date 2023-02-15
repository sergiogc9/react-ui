const mockGoogleMapsAPI = (mockOnGetPlacePredictions: jest.Mock, mockOnGeoCode: jest.Mock) => {
	const google = {
		maps: {
			places: {
				AutocompleteService: jest.fn(() => ({
					getPlacePredictions: mockOnGetPlacePredictions
				}))
			},
			Geocoder: jest.fn(() => ({
				geocode: mockOnGeoCode
			}))
		}
	};
	(global.window as any).google = google;

	mockOnGetPlacePredictions.mockResolvedValue({
		predictions: [{ place_id: '123456', description: 'Girona, Montilivi' }]
	});
	mockOnGeoCode.mockResolvedValue({
		results: [{ geometry: { location: { lat: () => 10, lng: () => 20 } } }]
	});
};

export { mockGoogleMapsAPI };
