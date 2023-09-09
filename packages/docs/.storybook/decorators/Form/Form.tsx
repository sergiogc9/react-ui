import React from 'react';
import { Decorator } from '@storybook/react';
import * as Yup from 'yup';

import { Flex } from '@sergiogc9/react-ui';

export type ContactFormValues = {
	comments: string;
	email: string;
	name: string;
	phone: string;
};

const FormDecorator: Decorator = (story, context) => {
	const onSubmit = React.useCallback(async (values: ContactFormValues) => {
		console.log(values);
	}, []);

	const defaultValues = React.useMemo<ContactFormValues>(
		() => ({
			comments: '',
			email: '',
			name: '',
			phone: ''
		}),
		[]
	);

	const validationSchema = React.useMemo(
		() =>
			Yup.object({
				comments: Yup.string().required('This field is mandatory'),
				email: Yup.string().email('Enter a valid e-mail').required('This field is mandatory'),
				name: Yup.string().required('This field is mandatory'),
				phone: Yup.string().required('This field is mandatory'),
				age: Yup.number().required('This field is mandatory')
			}),
		[]
	);

	context.args = {
		...context.args,
		defaultValues,
		onSubmit,
		validationSchema
	};

	return (
		<Flex alignItems="center" flexDirection="column" maxWidth="100%" py={5} px={4} margin="0 auto" mt={5} width={650}>
			{story(context)}
		</Flex>
	);
};

export default FormDecorator;
