import React from 'react';
import { useController } from 'react-hook-form';

import { FormFieldProps } from './types';

/**
 * Creates a component ready to be used inside a react-hook-form form
 * @param Component The component to be used. It has to implement the props defined in FormFieldProps.
 * @returns A new component that can be used inside a form
 */
const withFormField = <V, P extends FormFieldProps<V> = FormFieldProps<V>>(Component: React.FC<P>) => {
	return React.memo<P & { name: string }>(props => {
		const { name } = props;

		const { field, fieldState, formState } = useController({ name });

		const isError = (fieldState.isTouched || formState.isSubmitted) && fieldState.invalid;

		const onValueChanged = React.useCallback(
			(value: V) => {
				if (typeof value === 'object' && ((value as any).target || (value as any).currentTarget)) field.onChange(value);
				else field.onChange({ target: { name, value } });
			},
			[name, field]
		);

		return (
			<Component
				{...props}
				{...field}
				error={isError ? fieldState.error?.message : undefined}
				onChange={onValueChanged}
			/>
		);
	});
};
export default withFormField;
