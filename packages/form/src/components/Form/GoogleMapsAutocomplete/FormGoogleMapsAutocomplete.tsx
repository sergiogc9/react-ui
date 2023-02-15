import React from 'react';
import { useController } from 'react-hook-form';
import { GoogleMapsPlace, GoogleMapsAutocomplete } from '@sergiogc9/react-ui';

import { FormGoogleMapsAutocompleteProps } from './types';

const FormGoogleMapsAutocomplete: React.FC<FormGoogleMapsAutocompleteProps> = props => {
	const { helperText, name, ...rest } = props;

	const { field, fieldState, formState } = useController({ name });

	const isError = fieldState.invalid && (fieldState.isTouched || formState.isSubmitted);

	const onGoogleMapsBlurred = React.useCallback(() => {
		if (!fieldState.isTouched) field.onBlur();
	}, [field, fieldState.isTouched]);

	const onPlaceSelected = React.useCallback(
		(place: GoogleMapsPlace | null) => {
			field.onChange(place);
			field.onBlur();
		},
		[field]
	);

	return (
		<GoogleMapsAutocomplete
			{...rest}
			defaultPlace={field.value}
			helperText={isError ? fieldState.error?.message : helperText}
			isError={isError}
			name={name}
			onBlur={onGoogleMapsBlurred}
			onPlaceChange={onPlaceSelected}
		/>
	);
};

export default React.memo(FormGoogleMapsAutocomplete);
