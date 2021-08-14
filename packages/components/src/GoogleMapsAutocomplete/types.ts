import { SelectProps } from 'components/Select';

type Props = {
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
};

export type GoogleMapsAutocompleteProps = Props &
	Omit<SelectProps, 'children' | 'defaultValue' | 'isAutocomplete' | 'onInputChange' | 'onOptionChange' | 'value'>;

export type PredictionOptions = {
	componentRestrictions?: { country: string | string[] };
	input: string;
	types?: string[];
};

export type MapsSearchPlace = {
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
};

export type GoogleMapsPlace = {
	latitude: number;
	longitude: number;
	name: string;
	placeId: string;
};
