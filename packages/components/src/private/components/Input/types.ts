import React from 'react';
import { FlexProps } from 'components/Flex';

export interface InputProps {
	/**
	 * The size of the input
	 */
	readonly aspectSize?: 's' | 'm' | 'l';

	/**
	 * If true, the textField is marked as success
	 */
	readonly isDisabled?: boolean;

	/**
	 * If true, the textField is marked as error
	 */
	readonly isError?: boolean;

	/**
	 * If true, the textField is marked as success
	 */
	readonly isSuccess?: boolean;
}

export type StyledInputProps<
	Attrs extends React.HTMLAttributes<any> = React.InputHTMLAttributes<HTMLInputElement>,
	Ref = HTMLInputElement
> = InputProps & FlexProps<Attrs, Ref>;

export interface StyledTextAreaProps
	extends InputProps,
		FlexProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}
