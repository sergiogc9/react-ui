import React from 'react';
import * as yup from 'yup';
import {
	DeepMap,
	DeepPartial,
	FieldError,
	FieldValues,
	UseFormProps,
	UseFormReset,
	UseFormSetValue,
	UseFormTrigger
} from 'react-hook-form';
import { FlexProps } from '@sergiogc9/react-ui';

import { RecursivePartial } from 'form/types';

export type FormHelpers<FormValues extends FieldValues> = {
	reset: UseFormReset<FormValues>;
	setErrors: (errors: Record<string, string>) => void;
	setValue: UseFormSetValue<FormValues>;
	trigger: UseFormTrigger<FormValues>;
};

export type Props<FormValues extends Record<string, unknown> = Record<string, unknown>> = {
	readonly children: React.ReactNode;
	readonly defaultValues: RecursivePartial<FormValues>;
	readonly onChange?: (values: FormValues) => void;
	readonly onDirtyChange?: (isDirty: boolean) => void;
	readonly onSubmit?: (
		values: FormValues,
		formHelpers: FormHelpers<FormValues>,
		ev?: React.BaseSyntheticEvent<React.FormEvent, any, any>
	) => void;
	readonly onSubmitError?: (
		errors: FormErrors<FormValues>,
		formHelpers: FormHelpers<FormValues>,
		ev?: React.BaseSyntheticEvent<React.FormEvent, any, any>
	) => void;
	readonly onValidChange?: (isValid: boolean, errors: FormErrors<FormValues>) => void;
	readonly useFormProps?: Omit<UseFormProps<FormValues>, 'defaultValues'>;
	readonly validationSchema?: yup.ObjectSchema<FormValues | undefined>;
};

export type FormProps<FormValues extends Record<string, unknown> = Record<string, unknown>> = Props<FormValues> &
	Omit<FlexProps<'form'>, 'onChange' | 'onSubmit'>;

export type FormErrors<FormValues extends Record<string, unknown> = Record<string, unknown>> = DeepMap<
	DeepPartial<FormValues>,
	FieldError
>;

export type StyledFormProps = FlexProps<'form'>;

export type FormEffectProps<FormValues extends Record<string, unknown> = Record<string, unknown>> = Pick<
	FormProps<FormValues>,
	'onChange' | 'onDirtyChange' | 'onValidChange'
>;
