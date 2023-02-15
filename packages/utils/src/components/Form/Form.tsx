import React from 'react';
import {
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
	UseFormProps,
	useFormState,
	useWatch
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';
import { useUpdateEffect } from '@sergiogc9/react-hooks';

import StyledForm from './styled';
import { FormEffectProps, FormProps } from './types';

// This component is needed to avoid fully re-render the whole Form component when form state changes.
const FormEffect = <FormValues extends Record<string, unknown>>(props: FormEffectProps<FormValues>) => {
	const { onChange, onDirtyChange, onValidChange } = props;

	const { errors, isDirty, isValid, touchedFields } = useFormState<FormValues>();

	const values = useWatch<FormValues>({});

	useUpdateEffect(() => {
		if (onChange) onChange(values as FormValues);
	}, [values]);

	useUpdateEffect(() => {
		if (!isEmpty(touchedFields) && onValidChange) {
			onValidChange(isValid, errors);
		}
	}, [errors, touchedFields, isValid]);

	useUpdateEffect(() => {
		if (onDirtyChange) onDirtyChange(isDirty);
	}, [isDirty]);

	return null;
};

const Form = <FormValues extends Record<string, unknown>>(props: FormProps<FormValues>) => {
	const {
		children,
		defaultValues,
		onChange,
		onDirtyChange,
		onValidChange,
		onSubmit,
		onSubmitError,
		validationSchema,
		useFormProps,
		...rest
	} = props;

	const finalUseFormProps = React.useMemo<UseFormProps<FormValues>>(
		() => ({
			mode: 'onBlur',
			resolver: yupResolver(validationSchema),
			...useFormProps,
			defaultValues: defaultValues as any
		}),
		[defaultValues, useFormProps, validationSchema]
	);

	const methods = useForm(finalUseFormProps);
	const {
		formState: { isSubmitSuccessful },
		getValues,
		handleSubmit,
		reset,
		setError,
		setValue,
		trigger
	} = methods;

	React.useEffect(() => {
		if (isSubmitSuccessful) {
			reset(getValues() as any);
		}
	}, [reset, isSubmitSuccessful, getValues]);

	const setErrors = React.useCallback(
		(errors: Record<string, string>) => {
			Object.keys(errors).forEach(inputName =>
				setError(inputName as any, { type: 'manual', message: errors[inputName] })
			);
		},
		[setError]
	);

	const onFormSubmitted = React.useCallback<SubmitHandler<FormValues>>(
		async (data, ev) => {
			if (onSubmit) await onSubmit(data as FormValues, { reset, setErrors, setValue, trigger }, ev as any);
		},
		[onSubmit, reset, setErrors, setValue, trigger]
	);

	const onFormSubmittedError = React.useCallback<SubmitErrorHandler<FormValues>>(
		async (errors, ev) => {
			if (onSubmitError) await onSubmitError(errors, { reset, setErrors, setValue, trigger }, ev as any);
		},
		[onSubmitError, reset, setErrors, setValue, trigger]
	);

	return (
		<FormProvider {...methods}>
			<StyledForm {...rest} onSubmit={handleSubmit(onFormSubmitted, onFormSubmittedError)}>
				{children}
			</StyledForm>
			<FormEffect onChange={onChange} onDirtyChange={onDirtyChange} onValidChange={onValidChange} />
		</FormProvider>
	);
};

export default React.memo(Form) as typeof Form;
