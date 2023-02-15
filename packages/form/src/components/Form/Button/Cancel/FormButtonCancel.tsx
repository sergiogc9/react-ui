import React from 'react';
import { useFormState } from 'react-hook-form';
import { Button } from '@sergiogc9/react-ui';

import { FormButtonCancelProps } from './types';

const FormButtonCancel: React.FC<FormButtonCancelProps> = props => {
	const { children, ...rest } = props;

	const { isSubmitting } = useFormState();

	return (
		<Button variant="secondary" {...rest} isDisabled={isSubmitting}>
			{children}
		</Button>
	);
};

export default React.memo(FormButtonCancel);
