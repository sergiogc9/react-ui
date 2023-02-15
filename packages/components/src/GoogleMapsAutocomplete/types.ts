import { SelectProps } from 'components/Select';

export interface GoogleMapsAutocompleteProps
	extends Omit<
		SelectProps,
		'children' | 'defaultValue' | 'isAutocomplete' | 'onInputChange' | 'onOptionChange' | 'value'
	> {
	/**
	 * The country or countries where to limit the search. Can be a string or a 5-length maximum string array with country codes. If array is bigger than 5 elements, countries from 6th position are ignored.
	 * More info at: https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#ComponentRestrictions
	 */
	readonly countries?: string | string[];
	/**
	 * Default selected place
	 */
	readonly defaultPlace?: GoogleMapsPlace;
	/**
	 * Default selected place
	 */
	readonly onApiError?: () => void;
	/**
	 * If true, only regions will be shown as results.
	 * More info about regions in: https://developers.google.com/places/supported_types#table3
	 */
	readonly onlyRegions?: boolean;
	/**
	 * Handler called when value changed
	 */
	readonly onPlaceChange?: (value: GoogleMapsPlace | null) => void;
}

export interface PredictionOptions {
	componentRestrictions?: { country: string | string[] };
	input: string;
	types?: string[];
}

export interface MapsSearchPlace {
	description: string;
	place_id: string;
	structured_formatting: {
		main_text: string;
		secondary_text: string;
		main_text_matched_substrings: [
			{
				offset: number;
				length: number;
			}
		];
	};
}

export interface GoogleMapsPlace {
	latitude: number;
	longitude: number;
	name: string;
	placeComponents: Partial<GoogleMapsPlaceComponents>;
	placeId: string;
}

export const googleMapsAdressKeys = [
	'country',
	'administrative_area_level_1',
	'administrative_area_level_2',
	'locality',
	'postal_code'
] as const;

export type GoogleMapsKeys = typeof googleMapsAdressKeys[number];

export type GoogleMapsPlaceComponents = Record<GoogleMapsKeys, string>;

export interface GoogleMapsAddressComponent {
	long_name: string;
	short_name: string;
	types: string[];
}
