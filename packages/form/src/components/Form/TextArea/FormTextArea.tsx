import React from 'react';
import { useController } from 'react-hook-form';
import { TextArea } from '@sergiogc9/react-ui';

import { FormTextAreaProps } from './types';

const FormTextArea: React.FC<FormTextAreaProps> = props => {
	const { helperText, isDisabled, name, ...rest } = props;

	const { field, fieldState, formState } = useController({ name });

	const isError = fieldState.invalid && (fieldState.isTouched || formState.isSubmitted);

	return (
		<TextArea
			{...rest}
			{...field}
			helperText={isError ? fieldState.error?.message : helperText}
			isDisabled={isDisabled || formState.isSubmitting}
			isError={isError}
		/>
	);
};

export default React.memo(FormTextArea);
