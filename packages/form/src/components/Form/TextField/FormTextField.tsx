import React from 'react';
import { useController } from 'react-hook-form';
import isEmpty from 'lodash/isEmpty';
import { TextField, TextFieldDateProps } from '@sergiogc9/react-ui';

import { FormTextFieldProps } from './types';

const FormInput: React.FC<FormTextFieldProps> = props => {
	const { helperText, isDisabled, name, type, ...rest } = props;

	const { field, fieldState, formState } = useController({ name });

	const isError = fieldState.invalid && (fieldState.isTouched || formState.isSubmitted);

	const typeProps = React.useMemo<TextFieldDateProps>(() => {
		if (type === 'date')
			return {
				defaultDate: field.value || undefined,
				onDateChange: date => {
					field.onChange(date);
				}
			};

		if (type === 'number')
			return {
				onChange: ev => {
					const { value } = ev.currentTarget;
					field.onChange(isEmpty(value) ? null : +value);
				}
			};

		return {};
	}, [field, type]);

	return (
		<TextField
			{...rest}
			{...field}
			{...typeProps}
			isDisabled={isDisabled || formState.isSubmitting}
			helperText={isError ? fieldState.error?.message : helperText}
			isError={isError}
			type={type}
		/>
	);
};

export default React.memo(FormInput);
