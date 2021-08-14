import React from 'react';
import { useClickOutside, useMergeRefs } from '@sergiogc9/react-hooks';

import Box from 'components/Box';

// Mocking popover component to drastically reduce test execution timing
const getPopoverContentMock = () => ({
	Content: React.forwardRef(({ children, isVisible, tippyProps, ...rest }: any, ref) => {
		const propOnClickOutside = tippyProps.onClickOutside;
		const innerRef = React.useRef<any>(null);
		const mergeRefs = useMergeRefs(innerRef, ref);
		useClickOutside(innerRef as any, propOnClickOutside || (() => {}));

		const styles = { display: isVisible ? 'flex' : 'none' };

		return (
			<Box {...rest} ref={mergeRefs} style={styles}>
				{children}
			</Box>
		);
	})
});

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

export { getPopoverContentMock, mockGoogleMapsAPI };
