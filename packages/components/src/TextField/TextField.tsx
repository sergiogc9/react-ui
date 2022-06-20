import React from 'react';

import TextFieldBase from './Base';
import TextFieldDate from './Date';
import TextFieldNumber from './Number';
import TextFieldPassword from './Password';
import { TextFieldProps } from './types';

const textFields: Record<string, React.FC<any>> = {
	date: TextFieldDate,
	number: TextFieldNumber,
	password: TextFieldPassword
};

const TextField: React.FC<TextFieldProps> = React.forwardRef<
	HTMLInputElement,
	// eslint-disable-next-line react/require-default-props
	Omit<TextFieldProps, 'type'> & { type?: any }
>(({ type = 'text', ...rest }, ref) => {
	const TextFieldComponent = textFields[type] || TextFieldBase;

	return <TextFieldComponent ref={ref} type={type} {...rest} />;
});

export default React.memo(TextField);
