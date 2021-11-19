import React from 'react';
import { useTheme } from 'styled-components';
import debounce from 'lodash/debounce';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';
import { useAddScript, useIsMounted, useUpdateEffect } from '@sergiogc9/react-hooks';

import Select, { SelectProps } from 'components/Select';

import {
	GoogleMapsAddressComponent,
	googleMapsAdressKeys,
	GoogleMapsAutocompleteProps,
	GoogleMapsPlace,
	GoogleMapsPlaceComponents,
	MapsSearchPlace,
	PredictionOptions
} from './types';

let autocompleteService: any;

const mapAddressComponents = (addressComponents: GoogleMapsAddressComponent[]) =>
	pick(
		addressComponents.reduce((actual: Partial<GoogleMapsPlaceComponents>, component: GoogleMapsAddressComponent) => {
			return { ...actual, [component.types[0]]: component.long_name };
		}, {}),
		...googleMapsAdressKeys
	);

const getPlacePredictions = async (request: PredictionOptions) => {
	const { predictions } = await autocompleteService.getPlacePredictions(request);
	return predictions as MapsSearchPlace[];
};

const getPlaceData = async (result: MapsSearchPlace): Promise<GoogleMapsPlace> => {
	const geoCoder = new (window as any).google.maps.Geocoder();
	const { results } = await geoCoder.geocode({ placeId: result.place_id });

	return {
		latitude: results[0].geometry.location.lat(),
		longitude: results[0].geometry.location.lng(),
		name: result.description,
		placeComponents: mapAddressComponents(results[0].address_components),
		placeId: result.place_id
	};
};

const GoogleMapsAutocomplete: React.FC<GoogleMapsAutocompleteProps> = props => {
	const { countries, defaultPlace, onlyRegions, onApiError, onBlur, onPlaceChange, ...rest } = props;

	const [inputValue, setInputValue] = React.useState(defaultPlace?.name || '');
	const selectedSearchPlace = React.useRef<MapsSearchPlace | null>(
		defaultPlace
			? ({
					place_id: defaultPlace.placeId,
					description: defaultPlace.name
			  } as MapsSearchPlace)
			: null
	);
	const [options, setOptions] = React.useState<MapsSearchPlace[]>(() =>
		defaultPlace
			? [
					{
						description: defaultPlace.name,
						place_id: defaultPlace.placeId
					} as MapsSearchPlace
			  ]
			: []
	);
	const [areOptionsValid, setAreOptionsValid] = React.useState(false);

	const isMounted = useIsMounted();

	const theme = useTheme();

	useAddScript(
		'google-maps-api',
		`https://maps.googleapis.com/maps/api/js?key=${theme.keys.googleMapsAPI}&libraries=places`
	);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fetchSearchPlaces = React.useCallback(
		debounce(async (newInputValue: string) => {
			const predictionOptions: PredictionOptions = { input: newInputValue };
			if (onlyRegions) predictionOptions.types = ['(regions)'];
			if (countries) predictionOptions.componentRestrictions = { country: countries };

			try {
				const results = await getPlacePredictions(predictionOptions);

				let newOptions = [] as MapsSearchPlace[];

				if (results) {
					newOptions = [...newOptions, ...results];
				}

				setOptions(newOptions);
			} catch (e) {
				if (onApiError) onApiError();
			}

			setAreOptionsValid(true);
		}, 250),
		[countries, onApiError, onlyRegions]
	);

	useUpdateEffect(() => {
		if (!autocompleteService && (window as any).google) {
			autocompleteService = new (window as any).google.maps.places.AutocompleteService();
		}

		if (!autocompleteService) return;

		if (isEmpty(inputValue)) {
			setOptions([]);
			return;
		}

		setAreOptionsValid(false);
		fetchSearchPlaces(inputValue);

		// eslint-disable-next-line consistent-return
		return () => {
			fetchSearchPlaces.cancel();
		};
	}, [countries, inputValue, onlyRegions]); // eslint-disable-line react-hooks/exhaustive-deps

	const onFetchSearchPlaceData = React.useCallback(
		// eslint-disable-next-line consistent-return
		async (selectedPlace: MapsSearchPlace | null) => {
			if (onPlaceChange) {
				if (!selectedPlace) return onPlaceChange(null);

				try {
					const place = await getPlaceData(selectedPlace);
					onPlaceChange(place);
				} catch (e) {
					if (onApiError) onApiError();
				}
			}
		},
		[onApiError, onPlaceChange]
	);

	const onSelectOptionChange = React.useCallback<NonNullable<SelectProps['onOptionChange']>>(
		placeId => {
			const selectedOption = find(options, { place_id: placeId as string }) || null;
			selectedSearchPlace.current = selectedOption;

			onFetchSearchPlaceData(selectedOption);
		},
		[onFetchSearchPlaceData, options]
	);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onResetSelectedOption = React.useCallback(
		debounce((newOptions: MapsSearchPlace[]) => {
			if (isMounted() && !(newOptions.length === 1 && selectedSearchPlace.current?.place_id === newOptions[0].place_id))
				setOptions(selectedSearchPlace.current ? [selectedSearchPlace.current] : []);
		}, 500),
		[isMounted]
	);

	const onSelectBlurred = React.useCallback<NonNullable<SelectProps['onBlur']>>(
		ev => {
			if (onBlur) onBlur(ev);

			onResetSelectedOption(options);
		},
		[onBlur, onResetSelectedOption, options]
	);

	const selectOptions = React.useMemo(
		() =>
			options.map(option => (
				<Select.Option key={option.place_id} id={option.place_id}>
					{option.description}
				</Select.Option>
			)),
		[options]
	);

	return (
		<Select
			defaultValue={defaultPlace?.placeId}
			isAutocomplete
			isExternalFiltered
			areExternalOptionsValid={areOptionsValid}
			onBlur={onSelectBlurred}
			onInputChange={setInputValue}
			onOptionChange={onSelectOptionChange}
			{...rest}
		>
			{selectOptions}
		</Select>
	);
};

export default React.memo(GoogleMapsAutocomplete);
