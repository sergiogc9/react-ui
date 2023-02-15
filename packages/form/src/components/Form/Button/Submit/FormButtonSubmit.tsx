import React from 'react';
import { useFormState } from 'react-hook-form';
import { Button } from '@sergiogc9/react-ui';

import { FormButtonSubmitProps } from './types';

const FormButtonSubmit: React.FC<FormButtonSubmitProps> = props => {
	const { children, isDefaultEnabled, isDisabled, ...rest } = props;

	const { isValid, isSubmitting, isDirty } = useFormState();

	const isButtonDisabled = React.useMemo(() => {
		return !isValid || (!isDirty && !isDefaultEnabled);
	}, [isDefaultEnabled, isDirty, isValid]);

	return (
		<Button type="submit" {...rest} isDisabled={isDisabled ?? isButtonDisabled} isLoading={isSubmitting}>
			{children}
		</Button>
	);
};

export default React.memo(FormButtonSubmit);
