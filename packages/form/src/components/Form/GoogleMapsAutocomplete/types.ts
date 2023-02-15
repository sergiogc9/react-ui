import { GoogleMapsAutocompleteProps } from '@sergiogc9/react-ui';

type Props = {
	readonly name: string;
};

export type FormGoogleMapsAutocompleteProps = Props &
	Omit<GoogleMapsAutocompleteProps, 'defaultPlace' | 'onBlur' | 'onPlaceChange'>;
